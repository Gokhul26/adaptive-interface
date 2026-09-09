/**
 * Single source of truth for the site's SEO surface: the business facts search
 * engines index, the meta tags, and the schema.org payload.
 *
 * Everything here is hand-maintained and mirrors what the page already shows —
 * addresses, phone numbers and hours are duplicated from the branch cards in
 * `components/site/Social.tsx`. If a branch detail changes on the page, change
 * it here too or the structured data starts lying to Google.
 */

/**
 * Canonical origin, no trailing slash — e.g. "https://theannavasalhotel.com".
 *
 * Deliberately empty while the domain is undecided: `canonicalUrl()` returns
 * nothing until it is set, so no canonical or `og:url` is emitted. Shipping a
 * guessed origin is worse than shipping none — a wrong canonical tells Google
 * the real pages are duplicates of a URL that doesn't exist.
 */
export const SITE_URL = "";

export const SITE_NAME = "The Annavasal Hotel";

/** Absolute URL for `path`, or undefined while SITE_URL is unset. */
export function canonicalUrl(path = "/") {
  return SITE_URL ? `${SITE_URL}${path}` : undefined;
}

/**
 * Social preview image. Points at the hosted hero shot rather than a local
 * asset so it resolves without a domain; swap for `${SITE_URL}/og-image.jpg`
 * once there's a domain and a purpose-built 1200x630 crop.
 */
export const OG_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDDqr3ZJ2rePx7vk5yeo-eG1JDVGSH1HwQiGVO-cuHMNc8AQ-JbXzWTsFPOnDU0-XRk3l-D0Va6KmmNNvKI9nId6QrxKdQ-m-e5w2tDBOpNaJU6QNGZM3VpGB7Jj9eHz0os5-E5elEjq218DS7dzla-kBqtCH1Vwrg_ELXf2QnUI1Bn8716gFtwzYGoWTxQyGOMKUtpomz-vgGQVnyR12tJK2L4pd1IjbXpTmk1BQKLqNXVRcKwBd35";

export const SOCIAL_PROFILES = [
  "https://www.instagram.com/theannavasalhotel/",
  "https://annavasalhotel.blogspot.com/",
];

/** 7:00 AM – 10:30 PM daily, as advertised in the header and branch cards. */
const OPENING_HOURS = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  opens: "07:00",
  closes: "22:30",
};

type Branch = {
  name: string;
  streetAddress: string;
  locality: string;
  postalCode: string;
  telephone: string;
  mapsUrl: string;
};

const BRANCHES: Branch[] = [
  {
    name: `${SITE_NAME} — Udumalpet`,
    streetAddress: "6A, Nehru Street, near Suguna Regional Office",
    locality: "Udumalaipettai",
    postalCode: "642126",
    telephone: "+91-98946-70027",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sri+Annavaasal+Nehru+Street+Udumalaipettai+642126",
  },
  {
    name: `${SITE_NAME} — Palani`,
    streetAddress: "Railway Feeder Road, Anna Nagar",
    locality: "Palani",
    postalCode: "624601",
    telephone: "+91-90950-10027",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sri+Annavasal+Restaurant+Railway+Feeder+Rd+Palani+624601",
  },
];

const CUISINES = ["South Indian", "Tamil", "Chettinad", "Vegetarian", "Non-vegetarian"];

function branchSchema(branch: Branch) {
  return {
    "@type": "Restaurant",
    name: branch.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.streetAddress,
      addressLocality: branch.locality,
      addressRegion: "Tamil Nadu",
      postalCode: branch.postalCode,
      addressCountry: "IN",
    },
    telephone: branch.telephone,
    hasMap: branch.mapsUrl,
    servesCuisine: CUISINES,
    // Menu spans ₹80 tiffin to ₹450 feasts — "₹₹" in Google's 1–4 scale.
    priceRange: "₹₹",
    openingHoursSpecification: [OPENING_HOURS],
    acceptsReservations: true,
    ...(canonicalUrl() ? { url: canonicalUrl() } : {}),
    ...(canonicalUrl("/#menu-section") ? { menu: canonicalUrl("/#menu-section") } : {}),
  };
}

/**
 * schema.org graph for the home page.
 *
 * Note there is no `aggregateRating` or `Review` markup here even though the
 * page renders real Google reviews: Google does not allow a business to mark up
 * reviews of itself on its own site, and doing it anyway risks a manual action.
 * The reviews stay as visible page content, which is what actually helps.
 */
export function structuredData() {
  const url = canonicalUrl();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Restaurant",
        "@id": url ? `${url}#restaurant` : undefined,
        name: SITE_NAME,
        description:
          "Traditional Tamil restaurant serving stone-ground masalas, plantain-leaf virundhu feasts, Chettinad specials and Kumbakonam degree filter coffee across Udumalpet and Palani.",
        image: OG_IMAGE,
        servesCuisine: CUISINES,
        priceRange: "₹₹",
        telephone: BRANCHES[0]?.telephone,
        sameAs: SOCIAL_PROFILES,
        openingHoursSpecification: [OPENING_HOURS],
        acceptsReservations: true,
        areaServed: ["Udumalpet", "Palani", "Tiruppur", "Dindigul", "Tamil Nadu"],
        department: BRANCHES.map(branchSchema),
        ...(url ? { url } : {}),
      },
      ...(url
        ? [
            {
              "@type": "WebSite",
              "@id": `${url}#website`,
              url,
              name: SITE_NAME,
              inLanguage: "en-IN",
              publisher: { "@id": `${url}#restaurant` },
            },
          ]
        : []),
    ],
  };
}

/** JSON-LD as a head script tag, for a route's `head().scripts`. */
export function structuredDataScript() {
  return {
    type: "application/ld+json",
    children: JSON.stringify(structuredData()),
  };
}
