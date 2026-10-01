import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { serviceGroups } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Get to know Perfect Surveyors: considered property, construction and retrofit advice for clearer decisions across the built environment.",
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageIntro
        breadcrumb="About"
        description="Independent thinking, practical expertise and a shared belief that clear advice makes a difference."
        eyebrow="A considered perspective"
        title="Good work begins with understanding."
      />
      <section className="section about-story">
        <div className="container about-story-grid">
          <div className="about-story-aside">
            <span className="eyebrow">Who we are</span>
            <span className="about-aside-number">01 — 03</span>
          </div>
          <div className="about-story-copy">
            <h2>
              The right advice can change how you see a property, a project, or
              what comes next.
            </h2>
            <p>
              Perfect Surveyors brings property surveying, construction and
              cost management, and retrofit expertise together under one roof.
              We take the time to understand what you need to know, explain what
              we find and make the next step easier to see.
            </p>
            <p>
              Our approach is grounded in clear communication and practical
              insight. No two buildings or projects are the same, so we start
              with your circumstances and shape our advice around the decisions
              in front of you.
            </p>
            <Link className="text-link" href="/contact">
              Let’s talk about your project <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">What guides us</span>
            <h2>Good advice should feel clear.</h2>
          </div>
          <div className="value-grid">
            <article>
              <span>01 / Listen</span>
              <h3>Start with your needs.</h3>
              <p>
                We begin by understanding your property, project and the
                decision you need to make.
              </p>
            </article>
            <article>
              <span>02 / Understand</span>
              <h3>Look at the whole picture.</h3>
              <p>
                We connect the details with the wider context to bring the
                things that matter into focus.
              </p>
            </article>
            <article>
              <span>03 / Move forward</span>
              <h3>Make the next step clearer.</h3>
              <p>
                We explain our findings in useful language so you can decide
                what to do with confidence.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section about-expertise">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <span className="eyebrow">Connected expertise</span>
              <h2>
                One perspective.
                <br />
                <span>Three disciplines.</span>
              </h2>
            </div>
            <p>
              Property, project delivery and energy performance are closely
              connected. Our services help you consider each from the right
              angle.
            </p>
          </div>
          <div className="about-service-list">
            {serviceGroups.map((service) => (
              <Link
                className="about-service-row"
                href={`/services/${service.slug}`}
                key={service.slug}
              >
                <span>{service.number}</span>
                <h3>{service.eyebrow}</h3>
                <p>{service.description}</p>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band-inner">
          <div>
            <span className="eyebrow">The first step is simple</span>
            <h2>Let’s talk about what you need.</h2>
          </div>
          <Link className="button button-light" href="/contact">
            Start a conversation <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
