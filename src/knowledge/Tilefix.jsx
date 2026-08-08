import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assests/Kannan Infra Projects Logo.jpg";

import {
  Link2,
  ShieldCheck,
  Dumbbell,
  Clock,
  FlaskConical,
  Droplet,
  Wrench,
  Leaf,
  ArrowRight,
  Brush,
  Wand2,
  LayoutGrid,
  Timer,
  BadgeCheck,
  Headphones,
  Phone,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Small reusable bits                                               */
/* ------------------------------------------------------------------ */

const FeaturePill = ({ Icon, label }) => (
  <div className="flex flex-col items-center gap-3 w-28">
    <div className="w-16 h-16 rounded-full border-2 border-yellow-400 flex items-center justify-center bg-white shadow-sm">
      <Icon className="w-7 h-7 text-yellow-500" strokeWidth={1.75} />
    </div>
    <span className="text-xs font-semibold tracking-wide text-gray-800 text-center">
      {label}
    </span>
  </div>
);

const StripItem = ({ Icon, title, desc }) => (
  <div className="flex flex-col items-center text-center gap-2 px-4">
    <Icon className="w-7 h-7 text-yellow-500" strokeWidth={1.75} />
    <span className="text-xs font-bold tracking-wider text-gray-900">
      {title}
    </span>
    <p className="text-xs text-gray-600 leading-snug max-w-[9rem]">{desc}</p>
  </div>
);

const StepItem = ({ Icon, step, title, desc, isLast }) => (
  <div className="flex items-center gap-4">
    <div className="flex flex-col items-center gap-3 w-36">
      <div className="w-16 h-16 rounded-full border-2 border-yellow-400 bg-yellow-50 flex items-center justify-center">
        <Icon className="w-7 h-7 text-yellow-500" strokeWidth={1.75} />
      </div>
      <span className="text-xs font-bold tracking-wider text-gray-900">
        {step}
      </span>
      <p className="text-[11px] text-gray-600 text-center leading-snug">
        {desc}
      </p>
    </div>
    {!isLast && (
      <ArrowRight className="w-5 h-5 text-yellow-400 shrink-0 hidden md:block" />
    )}
  </div>
);

const SpecRow = ({ label, value, alt }) => (
  <div
    className={`flex justify-between px-4 py-2 text-sm ${
      alt ? "bg-yellow-50" : "bg-white"
    }`}
  >
    <span className="font-semibold text-gray-700">{label}</span>
    <span className="text-gray-600">{value}</span>
  </div>
);

const TrustItem = ({ Icon, title, desc }) => (
  <div className="flex items-start gap-3">
    <div className="w-10 h-10 rounded-full bg-white border border-yellow-300 flex items-center justify-center shrink-0">
      <Icon className="w-5 h-5 text-yellow-500" strokeWidth={1.75} />
    </div>
    <div>
      <p className="text-sm font-bold text-gray-900">{title}</p>
      <p className="text-xs text-gray-600">{desc}</p>
    </div>
  </div>
);

const FooterMark = ({ Icon, title, desc }) => (
  <div className="flex items-center gap-3">
    <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center shrink-0">
      <Icon className="w-4 h-4 text-yellow-400" strokeWidth={1.75} />
    </div>
    <div>
      <p className="text-xs font-bold text-white">{title}</p>
      <p className="text-[11px] text-white/60">{desc}</p>
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Main component                                                    */
/* ------------------------------------------------------------------ */

export default function TileFixPro() {
  const specs = [
    ["Appearance", "Grey Powder"],
    ["Base", "Cement based with polymer"],
    ["Bulk Density", "1.4 ± 0.1 g/cc"],
    ["Water Demand", "24% – 26%"],
    ["Open Time", "> 20 minutes"],
    ["Adjustability Time", "> 15 minutes"],
    ["Pot Life", "2 – 3 hours"],
    ["Compressive Strength", "> 20 N/mm²"],
    ["Packaging", "20 kg"],
  ];

  return (
    <div className="w-full min-h-screen bg-white font-sans text-gray-900">
      {/* NAVBAR */}
      <header className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="KIPIPL logo"
              className="w-9 h-9 object-contain"
            />
            <div className="leading-tight">
              <p className="font-extrabold tracking-wide text-sm text-gray-900">
                KIPIPL
              </p>
              <p className="text-[9px] text-gray-500 tracking-wide">
                KANNAN KIRPA PROJECTS CHENNAI PVT. LTD.
              </p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-700">
            <Link to="/">HOME</Link>
<Link to="/about">ABOUT US</Link>
<Link to="/readymix">READY MIX</Link>
<Link to="/kblocks">K BLOCKS</Link>
<Link to="/bluemetals">BLUE METALS</Link>
<Link to="/knowledge/blog">KNOWLEDGE</Link>
          </nav>
          <Link
            to="/contact-us"
            className="bg-yellow-400 text-white font-bold text-xs px-5 py-2.5 rounded-sm hover:bg-yellow-500 transition-colors"
          >
            CONTACT US
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6 py-14 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-black leading-tight">
              <span className="text-gray-900">TILE FIX </span>
              <span className="text-yellow-500">PRO</span>
            </h1>
            <p className="mt-3 text-lg font-semibold text-gray-800">
              Stronger Bond. Superior Finish.
              <br />
              Built to Perfection.
            </p>
            <div className="w-14 h-1 bg-yellow-400 my-4 rounded-full" />
            <p className="text-sm text-gray-600 leading-relaxed max-w-md">
              Tile Fix Pro is a premium quality, polymer modified tile
              adhesive designed for superior bonding strength, long-lasting
              performance and ease of application.
            </p>

            <div className="flex gap-6 mt-8 flex-wrap">
              <FeaturePill Icon={Link2} label="STRONG BOND" />
              <FeaturePill Icon={ShieldCheck} label="WATER RESISTANT" />
              <FeaturePill Icon={Dumbbell} label="HIGH STRENGTH" />
              <FeaturePill Icon={Clock} label="LONG LASTING" />
            </div>
          </div>

          {/* Product shot placeholder */}
          <div className="relative flex justify-center">
            <div className="relative w-64 rounded-2xl bg-white border border-gray-200 shadow-2xl p-5 text-gray-900 overflow-hidden">
              <div className="h-1.5 w-full bg-yellow-400 absolute top-0 left-0" />
              <div className="flex items-center gap-2 mb-4 mt-2">
                <div className="w-7 h-7 rounded-full bg-yellow-400 flex items-center justify-center">
                  <span className="text-white font-black text-xs">K</span>
                </div>
                <span className="font-extrabold text-xs tracking-wide text-gray-900">
                  KIPIPL
                </span>
              </div>
              <p className="text-2xl font-black leading-none text-gray-900">
                TILE FIX
              </p>
              <p className="text-3xl font-black leading-none text-yellow-500">
                PRO
              </p>
              <p className="text-[10px] font-semibold tracking-widest mt-2 text-gray-500">
                PREMIUM TILE ADHESIVE
              </p>
              <ul className="mt-5 space-y-1.5 text-[11px] font-medium text-gray-700">
                <li>◆ Strong Bond</li>
                <li>◆ Water Resistant</li>
                <li>◆ High Strength</li>
                <li>◆ Long Lasting</li>
              </ul>
              <div className="mt-8 flex justify-between items-end">
                <div className="w-10 h-10 rounded-full border-2 border-gray-200" />
                <span className="text-[11px] font-bold bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  NET WEIGHT 20 kg
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE STRIP */}
      <section className="bg-gray-50 border-y border-gray-200 py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-around gap-6 px-6">
          <StripItem
            Icon={FlaskConical}
            title="POLYMER MODIFIED"
            desc="Enhanced bonding with polymer technology"
          />
          <StripItem
            Icon={Droplet}
            title="WATER RESISTANT"
            desc="Suitable for dry & wet areas"
          />
          <StripItem
            Icon={Clock}
            title="EASY TO APPLY"
            desc="Smooth application and better workability"
          />
          <StripItem
            Icon={Link2}
            title="STRONG ADHESION"
            desc="Superior bond strength with tiles & surfaces"
          />
          <StripItem
            Icon={Leaf}
            title="DURABLE & RELIABLE"
            desc="Long-lasting performance"
          />
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <h2 className="text-2xl font-black text-gray-900">HOW TO USE</h2>
        <div className="w-12 h-1 bg-yellow-400 rounded-full mt-1 mb-10" />
        <div className="flex flex-wrap gap-6 justify-between">
          <StepItem
            Icon={Brush}
            step="STEP 1"
            desc="Ensure the surface is clean, dry and free from dust or oil."
          />
          <StepItem
            Icon={Wand2}
            step="STEP 2"
            desc="Mix Tile Fix Pro with clean water as per the recommended ratio."
          />
          <StepItem
            Icon={Wrench}
            step="STEP 3"
            desc="Apply the adhesive using a notched trowel."
          />
          <StepItem
            Icon={LayoutGrid}
            step="STEP 4"
            desc="Fix the tiles and press firmly to ensure good bonding."
          />
          <StepItem
            Icon={Timer}
            step="STEP 5"
            desc="Allow proper curing for best results."
            isLast
          />
        </div>
      </section>

      {/* SPECS + VARIANTS + TRUST */}
      <section className="max-w-7xl mx-auto px-6 pb-16 grid lg:grid-cols-3 gap-8">
        {/* Specs */}
        <div>
          <h2 className="text-xl font-black text-gray-900">
            TECHNICAL SPECIFICATIONS
          </h2>
          <div className="w-12 h-1 bg-yellow-400 rounded-full mt-1 mb-5" />
          <div className="border border-gray-200 rounded-md overflow-hidden">
            {specs.map(([label, value], i) => (
              <SpecRow key={label} label={label} value={value} alt={i % 2 === 1} />
            ))}
          </div>
        </div>

        {/* Variants */}
        <div>
          <h2 className="text-xl font-black text-gray-900">
            AVAILABLE VARIANTS
          </h2>
          <div className="w-12 h-1 bg-yellow-400 rounded-full mt-1 mb-5" />
          <div className="flex items-end gap-4 justify-center bg-gray-50 rounded-md p-6 h-[calc(100%-2.75rem)]">
            <div className="relative w-20 rounded-xl bg-white border border-gray-200 p-3 text-gray-900 text-[8px] font-bold text-center shadow-md overflow-hidden">
              <div className="h-1 w-full bg-yellow-400 absolute top-0 left-0" />
              <div className="mt-1">KIPIPL</div>
              <div className="mt-1 text-[9px] font-black">TILE FIX</div>
              <div className="text-[9px] font-black text-yellow-500">PRO</div>
              <div className="mt-1 text-[6px] text-gray-500">1 kg</div>
            </div>
            <div className="relative w-28 rounded-xl bg-white border border-gray-200 p-4 text-gray-900 text-[9px] font-bold text-center shadow-lg overflow-hidden">
              <div className="h-1.5 w-full bg-yellow-400 absolute top-0 left-0" />
              <div className="mt-1">KIPIPL</div>
              <div className="mt-1 text-xs font-black">TILE FIX</div>
              <div className="text-xs font-black text-yellow-500">PRO</div>
              <div className="mt-1 text-[7px] text-gray-500">
                PREMIUM TILE ADHESIVE
              </div>
              <div className="mt-2 text-[7px] text-gray-500">20 kg</div>
            </div>
          </div>
        </div>

        {/* Trust */}
        <div className="bg-yellow-50 rounded-md p-6 flex flex-col gap-6 justify-center">
          <TrustItem
            Icon={BadgeCheck}
            title="PREMIUM QUALITY"
            desc="Manufactured under strict quality control"
          />
          <TrustItem
            Icon={ShieldCheck}
            title="TRUSTED PERFORMANCE"
            desc="Tested for strength and durability"
          />
          <TrustItem
            Icon={Headphones}
            title="EXPERT SUPPORT"
            desc="Technical support for the perfect finish"
          />
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-white font-black text-lg leading-tight">
              STRONGER BOND. SUPERIOR FINISH.
            </p>
            <p className="text-yellow-400 font-black text-lg leading-tight">
              BUILT TO PERFECTION.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-yellow-400 text-gray-900 font-bold text-xs px-6 py-3 rounded-sm hover:bg-yellow-300 transition-colors">
              REQUEST A QUOTE
            </button>
            <div className="flex items-center gap-2 text-white text-sm font-semibold">
              <Phone className="w-4 h-4 text-yellow-400" />
              Or call us at +91 999 444 8888
            </div>
          </div>
          <div className="flex gap-6">
            <FeaturePill Icon={Link2} label="STRONG BOND" />
            <FeaturePill Icon={ShieldCheck} label="WATER RESISTANT" />
            <FeaturePill Icon={Dumbbell} label="HIGH STRENGTH" />
            <FeaturePill Icon={Clock} label="LONG LASTING" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap justify-around gap-6">
          <FooterMark
            Icon={BadgeCheck}
            title="QUALITY PRODUCTS"
            desc="You Can Trust"
          />
          <FooterMark
            Icon={Wrench}
            title="ADVANCED TECHNOLOGY"
            desc="For Better Tomorrow"
          />
          <FooterMark
            Icon={Leaf}
            title="SUSTAINABLE SOLUTIONS"
            desc="For Future Generations"
          />
          <FooterMark
            Icon={ShieldCheck}
            title="CUSTOMER SATISFACTION"
            desc="Is Our Priority"
          />
        </div>
      </footer>
    </div>
  );
}