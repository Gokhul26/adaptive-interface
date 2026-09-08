import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "Menu", href: "#menu-showcase" },
  { label: "Reviews", href: "#reviews-section" },
  { label: "Community", href: "#social-section" },
  { label: "Blog", href: "https://annavasalhotel.blogspot.com/" },
  { label: "Book a Table", href: "#reservation-section" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      id="top"
      className="fixed top-0 right-0 left-0 z-50 bg-surface/95 shadow-[0_4px_20px_rgba(39,24,16,0.06)] backdrop-blur-md"
    >
      <div className="bg-primary py-space-2xs text-on-primary">
        <div className="mx-auto grid max-w-container-max grid-cols-[minmax(0,1fr)_auto] items-center gap-space-sm px-gutter-desktop text-body-sm">
          <div className="flex min-w-0 items-center gap-space-lg">
            <span className="flex min-w-0 items-center gap-space-2xs text-secondary-fixed">
              <span className="material-symbols-outlined shrink-0 text-[16px]">schedule</span>
              <span className="truncate">Open Daily: 7:00 AM – 10:30 PM | Udumalpet & Palani</span>
            </span>
            <span className="hidden text-outline-variant opacity-40 md:inline-block">|</span>
            <a
              className="hidden items-center gap-space-2xs text-on-primary transition-colors hover:text-secondary-fixed md:flex"
              href="tel:+919894670027"
            >
              <span className="material-symbols-outlined shrink-0 text-[16px]">call</span>
              <span className="whitespace-nowrap">+91 98946 70027 / +91 90950 10027</span>
            </a>
          </div>
          <div className="flex shrink-0 items-center gap-space-md">
            <span className="hidden text-label-sm uppercase tracking-wider text-secondary-fixed lg:inline">
              Traditional South Indian Dining
            </span>
            <a
              className="text-label-sm font-semibold uppercase text-secondary-fixed underline decoration-secondary-container decoration-2 underline-offset-4 transition-colors hover:text-on-primary"
              href="https://wa.me/+919894670027"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Booking
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-20 max-w-container-max items-center justify-between gap-space-md px-gutter-desktop">
        <a className="flex min-w-0 items-center gap-space-sm" href="#top">
          <img
            alt="The Annavasal Hotel logo"
            className="h-8 w-auto shrink-0 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAndu0Ck6MEG32JaEAxowwmKc_uzZw1EC7R-_eRIA81zy35k7RgqLhcYpIKWWV-zbVpKn2jH6atlYXDG8EnI68YTS2jo4Dex-LrzF1M7BSxFdzA8-adVQYR8lT0Ylo1qde4tPEIxaljo8nPTL1DeosAinsdcA3hFDXBw6O-7v-6SZKyxI--YwJeIwuJnG1-c2Rc1JVMNF_PuPxXoL6fD12x7WiUxYsw5-kQ9tBuACBinGhTmkCg4tBg"
          />
          <span className="flex min-w-0 flex-col">
            <span className="truncate font-headline-sm text-headline-sm font-bold leading-tight text-primary">
              The Annavasal Hotel
            </span>
            <span className="truncate font-label-sm text-label-sm uppercase tracking-widest text-secondary">
              Udumalpet & Palani
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-space-lg xl:flex xl:min-w-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="relative py-space-xs font-label-lg text-label-lg uppercase text-on-surface-variant transition-colors hover:text-primary"
              href={link.href}
              {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-space-sm">
          <a
            className="hidden items-center justify-center rounded bg-primary px-space-lg py-space-xs font-label-lg text-label-lg uppercase text-on-primary shadow-[0_2px_8px_rgba(100,24,0,0.25)] transition-all duration-300 hover:bg-primary-container sm:inline-flex"
            href="#reservation-section"
          >
            Reserve a Table
          </a>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded bg-surface-container-high text-primary xl:hidden"
          >
            <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-outline-variant/50 bg-surface px-gutter-desktop py-space-md xl:hidden">
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="block border-b border-outline-variant/30 py-space-sm font-label-lg text-label-lg uppercase text-on-surface-variant transition-colors hover:text-primary"
                  href={link.href}
                  onClick={() => setOpen(false)}
                  {...(link.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="mt-space-md inline-flex w-full items-center justify-center rounded bg-primary px-space-lg py-space-sm font-label-lg text-label-lg uppercase text-on-primary sm:hidden"
            href="#reservation-section"
            onClick={() => setOpen(false)}
          >
            Reserve a Table
          </a>
        </nav>
      )}
    </header>
  );
}
