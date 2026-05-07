@AGENTS.md
---
## Hexonite.net — Project Guide for AI Agents
 
### What This Project Is
Personal portfolio + business site for **Hexonite Software Services** (California LLC) and **Sebastian Stefaniuk**, a software engineer based in San Diego, CA. The site showcases Sebastian's profile, services, and a contact form. A blog is planned but not yet live.
 
Live URL: **https://www.hexonite.net**
GitHub: **https://github.com/sebboness/hexonite.net**
 
---
 
### Tech Stack
 
| Layer | Technology |
|---|---|
| Framework | **Next.js 16** (App Router, React 19) |
| Language | **TypeScript 5** |
| Styling | **SCSS** (custom, via `sass`), Inter Tight (Google Font) |
| UI Animations | **AOS** (Animate On Scroll), **react-typed** (typewriter effect) |
| Icons | **Font Awesome** (loaded via CDN kit), **react-icons** |
| Email | **AWS SES v2** via `nodemailer` |
| Spam protection | **hCaptcha** (`@hcaptcha/react-hcaptcha`) |
| Theming | `next-themes` |
| Toast notifications | `react-toastify` |
| Form validation | `yup` + `validator` |
 
---
 
### Project Structure
 
```
hexonite.net/
├── app/                        # Next.js App Router
│   ├── api/
│   │   ├── contact/route.ts    # POST: contact form → AWS SES email
│   │   └── hello/              # Health check / dev route
│   ├── blog/                   # Blog (TODO - not yet live)
│   ├── contact/                # Contact page
│   ├── sebastian/              # About/profile page
│   ├── services/               # Services page
│   ├── layout.tsx              # Root layout (fonts, metadata, OG, scripts)
│   ├── page.tsx                # Home page
│   ├── not-found.tsx           # 404 page
│   └── providers.tsx           # Theme providers
├── components/
│   ├── about/
│   │   ├── index.tsx           # About/Sebastian main page component
│   │   └── Resume.tsx          # Work history timeline component
│   ├── contact/                # Contact form with hCaptcha
│   ├── home/Home.tsx           # Hero/landing section with typed strings
│   ├── service/                # Services listing
│   ├── sidebar/Sidebar.tsx     # Left nav sidebar
│   ├── Social.tsx              # Social links
│   ├── Seo.tsx                 # Per-page SEO wrapper
│   ├── FlashMessage.tsx        # Toast/flash message component
│   └── switch/                 # Dark/light mode toggle
├── data/
│   ├── servicesData.ts         # Service cards content (consulting, engineering, architecture, digital)
│   └── sidebarData.ts          # Sidebar nav items + icons
├── lib/
│   ├── api.ts                  # `grabEnvSecret()`, `escapeHtml()` helpers
│   ├── hcaptcha.ts             # hCaptcha server-side verification
│   └── linkActiveChecker.ts    # Active route detection for sidebar
├── styles/scss/                # All SCSS stylesheets (heavily customized from original template)
├── public/
│   ├── img/                    # Images, logos, SVGs, headshots
│   └── sebastian-stefaniuk-resume.pdf  # Downloadable resume
├── types/
│   └── react-typed.d.ts        # Type declaration for react-typed
└── next.config.ts              # Next.js config (minimal, options TBD)
```
 
---
 
### Environment / Secrets
 
Secrets are loaded via `lib/api.ts → grabEnvSecret()`, which checks:
1. A JSON object in `process.env.secrets` (injected at deploy time)
2. Individual `process.env.KEY` variables as fallback
Required secrets:
 
| Key | Purpose |
|---|---|
| `APP_AWS_REGION` | AWS region for SES |
| `SMTP_AWS_KEY` | AWS IAM access key ID |
| `SMTP_AWS_SECRET` | AWS IAM secret access key |
| `HCAPTCHA_SECRET` | hCaptcha server-side secret key |
 
The hCaptcha site key is loaded client-side (not secret); check the contact component for the env var reference.
 
---
 
### Contact Form Flow (`/contact`)
 
1. User fills out name, email, message fields
2. Client-side hCaptcha challenge completes → token included in POST body
3. `POST /api/contact` validates hCaptcha token server-side via `lib/hcaptcha.ts`
4. Input is sanitized (`validator.trim` + `escapeHtml`) and validated via `yup`
5. Email sent via AWS SES using `nodemailer` SES transport
6. Response delivered to `sebboness@gmail.com` with subject `"{name} says hello on Hexonite"`
---
 
### Key Conventions
 
- **No form elements** — use `onClick`/`onChange` React event handlers
- **Secrets never hardcoded** — always via `grabEnvSecret()`
- **HTML escaping** — all user input goes through `escapeHtml()` before use
- **`robots: "noindex, follow"`** set in root metadata (intentional — adjust when ready for search indexing)
- **Blog route exists** (`/blog`, commented out in `sidebarData.ts`) but is not live yet; do not implement blog features without explicit instruction
- **Styling** — most styles live in `styles/scss/`. The site was started from a ThemeForest template that has been heavily customized; many original template styles remain but are unused. Prefer editing existing SCSS rather than adding inline styles.
- **AOS animations** — pages use `data-aos="fade-right" data-aos-duration="1200"` at the top-level section wrapper; preserve this pattern for new pages.
- **Font** — Inter Tight loaded via `next/font/google`, exposed as CSS var `--font-inter-tight`
---
 
### Running Locally
 
```bash
npm install
npm run dev       # starts dev server at http://localhost:3000
npm run build     # production build
npm run lint      # ESLint
npm run type-check  # tsc --noEmit
```
 
Requires environment secrets to be set for the contact form to work (see above).