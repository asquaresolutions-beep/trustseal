import{d as o,j as e}from"./index-BiMVshh2.js";import"./vendor-react-0TAojWO7.js";import{S as s}from"./vendor-ui-CyNrSbEP.js";import"./vendor-firebase-Da8dg210.js";const i=[{title:"1. Overview",content:`This Privacy Policy explains how A Square Solutions ("we", "us", "our") collects, uses, and protects your information when you use TrustSeal (trustseal.asquaresolution.com) — our AI-powered website trust verification and fact-checking tool.

By using TrustSeal, you agree to the practices described in this policy. This policy applies globally to all users.`},{title:"2. Information We Collect",content:`Account Data: When you sign up, we collect your email address and display name via Firebase Authentication (Google OAuth or Email/Password).

Usage Data: We record the number of trust verifications and fact-checks you perform per day to enforce plan limits. This is stored in Firestore under your user ID.

Verification & Fact-Check Queries: URLs, business names, or claims you submit are sent to Google Gemini AI for processing via Firebase Cloud Functions. Results are stored in Firestore to support shareable links. Guest users' results are stored anonymously for 90 days.

Payment Data: If you purchase a paid plan, payment is processed by Razorpay. TrustSeal does not store your card or bank details. We receive a transaction confirmation event from Razorpay via webhook.

Analytics Data: We use Google Analytics 4 (GA4) to collect anonymous usage metrics including page views, feature interactions, and conversion events. No personally identifiable information is linked to analytics data.

Device Data: Standard server logs may include your IP address, browser type, operating system, and referring URL.

Language Preference: Your selected language (Hindi or English) is stored in your browser's localStorage.`},{title:"3. How We Use Your Information",content:`We use your information to:
• Provide and operate the TrustSeal trust verification and fact-checking service
• Enforce plan usage limits (3/day free, unlimited for paid plans)
• Process and verify payments via Razorpay
• Send essential service communications (e.g., plan activation confirmation)
• Display Google AdSense advertisements to free-tier users only
• Analyse aggregate usage patterns to improve our AI accuracy and UX
• Prevent fraud, abuse, and automated misuse`},{title:"4. AI Processing Disclosure",content:`TrustSeal uses Google Gemini AI (via Firebase Cloud Functions and Google Vertex AI) to:
• Verify website trust, domain safety, and business legitimacy
• Fact-check news claims, WhatsApp forwards, and online content
• Generate trust scores and detailed analysis reports

Important disclosures:
• Your submitted URLs, business names, or claims are sent to Google's AI systems for analysis
• AI results are probabilistic estimates — not legal determinations or official verdicts
• TrustSeal verdicts should never be the sole basis for legal, financial, or safety decisions
• We do not train our models on your submitted content
• Google Cloud's AI usage policies apply to all AI processing

TrustSeal is a decision-support tool. Always exercise your own judgment.`},{title:"5. Third-Party Services",content:`We share data with these third parties solely to operate the service:

Google Firebase (Auth, Firestore, Cloud Functions): User authentication, usage data storage, and AI request handling. Subject to Google Cloud Privacy Policy.

Google Analytics 4: Anonymous usage analytics. Subject to Google Analytics Terms.

Google AdSense (Publisher ID: ca-pub-3102382127523426): Displays ads to free-tier users. Google may use cookies to serve relevant ads. Opt out at google.com/settings/ads.

Google Gemini AI / Vertex AI: Processes trust verification and fact-check queries. Subject to Google's Generative AI Terms.

Razorpay: Processes payments for paid plans. Razorpay handles billing, taxes, and payment security. Subject to Razorpay's Privacy Policy.

We do not sell your personal data to any third party.`},{title:"6. Cookies & Local Storage",content:`TrustSeal uses:
• Firebase Authentication session cookies (login persistence)
• localStorage: language preference (ts_lang), guest usage count (ts_guest_checks), dismissed banner state
• Google Analytics cookies (_ga, _gid, _ga_*): anonymous usage tracking
• Google AdSense cookies: ad personalization for free-tier users

You can manage cookies through your browser settings. Disabling cookies may affect login and usage tracking functionality.`},{title:"7. Data Retention",content:`Account data: Retained until you delete your account.
Verification and fact-check results: Retained indefinitely to support shareable result links.
Guest results (no account): Retained for 90 days, then deleted.
Daily usage counts: Reset each day.
Analytics data: Retained for 14 months per Google Analytics default settings.
Payment records: Retained for 7 years as required by Indian tax law (GST compliance).`},{title:"8. Your Rights",content:`Under India's Digital Personal Data Protection Act 2023, GDPR (for EU/UK users), and other applicable laws, you have the right to:
• Access the personal data we hold about you
• Correct inaccurate personal data
• Request deletion of your account and associated data (email us)
• Opt out of Google Analytics tracking (tools.google.com/dlpage/gaoptout)
• Opt out of personalised Google ads (google.com/settings/ads)
• Withdraw consent for marketing communications
• Lodge a complaint with your local data protection authority

To exercise these rights, email: contact@asquaresolution.com`},{title:"9. Security",content:"All data is transmitted over HTTPS/TLS. Firebase Firestore uses authentication-based security rules to ensure you can only access your own data. AI queries are processed server-side via Firebase Cloud Functions — your content is not sent directly from your browser to Google AI. We do not store payment card data. We apply the principle of least privilege to all service account credentials."},{title:"10. Children's Privacy",content:"TrustSeal is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has created an account, contact us immediately at contact@asquaresolution.com and we will delete the account promptly."},{title:"11. International Users",content:"TrustSeal is operated globally from India. By using TrustSeal, you consent to your data being processed in India and/or in Google Cloud's data centers (which may include the United States and other countries). We apply GDPR-standard protections for EU/EEA users where applicable."},{title:"12. Changes to This Policy",content:"We may update this Privacy Policy to reflect changes in our practices or legal requirements. Material changes will be communicated via a prominent notice on TrustSeal or our website. Continued use of the service after the effective date of changes constitutes acceptance of the updated policy."},{title:"13. Contact",content:`A Square Solutions
Email: contact@asquaresolution.com
Website: asquaresolution.com
TrustSeal: trustseal.asquaresolution.com`}];function u(){return o({title:"Privacy Policy — TrustSeal AI Verification | How We Protect Your Data",description:"TrustSeal Privacy Policy. How A Square Solutions collects, uses, and protects your data when you use our AI-powered trust verification and fact-checking platform.",canonical:"https://trustseal.asquaresolution.com/privacy-policy"}),e.jsx("div",{className:"min-h-screen pt-24 pb-16 px-4",children:e.jsxs("div",{className:"max-w-3xl mx-auto",children:[e.jsxs("div",{className:"text-center mb-10",children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-600/10 border border-brand-600/20 text-brand-400 text-xs font-semibold mb-4",children:[e.jsx(s,{size:12})," Legal"]}),e.jsx("h1",{className:"text-3xl font-extrabold text-white",children:"Privacy Policy"}),e.jsx("p",{className:"mt-2 text-sm text-gray-500 font-dm",children:"Last updated: May 2026 · Effective: May 2026"}),e.jsx("p",{className:"mt-1 text-xs text-gray-600 font-dm",children:"India DPDP Act 2023 + GDPR aligned · Applies to TrustSeal globally"})]}),e.jsx("div",{className:"space-y-6",children:i.map(({title:t,content:a})=>e.jsxs("div",{className:"card",children:[e.jsx("h2",{className:"text-base font-bold text-white mb-3",children:t}),e.jsx("p",{className:"text-sm text-gray-400 font-dm leading-relaxed whitespace-pre-line",children:a})]},t))})]})})}export{u as default};
