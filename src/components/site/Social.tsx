import { useState, type FormEvent } from "react";

/** Same WhatsApp line as the table reservations. */
const CATERING_PHONE = "919894670027";

const EVENT_OPTIONS = [
  { value: "wedding", label: "Traditional Wedding (100 - 1500 Pax)" },
  { value: "housewarming", label: "Gruhapravesam / Housewarming" },
  { value: "corporate", label: "Corporate Heritage Feast" },
];

export default function Social() {
  const [cateringName, setCateringName] = useState("");
  const [cateringMobile, setCateringMobile] = useState("");
  const [cateringEvent, setCateringEvent] = useState("wedding");
  const [cateringSent, setCateringSent] = useState(false);

  /**
   * Same pattern as the table reservation: compose the enquiry and hand it to
   * WhatsApp so the guest sends it from their own account.
   */
  const handleCateringInquiry = (e: FormEvent) => {
    e.preventDefault();

    const event = EVENT_OPTIONS.find((o) => o.value === cateringEvent);
    const message = [
      "Vanakkam! I'd like to request the catering dossier for a Virundhu banquet.",
      "",
      `*Contact Name:* ${cateringName.trim()}`,
      `*Mobile:* ${cateringMobile.trim()}`,
      `*Event:* ${event?.label ?? cateringEvent}`,
      "",
      "Please share the menu and pricing details. Nandri!",
    ].join("\n");

    window.open(
      `https://wa.me/${CATERING_PHONE}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setCateringSent(true);
  };
  return (
<section id="social-section" className="w-full py-space-3xl bg-surface-container">
<div className="max-w-container-max mx-auto px-gutter-desktop space-y-space-xl">

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-space-sm items-stretch">
<div className="bg-surface-container-low p-space-xl rounded-xl shadow-sm space-y-space-md flex flex-col justify-between md:row-span-2">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="px-2.5 py-1 bg-primary text-on-primary text-label-sm font-label-sm rounded uppercase tracking-wider font-semibold">FLAGSHIP BRANCH</span>
<span className="text-secondary text-label-md font-label-md flex items-center gap-1 font-semibold">
<span className="w-2 h-2 rounded-full bg-tertiary"></span> Seating Open
</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold">Udumalpet Branch</h3>
{/* Both branch addresses reserve the same height so the hours block below
    them starts at the same point in each card, despite different lengths. */}
<p className="font-body-md text-body-md text-on-surface md:min-h-[4.5rem]">6A, Nehru Street, near Suguna Regional Office, Udumalaipettai, Tamil Nadu 642126</p>
<div className="space-y-1 font-body-sm text-body-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">schedule</span>
<span className="">Morning Tiffin: 7:00 AM – 11:00 AM</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">lunch_dining</span>
<span className="">Virundhu Banana Leaf Meals: 12:00 PM – 4:00 PM</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">dinner_dining</span>
<span className="">Evening Tiffin & Dinner: 5:00 PM – 10:30 PM</span>
</div>
<div className="flex items-center gap-2 pt-1 font-medium text-primary">
<span className="material-symbols-outlined text-[18px]">call</span>
<a className="hover:underline" href="tel:+919894670027">+91 98946 70027</a>
</div>
</div>
</div>
{/* Map + button are bottom-anchored with `mt-auto` so both branch cards line
    up, whatever height the address and hours above them happen to take. */}
<div className="mt-auto space-y-space-md pt-space-md">
<div className="w-full h-44 rounded-lg overflow-hidden shadow-inner" data-location="6A Nehru Street, Udumalaipettai, Tamil Nadu">
<iframe
  className="w-full h-full border-0"
  title="Map of Sri Annavaasal — Udumalpet Branch"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps?q=Sri+Annavaasal%2C+Nehru+Street%2C+Udumalaipettai%2C+Tamil+Nadu+642126&z=17&output=embed"
></iframe>
</div>
<a className="w-full py-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase tracking-wider rounded text-center block transition-colors" href="https://www.google.com/maps/search/?api=1&query=The+Annavasal+Hotel+6A+Nehru+Street+Udumalaipettai+642126" target="_blank">
  Get Directions on Google Maps
</a>
</div>
</div>
<div className="bg-surface-container-low p-space-xl rounded-xl shadow-sm space-y-space-md flex flex-col justify-between md:row-span-2">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="px-2.5 py-1 bg-secondary text-on-secondary text-label-sm font-label-sm rounded uppercase tracking-wider font-semibold">PALANI BRANCH</span>
<span className="text-secondary text-label-md font-label-md flex items-center gap-1 font-semibold">
<span className="w-2 h-2 rounded-full bg-tertiary"></span> Seating Open
</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary font-bold">Palani Branch</h3>
<p className="font-body-md text-body-md text-on-surface md:min-h-[4.5rem]">Railway Feeder Rd, Anna Nagar, Palani, Tamil Nadu<br />624601</p>
<div className="space-y-1 font-body-sm text-body-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">schedule</span>
<span className="">Morning Tiffin: 7:00 AM – 11:00 AM</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">lunch_dining</span>
<span className="">Virundhu Banana Leaf Meals: 12:00 PM – 4:00 PM</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">dinner_dining</span>
<span className="">Evening Tiffin & Dinner: 5:00 PM – 10:30 PM</span>
</div>
<div className="flex items-center gap-2 pt-1 font-medium text-primary">
<span className="material-symbols-outlined text-[18px]">call</span>
<a className="hover:underline" href="tel:+919095010027">+91 90950 10027</a>
</div>
</div>
</div>
<div className="mt-auto space-y-space-md pt-space-md">
<div className="w-full h-44 rounded-lg overflow-hidden shadow-inner" data-location="Railway Feeder Rd, Anna Nagar, Palani, Tamil Nadu">
<iframe
  className="w-full h-full border-0"
  title="Map of Sri Annavasal Restaurant — Palani Branch"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps?q=Sri+Annavasal+Restaurant%2C+Railway+Feeder+Rd%2C+Anna+Nagar%2C+Palani%2C+Tamil+Nadu+624601&z=17&output=embed"
></iframe>
</div>
<a className="w-full py-2.5 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase tracking-wider rounded text-center block transition-colors" href="https://www.google.com/maps/search/?api=1&query=The+Annavasal+Hotel+Railway+Feeder+Rd+Palani+624601" target="_blank">
  Get Directions on Google Maps
</a>
</div>
</div>
<div className="group relative h-64 md:h-full md:min-h-64 overflow-hidden rounded shadow-sm">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Vibrant outdoor Tamil wedding banquet hall lined with long banquet tables draped in banana leaves, decorated with fragrant yellow and orange marigold garlands and smiling servers in traditional dhotis" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcINCDzngWkHJKl8XQnSriLZGNdAjsm5XFf1SIXRXGPMCDTZbA_3WU-iClgWr5GCWluwehe95fds04c1lVHtgVsM6DTFmtH7sNspAzE0oDsmV-N6LceEj9uRIsWUEykFieUGgLmxNr6CrI9IlngHFPmhRp2UCauzLe5uTNcy-Yc6UpH-y9kZulHjffsvmkDEKHur3glXiJJQEf53-Uerog6YLPs_2g4XfyBm3D3oo_ZsRpMcP9tM0a" />
<div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-on-primary">
<span className="font-label-md text-label-md uppercase tracking-wider font-semibold">#VirundhuCatering</span>
</div>
</div>
<div className="group relative h-64 md:h-full md:min-h-64 overflow-hidden rounded shadow-sm">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Ornate bronze Kuthuvilakku oil lamp glowing brightly with multiple cotton wicks at sunset inside an open heritage Chettinad courtyard surrounded by intricate white rice flour kolam patterns" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI-RRDD7R_Jo8LYqGJREPOACmWwCBbKmcyQqbQSzTQj8oGaGIrb0tqk09EZy6_i9OO3DLUq3RbAxr_KaW1vV7muWHxQNsBU5YndIHtB5GWaNEKZ28UY3fo0JVWAldtU22IzkHn7FVVb3ijMCXe550ZCUWcjEv_pp-XufwROvrVG7SieANOweRlIlq4G2Rmw2EIbECclGJQdDhuy2-ESpDUhCIk6mfz1cSromOLAKIOJ6a3sQQw3Gxi" />
<div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-on-primary">
<span className="font-label-md text-label-md uppercase tracking-wider font-semibold">#TwilightCourtyard</span>
</div>
</div><div className="sm:col-span-2 md:col-start-3 md:row-start-2 bg-primary text-on-primary p-space-lg rounded-xl shadow-md flex flex-col justify-between space-y-space-md"><div className="space-y-space-sm"><div className="flex items-center gap-2 text-secondary-fixed"><span className="material-symbols-outlined">diversity_3</span><span className="font-label-md text-label-md uppercase tracking-wider font-bold">Virundhu Banquets</span></div><h3 className="font-headline-md text-headline-md font-bold">Weddings & Feasts</h3><p className="font-body-sm text-body-sm text-primary-fixed leading-relaxed">Bring the grand Periya Veedu dining tradition to your special day. Full-scale banana-leaf catering supervised by seasoned *samayal ashirwadhams*.</p><form className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs pt-space-xs" onSubmit={handleCateringInquiry}><input className="bg-surface-container-lowest text-on-surface text-body-sm px-space-md py-2 rounded focus:outline-none placeholder:text-outline" placeholder="Contact Name" required type="text" value={cateringName} onChange={(e) => setCateringName(e.target.value)} /><input className="bg-surface-container-lowest text-on-surface text-body-sm px-space-md py-2 rounded focus:outline-none placeholder:text-outline" placeholder="Mobile Number" required type="tel" value={cateringMobile} onChange={(e) => setCateringMobile(e.target.value)} /><select className="bg-surface-container-lowest text-on-surface text-body-sm px-space-md py-2 rounded focus:outline-none" value={cateringEvent} onChange={(e) => setCateringEvent(e.target.value)}>{EVENT_OPTIONS.map((o) => (<option key={o.value} value={o.value}>{o.label}</option>))}</select><button className="col-span-1 sm:col-span-3 py-2.5 bg-secondary hover:bg-secondary-fixed text-on-secondary hover:text-on-secondary-fixed font-label-md text-label-md uppercase tracking-wider rounded font-bold transition-colors shadow-md" type="submit">Request on WhatsApp</button></form>{cateringSent && (<div className="text-label-sm font-label-sm text-secondary-fixed pt-1">✓ WhatsApp is open with your enquiry — press send and our wedding liaison will respond shortly.</div>)}</div><div className="pt-space-sm border-t border-outline-variant/30 text-body-sm text-primary-fixed flex items-center justify-between"><span className="">Direct Wedding Desk: <a className="font-semibold text-secondary-fixed underline" href="tel:+919444028341">+91 94440 28341</a></span><span className="material-symbols-outlined text-secondary-fixed text-[20px]">verified</span></div></div>
</div>

<div className="bg-surface p-space-lg rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md text-center md:text-left"><div className="flex items-center gap-space-md"><span className="material-symbols-outlined text-secondary text-[36px]">photo_camera_front</span><div><h4 className="font-headline-sm text-headline-sm text-primary font-bold">Tag @theannavasalhotel with #AnnavasalDining</h4><p className="font-body-sm text-body-sm text-on-surface-variant">Follow our culinary journey across Udumalpet & Palani branches on Instagram & Facebook!</p></div></div><div className="flex flex-wrap gap-2"><a className="px-space-lg py-space-xs bg-secondary hover:bg-secondary-container text-on-secondary hover:text-on-secondary-container font-label-md text-label-md uppercase rounded transition-colors shadow-sm" href="https://www.instagram.com/theannavasalhotel/" target="_blank">Instagram</a><a className="px-space-lg py-space-xs bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase rounded transition-colors shadow-sm" href="https://annavasalhotel.blogspot.com/" target="_blank">Read Blog</a></div></div>
</div>
</section>
  );
}
