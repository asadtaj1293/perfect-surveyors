import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationForm } from "@/components/consultation-form";
import { PageIntro } from "@/components/page-intro";
import { businessContact, serviceGroups } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact & consultation",
  description:
    "Tell Perfect Surveyors about your property or project and request a consultation.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <PageIntro
        breadcrumb="Contact"
        description="A useful conversation is a good place to start. Tell us what’s on your mind and we’ll be in touch."
        eyebrow="Contact & consultation"
        title="Let’s talk about what matters to you."
      />
      <section className="section contact-section">
        <div className="container contact-layout">
          <aside className="contact-aside">
            <span className="eyebrow">We’re here to help</span>
            <h2>A clearer next step starts with a conversation.</h2>
            <p>
              Whether you’re buying a property, planning a project or
              considering energy improvements, tell us a little about what you
              need.
            </p>
            <div className="contact-expertise">
              <span className="eyebrow">Areas of expertise</span>
              {serviceGroups.map((service) => (
                <div key={service.slug}>
                  <span>{service.number}</span>
                  {service.eyebrow}
                </div>
              ))}
            </div>
            <div className="contact-business-details">
              <span className="eyebrow">Reach us</span>
              <address>{businessContact.address}</address>
              {businessContact.phoneNumbers.map((phone) => (
                <a href={`tel:${phone.replaceAll(" ", "")}`} key={phone}>
                  {phone}
                </a>
              ))}
              <Link href={`mailto:${businessContact.email}`}>
                {businessContact.email}
              </Link>
            </div>
          </aside>
          <div className="contact-form-panel" id="consultation-form">
            <ConsultationForm />
          </div>
        </div>
      </section>
    </main>
  );
}
