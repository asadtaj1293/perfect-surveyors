# Perfect Surveyors website

A responsive Next.js website for Perfect Surveyors, built with the App Router
and TypeScript. The site includes company information, a service catalogue,
individual service pages, and a server-validated consultation form.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Use `npm run lint` and `npm run build` to check the project.

## Consultation email

Enquiries are sent server-to-server through Resend. Add these variables to a
local `.env.local` file or the hosting provider’s secret settings:

```text
RESEND_API_KEY=
CONTACT_EMAIL_TO=
CONTACT_EMAIL_FROM=
```

`CONTACT_EMAIL_FROM` must be a sender address verified with Resend. Keep these
values private and never add them to client-side code. Until all three are
configured, the form returns a clear temporary-unavailable message rather than
pretending an enquiry was delivered. The website does not store submissions in
a database.

The enquiry endpoint validates fields on the server, limits request size,
uses a honeypot and applies a basic per-process IP rate limit. The in-memory
rate limit is suitable only as a lightweight baseline; configure a shared rate
limiter at the hosting edge or with a managed store before running multiple
server instances or accepting significant public traffic.

## Content and deployment

Business contact information is centralized in `src/lib/site-data.ts`. Verify
the address, phone numbers and email with the business before launch. Update
the domain in `src/app/sitemap.ts` and `src/app/robots.ts` if the production
domain differs from `efficientsurveyors.com`.

Service photography is stored locally in `public/images/services/` and used
with descriptive alt text. The photos are served from Unsplash and are covered
by the [Unsplash License](https://unsplash.com/license). Their source IDs are:

| Image | Unsplash photo ID |
| --- | --- |
| Property surveying | `photo-1560518883-ce09059eeffa` |
| Quantity surveying | `photo-1504307651254-35680f356dfd` |
| Retrofit | `photo-1497366754035-f200968a6e72` |
| Snagging survey | `photo-1600607687939-ce8a6c25118c` |
| Homebuyers report | `photo-1600566753086-00f18fb6b3ea` |
| Building survey | `photo-1503387762-592deb58ef4e` |
| Design management | `photo-1486406146926-c627a92ad1ab` |
| Contract management | `photo-1541888946425-d81bb19240f5` |
| Carbon accounting | `photo-1473341304170-971dccb5ac1e` |
| Health & safety | `photo-1516937941344-00b4e0337589` |
| Retrofit assessment | `photo-1600607687920-4e2a09cf159d` |
| Retrofit coordinator | `photo-1497366811353-6870744d04b2` |

Deploy behind HTTPS. Production responses add HSTS along with content-type,
framing, referrer and browser-permission security headers.

## Routes

- `/` — Home
- `/about` — About Perfect Surveyors
- `/services` — Services overview
- `/services/property-surveying` — Property surveying
- `/services/quantity-surveying` — Quantity surveying
- `/services/retrofit` — Retrofit
- `/services/[service]` — Individual specialist service pages
- `/contact` — Consultation form
