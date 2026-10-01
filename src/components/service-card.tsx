import Link from "next/link";
import Image from "next/image";
import { ServiceIcon } from "@/components/service-icon";
import type { serviceGroups } from "@/lib/site-data";

type ServiceCardProps = {
  service: (typeof serviceGroups)[number];
  compact?: boolean;
};

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  return (
    <article className={`service-card${compact ? " service-card-compact" : ""}`}>
      <div className="service-card-photo">
        <Image
          alt={service.imageAlt}
          fill
          sizes="(max-width: 760px) 100vw, (max-width: 1000px) 45vw, 33vw"
          src={service.image}
        />
      </div>
      <div className="service-card-top">
        <span className="service-number">{service.number}</span>
        <span aria-hidden="true" className="service-icon">
          <ServiceIcon className="service-icon-svg" name={service.icon} />
        </span>
      </div>
      <span className="eyebrow">{service.eyebrow}</span>
      <h3>{service.title}</h3>
      <p>{compact ? service.description : service.detail}</p>
      <div className="service-card-actions">
        <Link className="text-link" href={`/services/${service.slug}`}>
          Explore service <span aria-hidden="true">↗</span>
        </Link>
        <Link
          aria-label={`Contact us about ${service.eyebrow}`}
          className="button button-dark service-contact-button"
          href="/contact"
        >
          Contact us <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  );
}
