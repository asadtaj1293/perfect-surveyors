import Link from "next/link";
import { brandName, businessContact, serviceGroups } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link aria-label={`${brandName} home`} className="brand brand-light" href="/">
            <span aria-hidden="true" className="brand-mark">
              <svg viewBox="0 0 42 42" fill="none">
                <path d="M7 34V19L21 7l14 12v15H7Z" />
                <path d="M16 34V23h10v11M4 19 21 4l17 15" />
                <path d="M21 4v7" />
              </svg>
            </span>
            <span className="brand-name">
              PERFECT
              <span>SURVEYORS</span>
            </span>
          </Link>
          <p>
            Thoughtful property, project and retrofit advice for decisions that
            move you forward.
          </p>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <Link href="/services">Our services</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-column">
          <h2>Our services</h2>
          {serviceGroups.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug}>
              {service.eyebrow}
            </Link>
          ))}
        </div>
        <div className="footer-contact">
          <span className="eyebrow">Have a project in mind?</span>
          <h2>Let’s find the right way forward.</h2>
          <address>{businessContact.address}</address>
          {businessContact.phoneNumbers.map((phone) => (
            <a href={`tel:${phone.replaceAll(" ", "")}`} key={phone}>
              {phone}
            </a>
          ))}
          <a href={`mailto:${businessContact.email}`}>{businessContact.email}</a>
          <Link className="text-link text-link-light" href="/contact">
            Contact us <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {brandName}. All rights reserved.</p>
        <Link href="/contact#consultation-form">Enquiries</Link>
        <span>Clear advice. Confident decisions.</span>
      </div>
    </footer>
  );
}
