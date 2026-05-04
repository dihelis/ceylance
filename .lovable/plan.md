## Ceylance SEO Improvement Plan

Based on the SEO review, here's a phased plan to lift Ceylance into the right Australian search results. I've split it into **quick technical wins** (do now) and **structural content work** (build over the next few weeks).

---

### Phase 1 — Quick Technical Wins (1 session)

These can ship immediately and unlock most SEO foundations.

**1. Update homepage `<head>` (index.html)**
- Title: `Ceylance — AI, SaaS, Web & Mobile App Development Australia`
- Meta description: rewrite to lead with "Australia-based software consulting company…"
- Add canonical URL: `https://www.ceylance.com/`
- Add `og:url`, `og:image` (use a real OG image, not lovable.dev placeholder)
- Add proper `twitter:image` (currently points to lovable.dev)
- Add `<html lang="en-AU">`
- Add geo meta: `geo.region=AU-SA`, `geo.placename=Adelaide`

**2. JSON-LD Structured Data** (injected in index.html)
- `Organization` schema (name, url, logo, sameAs social links)
- `LocalBusiness` schema (Norwood SA 5067 address, phone, email, ABN if available)
- `Service` schema for each of the 6 services
- `FAQPage` schema (add a small FAQ on homepage to fuel this)

**3. Hero copy update (HeroSection.tsx)**
- Eyebrow: keep "Your Technology Partner — Australia" (drop UAE/UK from H1 area to sharpen Australia focus, mention secondary markets lower on the page)
- H1: `Build Scalable AI, SaaS, Web & Mobile Products in Australia`
- Subheadline: rewrite to "Ceylance helps Australian startups and businesses design, develop, and launch secure custom software — from MVPs to full-scale platforms."
- Primary CTA: `Book a Free Consultation`

**4. sitemap.xml + robots.txt**
- Create `public/sitemap.xml` listing all pages
- Update `public/robots.txt` to reference the sitemap
- (You'll then submit the sitemap in Google Search Console — manual step)

**5. Per-route meta tags via react-helmet-async**
- Install `react-helmet-async`, wrap App in `HelmetProvider`
- Each page (Index, About, future service pages) gets unique `<title>`, description, canonical

---

### Phase 2 — Service Pages (Australia-targeted)

Create dedicated, indexable routes — each with unique content, H1 keyword targeting, FAQ section, internal links, and CTA.

| Route | H1 keyword |
|---|---|
| `/software-consulting-australia` | software consulting Australia |
| `/custom-software-development-australia` | custom software development Australia |
| `/ai-software-development-australia` | AI software development Australia |
| `/saas-development-company-australia` | SaaS development company Australia |
| `/web-application-development-australia` | web application development Australia |
| `/mobile-app-development-australia` | mobile app development Australia |

Each page reuses a shared `<ServicePageLayout>` component (Hero → Problem/Solution → What's Included → Process → FAQ → CTA) so styling stays consistent and build cost stays low.

Update Navbar `Services` link to a dropdown listing these pages, and update the homepage `ServicesSection` cards to link into them.

---

### Phase 3 — Trust & Proof

- **Industries pages**: `/industries/startups`, `/industries/small-business`
- **Case studies**: `/case-studies` index + individual case study pages
- **Contact page**: dedicated `/contact` with full Australian NAP (Name, Address, Phone) + embedded map + Service Area schema
- Add ABN/ACN to footer if available
- Add Australian client logos / testimonials section to homepage

---

### Phase 4 — Content & Local SEO (ongoing)

- **Blog**: `/blog` with posts targeting the keyword topics in the report (AI for AU businesses, SaaS MVP cost, custom vs off-the-shelf, etc.)
- **City pages**: only build for Sydney/Melbourne/Brisbane/Perth/Adelaide if you actively want leads there — each must have unique content
- **Off-site** (manual, outside this app):
  - Google Business Profile setup at Norwood SA address
  - Australian directory listings (Clutch, GoodFirms, Yellow Pages AU, StartupAUS)
  - Google Search Console + Bing Webmaster verification

---

### Technical Details

- **Library additions**: `react-helmet-async` (per-route meta), no other deps needed
- **Schema.org**: hand-written JSON-LD scripts; one in `index.html` for global Organization/LocalBusiness, page-level Service/FAQ injected via Helmet
- **Routing**: all new pages added to `App.tsx` above the catch-all
- **Sitemap**: static `public/sitemap.xml` (regenerated when pages are added). For dynamic generation later we can add a build step, but static is fine at this scale
- **No backend changes** required for any of this

---

### What I propose to ship in the first build

If you approve, I'll do **Phase 1 in full** + **scaffold one example service page** (`/ai-software-development-australia`) so you can see the pattern, then we iterate on the rest. Let me know if you'd rather I:

- (A) Ship Phase 1 + 1 sample service page (recommended — fast, visible win)
- (B) Ship Phase 1 + all 6 service pages in one go (bigger change, takes longer to review)
- (C) Just ship Phase 1 technical fixes
