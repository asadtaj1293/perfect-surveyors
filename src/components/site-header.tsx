"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { brandName, businessContact, serviceGroups } from "@/lib/site-data";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const trigger = menuButton.current;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      trigger?.focus();
    };
  }, [menuOpen]);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link
            aria-label={`${brandName} home`}
            className="brand"
            href="/"
            onClick={() => setMenuOpen(false)}
          >
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

          <nav aria-label="Primary navigation" className="primary-navigation">
            {navigation.map(({ label, href }) => (
              <Link
                aria-current={
                  pathname === href ||
                  (href === "/services" && pathname.startsWith("/services"))
                    ? "page"
                    : undefined
                }
                className="nav-link"
                href={href}
                key={href}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <button
              aria-controls="contact-menu"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close contact menu" : "Open contact menu"}
              className={`menu-toggle${menuOpen ? " is-open" : ""}`}
              onClick={() => setMenuOpen((open) => !open)}
              ref={menuButton}
              type="button"
            >
              <span />
              <span />
            </button>
            <Link
              aria-current={pathname === "/contact" ? "page" : undefined}
              className="button button-small button-dark nav-cta"
              href="/contact"
            >
              Let’s talk <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="contact-menu-layer">
          <button
            aria-label="Close contact menu"
            className="contact-menu-backdrop"
            onClick={() => setMenuOpen(false)}
            type="button"
          />
          <aside
            aria-labelledby="contact-menu-title"
            aria-modal="true"
            className="contact-menu"
            id="contact-menu"
            role="dialog"
          >
            <div className="contact-menu-header">
              <Link
                aria-label={`${brandName} home`}
                className="brand"
                href="/"
                onClick={() => setMenuOpen(false)}
              >
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
              <button
                aria-label="Close contact menu"
                className="contact-menu-close"
                onClick={() => {
                  setMenuOpen(false);
                  menuButton.current?.focus();
                }}
                ref={closeButton}
                type="button"
              >
                ×
              </button>
            </div>
            <p className="contact-menu-intro">
              Tell us what you need. We’ll help you find a clear way forward.
            </p>
            <nav aria-label="Quick links" className="contact-menu-quick-links">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
              <Link href="/services" onClick={() => setMenuOpen(false)}>
                All services
              </Link>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </nav>
            <h2 id="contact-menu-title">Reach us</h2>
            <address className="contact-menu-address">
              <ContactIcon name="location" />
              <span>{businessContact.address}</span>
            </address>
            <div className="contact-menu-details">
              {businessContact.phoneNumbers.map((phone) => (
                <a href={`tel:${phone.replaceAll(" ", "")}`} key={phone}>
                  <ContactIcon name="phone" />
                  {phone}
                </a>
              ))}
              <a href={`mailto:${businessContact.email}`}>
                <ContactIcon name="email" />
                {businessContact.email}
              </a>
            </div>
            <nav aria-label="Services" className="contact-menu-services">
              <h2>Explore our services</h2>
              {serviceGroups.map((service) => (
                <Link
                  href={`/services/${service.slug}`}
                  key={service.slug}
                  onClick={() => setMenuOpen(false)}
                >
                  {service.eyebrow}
                  <span aria-hidden="true">↗</span>
                </Link>
              ))}
            </nav>
            <Link
              className="button button-dark contact-menu-cta"
              href="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact us <span aria-hidden="true">↗</span>
            </Link>
          </aside>
        </div>
      )}
    </>
  );
}

function ContactIcon({ name }: { name: "location" | "phone" | "email" }) {
  const paths = {
    location: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2.2" />
      </>
    ),
    phone: (
      <path d="M7 3h3l1.3 4-2 1.5a15 15 0 0 0 6.2 6.2l1.5-2L21 14v3c0 1.1-.9 2-2 2C11 19 5 13 5 5c0-1.1.9-2 2-2Z" />
    ),
    email: (
      <>
        <rect height="14" rx="1.5" width="18" x="3" y="5" />
        <path d="m4 7 8 6 8-6" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="contact-menu-icon"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
      viewBox="0 0 24 24"
    >
      {paths[name]}
    </svg>
  );
}
