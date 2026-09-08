/**
 * Google review data — maintained by hand.
 *
 * Nothing here is fetched at runtime: no API key, no network call, no backend.
 * To refresh, open the Google Maps listing, copy across what changed, redeploy.
 *
 *   Udumalpet — https://www.google.com/maps/search/?api=1&query=Sri+Annavaasal+Nehru+Street+Udumalaipettai
 *   Palani    — https://www.google.com/maps/search/?api=1&query=Sri+Annavasal+Restaurant+Palani
 */

/** Reviews below this rating are never rendered. */
export const MIN_RATING = 4;

export type Review = {
  /** Reviewer name exactly as it appears on Google. */
  name: string;
  /** Initials for the avatar circle. */
  initials: string;
  /** Line under the name — "Local Guide · 42 reviews", or leave as a plain descriptor. */
  role: string;
  /** 1–5, as posted. Anything under MIN_RATING is filtered out at render. */
  rating: number;
  text: string;
  /** As Google shows it — "3 months ago", "July 2026". Optional. */
  date?: string;
  branch?: "Udumalpet" | "Palani";
};

export type BranchRating = {
  branch: string;
  /** Star rating shown on the badge. Entries at 0 are hidden. */
  rating: number;
  mapsUrl: string;
};

/**
 * No review *count* here on purpose — it changes with every new review and would
 * be wrong within a week. The link sends people to the live listing for that.
 */
export const branchRatings: BranchRating[] = [
  {
    branch: "Udumalpet",
    rating: 4.0,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sri+Annavaasal+Nehru+Street+Udumalaipettai+642126",
  },
  {
    // Fill in the rating from the Palani listing — it stays hidden while this is 0.
    branch: "Palani",
    rating: 0,
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Sri+Annavasal+Restaurant+Railway+Feeder+Rd+Palani+624601",
  },
];

/**
 * Real reviews from the Udumalpet Google listing, transcribed as posted.
 * Dates are absolute rather than "3 months ago" so they don't go stale on the page.
 */
export const reviews: Review[] = [
  {
    name: "Prakash Thangaraj",
    initials: "PT",
    role: " 30 reviews",
    rating: 5,
    text: "Had an amazing dining experience! If you are a non-veg lover, this place is a must-visit. We ordered the Prawn Masala & Fish Fry and the meat was cooked to absolute perfection—tender, juicy, and packed with authentic flavors. The spices were perfectly balanced, and the portion sizes were generous. The staff was courteous and the service was quick. Highly recommend it!",
    date: "August 2026",
    branch: "Udumalpet",
  },
  {
    name: "Bhanuprakash Gowda",
    initials: "BG",
    role: "· 23 reviews",
    rating: 5,
    text: "Very nice place for a good meal! The parota and chicken curry were absolutely delicious and full of flavor. The restaurant is clean, well-maintained, and has AC seating, which makes it very comfortable. It's a great spot for families as well. The service was also good and staff were friendly and attentive.",
    date: "April 2026",
    branch: "Udumalpet",
  },
  {
    name: "sathyan selvaraj",
    initials: "SS",
    role: " 5 reviews",
    rating: 5,
    text: "We had lunch with both veg and non-veg options, including gravies and side dishes, and the taste was really good. The chicken and mutton biryanis were flavorful, not too spicy, and perfect for kids—they enjoyed it! We were a group of 7, and the pricing was quite reasonable. The quantity and quality were satisfying, and overall, we strongly recommend this place for families.",
    date: "January 2026",
    branch: "Udumalpet",
  },
  {
    name: "Shankar Mayilsamy",
    initials: "SM",
    role: " 17 reviews",
    rating: 5,
    text: "Very tasty authentic briyani and gravy. Mutton gravy, rasam top notch. Overall food taste fantastic. Family friendly and good atmosphere.",
    date: "May 2026",
    branch: "Udumalpet",
  },
  {
    name: "KrishnaKumar J",
    initials: "KJ",
    role: " 54 reviews",
    rating: 5,
    text: "Great place for non veg. Large menu, taste and quality was great, service was great. A little inside from the main road, but worth the option for lunch.",
    date: "June 2026",
    branch: "Udumalpet",
  },
  {
    name: "Mathiyarasu K",
    initials: "MK",
    role: "Google reviewer · 3 reviews",
    rating: 5,
    text: "The ambiance is welcoming, and the service is generally efficient. Many visitors appreciate the reasonable pricing and the availability of home delivery and takeaway options. If you're looking for a place that serves delicious food with a mix of flavors, Hotel Annavaasal is worth a visit!",
    date: "2025",
    branch: "Udumalpet",
  },
];
