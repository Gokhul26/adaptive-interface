import type { CSSProperties } from "react";

import { MIN_RATING, branchRatings, reviews, type Review } from "@/data/reviews";

const avatarTones = [
  "bg-primary text-on-primary",
  "bg-secondary text-on-secondary",
  "bg-tertiary text-on-tertiary",
] as const;

/** Cycles avatar colors across the list. */
const toneFor = (i: number) => avatarTones[i % avatarTones.length] ?? avatarTones[0];

/** Seconds of travel per card — the more cards, the longer one full loop takes. */
const SECONDS_PER_CARD = 9;

function Stars({ rating }: { rating: number }) {
  const filled = Math.round(rating);
  return (
    <span aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(filled)}
      <span className="text-outline-variant">{"☆".repeat(5 - filled)}</span>
    </span>
  );
}

/**
 * Card spacing lives on the card as `mr-*`, not as a `gap` on the track — a gap
 * would leave the two copies half a gap out of sync and make the loop hitch.
 */
function ReviewCard({ review, tone }: { review: Review; tone: string }) {
  return (
    <div className="group bg-surface-container-low p-space-xl rounded-xl shadow-sm ring-1 ring-transparent flex flex-col justify-between space-y-space-md relative w-[20rem] shrink-0 md:w-[24rem] mr-space-lg transition-all duration-300 ease-out hover:-translate-y-1.5 hover:bg-surface hover:shadow-xl hover:ring-secondary/40">
      <div className="space-y-space-sm z-10">
        <div className="flex items-center justify-between gap-space-sm">
          <div className="flex text-secondary text-[16px]">
            <Stars rating={review.rating} />
          </div>
          <span className="material-symbols-outlined text-secondary/50 text-[26px] transition-all duration-300 group-hover:text-secondary group-hover:scale-110">
            reviews
          </span>
        </div>
        <p className="font-body-md text-body-md text-on-surface italic leading-relaxed">
          "{review.text}"
        </p>
      </div>
      <div className="pt-space-sm border-t border-outline-variant/30 flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full ${tone} flex items-center justify-center font-bold text-label-md shrink-0 transition-transform duration-300 group-hover:scale-110`}>
          {review.initials}
        </div>
        <div>
          <h4 className="font-headline-sm text-headline-sm text-primary font-bold text-sm">{review.name}</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {review.role}
            {review.date ? ` · ${review.date}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const shown = reviews.filter((r) => r.rating >= MIN_RATING);
  const rated = branchRatings.filter((b) => b.rating > 0);

  return (
<section id="reviews-section" className="w-full py-space-4xl bg-surface">
<div className="max-w-container-max mx-auto px-gutter-desktop space-y-space-2xl">
<div className="text-center max-w-2xl mx-auto space-y-space-xs">
<span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest font-semibold">Reviews from our guests</span>
<h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary font-bold">
          What Our Diners Say
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          Real Google reviews from families, regulars and travellers who ate with us in Udumalpet and Palani.
        </p>

{rated.length > 0 && (
<div className="flex flex-wrap items-center justify-center gap-space-md pt-space-xs">
  {rated.map((b) => (
    <a
      key={b.branch}
      className="flex items-center gap-space-2xs rounded-full bg-surface-container-low px-space-md py-space-2xs font-body-sm text-body-sm text-on-surface-variant transition-colors hover:bg-surface-container"
      href={b.mapsUrl}
      target="_blank"
      rel="noreferrer"
    >
      <span className="font-headline-sm text-headline-sm font-bold text-primary">{b.rating.toFixed(1)}</span>
      <span className="text-secondary text-[14px]"><Stars rating={b.rating} /></span>
      <span className="">on Google Reviews · {b.branch}</span>
      <span className="material-symbols-outlined text-[16px] text-outline">open_in_new</span>
    </a>
  ))}
</div>
)}
</div>
</div>

{/* Full-bleed so cards run edge to edge as they scroll past. */}
<div
  className="marquee mt-space-2xl"
  style={{ "--marquee-duration": `${shown.length * SECONDS_PER_CARD}s` } as CSSProperties}
>
  {/* Vertical padding leaves room for the hover lift + shadow, which the
      marquee's `overflow: hidden` would otherwise clip. */}
  <div className="marquee-track py-space-md items-stretch">
    {shown.map((review, i) => (
      <ReviewCard key={review.name} review={review} tone={toneFor(i)} />
    ))}
    {/* Second copy keeps the loop seamless. */}
    {shown.map((review, i) => (
      <ReviewCard key={`dup-${review.name}`} review={review} tone={toneFor(i)} />
    ))}
  </div>
</div>
</section>
  );
}
