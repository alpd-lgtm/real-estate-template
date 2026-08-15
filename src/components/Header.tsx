"use client";

import {
  CalendarCheck,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Buy", href: "#properties" },
  { label: "Rent", href: "#properties" },
  { label: "Sell", href: "#contact" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="relative z-50 border-b border-[#eadfca] bg-[#fbf8f2]/95 backdrop-blur-xl lg:sticky lg:top-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 lg:py-3">
        {/* LOGO */}
        <a
          href="#"
          onClick={closeMenu}
          className="flex min-w-0 items-center"
        >
          <span className="text-[22px] font-black tracking-[-0.045em] text-[#071936] sm:text-2xl">
            Home
            <span className="text-[#c89b3c]">
              Link
            </span>
          </span>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-7 text-sm font-bold text-[#071936] lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative transition hover:text-[#c89b3c]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* DESKTOP CTA */}
        <a
          href="#contact"
          className="hidden min-h-11 items-center justify-center gap-2 rounded-xl bg-[#071936] px-5 text-sm font-bold text-white shadow-[0_10px_25px_rgba(7,25,54,0.12)] transition hover:-translate-y-0.5 hover:bg-[#10284f] lg:inline-flex"
        >
          <CalendarCheck size={16} />
          Book Inspection
        </a>

        {/* MOBILE / TABLET MENU BUTTON */}
        <button
          type="button"
          onClick={() =>
            setOpen((value) => !value)
          }
          aria-label={
            open ? "Close menu" : "Open menu"
          }
          aria-expanded={open}
          className="grid size-10 shrink-0 place-items-center rounded-xl border border-[#eadfca] bg-white text-[#071936] shadow-[0_4px_14px_rgba(7,25,54,0.06)] transition hover:border-[#c89b3c]/40 hover:bg-[#f4ead7] active:scale-95 lg:hidden"
        >
          {open ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </div>

      {/* MOBILE / TABLET MENU */}
      {open && (
        <div className="border-t border-[#eadfca] bg-[#fbf8f2] px-4 py-4 shadow-xl sm:px-6 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-bold text-[#071936] transition hover:bg-white hover:text-[#c89b3c]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-3 flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#071936] px-5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(7,25,54,0.12)] transition hover:bg-[#10284f]"
          >
            <CalendarCheck size={16} />
            Book an Inspection
          </a>
        </div>
      )}
    </header>
  );
}