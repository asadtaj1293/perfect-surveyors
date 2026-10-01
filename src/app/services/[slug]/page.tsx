import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { ServiceIcon } from "@/components/service-icon";
import {
  getGroupDetails,
  getServiceDetail,
  getServiceGroup,
  serviceDetails,
  serviceGroups,
} from "@/lib/site-data";

type ServiceRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [
    ...serviceGroups.map(({ slug }) => ({ slug })),
    ...Object.keys(serviceDetails).map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({
  params,
}: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const group = getServiceGroup(slug);
  if (group) {
    return {
      title: group.eyebrow,
      description: group.description,
    };
  }

  const detail = getServiceDetail(slug);
  return detail
    ? {
        title: detail.title,
        description: detail.intro,
      }
    : { title: "Service not found" };
}

export default async function ServicePage({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const group = getServiceGroup(slug);

  if (group) {
    const details = getGroupDetails(slug);
    return (
      <main id="main-content">
        <PageIntro
          breadcrumb={group.eyebrow}
          description={group.description}
          eyebrow={`${group.number} / ${group.eyebrow}`}
          title={group.title}
        />
        <section className="section category-intro">
          <div className="container category-intro-grid">
            <div className="category-photo">
              <Image
                alt={group.imageAlt}
                fill
                priority
                sizes="(max-width: 760px) 100vw, 35vw"
                src={group.image}
              />
              <span aria-hidden="true" className="category-icon-large">
                <ServiceIcon className="category-icon-svg" name={group.icon} />
              </span>
            </div>
            <div>
              <span className="eyebrow">How we can help</span>
              <h2>{group.eyebrow}, with your priorities in mind.</h2>
              <p>{group.detail}</p>
            </div>
          </div>
        </section>
        <section className="section category-services">
          <div className="container">
            <div className="section-heading section-heading-split">
              <div>
                <span className="eyebrow">Specialist services</span>
                <h2>
                  Explore the
                  <br />
                  <span>areas we cover.</span>
                </h2>
              </div>
              <p>
                Each service is shaped around your circumstances and the
                questions you need answered.
              </p>
            </div>
            <div className="detail-grid">
              {details.map((detail, index) => (
                <article className="detail-card" key={detail.slug}>
                  <div className="detail-card-photo">
                    <Image
                      alt={detail.imageAlt}
                      fill
                      sizes="(max-width: 760px) 100vw, (max-width: 1000px) 45vw, 33vw"
                      src={detail.image}
                    />
                  </div>
                  <span className="detail-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{detail.title}</h3>
                  <p>{detail.intro}</p>
                  <Link
                    className="text-link"
                    href={`/services/${detail.slug}`}
                  >
                    Read more <span aria-hidden="true">↗</span>
                  </Link>
                  <Link
                    aria-label={`Contact us about ${detail.title}`}
                    className="button button-dark service-contact-button"
                    href="/contact"
                  >
                    Contact us <span aria-hidden="true">↗</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
        <RelatedServiceGroups currentSlug={group.slug} />
        <ConsultationBand />
      </main>
    );
  }

  const detail = getServiceDetail(slug);
  if (!detail) notFound();

  const category = getServiceGroup(detail.parent);
  if (!category) notFound();

  const relatedServices = getGroupDetails(category.slug)
    .filter((service) => service.slug !== slug)
    .slice(0, 3);

  return (
    <main id="main-content">
      <PageIntro
        breadcrumb={detail.category}
        description={detail.intro}
        eyebrow={detail.category}
        title={detail.title}
      />
      <section className="section detail-body">
        <div className="container detail-body-grid">
          <aside className="detail-aside">
            <span className="eyebrow">In this service</span>
            <ul>
              {detail.sections.map((section, index) => (
                <li key={section.heading}>
                  <a href={`#service-section-${index + 1}`}>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
            <Link
              className="text-link"
              href={`/services/${category.slug}`}
            >
              All {category.eyebrow} services <span aria-hidden="true">↗</span>
            </Link>
          </aside>
          <div className="detail-content">
            <div className="detail-feature-photo">
              <Image
                alt={detail.imageAlt}
                fill
                priority
                sizes="(max-width: 760px) 100vw, 65vw"
                src={detail.image}
              />
            </div>
            <span className="eyebrow">A clearer picture starts here</span>
            <h2>{detail.title}: what to expect.</h2>
            {detail.sections.map((section, index) => (
              <section
                className="detail-copy-section"
                id={`service-section-${index + 1}`}
                key={section.heading}
              >
                <span className="detail-section-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{section.heading}</h3>
                  <p>{section.body}</p>
                </div>
              </section>
            ))}
            <div className="included-box">
              <h3>Our approach includes</h3>
              <ul>
                {detail.points.map((point) => (
                  <li key={point}>
                    <span aria-hidden="true">↗</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <p className="scope-note">
              Every property and project is different. We’ll confirm the
              appropriate scope, access and deliverables with you before work
              begins.
            </p>
            <Link className="button button-dark detail-contact-button" href="/contact">
              Contact us about this service <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section related-services">
        <div className="container">
          <div className="section-heading section-heading-split">
            <div>
              <span className="eyebrow">Keep exploring</span>
              <h2>
                All {category.eyebrow}
                <br />
                <span>services.</span>
              </h2>
            </div>
            <Link
              className="text-link"
              href={`/services/${category.slug}`}
            >
              View service overview <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="related-grid">
            {relatedServices.map((service, index) => (
              <article className="detail-card" key={service.slug}>
                <div className="detail-card-photo">
                  <Image
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1000px) 45vw, 33vw"
                    src={service.image}
                  />
                </div>
                <span className="detail-card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{service.title}</h3>
                <p>{service.intro}</p>
                <Link
                  className="text-link"
                  href={`/services/${service.slug}`}
                >
                  Read more <span aria-hidden="true">↗</span>
                </Link>
                <Link
                  className="button button-dark service-contact-button"
                  aria-label={`Contact us about ${service.title}`}
                  href="/contact"
                >
                  Contact us <span aria-hidden="true">↗</span>
                </Link>
              </article>
            ))}
            <Link
              className="related-current"
              href={`/services/${slug}`}
              aria-current="page"
            >
              <span className="eyebrow">You’re viewing</span>
              <strong>{detail.title}</strong>
              <span aria-hidden="true">✓</span>
            </Link>
          </div>
        </div>
      </section>
      <ConsultationBand />
    </main>
  );
}

function RelatedServiceGroups({ currentSlug }: { currentSlug: string }) {
  return (
    <section className="section related-groups">
      <div className="container related-groups-inner">
        <div>
          <span className="eyebrow">Related expertise</span>
          <h2>Explore our other services.</h2>
        </div>
        <div className="related-group-links">
          {serviceGroups
            .filter((group) => group.slug !== currentSlug)
            .map((group) => (
              <Link href={`/services/${group.slug}`} key={group.slug}>
                {group.eyebrow} <span aria-hidden="true">↗</span>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}

function ConsultationBand() {
  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div>
          <span className="eyebrow">Have a question about your project?</span>
          <h2>Let’s find the right next step.</h2>
        </div>
        <Link className="button button-light" href="/contact">
          Contact us <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
