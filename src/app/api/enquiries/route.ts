import { randomUUID } from "node:crypto";
import { isIP } from "node:net";
import { NextResponse } from "next/server";
import { businessContact } from "@/lib/site-data";

export const runtime = "nodejs";

const allowedServices = new Set([
  "Property Surveying",
  "Quantity Surveying",
  "Retrofit",
  "Other",
]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const limits = new Map<string, { count: number; expiresAt: number }>();
const rateLimitWindow = 15 * 60 * 1000;
const maxSubmissions = 5;
const maxRequestBytes = 16_384;
const controlCharacters = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

type Enquiry = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
};

function errorResponse(message: string, status: number) {
  return NextResponse.json({ message }, { status });
}

function applyRateLimit(ip: string, now: number) {
  if (limits.size > 10_000) {
    for (const [key, value] of limits) {
      if (value.expiresAt <= now) limits.delete(key);
    }
    if (limits.size > 10_000) return false;
  }

  const current = limits.get(ip);
  if (!current || current.expiresAt <= now) {
    limits.set(ip, { count: 1, expiresAt: now + rateLimitWindow });
    return true;
  }
  if (current.count >= maxSubmissions) return false;
  current.count += 1;
  return true;
}

function isValidDate(value: string) {
  if (!value) return true;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().startsWith(value);
}

function parseEnquiry(payload: unknown): Enquiry | null {
  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return null;
  }
  const body = payload as Record<string, unknown>;
  const clean = (value: unknown) =>
    typeof value === "string" ? value.replace(controlCharacters, "").trim() : "";
  const name = clean(body.name);
  const email = clean(body.email);
  const phone = clean(body.phone);
  const company = clean(body.company);
  const service = typeof body.service === "string" ? body.service : "";
  const preferredDate = clean(body.preferredDate);
  const preferredTime = clean(body.preferredTime);
  const message = clean(body.message);

  if (
    name.length < 2 ||
    name.length > 100 ||
    email.length > 254 ||
    !emailPattern.test(email) ||
    phone.length > 30 ||
    !/^\+?[\d\s().-]*$/.test(phone) ||
    company.length > 120 ||
    !allowedServices.has(service) ||
    !isValidDate(preferredDate) ||
    !["", "Morning", "Afternoon"].includes(preferredTime) ||
    message.length < 10 ||
    message.length > 2000 ||
    body.consent !== "on" ||
    (typeof body.website === "string" && body.website.trim() !== "")
  ) {
    return null;
  }

  return {
    name,
    email,
    phone,
    company,
    service,
    preferredDate,
    preferredTime,
    message,
  };
}

export async function POST(request: Request) {
  if (
    !request.headers
      .get("content-type")
      ?.toLowerCase()
      .startsWith("application/json")
  ) {
    return errorResponse("Please submit the enquiry form and try again.", 415);
  }
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > maxRequestBytes) {
    return errorResponse("The submitted form is too large.", 413);
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const candidateIp =
    request.headers.get("x-real-ip") ??
    (forwardedFor ? forwardedFor.split(",")[0].trim() : "");
  const ip = isIP(candidateIp) ? candidateIp : "unknown";

  if (!applyRateLimit(ip, Date.now())) {
    return errorResponse(
      "Too many enquiries have been sent from this connection. Please try again in a little while.",
      429,
    );
  }

  let payload: unknown;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > maxRequestBytes) {
      return errorResponse("The submitted form is too large.", 413);
    }
    payload = JSON.parse(body);
  } catch {
    return errorResponse("Please check the form and try again.", 400);
  }

  const enquiry = parseEnquiry(payload);
  if (!enquiry) {
    return errorResponse(
      "Some details are missing or need checking. Please review the form and try again.",
      400,
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const sender = process.env.CONTACT_EMAIL_FROM;
  if (!apiKey || !sender) {
    return errorResponse(
      "Our enquiry service is temporarily unavailable. Please try again later.",
      503,
    );
  }

  const reference = randomUUID().slice(0, 8).toUpperCase();
  const message = [
    `New website enquiry (${reference})`,
    "",
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone || "Not provided"}`,
    `Company: ${enquiry.company || "Not provided"}`,
    `Service: ${enquiry.service}`,
    `Preferred date: ${enquiry.preferredDate || "Not provided"}`,
    `Preferred time: ${enquiry.preferredTime || "No preference"}`,
    "",
    "Message:",
    enquiry.message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [businessContact.email],
        reply_to: enquiry.email,
        subject: `Website enquiry — ${enquiry.service} (${reference})`,
        text: message,
      }),
    });

    if (!response.ok) {
      console.error("Enquiry email provider returned a non-success status.", {
        status: response.status,
      });
      return errorResponse(
        "We couldn’t send your enquiry just now. Please try again shortly.",
        502,
      );
    }
  } catch (error) {
    console.error("Enquiry email delivery failed.", error);
    return errorResponse(
      "We couldn’t send your enquiry just now. Please try again shortly.",
      502,
    );
  }

  return NextResponse.json({
    message: "Your enquiry has been sent. We’ll be in touch as soon as we can.",
    reference,
  });
}
