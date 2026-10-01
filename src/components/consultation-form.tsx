"use client";

import { useState, type FormEvent } from "react";

const services = [
  "Property Surveying",
  "Quantity Surveying",
  "Retrofit",
  "Other",
];

type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; message: string; reference: string }
  | { status: "error"; message: string };

export function ConsultationForm() {
  const [state, setState] = useState<SubmissionState>({ status: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state.status === "submitting") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    setState({ status: "submitting" });

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result: {
        message?: string;
        reference?: string;
      } = await response.json();

      if (!response.ok) {
        setState({
          status: "error",
          message:
            result.message ??
            "We couldn’t send your enquiry just now. Please try again shortly.",
        });
        return;
      }

      setState({
        status: "success",
        message: result.message ?? "Your enquiry has been sent.",
        reference: result.reference ?? "",
      });
      form.reset();
    } catch {
      setState({
        status: "error",
        message:
          "We couldn’t connect to send your enquiry. Please check your connection and try again.",
      });
    }
  }

  if (state.status === "success") {
    return (
      <div aria-live="polite" className="form-success" role="status">
        <span aria-hidden="true" className="success-check">
          ✓
        </span>
        <span className="eyebrow">Enquiry received</span>
        <h2>Thank you for getting in touch.</h2>
        <p>{state.message}</p>
        {state.reference && (
          <p className="reference-number">Reference: {state.reference}</p>
        )}
        <button
          className="text-link button-as-link"
          onClick={() => setState({ status: "idle" })}
          type="button"
        >
          Send another enquiry <span aria-hidden="true">↗</span>
        </button>
      </div>
    );
  }

  return (
    <form className="consultation-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span className="eyebrow">Start a conversation</span>
        <h2>Tell us a little about what you need.</h2>
        <p>We’ll use these details to respond to your enquiry.</p>
      </div>

      <div className="form-grid">
        <div className="form-field">
          <label htmlFor="full-name">
            Full name <span aria-hidden="true">*</span>
          </label>
          <input
            autoComplete="name"
            id="full-name"
            maxLength={100}
            minLength={2}
            name="name"
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">
            Email address <span aria-hidden="true">*</span>
          </label>
          <input
            autoComplete="email"
            id="email"
            maxLength={254}
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone number</label>
          <input
            autoComplete="tel"
            id="phone"
            maxLength={30}
            name="phone"
            placeholder="+44 (0) 20 0000 0000"
            type="tel"
          />
        </div>
        <div className="form-field">
          <label htmlFor="company">Company or organisation</label>
          <input
            autoComplete="organization"
            id="company"
            maxLength={120}
            name="company"
            placeholder="Optional"
          />
        </div>
        <div className="form-field">
          <label htmlFor="service">
            Service of interest <span aria-hidden="true">*</span>
          </label>
          <select defaultValue="" id="service" name="service" required>
            <option disabled value="">
              Choose a service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
        <div className="form-field form-field-date">
          <label htmlFor="preferred-date">Preferred date</label>
          <input id="preferred-date" name="preferredDate" type="date" />
        </div>
        <div className="form-field">
          <label htmlFor="preferred-time">Preferred time</label>
          <select defaultValue="" id="preferred-time" name="preferredTime">
            <option value="">No preference</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
          </select>
        </div>
        <div className="form-field form-field-full">
          <label htmlFor="message">
            How can we help? <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            maxLength={2000}
            minLength={10}
            name="message"
            placeholder="A few details about your property or project..."
            required
            rows={5}
          />
          <span className="field-hint">10–2,000 characters</span>
        </div>
        <div aria-hidden="true" className="honeypot">
          <label htmlFor="website">Leave this field empty</label>
          <input
            autoComplete="off"
            id="website"
            name="website"
            tabIndex={-1}
          />
        </div>
        <div className="form-field form-field-full">
          <label className="consent-label" htmlFor="consent">
            <input id="consent" name="consent" required type="checkbox" />
            <span>
              I agree to be contacted about this enquiry. My details will be
              sent to the enquiry email service and used to respond to my
              request.
            </span>
          </label>
        </div>
      </div>

      {state.status === "error" && (
        <p aria-live="polite" className="form-error" role="alert">
          <span aria-hidden="true">!</span> {state.message}
        </p>
      )}

      <div className="form-submit-row">
        <button
          className="button button-dark"
          disabled={state.status === "submitting"}
          type="submit"
        >
          {state.status === "submitting" ? (
            <>
              Sending enquiry <span aria-hidden="true" className="loading-dot" />
            </>
          ) : (
            <>
              Send enquiry <span aria-hidden="true">↗</span>
            </>
          )}
        </button>
        <span className="form-privacy">
          Enquiry details are sent securely to the configured email service.
        </span>
      </div>
    </form>
  );
}
