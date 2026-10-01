import Link from "next/link";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb?: string;
};

export function PageIntro({
  eyebrow,
  title,
  description,
  breadcrumb,
}: PageIntroProps) {
  return (
    <section className="page-intro">
      <div className="container page-intro-inner">
        <div>
          {breadcrumb && (
            <nav aria-label="Breadcrumb" className="breadcrumbs">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>{breadcrumb}</span>
            </nav>
          )}
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="page-intro-copy">{description}</p>
        </div>
        <span aria-hidden="true" className="page-intro-index">
          ES
          <span>—</span>
          01
        </span>
      </div>
    </section>
  );
}
