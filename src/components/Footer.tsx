"use client";

import {
  Building2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071936] text-white">
      {/* MAIN FOOTER */}
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-14 sm:px-6 lg:pb-12">
        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-5">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="grid size-10 place-items-center rounded-xl bg-white/10 text-[#d6a94f]">
                <Building2 size={19} />
              </div>

              <p className="text-xl font-black tracking-[-0.035em] sm:text-2xl">
                Home
                <span className="text-[#c89b3c]">
                  Link
                </span>
              </p>
            </div>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
              A modern real estate website design for property
              agencies, sales teams, rentals and property
              management businesses.
            </p>

            <div className="mt-5 inline-flex rounded-full border border-[#c89b3c]/20 bg-[#c89b3c]/10 px-3 py-1.5">
              <span className="text-[9px] font-black uppercase tracking-[0.14em] text-[#d6a94f]">
                Sample Website
              </span>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.15em] text-white">
              Quick Links
            </h4>

            <nav className="mt-5 space-y-3 text-sm text-white/65">
              <a
                href="#"
                className="block transition hover:text-[#d6a94f]"
              >
                Home
              </a>

              <a
                href="#properties"
                className="block transition hover:text-[#d6a94f]"
              >
                Properties
              </a>

              <a
                href="#about"
                className="block transition hover:text-[#d6a94f]"
              >
                About
              </a>

              <a
                href="#agents"
                className="block transition hover:text-[#d6a94f]"
              >
                Agent Profiles
              </a>

              <a
                href="#contact"
                className="block transition hover:text-[#d6a94f]"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.15em] text-white">
              Services
            </h4>

            <div className="mt-5 space-y-3 text-sm text-white/65">
              <p>Buy Property</p>
              <p>Rent Property</p>
              <p>Sell Property</p>
              <p>Property Management</p>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.15em] text-white">
              Contact
            </h4>

            <div className="mt-5 space-y-4 text-sm text-white/65">
              <div className="flex items-start gap-3">
                <Phone
                  size={15}
                  className="mt-0.5 shrink-0 text-[#d6a94f]"
                />

                <span>
                  Sample phone number
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail
                  size={15}
                  className="mt-0.5 shrink-0 text-[#d6a94f]"
                />

                <span className="break-all">
                  hello@example.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={15}
                  className="mt-0.5 shrink-0 text-[#d6a94f]"
                />

                <span>
                  Sydney, NSW
                </span>
              </div>
            </div>

            <p className="mt-4 max-w-[220px] text-[10px] leading-4 text-white/35">
              Sample contact details shown for design preview.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 pb-8 pt-5 text-xs text-white/45 sm:px-6 sm:pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-white/55">
              © 2026 HomeLink.
            </p>

            <p className="mt-1.5 text-[9px] leading-4 text-white/30">
              Demo website content for design preview only.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="transition hover:text-[#d6a94f]">
              Privacy Policy
            </span>

            <span className="transition hover:text-[#d6a94f]">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}