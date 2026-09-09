import { useState, type FormEvent } from "react";

function isoDate(d: Date) {
  return d.toISOString().split("T")[0] ?? "";
}

/**
 * Shared control styling. The fixed `h-12` is what keeps the grid aligned:
 * text inputs, selects and `type="date"` all render different intrinsic
 * heights from the same padding, so the height is set explicitly instead.
 */
const fieldClass =
  "w-full h-12 bg-surface-container-lowest text-on-surface text-body-md px-space-md rounded border border-outline-variant focus:outline-none focus:border-primary transition-all";

const GUEST_OPTIONS = [
  { value: "2", label: "2 Guests (Couple / Pair)" },
  { value: "4", label: "4 Guests (Family Table)" },
  { value: "6", label: "6 Guests (Courtyard Group)" },
  { value: "8", label: "8 Guests (Large Banquet)" },
  { value: "12", label: "10+ Guests (Private Hall Feast)" },
];

const SLOT_GROUPS = [
  {
    label: "Royal Lunch Virundhu",
    options: [
      { value: "11:30", label: "11:30 AM (First Batch)" },
      { value: "12:30", label: "12:30 PM (Peak Virundhu)" },
      { value: "13:30", label: "01:30 PM (Afternoon Saapaadu)" },
      { value: "14:30", label: "02:30 PM (Late Lunch)" },
    ],
  },
  {
    label: "Twilight Dinner & Tiffin",
    options: [
      { value: "19:00", label: "07:00 PM (Early Dinner)" },
      { value: "20:00", label: "08:00 PM (Courtyard Evening)" },
      { value: "21:00", label: "09:00 PM (Late Night Tiffin)" },
      { value: "22:00", label: "10:00 PM (Final Seating)" },
    ],
  },
];

/** Each seating choice routes to the branch that actually takes the booking. */
const DEFAULT_PHONE = "919894670027";

const SEATING_OPTIONS = [
  { value: "udumalpet-ac", label: "Udumalpet Branch — AC Dining", phone: "919894670027" },
  { value: "udumalpet-main", label: "Udumalpet Branch — Main Hall", phone: "919894670027" },
  { value: "palani-ac", label: "Palani Branch — AC Dining", phone: "919095010027" },
  { value: "palani-main", label: "Palani Branch — Traditional Hall", phone: "919095010027" },
  { value: "catering", label: "Events & Outdoor Catering Inquiry", phone: "919894670027" },
];

const labelOf = (options: { value: string; label: string }[], value: string) =>
  options.find((o) => o.value === value)?.label ?? value;

const ALL_SLOTS = SLOT_GROUPS.flatMap((g) => g.options);

function formatDate(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Reservation() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [guests, setGuests] = useState("2");
  const [date, setDate] = useState(() => isoDate(new Date()));
  const [slot, setSlot] = useState("11:30");
  const [seating, setSeating] = useState("udumalpet-ac");
  const [requests, setRequests] = useState("");
  const [booked, setBooked] = useState(false);

  const setDatePill = (pill: string) => {
    const now = new Date();
    if (pill === "tomorrow") now.setDate(now.getDate() + 1);
    if (pill === "weekend") now.setDate(now.getDate() + ((7 - now.getDay()) % 7));
    setDate(isoDate(now));
  };

  /**
   * Nothing is booked server-side: the form composes the enquiry and hands it
   * to WhatsApp, so the guest sends it from their own account and keeps the
   * thread with the branch that will confirm the table.
   */
  const handleReservation = (e: FormEvent) => {
    e.preventDefault();

    const branch = SEATING_OPTIONS.find((o) => o.value === seating);
    const lines = [
      "Vanakkam! I'd like to reserve a table.",
      "",
      `*Name:* ${name.trim()}`,
      `*Mobile:* +91 ${mobile.trim()}`,
      `*Guests:* ${labelOf(GUEST_OPTIONS, guests)}`,
      `*Date:* ${formatDate(date)}`,
      `*Time:* ${labelOf(ALL_SLOTS, slot)}`,
      `*Seating:* ${branch?.label ?? seating}`,
    ];
    if (requests.trim()) lines.push(`*Special requests:* ${requests.trim()}`);
    lines.push("", "Please confirm availability. Nandri!");

    const url = `https://wa.me/${branch?.phone ?? DEFAULT_PHONE}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setBooked(true);
  };

  return (
<section className="w-full py-space-4xl bg-surface-container-low relative" id="reservation-section">
<div className="max-w-container-max mx-auto px-gutter-desktop">

<div className="bg-surface rounded-2xl shadow-2xl overflow-hidden">

<div className="bg-primary text-on-primary p-space-xl md:p-space-2xl text-center space-y-space-xs relative overflow-hidden">
<div className="absolute inset-0 opacity-10 flex items-center justify-around pointer-events-none">
<span className="material-symbols-outlined text-[120px]">temple_hindu</span>
<span className="material-symbols-outlined text-[120px]">outdoor_grill</span>
<span className="material-symbols-outlined text-[120px]">local_cafe</span>
</div>
<span className="font-label-md text-label-md text-secondary-fixed uppercase tracking-widest font-semibold block">The Annavasal Hotel Welcomes You</span>
<h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl font-bold">
            Reserve Your Virundhu Table
          </h2>
<p className="font-body-md text-body-md text-primary-fixed max-w-xl mx-auto">Book an authentic dining experience across our Udumalpet or Palani branches. Immediate WhatsApp confirmation via +91 98946 70027 or +91 90950 10027.</p>
</div>

<form className="p-space-xl md:p-space-2xl space-y-space-xl" id="booking-form" onSubmit={handleReservation}>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">

<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface uppercase font-semibold">Guest Full Name *</label>
<div className="relative">
<input className={fieldClass} placeholder="e.g. Sundaramurthy Pillai" required type="text" value={name} onChange={(e) => setName(e.target.value)} />
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline text-[18px]">person</span>
</div>
</div>

<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface uppercase font-semibold">Mobile Number (WhatsApp) *</label>
<div className="flex">
<span className="inline-flex h-12 shrink-0 items-center px-3 bg-surface-container text-on-surface text-body-md rounded-l border border-r-0 border-outline-variant font-medium">+91</span>
<input className={`${fieldClass} rounded-l-none`} pattern="[0-9]{10}" placeholder="98401 23456" required type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} />
</div>
</div>

<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface uppercase font-semibold">Number of Guests *</label>
<select className={fieldClass} required value={guests} onChange={(e) => setGuests(e.target.value)}>
{GUEST_OPTIONS.map((o) => (<option key={o.value} value={o.value}>{o.label}</option>))}
</select>
</div>

<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface uppercase font-semibold">Dining Date *</label>
<input className={fieldClass} required type="date" value={date} onChange={(e) => setDate(e.target.value)} />
<div className="flex flex-wrap gap-2 pt-0.5">
<button className="date-pill px-2.5 py-1 text-label-sm font-label-sm rounded bg-surface-container text-on-surface hover:bg-secondary-container transition-colors" onClick={() => setDatePill("today")} type="button">Today</button>
<button className="date-pill px-2.5 py-1 text-label-sm font-label-sm rounded bg-surface-container text-on-surface hover:bg-secondary-container transition-colors" onClick={() => setDatePill("tomorrow")} type="button">Tomorrow</button>
<button className="date-pill px-2.5 py-1 text-label-sm font-label-sm rounded bg-surface-container text-on-surface hover:bg-secondary-container transition-colors" onClick={() => setDatePill("weekend")} type="button">This Sunday</button>
</div>
</div>

<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface uppercase font-semibold">Seating Time Slot *</label>
<select className={fieldClass} required value={slot} onChange={(e) => setSlot(e.target.value)}>
{SLOT_GROUPS.map((g) => (
<optgroup key={g.label} label={g.label}>
{g.options.map((o) => (<option key={o.value} value={o.value}>{o.label}</option>))}
</optgroup>
))}
</select>
</div>

<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface uppercase font-semibold">Seating Experience *</label>
<select className={fieldClass} required value={seating} onChange={(e) => setSeating(e.target.value)}>
{SEATING_OPTIONS.map((o) => (<option key={o.value} value={o.value}>{o.label}</option>))}
</select>
</div>
</div>

<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface uppercase font-semibold">Special Dietary or Ceremonial Requests</label>
<input className={fieldClass} placeholder="e.g., Pre-book 4 Raja Virundhu Elai feasts, celebrating parents' 50th anniversary, low spice for kids" type="text" value={requests} onChange={(e) => setRequests(e.target.value)} />
</div>

<div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md border-t border-outline-variant/30">
<div className="flex items-center gap-2 text-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-tertiary text-[20px]">check_circle</span>
<span className="">No deposit required. Your booking opens in WhatsApp — just hit send.</span>
</div>
<button className="w-full sm:w-auto px-space-2xl py-space-md bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider rounded shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2" type="submit">
<span className="">Send on WhatsApp</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>

{booked && (<div className="p-space-md rounded bg-tertiary/15 text-tertiary font-body-md text-center">
            🎉 <strong>Vanakkam!</strong> WhatsApp is open with your reservation details — press send and our concierge will confirm your table shortly. If it didn't open, allow pop-ups and try again.
          </div>)}
</form>
</div>
</div>
</section>
  );
}
