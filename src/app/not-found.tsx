import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page" id="main-content">
      <div className="container not-found-content">
        <span className="eyebrow">404 / Page not found</span>
        <h1>
          This isn’t the
          <br />
          <span>right direction.</span>
        </h1>
        <p>
          The page may have moved or the address may be incorrect. Let’s help
          you find your way back.
        </p>
        <Link className="button button-dark" href="/">
          Return to home <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </main>
  );
}
