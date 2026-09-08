import { useState, type FormEvent } from "react";

function isoDate(d: Date) {
  return d.toISOString().split("T")[0];
}

export default function Reservation() {
  const [date, setDate] = useState(() => isoDate(new Date()));
  const [booked, setBooked] = useState(false);

  const setDatePill = (pill: string) => {
    const now = new Date();
    if (pill === "tomorrow") now.setDate(now.getDate() + 1);
    if (pill === "weekend") now.setDate(now.getDate() + ((7 - now.getDay()) % 7));
    setDate(isoDate(now));
  };

  const handleReservation = (e: FormEvent) => {
    e.preventDefault();
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
<input className="w-full bg-surface-container-lowest text-on-surface text-body-md px-space-md py-space-sm rounded border border-outline-variant focus:outline-none focus:border-primary transition-all" placeholder="e.g. Sundaramurthy Pillai" required type="text" />
<span className="material-symbols-outlined absolute right-3 top-3 text-outline text-[18px]">person</span>
</div>
</div>

<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface uppercase font-semibold">Mobile Number (WhatsApp) *</label>
<div className="flex">
<span className="inline-flex items-center px-3 bg-surface-container text-on-surface text-body-md rounded-l border border-r-0 border-outline-variant font-medium">+91</span>
<input className="w-full bg-surface-container-lowest text-on-surface text-body-md px-space-md py-space-sm rounded-r border border-outline-variant focus:outline-none focus:border-primary transition-all" pattern="[0-9]{10}" placeholder="98401 23456" required type="tel" />
</div>
</div>

<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface uppercase font-semibold">Number of Guests *</label>
<select className="w-full bg-surface-container-lowest text-on-surface text-body-md px-space-md py-space-sm rounded border border-outline-variant focus:outline-none focus:border-primary transition-all" required>
<option value="2">2 Guests (Couple / Pair)</option>
<option  value="4">4 Guests (Family Table)</option>
<option value="6">6 Guests (Courtyard Group)</option>
<option value="8">8 Guests (Large Banquet)</option>
<option value="12">10+ Guests (Private Hall Feast)</option>
</select>
</div>

<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface uppercase font-semibold">Dining Date *</label>
<div className="flex gap-2 mb-1.5">
<button className="date-pill px-2.5 py-1 text-label-sm font-label-sm rounded bg-surface-container text-on-surface hover:bg-secondary-container transition-colors" onClick={() => setDatePill("today")} type="button">Today</button>
<button className="date-pill px-2.5 py-1 text-label-sm font-label-sm rounded bg-surface-container text-on-surface hover:bg-secondary-container transition-colors" onClick={() => setDatePill("tomorrow")} type="button">Tomorrow</button>
<button className="date-pill px-2.5 py-1 text-label-sm font-label-sm rounded bg-surface-container text-on-surface hover:bg-secondary-container transition-colors" onClick={() => setDatePill("weekend")} type="button">This Sunday</button>
</div>
<input className="w-full bg-surface-container-lowest text-on-surface text-body-md px-space-md py-space-sm rounded border border-outline-variant focus:outline-none focus:border-primary transition-all" required type="date" value={date} onChange={(e) => setDate(e.target.value)} />
</div>

<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface uppercase font-semibold">Seating Time Slot *</label>
<select className="w-full bg-surface-container-lowest text-on-surface text-body-md px-space-md py-space-sm rounded border border-outline-variant focus:outline-none focus:border-primary transition-all" required>
<optgroup label="Royal Lunch Virundhu">
<option value="11:30">11:30 AM (First Batch)</option>
<option  value="12:30">12:30 PM (Peak Virundhu)</option>
<option value="13:30">01:30 PM (Afternoon Saapaadu)</option>
<option value="14:30">02:30 PM (Late Lunch)</option>
</optgroup>
<optgroup label="Twilight Dinner & Tiffin">
<option value="19:00">07:00 PM (Early Dinner)</option>
<option value="20:00">08:00 PM (Courtyard Evening)</option>
<option value="21:00">09:00 PM (Late Night Tiffin)</option>
<option value="22:00">10:00 PM (Final Seating)</option>
</optgroup>
</select>
</div>

<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface uppercase font-semibold">Seating Experience *</label>
<select className="w-full bg-surface-container-lowest text-on-surface text-body-md px-space-md py-space-sm rounded border border-outline-variant focus:outline-none focus:border-primary transition-all" required><option value="udumalpet-ac">Udumalpet Branch — AC Dining</option><option value="udumalpet-main">Udumalpet Branch — Main Hall</option><option value="palani-ac">Palani Branch — AC Dining</option><option value="palani-main">Palani Branch — Traditional Hall</option><option value="catering">Events & Outdoor Catering Inquiry</option></select>
</div>
</div>

<div className="space-y-1.5">
<label className="font-label-md text-label-md text-on-surface uppercase font-semibold">Special Dietary or Ceremonial Requests</label>
<input className="w-full bg-surface-container-lowest text-on-surface text-body-md px-space-md py-space-sm rounded border border-outline-variant focus:outline-none focus:border-primary transition-all" placeholder="e.g., Pre-book 4 Raja Virundhu Elai feasts, celebrating parents' 50th anniversary, low spice for kids" type="text" />
</div>

<div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md border-t border-outline-variant/30">
<div className="flex items-center gap-2 text-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-tertiary text-[20px]">check_circle</span>
<span className="">No deposit required. Instant confirmation delivered via WhatsApp.</span>
</div>
<button className="w-full sm:w-auto px-space-2xl py-space-md bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider rounded shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2" type="submit">
<span className="">Confirm Reservation</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
</div>

{booked && (<div className="p-space-md rounded bg-tertiary/15 text-tertiary font-body-md text-center">
            🎉 <strong>Vanakkam!</strong> Your table reservation has been received. Our concierge is preparing your welcome brass tumbler. Confirmation details sent to WhatsApp!
          </div>
</form>
</div>
</div>
</section>
  );
}
