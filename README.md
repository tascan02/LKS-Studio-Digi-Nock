# LKS-Studio-Digi-Nock

This is the LKS Studio landing page website: a responsive, single-page B2B apparel
manufacturing, wholesale, and export showcase. It uses React (JSX), Vite, Tailwind
CSS, Motion for React, and Lucide React. The existing repository history and remote
are preserved.

## Run locally

Use Node.js 22.12+ (22.x) or 24+, with npm. Node.js 24 LTS is recommended for hosting.

```bash
npm ci
npm run dev
```

Open the URL printed by Vite. Check enquiry validation and create a production build:

```bash
npm test
npm run build
npm run preview
```

`dist/` is the deployable static output. No backend or environment variables are
required. Google Fonts supplies Cormorant Garamond and DM Sans with local system
font fallbacks if the font service is unavailable.

## Project structure

- `src/components/`: individual sections, navigation, enquiry form, shared UI, image component.
- `src/config/siteConfig.js`: company/contact details, navigation, image configuration.
- `src/config/collectionData.js`: collection names, descriptions, availability.
- `src/hooks/useScrollSpy.js`: active section navigation.
- `src/utils/whatsapp.js`: all WhatsApp URL generation and message formatting.
- `src/utils/validation.js`: enquiry validation.
- `src/index.css`: responsive design, typography, Tailwind theme, reduced-motion rules.
- `src/assets/images/`: optional imported image assets.
- `public/images/placeholders/`: local editorial SVG illustrations used until photos arrive.
- `tests/enquiry.test.js`: validation and WhatsApp message tests using Node's test runner.

## Replace photographs

No real or remote product photographs are used. All six illustrations are clearly
labeled as placeholders and must not be treated as genuine LKS Studio products.
Place approved photographs in `public/images/` using these exact filenames:

| File                 | Used for                      | Suggested crop                                                     |
| -------------------- | ----------------------------- | ------------------------------------------------------------------ |
| `hero.jpg`           | Hero editorial image          | Portrait, about 5:6; keep subject near the center for mobile crops |
| `about.jpg`          | Business/manufacturing image  | Portrait, about 5:6                                                |
| `womens-tops.jpg`    | Women's Tops collection       | Portrait, about 3:4                                                |
| `womens-tshirts.jpg` | Women's T-Shirts collection   | Portrait, about 3:4                                                |
| `plazo.jpg`          | Plazo Collection              | Portrait, about 3:4                                                |
| `kids-wear.jpg`      | Upcoming Kids Wear collection | Portrait, about 3:4                                                |

Then open `src/config/siteConfig.js`, set `isPlaceholder: false` for each replaced
image, and update its `alt` to describe the actual photograph. Keep `fallback`
pointing to the local SVG. If a photo fails to load, the illustration and placeholder
label return automatically. You can use `.webp` or `.avif` instead by updating only
`src` in this configuration. Components require no edits.

Use optimized images (typically 300–500 KB or less) with sufficient resolution:
about 1200 px wide for hero/about and 700 px wide for category images. Image regions
retain their aspect ratios; below-the-fold images load lazily. Adjust image-specific
cropping in `src/index.css` if necessary.

## Brand logo

The supplied logo appears in the header and footer using the shared `BrandLogo`
component. `public/images/lks-studio-logo-source.png` retains the original screenshot;
CSS frames only the emblem and brand name, excluding the surrounding interface.
When a clean standalone logo is available, update `siteConfig.logo` in
`src/config/siteConfig.js` and replace the screenshot framing in `.brand-logo img`
with `position: static; width: 100%; height: 100%; object-fit: contain`.

## Brand colors

The interface uses white (`#FFFFFF`), near-black (`#151515`), and vibrant yellow
(`#F6CC00`) inspired by the supplied LKS Studio logo. Brand variables and shared
styles are in `src/index.css`. Yellow controls use dark text for readability;
local placeholder illustrations and the favicon follow the same palette.

## Collection photo viewer

Tap or click any collection image (or its magnifying-glass control) to open an
uncropped, larger preview. The viewer uses the same `collection.image` configuration
and local fallback as the card. Replacing a photo and setting `isPlaceholder: false`
as described above automatically updates both places; no viewer changes are needed.
Use a sufficiently large optimized source photo for a sharp preview.

The native modal supports keyboard navigation, Escape, a close button, and tapping
the backdrop. Background scrolling is paused while open, and focus returns to the
image control on close. Kids Wear remains Coming Soon in the preview with no order CTA.

## Update business content

Edit `src/config/siteConfig.js` to change the company name, displayed phone,
international telephone number, WhatsApp number (digits only, including country
code), email, or address. Contact links and WhatsApp URLs read from this file.
Update the editorial copy in the relevant section components and the title,
description, and Open Graph metadata in `index.html` if the business identity changes.
No social accounts or unverified certifications are included.

Edit `src/config/collectionData.js` for collection content. `comingSoon: true`
displays the Coming Soon treatment and suppresses ordering enquiries. Kids Wear is
currently upcoming and is intentionally excluded from the form's orderable choices.
If availability changes, update both this data and the explicit dropdown options in
`src/components/EnquiryForm.jsx` after confirming the launch.

## Enquiries and privacy

Category buttons and the floating contact button open the official WhatsApp number:
`918920547605`. The form validates required fields, basic international phone format,
and optional email, then opens a URL-encoded WhatsApp draft. Visitors must review and
send it in WhatsApp. Nothing is sent automatically, stored by this website, or saved
to a server. If a popup is blocked, a direct link to the prepared draft is shown.
Phone, email, and Google Maps directions links are also provided.

The website makes no retail sales and includes no checkout, payment, or authentication.

## Deploy on Netlify

1. Import this GitHub repository and choose the intended branch (`main` initially).
2. Use the repository root as the base directory.
3. `netlify.toml` specifies `npm run build`, output `dist`, and Node.js 24.
4. Deploy. Set the real custom domain in Netlify when ready.

## Deploy on Vercel

1. Import the same repository and select Vite.
2. Keep the root directory at the repository root; choose Node.js 24 in project settings.
3. `vercel.json` specifies `npm run build` and output `dist`.
4. Deploy and configure the actual domain when available.

Navigation uses same-page anchors, so no client-side routing rewrites are needed.
When a public domain and approved social-sharing photo are available, add absolute
`og:url`/`og:image` metadata and a canonical URL to `index.html`; no unverified domain
is hardcoded. The included typography-based favicon can be replaced in `public/`.

`node_modules/`, `dist/`, `.env*`, logs, and local provider state are ignored. Never
place credentials in browser code or `VITE_` variables, which are public in a build.
