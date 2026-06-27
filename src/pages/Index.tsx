import { useEffect, useRef } from "react";
import bgAsset from "@/assets/ujjawal-bg.jpg.asset.json";

const ACCENT = "#FF1D00";
const BG = "#F7F7F5";

const portfolioColors = ["#1A1A1A", "#FF1D00", "#E0E0E0", "#2D2D2D", "#2D2D2D", "#E0E0E0", "#FF1D00", "#1A1A1A"];
const newsItems = [
  { color: "#D4D4D4", title: "AI Assistants Enter..." },
  { color: "#FF1D00", title: "AI Now Generates Full..." },
  { color: "#1A1A1A", title: "Creative AI Adoption..." },
];

const Index = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    const move = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
    };
    window.addEventListener("mousemove", move);
    document.body.style.cursor = "none";
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <div className="cursor-none min-h-screen" style={{ background: BG, color: "#0A0A0A", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 w-6 h-6 rounded-full bg-white z-[100]"
        style={{ mixBlendMode: "difference" }}
      />

      {/* HERO */}
      <section className="relative w-full h-screen overflow-hidden" style={{ background: "#D9D9D4" }}>
        {/* Top nav */}
        <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 bg-white/40 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/60">
          {["Welcome", "Genesis", "Portfolio", "Blog", "Press"].map((item) => (
            <a key={item} href="#" className="px-3 py-1.5 text-[11px] text-neutral-700 hover:text-black rounded-full transition-colors">
              {item}
            </a>
          ))}
          <a href="#contact" className="ml-1 px-3 py-1.5 text-[11px] bg-black text-white rounded-full hover:bg-neutral-800 transition-colors">
            Get Started
          </a>
        </nav>

        {/* Headline top-left */}
        <div className="absolute top-28 md:top-32 left-6 md:left-16 z-10 max-w-xl">
          <h1
            className="font-light text-white leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
          >
            Every project<br />
            begins at zero. I build<br />
            exactly what matters—<br />
            nothing more.
          </h1>
        </div>

        {/* Silhouette centered */}
        <img
          src={bgAsset.url}
          alt="Portrait"
          className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[90%] object-contain pointer-events-none z-[2]"
        />

        {/* Giant background word */}
        <h2
          className="absolute left-1/2 -translate-x-1/2 bottom-[8%] font-black select-none whitespace-nowrap pointer-events-none z-[1]"
          style={{
            fontSize: "clamp(120px, 22vw, 320px)",
            color: "#FFFFFF",
            letterSpacing: "-0.04em",
            lineHeight: 1,
            opacity: 0.95,
          }}
        >
          UJJAWAL
        </h2>

        {/* Bio chat card bottom-right */}
        <div
          className="absolute bottom-8 right-6 md:right-12 z-20 flex items-center gap-3 bg-white rounded-2xl p-2.5 pr-4"
          style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.15)" }}
        >
          <div
            className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center"
            style={{ background: ACCENT }}
          >
            <span className="block w-5 h-5 bg-white/90 rounded-sm" />
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-medium text-neutral-900 leading-tight">Design in</span>
            <span className="text-[13px] font-medium text-neutral-900 leading-tight">evolution</span>
          </div>
          <div className="flex items-center gap-1 ml-2">
            <button className="w-7 h-7 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 hover:bg-neutral-100 transition-colors" aria-label="Previous">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center hover:bg-neutral-800 transition-colors" aria-label="Next">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 md:px-16 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4 space-y-8 text-sm">
          <div>
            <p className="text-neutral-500 uppercase tracking-wider text-xs mb-2">Industries:</p>
            <p>Fashion · Beauty · Tech · Lifestyle</p>
          </div>
          <div>
            <p className="text-neutral-500 uppercase tracking-wider text-xs mb-2">Campaigns for:</p>
            <p>Web · Social · OOH · Paid ads</p>
          </div>
        </div>
        <div className="md:col-span-8 space-y-10">
          <div className="flex items-center gap-2 text-sm uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full" style={{ background: ACCENT }} />
            <span>About</span>
          </div>
          <p className="text-2xl md:text-4xl leading-snug font-light">
            From bold visual stories and cinematic promo loops to scroll-stopping content — I turn brand ideas into visual experiences using creativity and intentional direction.
          </p>
          <div className="flex items-end gap-6 pt-6">
            <span className="font-black leading-none" style={{ fontSize: "clamp(64px, 9vw, 120px)" }}>78+</span>
            <p className="text-sm text-neutral-600 max-w-xs pb-4">
              Brands have received striking visuals and promotional assets that convert.
            </p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="px-6 md:px-16 py-20 md:py-28">
        <div className="flex items-center gap-2 text-sm uppercase tracking-wider mb-10">
          <span className="w-2 h-2 rounded-full" style={{ background: ACCENT }} />
          <span>Selected Work</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {portfolioColors.map((c, i) => (
            <div
              key={i}
              className="w-full rounded-lg transition-transform duration-300 hover:scale-[1.02]"
              style={{ background: c, aspectRatio: "4 / 5" }}
            />
          ))}
        </div>
        <div className="flex justify-end mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-3 pl-5 pr-2 py-2 rounded-full bg-black text-white text-sm hover:bg-neutral-800 transition-colors"
          >
            See all work
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center text-white"
              style={{ background: ACCENT }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="9 7 17 7 17 15" />
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* NEWS */}
      <section className="px-6 md:px-16 py-20 md:py-28">
        <div className="flex items-center gap-2 text-sm uppercase tracking-wider mb-10">
          <span className="w-2 h-2 rounded-full" style={{ background: ACCENT }} />
          <span>Updates</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {newsItems.map((n, i) => (
            <article key={i} className="space-y-4">
              <div className="w-full rounded-lg" style={{ background: n.color, aspectRatio: "4 / 3" }} />
              <h3 className="text-base font-medium">{n.title}</h3>
              <p className="text-xs flex items-center gap-2" style={{ color: ACCENT }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                Nov 26, 2025
              </p>
            </article>
          ))}
        </div>
      </section>

      <footer className="px-6 md:px-16 py-10 text-xs text-neutral-500 flex justify-between">
        <span>© 2026</span>
        <span>All rights reserved</span>
      </footer>
    </div>
  );
};

export default Index;
