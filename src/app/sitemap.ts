import type { MetadataRoute } from "next";
import { serviceDetails, serviceGroups } from "@/lib/site-data";

const siteUrl = "https://efficientsurveyors.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about", "/services", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));
  const servicePages = [
    ...serviceGroups.map(({ slug }) => slug),
    ...Object.keys(serviceDetails),
  ].map((slug) => ({
    url: `${siteUrl}/services/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}
