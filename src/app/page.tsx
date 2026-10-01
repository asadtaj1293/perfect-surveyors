import Link from "next/link";
import { ServiceCard } from "@/components/service-card";
import { serviceGroups } from "@/lib/site-data";

const expertise = [
  {
    number: "01",
    title: "Property surveying",
    text: "Understand a property’s condition with clear, independent inspection and practical reporting.",
  },
  {
    number: "02",
    title: "Construction & Cost Management",
    text: "Bring project decisions, commercial considerations and delivery into one clearer picture.",
  },
  {
    number: "03",
    title: "Energy & retrofit",
    text: "Explore building improvements with a considered, whole-property approach to performance.",
  },
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="hero">
        <div className="hero-grid container">
          <div className="hero-content">
            <span className="eyebrow">
              Independent property &amp; project consultancy
            </span>
            <h1>
              Good decisions
              <br />
              start with
              <br />
              <span>good insight.</span>
            </h1>
            <p className="hero-copy">
              Clear, considered advice across property surveying, construction
              and retrofit — so you can move forward with confidence.
            </p>
            <div className="hero-actions">
              <Link className="button button-dark" href="/contact">
                Schedule a consultation <span aria-hidden="true">↗</span>
              </Link>
              <Link className="text-link" href="/services">
                Discover our services <span aria-hidden="true">↓</span>
              </Link>
            </div>
            <div className="hero-note">
              <span aria-hidden="true" className="hero-note-mark">
                ✳
              </span>
              Advice for the places and projects that matter.
            </div>
          </div>
          <div aria-label="Architectural illustration of a surveyed building" className="hero-art" role="img">
            <div className="art-sun" />
            <div className="art-ground" />
            <div className="art-building art-building-back">
              <span />
              <span />
            </div>
            <div className="art-building art-building-front">
              <div className="art-roof" />
              <div className="art-front-wall">
                <span className="art-window" />
                <span className="art-window" />
                <span className="art-door" />
              </div>
              <div className="art-side-wall">
                <span className="art-window" />
              </div>
            </div>
            <div className="art-grid-lines" />
            <div className="art-label art-label-top">
              <span>01 / PROPERTY</span>
              <span>CONDITION</span>
            </div>
            <div className="art-label art-label-bottom">
              <span className="art-label-rule" />
              BUILT ON BETTER UNDERSTANDING
            </div>
            <span aria-hidden="true" className="art-coordinate art-coordinate-one">
              N 51° 30&apos;
            </span>
            <span aria-hidden="true" className="art-coordinate art-coordinate-two">
              E 00° 07&apos;
            </span>
          </div>
        </div>
        <div aria-hidden="true" className="hero-bottom-line">
          <span>PROPERTY</span>
          <span>PEOPLE</span>
          <span>PROGRESS</span>
        </div>
      </section>

      <section aria-label="Our breadth of experience" className="stat-strip">
        <div className="container stat-grid">
          <div className="stat-intro">
            <span className="eyebrow">A clearer view</span>
            <p>One team of thinking across the built environment.</p>
          </div>
          <div className="stat-item">
            <strong>03</strong>
            <span>connected disciplines</span>
          </div>
          <div className="stat-item">
            <strong>09</strong>
            <span>specialist service areas</span>
          </div>
          <div className="stat-item">
            <strong>01</strong>
            <span>clear way forward</span>
          </div>
        </div>
      </section>

      <section className="section expertise-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <span className="eyebrow">What we bring together</span>
              <h2>
                Our expertise.
                <br />
                <span>In your corner.</span>
              </h2>
            </div>
            <p>
              The built environment asks big questions. We bring a thoughtful,
              practical perspective to the property, project and performance
              decisions behind them.
            </p>
          </div>
          <div className="expertise-list">
            {expertise.map((item) => (
              <article className="expertise-item" key={item.number}>
                <span className="expertise-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span aria-hidden="true" className="expertise-arrow">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <span className="eyebrow">How we can help</span>
              <h2>
                Services built
                <br />
                <span>around your next step.</span>
              </h2>
            </div>
            <div className="heading-side">
              <p>
                From a single property question to a complex project, find the
                right expertise for where you are now.
              </p>
              <Link className="text-link" href="/services">
                Explore all services <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
          <div className="service-grid">
            {serviceGroups.map((service) => (
              <ServiceCard key={service.slug} service={service} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="journey-section">
        <div className="container journey-grid">
          <div className="journey-aside">
            <span className="eyebrow">Our approach</span>
            <span aria-hidden="true" className="journey-stamp">
              ES
            </span>
          </div>
          <div className="journey-content">
            <h2>
              Better understanding.
              <br />
              <span>Better things ahead.</span>
            </h2>
            <p>
              Every property has a story. Every project has a path. We help you
              see what matters, understand your options and make the next
              decision with purpose — whether that means buying a home, managing
              a build or improving a building for the future.
            </p>
            <Link className="text-link text-link-light" href="/about">
              Get to know us <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div aria-hidden="true" className="journey-ornament">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container process-grid">
          <div className="process-heading">
            <span className="eyebrow">A good place to begin</span>
            <h2>
              Start with
              <br />
              <span>a conversation.</span>
            </h2>
            <p>
              Tell us what you’re considering. We’ll help you understand the
              service that fits and what a useful next step could look like.
            </p>
            <Link className="button button-dark" href="/contact">
              Schedule a consultation <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <ol className="process-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Tell us what matters</h3>
                <p>Share a little about the property or project.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Find the right expertise</h3>
                <p>We’ll understand your needs and discuss the options.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Move forward with clarity</h3>
                <p>Take your next step with a clearer picture in mind.</p>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}
