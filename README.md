# TrustSeal — AI Website Trust Verification & Fact Checker

**Verify any website's legitimacy, check business authenticity, and fact-check news claims — instantly.**

TrustSeal uses Google Gemini AI to cross-reference websites against SSL data, domain registries, business records, and 50+ trusted sources. Get a verified digital trust badge for your business or a clear verdict on any site you're unsure about.

**Live app:** https://trustseal.asquaresolution.com

---

## Features

- **Website trust verification** — enter any URL or business name for an AI trust score
- **Business legitimacy checker** — verify if an online business is real or fake
- **AI fact-checker** — paste any news headline, WhatsApp forward, or claim for instant verification
- **Digital trust badge** — verified businesses get an embeddable trust seal for their site
- **Hindi & English support** — bilingual UI and AI responses for Indian users
- **Daily free checks** — 3 checks/day without account
- **PWA-ready** — installable on Android and iOS

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, Vite, Tailwind CSS |
| AI | Google Gemini 1.5 Flash via Cloud Functions |
| Auth | Firebase Authentication (Google OAuth + Email) |
| Database | Firestore |
| Analytics | GA4 + Firebase Analytics |
| Payments | Razorpay (trust badge plans) |
| Hosting | GitHub Pages (gh-pages branch) |

## How It Works

### Website/Business Verification
1. User enters a website URL or business name
2. TrustSeal Cloud Function queries Gemini with domain data, SSL status, and known fraud signals
3. Gemini generates a trust score (0–100) with category breakdown
4. Result includes: trust verdict, risk factors, and recommendation

### Fact-Checking
1. User pastes a news claim or WhatsApp forward
2. AI cross-references against Reuters, BBC, WHO, and authoritative sources
3. Returns: True / False / Misleading / Unverifiable verdict with source citations

## Pricing

| Plan | Price | Checks | Features |
|------|-------|--------|----------|
| Free | ₹0 | 3/day | Website & fact-check |
| Basic | ₹149/mo | Unlimited | All checks |
| Pro | ₹299/mo | Unlimited | Trust badge + API |

## Privacy

- No website or claim content stored permanently
- AI analysis via Firebase Cloud Functions (server-side)
- User data limited to check count and plan status
- No data sold to third parties

## AI Usage

TrustSeal uses **Google Gemini 1.5 Flash** for:
- Domain and SSL certificate analysis
- Business registry cross-referencing
- News claim verification against authoritative sources
- Fraud pattern detection in URLs and business names

## Ad Architecture

- Free users see Google AdSense ads
- Paid users (Basic/Pro) have ads automatically disabled — `isPaid` check in `AdUnit.jsx` returns `null` for paid plans

## Roadmap

- [ ] Chrome extension for real-time site scanning
- [ ] Trust badge widget for WordPress
- [ ] API for e-commerce platforms to verify suppliers
- [ ] Bulk URL verification for enterprise
- [ ] Community-powered trust reviews

## Built By

[A Square Solutions](https://asquaresolution.com) — AI & Digital Growth agency, India.

Also check out: **[ScamCheck](https://scamcheck.asquaresolution.com)** — AI scam detector for messages, links, and phone numbers.
