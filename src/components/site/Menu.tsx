import { useState } from "react";

const recipeOrigins: Record<string, { title: string; desc: string }> = {
  dosa: {
    title: "Mylapore Ney Dosa Provenance",
    desc: "Originated in the temple kitchen lanes of 19th-century Kapaleeshwarar Mylapore. The secret lies in a 14-hour batter fermentation in porous soapstone vessels, crisp-seared on thick hand-cast iron griddles with churned unpasteurized country butter.",
  },
  pepper: {
    title: "Chettinad Anjappar Pepper Roast Provenance",
    desc: "Chettiar seafaring merchants brought high-altitude Tellicherry peppercorns and Indonesian star anise to Karaikudi. Unlike commercial curries, no tomatoes are used\u2014only crushed baby shallots, kalpasi stone flower, and country sesame oil.",
  },
  kari: {
    title: "Madurai Simmakkal Kari Dosa Provenance",
    desc: "Pioneered in the vibrant night markets surrounding Meenakshi Amman Temple to sustain night-shift handloom weavers. Crafted with triple thermal layers to preserve succulent tenderness of spiced minced meat.",
  },
  feast: {
    title: "The Sacred Architecture of Elai Saapaadu",
    desc: "In accordance with ancient Tamil culinary science, salt and pickles rest on the leaf's narrow tip (left), vegetables in the upper center, and paruppu ghee in the broad right basin. Digestion unfolds harmoniously through paruppu, sambar, rasam, and concluding curd.",
  },
  kaapi: {
    title: "Kumbakonam Degree Filter Kaapi Ritual",
    desc: "Named 'Degree' after the lactometer reading ensuring unadulterated high-fat river basin cow milk. The brew uses 85% high-grown Chikmagalur Peaberry with 15% Jamnagar chicory for deep, non-bitter caramel notes.",
  },
  halwa: {
    title: "Tirunelveli Halwa & Paal Paniyaram Provenance",
    desc: "The mineral-rich waters of the holy Thamirabarani river give Tirunelveli wheat halwa its peerless elastic gloss. Paal Paniyaram represents the gracious sweet closure of any traditional Chettinad wedding eve.",
  },
};

export default function Menu() {
  const [filter, setFilter] = useState("all");
  const [origin, setOrigin] = useState<string | null>(null);
  const shown = (category: string) => filter === "all" || filter === category;
  return (
<section className="w-full py-space-4xl bg-surface-container" id="menu-showcase">
<div className="max-w-container-max mx-auto px-gutter-desktop space-y-space-2xl">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div className="space-y-space-xs max-w-xl">
<span className="font-label-lg text-label-lg text-secondary uppercase tracking-widest font-semibold">Bespoke Gastronomy</span>
<h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary font-bold">
            Curated Signature Creations
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Each creation is an heirloom piece, prepared strictly per traditional recipes without artificial colors or preservatives.
          </p>
</div>

<div className="flex flex-wrap gap-2 p-1.5 bg-surface rounded-lg shadow-sm">
<button type="button" key="all" className={`menu-filter-btn px-4 py-2 rounded text-label-md font-label-md uppercase transition-all ${filter === "all" ? "bg-primary text-on-primary shadow-sm" : "text-on-surface hover:bg-surface-container-high"}`} onClick={() => setFilter("all")}>All Specialties</button>
<button type="button" key="tiffin" className={`menu-filter-btn px-4 py-2 rounded text-label-md font-label-md uppercase transition-all ${filter === "tiffin" ? "bg-primary text-on-primary shadow-sm" : "text-on-surface hover:bg-surface-container-high"}`} onClick={() => setFilter("tiffin")}>Breakfast Tiffin</button>
<button type="button" key="feast" className={`menu-filter-btn px-4 py-2 rounded text-label-md font-label-md uppercase transition-all ${filter === "feast" ? "bg-primary text-on-primary shadow-sm" : "text-on-surface hover:bg-surface-container-high"}`} onClick={() => setFilter("feast")}>Elai Saapaadu</button>
<button type="button" key="roast" className={`menu-filter-btn px-4 py-2 rounded text-label-md font-label-md uppercase transition-all ${filter === "roast" ? "bg-primary text-on-primary shadow-sm" : "text-on-surface hover:bg-surface-container-high"}`} onClick={() => setFilter("roast")}>Gravies & Roasts</button>
<button type="button" key="kaapi" className={`menu-filter-btn px-4 py-2 rounded text-label-md font-label-md uppercase transition-all ${filter === "kaapi" ? "bg-primary text-on-primary shadow-sm" : "text-on-surface hover:bg-surface-container-high"}`} onClick={() => setFilter("kaapi")}>Kaapi & Sweets</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="dishes-grid">

<div className={`bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex-col justify-between ${shown("tiffin") ? "flex" : "hidden"}`}>
<div>
<div className="relative h-56 overflow-hidden">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-alt="Towering crispy golden cone Mylapore Ney Ghee Roast Dosa served on banana leaf with brass katoris of coconut chutney, tomato chutney, mint chutney, and steaming piping hot drumstick sambar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHifZMmbWDSbXTtGnmnrSN0CyqWAOd2CCC2W585YBGl8yMDxcyAq9viBrmJaZb3CzBN65UuaMKFCCU_oYzVxkb953UDIJQ--fT4Nk8J8-EOe_ZJdTx4zIjOv7bpFYDlPkXPCOBuSg69StpkfvspK1yAlSa9yo5zrgjeSkF1huL3oaRBN8UUuXBkqIebtLXjNh9ksHiPi0jHwcz9SfkuAf2MVJROzLtKguEQatVhGIqNdDIH53lS0ul" />
<div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 via-black/10 to-transparent"></div>
<div className="absolute top-3 left-3 flex gap-1.5">
<span className="px-2.5 py-1 bg-tertiary/95 text-on-tertiary rounded-full shadow-sm text-label-sm font-label-sm font-semibold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span> Veg
                </span>
<span className="px-2.5 py-1 bg-secondary-container/95 text-on-secondary-container rounded-full shadow-sm text-label-sm font-label-sm font-bold flex items-center gap-1">
                  👑 Signature
                </span>
</div>
<div className="absolute bottom-3 right-3 z-10 bg-surface px-3 py-1 rounded-full shadow-sm text-primary font-headline-sm font-bold text-headline-sm">
                ₹180
              </div>
</div>
<div className="p-space-lg space-y-space-xs">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Ney Dosa (Mylapore Ghee Roast)</h3>
<span className="text-label-md font-label-md text-secondary" title="Mild Spice">🌶️</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Slow-fermented rice and urad dal batter roasted to a translucent amber crisp in pure A2 cow ghee. Served alongside four stone-ground chutneys.
              </p>
</div>
</div>
<div className="px-space-lg pb-space-lg pt-space-xs flex items-center justify-between border-t border-outline-variant/20">
<button className="text-label-sm font-label-sm uppercase text-secondary hover:text-primary font-semibold flex items-center gap-1" onClick={() => setOrigin("dosa")}>
<span className="material-symbols-outlined text-[16px]">history_edu</span> Origins
            </button>
<a className="px-space-md py-1.5 bg-primary hover:bg-primary-container text-on-primary rounded text-label-sm font-label-sm uppercase transition-colors" href="#reservation-section">
              Order at Table
            </a>
</div>
</div>

<div className={`bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex-col justify-between ${shown("roast") ? "flex" : "hidden"}`}>
<div>
<div className="relative h-56 overflow-hidden">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-alt="Chettinad Anjappar black pepper chicken roast garnished with fried curry leaves, whole toasted peppercorns, and caramelized baby shallots in a traditional heavy cast-iron kadai" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQdm0B8DYQlH1S_te9T-SdoCmDHDB6eLxC7M9QuZ_sYmN8VH2_k-ZettM45ZYEd9NUXbZMUTVC7v-_Jck-MVAk6591JB2GtWvQe6ArRpME-O3uhT82jVi1RjOtHfmXfmEqGEPpqQANbQxk407BsQ3khUDAFukEvjuqxDfdghRDYRJYrbaB7MkvK30f1gZlGKGEYhIMJ6U3mO4OQBzT9Ju6mnB7sLS_XEIIoY6mxLmxs_R4PZts0Fyg" />
<div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 via-black/10 to-transparent"></div>
<div className="absolute top-3 left-3 flex gap-1.5">
<span className="px-2.5 py-1 bg-primary/95 text-on-primary rounded-full shadow-sm text-label-sm font-label-sm font-semibold flex items-center gap-1">
                  🍗 Non-Veg
                </span>
<span className="px-2 py-1 bg-primary-container text-on-primary-container rounded text-label-sm font-label-sm font-bold flex items-center gap-1">
                  👑 Chef's Pride
                </span>
</div>
<div className="absolute bottom-3 right-3 z-10 bg-surface px-3 py-1 rounded-full shadow-sm text-primary font-headline-sm font-bold text-headline-sm">
                ₹380
              </div>
</div>
<div className="p-space-lg space-y-space-xs">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Chettinad Pepper Roast</h3>
<span className="text-label-md font-label-md text-primary" title="High Spice">🌶️🌶️🌶️</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Tender morsels slow-braised in whole Tellicherry black pepper, hand-peeled shallots, garlic cloves, and sun-dried kalpasi stone flower.
              </p>
</div>
</div>
<div className="px-space-lg pb-space-lg pt-space-xs flex items-center justify-between border-t border-outline-variant/20">
<button className="text-label-sm font-label-sm uppercase text-secondary hover:text-primary font-semibold flex items-center gap-1" onClick={() => setOrigin("pepper")}>
<span className="material-symbols-outlined text-[16px]">history_edu</span> Origins
            </button>
<a className="px-space-md py-1.5 bg-primary hover:bg-primary-container text-on-primary rounded text-label-sm font-label-sm uppercase transition-colors" href="#reservation-section">
              Order at Table
            </a>
</div>
</div>

<div className={`bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex-col justify-between ${shown("roast") ? "flex" : "hidden"}`}>
<div>
<div className="relative h-56 overflow-hidden">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-alt="Legendary Madurai Kari Dosa showing triple thick layers of fermented batter, seasoned beaten country egg, and spicy shredded minced lamb masala topped with finely chopped cilantro on hot tawa" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGyKZ3CNvY-vmG7GAKaGe1-d6p_-vlxf_ZmYaral4LqD5msKJvPdbquer0r4CroIA7wkG3wC56pncFjv-hSDiCrvR0-59uPoE7H24c4eCHJgLx9sF5Oi9s1CQQFiWMEQMJNGVmBz3Z0c2O9HI6eh-v_VMbvLirJB7RNAdqKVuJPygXrb9JsJpLKn5fbb8dIF6K6LrvVytv3AszMnfSh6YL9dLIgX0o7PE8DW-xBikxSR6WG9ItpE5X" />
<div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 via-black/10 to-transparent"></div>
<div className="absolute top-3 left-3 flex gap-1.5">
<span className="px-2.5 py-1 bg-primary/95 text-on-primary rounded-full shadow-sm text-label-sm font-label-sm font-semibold flex items-center gap-1">
                  🍗 Non-Veg
                </span>
</div>
<div className="absolute bottom-3 right-3 z-10 bg-surface px-3 py-1 rounded-full shadow-sm text-primary font-headline-sm font-bold text-headline-sm">
                ₹320
              </div>
</div>
<div className="p-space-lg space-y-space-xs">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Madurai Kari Dosa</h3>
<span className="text-label-md font-label-md text-primary" title="Medium High Spice">🌶️🌶️</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                A legendary Pandyan street indulgence. Base layer of uthappam batter, followed by seasoned country egg fluff, crowned with minced lamb masala.
              </p>
</div>
</div>
<div className="px-space-lg pb-space-lg pt-space-xs flex items-center justify-between border-t border-outline-variant/20">
<button className="text-label-sm font-label-sm uppercase text-secondary hover:text-primary font-semibold flex items-center gap-1" onClick={() => setOrigin("kari")}>
<span className="material-symbols-outlined text-[16px]">history_edu</span> Origins
            </button>
<a className="px-space-md py-1.5 bg-primary hover:bg-primary-container text-on-primary rounded text-label-sm font-label-sm uppercase transition-colors" href="#reservation-section">
              Order at Table
            </a>
</div>
</div>

<div className={`bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex-col justify-between ${shown("feast") ? "flex" : "hidden"}`}>
<div>
<div className="relative h-56 overflow-hidden">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-alt="Lavish Raja Virundhu Banana Leaf Feast with 18 distinct authentic south Indian bowls including steaming paruppu ghee rice, pepper rasam, mor kuzhambu, cabbage kootu, potato roast, crispy appalam, and sweet payasam" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxsetiyt7kWn2c_9EiUFMwzqxwDMFVYb4hZtwAbTT4hDAQkaY5amP4Ty-WGfrFY_I7y5OoQFF_dthslT-JYzbiZvwU21iOz90ilvS2XCuMqx0MKNLEcPBp__puxdZ2vqO8GfNXbPcVWOawskDhkpDWV6_KPxcFTMk1otRKDHUO95h9mQprXve-8hKbOl_8IUNXNziyrzXb6ymlAtdR0cxanyIa0zqKFY0zdfGELNHXxW5_9qWuDcW5" />
<div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 via-black/10 to-transparent"></div>
<div className="absolute top-3 left-3 flex gap-1.5">
<span className="px-2.5 py-1 bg-tertiary/95 text-on-tertiary rounded-full shadow-sm text-label-sm font-label-sm font-semibold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span> Veg
                </span>
<span className="px-2.5 py-1 bg-secondary-container/95 text-on-secondary-container rounded-full shadow-sm text-label-sm font-label-sm font-bold flex items-center gap-1">
                  👑 Grand Virundhu
                </span>
</div>
<div className="absolute bottom-3 right-3 z-10 bg-surface px-3 py-1 rounded-full shadow-sm text-primary font-headline-sm font-bold text-headline-sm">
                ₹450
              </div>
</div>
<div className="p-space-lg space-y-space-xs">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Raja Virundhu (Full Elai Saapaadu)</h3>
<span className="text-label-md font-label-md text-secondary" title="Balanced Course">🌶️🌶️</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                18 sequential courses served with ceremonial decorum: fresh paruppu with hot ghee, seasonal vatha kuzhambu, heirloom pepper rasam, payasam, and appalam.
              </p>
</div>
</div>
<div className="px-space-lg pb-space-lg pt-space-xs flex items-center justify-between border-t border-outline-variant/20">
<button className="text-label-sm font-label-sm uppercase text-secondary hover:text-primary font-semibold flex items-center gap-1" onClick={() => setOrigin("feast")}>
<span className="material-symbols-outlined text-[16px]">history_edu</span> Origins
            </button>
<a className="px-space-md py-1.5 bg-primary hover:bg-primary-container text-on-primary rounded text-label-sm font-label-sm uppercase transition-colors" href="#reservation-section">
              Reserve Feast
            </a>
</div>
</div>

<div className={`bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex-col justify-between ${shown("kaapi") ? "flex" : "hidden"}`}>
<div>
<div className="relative h-56 overflow-hidden">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-alt="Piping hot frothy Kumbakonam degree filter coffee poured from high elevation into traditional shiny brass dabarah tumbler set, creating thick creamy golden crema bubbles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsRaAyEROSe5DbLdBlI_aTx1ZRiOPpFjJYC0pqih7OjRh8id7igKla2oIm2piXXmyt_KOTb_weS2QEo5YV6ulEqgpWQV_MCahtNt8dZ5n3mAwb8jrm5gWfAyi8LJTYcEoiIujOG-_e8Ijt0A1BdQTXAjZ7slLFJCmJ_Ib-3uATEWcmZgCv5tBefRN7NepX9pg1edUagw_evB8uH0lQAUIS7wN3vbGwc77_qaotFgE13WlP4AlMmxyj" />
<div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 via-black/10 to-transparent"></div>
<div className="absolute top-3 left-3 flex gap-1.5">
<span className="px-2.5 py-1 bg-tertiary/95 text-on-tertiary rounded-full shadow-sm text-label-sm font-label-sm font-semibold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span> Veg
                </span>
<span className="px-2.5 py-1 bg-secondary-container/95 text-on-secondary-container rounded-full shadow-sm text-label-sm font-label-sm font-bold flex items-center gap-1">
                  Heirloom Brew
                </span>
</div>
<div className="absolute bottom-3 right-3 z-10 bg-surface px-3 py-1 rounded-full shadow-sm text-primary font-headline-sm font-bold text-headline-sm">
                ₹80
              </div>
</div>
<div className="p-space-lg space-y-space-xs">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Kumbakonam Degree Filter Kaapi</h3>
<span className="text-label-md font-label-md text-secondary" title="Pure Sweet Aroma">☕</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Slow-dripped first decoction using dark roasted Peaberry and Plantation A beans blended with 15% chicory, frothed in whole organic farm milk.
              </p>
</div>
</div>
<div className="px-space-lg pb-space-lg pt-space-xs flex items-center justify-between border-t border-outline-variant/20">
<button className="text-label-sm font-label-sm uppercase text-secondary hover:text-primary font-semibold flex items-center gap-1" onClick={() => setOrigin("kaapi")}>
<span className="material-symbols-outlined text-[16px]">history_edu</span> Origins
            </button>
<a className="px-space-md py-1.5 bg-primary hover:bg-primary-container text-on-primary rounded text-label-sm font-label-sm uppercase transition-colors" href="#reservation-section">
              Order at Table
            </a>
</div>
</div>

<div className={`bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex-col justify-between ${shown("kaapi") ? "flex" : "hidden"}`}>
<div>
<div className="relative h-56 overflow-hidden">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-alt="Traditional Tirunelveli Ghee Halwa shimmering in rich golden brown syrup accompanied by delicate steamed Paal Paniyaram soaked in freshly extracted sweetened cardamom coconut milk in an antique bronze dessert bowl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ4W9jqDMNrTpWAMXyU79DuLhP6eUPxTPtRWkSOpwjRGj78vU8ShAh59_umlcNALnyt21zCij-HRt9Y0TcIgRN-OCQLgpacoC923YLaHxstH6oKPtlvKT8gy63DBrvMogiLSO7rQ4N3RSWjl8fcet7px-Mr4MG0XYA0WSltgCUOWu0LwGS42Y2pLnTCXvrK7CPnLKMq5st3lpQf-6wWBsSc9Jk1bDvcBGUoIgq39eg8Qwxz7Rqo5Ut" />
<div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/45 via-black/10 to-transparent"></div>
<div className="absolute top-3 left-3 flex gap-1.5">
<span className="px-2.5 py-1 bg-tertiary/95 text-on-tertiary rounded-full shadow-sm text-label-sm font-label-sm font-semibold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-tertiary-fixed"></span> Veg
                </span>
</div>
<div className="absolute bottom-3 right-3 z-10 bg-surface px-3 py-1 rounded-full shadow-sm text-primary font-headline-sm font-bold text-headline-sm">
                ₹160
              </div>
</div>
<div className="p-space-lg space-y-space-xs">
<div className="flex items-center justify-between">
<h3 className="font-headline-sm text-headline-sm text-primary font-bold">Tirunelveli Halwa & Paal Paniyaram</h3>
<span className="text-label-md font-label-md text-secondary">🍯</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Melt-in-mouth whole wheat milk halwa churned with pure cow ghee alongside delicate crispy rice spheres steeped in sweet cardamom coconut nectar.
              </p>
</div>
</div>
<div className="px-space-lg pb-space-lg pt-space-xs flex items-center justify-between border-t border-outline-variant/20">
<button className="text-label-sm font-label-sm uppercase text-secondary hover:text-primary font-semibold flex items-center gap-1" onClick={() => setOrigin("halwa")}>
<span className="material-symbols-outlined text-[16px]">history_edu</span> Origins
            </button>
<a className="px-space-md py-1.5 bg-primary hover:bg-primary-container text-on-primary rounded text-label-sm font-label-sm uppercase transition-colors" href="#reservation-section">
              Order at Table
            </a>
</div>
</div>
</div>

{origin && (
<div className="bg-surface p-space-lg rounded-xl shadow-xl space-y-space-sm border-l-4 border-secondary">
<div className="flex items-start justify-between gap-space-md">
<h4 className="font-headline-sm text-headline-sm text-primary font-bold">{recipeOrigins[origin]?.title}</h4>
<button type="button" aria-label="Close" className="text-on-surface-variant hover:text-primary shrink-0" onClick={() => setOrigin(null)}>
<span className="material-symbols-outlined">close</span>
</button>
</div>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{recipeOrigins[origin]?.desc}</p>
</div>
)}
</div>
</section>
  );
}
