import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { ServiceCard } from "@/components/service-card";
import { serviceGroups, getGroupDetails } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore property surveying, quantity surveying and retrofit services from Perfect Surveyors.",
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      <PageIntro
        breadcrumb="Services"
        description="The right perspective for your property, your project and the decisions that take them forward."
        eyebrow="Our services"
        title="Expertise for the built environment."
      />
      <section className="section services-overview">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <span className="eyebrow">Three connected disciplines</span>
              <h2>
                Find the expertise
                <br />
                <span>that fits your next step.</span>
              </h2>
            </div>
            <p>
              Explore our specialist services, or get in touch and we’ll help
              you find a good place to begin.
            </p>
          </div>
          <div className="service-grid">
            {serviceGroups.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section service-directory">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Explore by service</span>
            <h2>One place to find your way.</h2>
          </div>
          <div className="directory-grid">
            {serviceGroups.map((group) => (
              <section aria-labelledby={`directory-${group.slug}`} className="directory-column" key={group.slug}>
                <Link
                  className="directory-heading"
                  href={`/services/${group.slug}`}
                  id={`directory-${group.slug}`}
                >
                  <span>{group.number}</span>
                  <h3>{group.eyebrow}</h3>
                  <span aria-hidden="true">↗</span>
                </Link>
                <ul>
                  {getGroupDetails(group.slug).map((detail) => (
                    <li key={detail.slug}>
                      <Link href={`/services/${detail.slug}`}>{detail.title}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <span className="eyebrow">Not sure where to start?</span>
            <h2>Let’s work it out together.</h2>
          </div>
          <Link className="button button-light" href="/contact">
            Schedule a consultation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
