"use client";

import { useState } from "react";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TemplateEnquiryModal from "@/components/TemplateEnquiryModal";

import {
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  Car,
  Heart,
  Home,
  Mail,
  MapPin,
  Phone,
  Ruler,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const properties = [
  {
    title: "Modern Family Home",
    status: "For Sale",
    price: "$1,380,000",
    location: "Bella Vista, NSW",
    image: "/images/property-1.jpg",
    beds: "4",
    baths: "2",
    cars: "2",
    size: "520m²",
  },
  {
    title: "Luxury Apartment",
    status: "For Rent",
    price: "$720/week",
    location: "Parramatta, NSW",
    image: "/images/property-2.jpg",
    beds: "2",
    baths: "2",
    cars: "1",
    size: "118m²",
  },
  {
    title: "Designer Villa",
    status: "For Sale",
    price: "$2,250,000",
    location: "Castle Hill, NSW",
    image: "/images/property-3.jpg",
    beds: "5",
    baths: "3",
    cars: "2",
    size: "690m²",
  },
];

const agentProfiles = [
  {
    role: "Property Consultant",
    text: "Helping buyers explore suitable homes and understand their next step.",
  },
  {
    role: "Sales Consultant",
    text: "Supporting property owners through the sales and marketing journey.",
  },
  {
    role: "Leasing Specialist",
    text: "Helping renters and landlords navigate leasing with clear communication.",
  },
  {
    role: "Property Manager",
    text: "Supporting ongoing property management and everyday communication.",
  },
];

export default function Page() {
  const [purpose, setPurpose] = useState<"Buy" | "Rent">("Buy");
  const [templateModalOpen, setTemplateModalOpen] =
    useState(false);

  return (
    <>
      <Header />

      <main className="overflow-x-hidden bg-white">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative overflow-hidden bg-[#071936]">
          {/* BACKGROUND */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-realestate.jpg"
              alt="Modern residential property"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[62%_center] sm:object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20 sm:via-white/72 sm:to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 lg:to-white" />
          </div>

          {/* HERO CONTENT */}
          <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:pb-32 lg:pt-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c89b3c]/25 bg-white/85 px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.15em] text-[#9b7226] backdrop-blur sm:text-xs">
                <Sparkles size={13} />
                Find Your Perfect Place
              </div>

              <h1 className="mt-4 max-w-2xl text-[2.25rem] font-black leading-[1.02] tracking-[-0.045em] text-[#071936] min-[380px]:text-[2.5rem] sm:mt-5 sm:text-6xl sm:leading-[0.98] lg:text-[4.65rem]">
                Find Your Dream{" "}
                <span className="text-[#c89b3c]">
                  Home
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-[14px] leading-7 text-slate-700 sm:mt-6 sm:text-lg sm:leading-8">
                Explore homes, apartments and investment properties
                with a simple search experience designed for buyers,
                renters and sellers.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row">
                <a
                  href="#properties"
                  className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-[#071936] px-6 py-3.5 text-sm font-bold text-white shadow-[0_14px_35px_rgba(7,25,54,0.18)] transition hover:-translate-y-0.5 hover:bg-[#10284f]"
                >
                  Browse Properties
                  <ArrowRight size={17} />
                </a>

                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#071936]/15 bg-white px-6 py-3.5 text-sm font-bold text-[#071936] shadow-sm transition hover:border-[#c89b3c]/40 hover:bg-[#fbf8f2]"
                >
                  List Your Property
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROPERTY SEARCH
            MOBILE = SEPARATE SECTION
            DESKTOP = OVERLAPS HERO
        ====================================================== */}
        <section className="relative bg-[#f8fafc] px-4 pb-10 pt-5 sm:px-6 sm:pb-12 lg:-mt-20 lg:bg-transparent lg:pb-10 lg:pt-0">
          <div className="relative z-20 mx-auto max-w-7xl">
            <div className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-[0_18px_55px_rgba(15,23,42,0.10)] sm:p-5 lg:shadow-[0_22px_65px_rgba(15,23,42,0.12)]">
              {/* BUY / RENT */}
              <div className="mb-4 flex w-fit rounded-xl bg-slate-100 p-1">
                <button
                  type="button"
                  onClick={() => setPurpose("Buy")}
                  className={`rounded-lg px-5 py-2.5 text-xs font-bold transition sm:text-sm ${
                    purpose === "Buy"
                      ? "bg-[#071936] text-white shadow-sm"
                      : "text-slate-600 hover:bg-white"
                  }`}
                >
                  Buy
                </button>

                <button
                  type="button"
                  onClick={() => setPurpose("Rent")}
                  className={`rounded-lg px-5 py-2.5 text-xs font-bold transition sm:text-sm ${
                    purpose === "Rent"
                      ? "bg-[#071936] text-white shadow-sm"
                      : "text-slate-600 hover:bg-white"
                  }`}
                >
                  Rent
                </button>
              </div>

              <div className="grid items-end gap-3 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_0.8fr_auto]">
                {/* LOCATION */}
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 transition focus-within:border-[#c89b3c] focus-within:ring-4 focus-within:ring-[#c89b3c]/5">
                  <label className="text-[9px] font-bold uppercase tracking-wide text-slate-400">
                    Location
                  </label>

                  <div className="mt-2 flex items-center gap-2">
                    <MapPin
                      size={16}
                      className="shrink-0 text-[#c89b3c]"
                    />

                    <input
                      type="text"
                      placeholder="Search location"
                      className="w-full bg-transparent text-sm text-[#071936] outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* PROPERTY TYPE */}
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 transition focus-within:border-[#c89b3c] focus-within:ring-4 focus-within:ring-[#c89b3c]/5">
                  <label className="text-[9px] font-bold uppercase tracking-wide text-slate-400">
                    Property Type
                  </label>

                  <div className="mt-2 flex items-center gap-2">
                    <Home
                      size={16}
                      className="shrink-0 text-[#c89b3c]"
                    />

                    <select className="w-full bg-transparent text-sm text-[#071936] outline-none">
                      <option>All Types</option>
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                    </select>
                  </div>
                </div>

                {/* PRICE */}
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 transition focus-within:border-[#c89b3c] focus-within:ring-4 focus-within:ring-[#c89b3c]/5">
                  <label className="text-[9px] font-bold uppercase tracking-wide text-slate-400">
                    Price Range
                  </label>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="font-bold text-[#c89b3c]">
                      $
                    </span>

                    <select className="w-full bg-transparent text-sm text-[#071936] outline-none">
                      {purpose === "Buy" ? (
                        <>
                          <option>Any Price</option>
                          <option>$500k - $800k</option>
                          <option>$800k - $1.2m</option>
                          <option>$1.2m+</option>
                        </>
                      ) : (
                        <>
                          <option>Any Rent</option>
                          <option>$400 - $600 / week</option>
                          <option>$600 - $900 / week</option>
                          <option>$900+ / week</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                {/* BEDROOMS */}
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 transition focus-within:border-[#c89b3c] focus-within:ring-4 focus-within:ring-[#c89b3c]/5">
                  <label className="text-[9px] font-bold uppercase tracking-wide text-slate-400">
                    Bedrooms
                  </label>

                  <div className="mt-2 flex items-center gap-2">
                    <BedDouble
                      size={16}
                      className="shrink-0 text-[#c89b3c]"
                    />

                    <select className="w-full bg-transparent text-sm text-[#071936] outline-none">
                      <option>Any</option>
                      <option>2+</option>
                      <option>3+</option>
                      <option>4+</option>
                    </select>
                  </div>
                </div>

                {/* SEARCH */}
                <a
                  href="#properties"
                  className="inline-flex h-[52px] items-center justify-center gap-2 rounded-xl bg-[#071936] px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#10284f] sm:col-span-2 lg:col-span-1"
                >
                  <Search size={17} />
                  Search Properties
                </a>
              </div>

              <p className="mt-3 text-center text-[9px] leading-4 text-slate-400 sm:text-left">
                Demo property search shown for design preview.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            BENEFIT STRIP
        ====================================================== */}
        <section className="border-b border-slate-100 bg-[#f8fafc] px-4 pb-12 pt-1 sm:px-6 sm:pb-14 lg:pt-3">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {/* ITEM 1 */}
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#fbf8f2] text-[#c89b3c]">
                  <MapPin size={19} />
                </span>

                <div>
                  <p className="text-[11px] font-black leading-5 text-[#071936] sm:text-sm">
                    Local Property Knowledge
                  </p>

                  <p className="mt-1 hidden text-[10px] leading-5 text-slate-500 sm:block">
                    Explore locations and property types that suit your needs.
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#fbf8f2] text-[#c89b3c]">
                  <Users size={19} />
                </span>

                <div>
                  <p className="text-[11px] font-black leading-5 text-[#071936] sm:text-sm">
                    Clear Communication
                  </p>

                  <p className="mt-1 hidden text-[10px] leading-5 text-slate-500 sm:block">
                    Straightforward information throughout your property journey.
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#fbf8f2] text-[#c89b3c]">
                  <Home size={19} />
                </span>

                <div>
                  <p className="text-[11px] font-black leading-5 text-[#071936] sm:text-sm">
                    Buyer & Seller Support
                  </p>

                  <p className="mt-1 hidden text-[10px] leading-5 text-slate-500 sm:block">
                    A clear enquiry path for buyers, renters and sellers.
                  </p>
                </div>
              </div>

              {/* ITEM 4 */}
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#fbf8f2] text-[#c89b3c]">
                  <Search size={19} />
                </span>

                <div>
                  <p className="text-[11px] font-black leading-5 text-[#071936] sm:text-sm">
                    Flexible Property Search
                  </p>

                  <p className="mt-1 hidden text-[10px] leading-5 text-slate-500 sm:block">
                    Search by area, price, property type and bedrooms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SAMPLE PROPERTY LISTINGS
        ====================================================== */}
        <section
          id="properties"
          className="bg-white px-4 py-14 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.17em] text-[#c89b3c] sm:text-xs">
                  Sample Property Listings
                </p>

                <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-[-0.04em] text-[#071936] sm:text-4xl lg:text-5xl">
                  Explore How Your Listings Could Look
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
                  Example properties demonstrate how listings could be
                  presented on this website design.
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#071936] transition hover:text-[#c89b3c]"
              >
                Ask About Property Listings →
              </a>
            </div>

            <div className="mt-9 grid gap-6 md:grid-cols-3">
              {properties.map((property) => (
                <article
                  key={property.title}
                  className="group overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(15,23,42,0.09)]"
                >
                  {/* IMAGE */}
                  <div className="relative h-60 overflow-hidden sm:h-64">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.035]"
                    />

                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <span
                        className={`rounded-full px-3 py-1.5 text-[9px] font-bold uppercase tracking-wide text-white ${
                          property.status === "For Rent"
                            ? "bg-emerald-600"
                            : "bg-[#071936]"
                        }`}
                      >
                        {property.status}
                      </span>

                      <span className="rounded-full border border-white/40 bg-white/90 px-3 py-1.5 text-[8px] font-black uppercase tracking-[0.12em] text-[#071936] backdrop-blur">
                        Sample Listing
                      </span>
                    </div>

                    <button
                      type="button"
                      aria-label="Save property"
                      className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-white/95 text-[#071936] shadow-sm transition hover:text-[#c89b3c]"
                    >
                      <Heart size={17} />
                    </button>
                  </div>

                  {/* DETAILS */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="text-lg font-black text-[#071936]">
                          {property.title}
                        </h3>

                        <p className="mt-2 flex items-center gap-2 text-xs text-slate-500 sm:text-sm">
                          <MapPin
                            size={14}
                            className="shrink-0 text-[#c89b3c]"
                          />
                          {property.location}
                        </p>
                      </div>

                      <p className="shrink-0 text-sm font-black text-[#b48732]">
                        {property.price}
                      </p>
                    </div>

                    <div className="mt-5 grid grid-cols-4 gap-2 border-t border-slate-100 pt-5 text-[10px] text-slate-500 sm:text-xs">
                      <p className="flex items-center gap-1">
                        <BedDouble size={14} />
                        {property.beds}
                      </p>

                      <p className="flex items-center gap-1">
                        <Bath size={14} />
                        {property.baths}
                      </p>

                      <p className="flex items-center gap-1">
                        <Car size={14} />
                        {property.cars}
                      </p>

                      <p className="flex items-center gap-1">
                        <Ruler size={14} />
                        {property.size}
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="mt-5 inline-flex text-xs font-black text-[#071936] transition hover:text-[#c89b3c]"
                    >
                      Enquire About This Property →
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-6 text-center text-[10px] leading-5 text-slate-400">
              Property images, prices and details are sample content shown for
              design preview only.
            </p>
          </div>
        </section>

        {/* =====================================================
            ABOUT
        ====================================================== */}
        <section
          id="about"
          className="bg-[#f8fafc] px-4 py-14 sm:px-6 sm:py-16"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] lg:grid-cols-[0.9fr_1.05fr_0.7fr]">
              {/* TEXT */}
              <div className="p-6 sm:p-9 lg:p-10">
                <p className="text-[10px] font-black uppercase tracking-[0.17em] text-[#c89b3c]">
                  About Us
                </p>

                <h2 className="mt-3 text-3xl font-black leading-[1.05] tracking-[-0.04em] text-[#071936] sm:text-4xl">
                  Your Property Journey, Made Clear
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  A modern real estate website can help buyers, renters and
                  sellers find what they need while presenting your agency
                  professionally.
                </p>

                <a
                  href="#contact"
                  className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#071936] px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#10284f]"
                >
                  Talk to Our Team →
                </a>
              </div>

              {/* IMAGE */}
              <div className="relative min-h-[290px] sm:min-h-[320px]">
                <Image
                  src="/images/about-realestate.jpg"
                  alt="Modern property interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>

              {/* BENEFITS */}
              <div className="bg-[#071936] p-6 text-white sm:p-8 lg:p-9">
                <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#d6a94f]">
                  Designed for Property Businesses
                </p>

                <div className="mt-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 text-[#d6a94f]">
                      <Search size={20} />
                    </span>

                    <div>
                      <p className="font-black">
                        Simple
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/60">
                        Easy-to-follow property search and enquiry flow.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 text-[#d6a94f]">
                      <ShieldCheck size={20} />
                    </span>

                    <div>
                      <p className="font-black">
                        Professional
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/60">
                        A premium visual style for listings and agency content.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 text-[#d6a94f]">
                      <Building2 size={20} />
                    </span>

                    <div>
                      <p className="font-black">
                        Flexible
                      </p>

                      <p className="mt-1 text-xs leading-5 text-white/60">
                        Suitable for sales, rentals and property management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SAMPLE AGENT PROFILES
        ====================================================== */}
        <section
          id="agents"
          className="bg-white px-4 py-14 sm:px-6 sm:py-16"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-[10px] font-black uppercase tracking-[0.17em] text-[#c89b3c] sm:text-xs">
              Sample Agent Profiles
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-[#071936] sm:text-4xl lg:text-5xl">
              Introduce Your Property Team
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Agent profiles can be customised with your real team members,
              photos, roles and contact details.
            </p>

            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
              {agentProfiles.map((agent, index) => (
                <article
                  key={agent.role}
                  className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c89b3c]/30 hover:shadow-md sm:p-6"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="grid size-11 shrink-0 place-items-center rounded-full bg-[#fbf8f2] text-[#c89b3c]">
                      <Users size={19} />
                    </div>

                    <span className="rounded-full bg-slate-50 px-2 py-1 text-[7px] font-black uppercase tracking-[0.12em] text-slate-400">
                      Sample Profile
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-black text-[#071936] sm:text-lg">
                    {agent.role}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm sm:leading-6">
                    {agent.text}
                  </p>

                  <div className="mt-5 flex gap-2">
                    <span className="grid size-9 place-items-center rounded-full border border-slate-200 text-[#071936]">
                      <Phone size={14} />
                    </span>

                    <span className="grid size-9 place-items-center rounded-full border border-slate-200 text-[#071936]">
                      <Mail size={14} />
                    </span>
                  </div>

                  <p className="mt-4 text-[8px] text-slate-400">
                    Example team profile {index + 1}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            PROPERTY CTA
        ====================================================== */}
        <section className="bg-white px-4 pb-10 pt-1 sm:px-6 sm:pb-14">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[28px] bg-[#071936] px-5 py-10 text-center text-white shadow-[0_25px_70px_rgba(7,25,54,0.18)] sm:px-10 sm:py-14">
              <p className="text-[10px] font-black uppercase tracking-[0.17em] text-[#d6a94f] sm:text-xs">
                Ready to Move?
              </p>

              <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Let’s Find the Right Property for You
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65">
                Whether buying, renting or selling, this design gives customers
                a clear way to explore their next step.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="#properties"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#c89b3c] px-7 text-sm font-bold text-[#071936] transition hover:-translate-y-0.5 hover:bg-[#d6a94f]"
                >
                  Browse Properties →
                </a>

                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-7 text-sm font-bold text-white transition hover:bg-white hover:text-[#071936]"
                >
                  Book an Inspection
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CONTACT
        ====================================================== */}
        <section
          id="contact"
          className="bg-[#f8fafc] px-4 py-14 sm:px-6 sm:py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.06)] lg:grid-cols-[0.85fr_1.15fr]">
              {/* LEFT */}
              <div className="bg-[#fbf8f2] p-6 sm:p-8 lg:p-10">
                <p className="text-[10px] font-black uppercase tracking-[0.17em] text-[#c89b3c]">
                  Get In Touch
                </p>

                <h2 className="mt-3 text-3xl font-black leading-[1.07] tracking-[-0.04em] text-[#071936] sm:text-4xl">
                  Let’s Help You Find Your Perfect Property
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
                  Customers can use this section to ask about buying, renting,
                  selling or arranging an inspection.
                </p>

                <div className="mt-7 space-y-4 text-sm text-slate-600">
                  <p className="flex items-center gap-3">
                    <Phone
                      size={16}
                      className="shrink-0 text-[#c89b3c]"
                    />
                    Sample phone number
                  </p>

                  <p className="flex items-center gap-3">
                    <Mail
                      size={16}
                      className="shrink-0 text-[#c89b3c]"
                    />
                    hello@example.com
                  </p>

                  <p className="flex items-center gap-3">
                    <MapPin
                      size={16}
                      className="shrink-0 text-[#c89b3c]"
                    />
                    Sydney, NSW
                  </p>
                </div>

                <p className="mt-5 text-[10px] leading-5 text-slate-400">
                  Sample contact details shown for design preview.
                </p>
              </div>

              {/* FORM */}
              <div className="p-5 sm:p-7 lg:p-9">
                <p className="text-[9px] font-black uppercase tracking-[0.16em] text-[#c89b3c]">
                  Demo Property Enquiry
                </p>

                <h3 className="mt-2 text-2xl font-black tracking-[-0.03em] text-[#071936]">
                  Tell us what you’re looking for
                </h3>

                <form className="mt-6 space-y-3">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Full name"
                      className="min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-[#071936] outline-none transition placeholder:text-slate-400 focus:border-[#c89b3c] focus:ring-4 focus:ring-[#c89b3c]/10"
                    />

                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-[#071936] outline-none transition placeholder:text-slate-400 focus:border-[#c89b3c] focus:ring-4 focus:ring-[#c89b3c]/10"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email address"
                    className="min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-[#071936] outline-none transition placeholder:text-slate-400 focus:border-[#c89b3c] focus:ring-4 focus:ring-[#c89b3c]/10"
                  />

                  <div className="grid gap-3 sm:grid-cols-2">
                    <select
                      defaultValue=""
                      className="min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-[#071936] outline-none transition focus:border-[#c89b3c] focus:ring-4 focus:ring-[#c89b3c]/10"
                    >
                      <option value="" disabled>
                        I’m interested in
                      </option>

                      <option>Buying</option>
                      <option>Renting</option>
                      <option>Selling</option>
                      <option>Property Management</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Preferred suburb"
                      className="min-h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm font-medium text-[#071936] outline-none transition placeholder:text-slate-400 focus:border-[#c89b3c] focus:ring-4 focus:ring-[#c89b3c]/10"
                    />
                  </div>

                  <textarea
                    rows={4}
                    placeholder="Tell us what kind of property or service you are looking for..."
                    className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium leading-6 text-[#071936] outline-none transition placeholder:text-slate-400 focus:border-[#c89b3c] focus:ring-4 focus:ring-[#c89b3c]/10"
                  />

                  <button
                    type="button"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#071936] px-6 text-sm font-bold text-white transition hover:bg-[#10284f]"
                  >
                    Send Property Enquiry
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-center text-[10px] text-slate-400">
                    Demo form shown for layout preview only.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================
          AXIS STUDIO CTA
      ====================================================== */}
      <section
        id="axis-demo-cta"
        className="bg-[#f8fafc] px-4 pb-10 pt-2 sm:px-6 sm:pb-12 sm:pt-4"
      >
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[24px] border border-[#162945] bg-[#071936] px-5 py-6 shadow-[0_18px_50px_rgba(7,25,54,0.12)] sm:rounded-[26px] sm:px-8 sm:py-7 lg:px-10">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#c89b3c] px-3 py-1 text-[8px] font-black uppercase tracking-[0.15em] text-[#071936] sm:text-[9px]">
                    Axis Studio Demo
                  </span>

                  <span className="text-[9px] font-medium text-slate-400 sm:text-[10px]">
                    Real Estate Agency Website
                  </span>
                </div>

                <h2 className="mt-4 text-[1.55rem] font-black tracking-[-0.035em] text-white sm:text-3xl">
                  Like this website design?
                </h2>

                <p className="mt-3 max-w-2xl text-xs leading-5 text-slate-300 sm:text-sm sm:leading-6">
                  We can customise this design with your agency branding,
                  listings, team profiles, service areas and contact details,
                  then help you launch it.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setTemplateModalOpen(true)}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#c89b3c] px-6 py-3.5 text-sm font-black text-[#071936] transition hover:-translate-y-0.5 hover:bg-[#d6a94f] sm:px-7"
                >
                  Start With This Design →
                </button>

                <a
                  href="https://axistudio.studio/templates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-bold text-white transition hover:border-white/25 hover:bg-white/[0.08] sm:px-7"
                >
                  View More Designs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          AXIS STUDIO ENQUIRY MODAL
      ====================================================== */}
      <TemplateEnquiryModal
        open={templateModalOpen}
        onClose={() => setTemplateModalOpen(false)}
      />

      <Footer />
    </>
  );
}