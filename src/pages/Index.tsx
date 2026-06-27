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
      <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Giant Creator text */}
        <h1
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-black select-none whitespace-nowrap pointer-events-none"
          style={{
            fontSize: "clamp(100px, 20vw, 260px)",
            color: "#E8E8E8",
            zIndex: 0,
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          Creator
        </h1>

        {/* Silhouette */}
        <img
          src={bgAsset.url}
          alt="Portrait silhouette"
          className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[85%] object-contain pointer-events-none"
          style={{ zIndex: 1 }}
        />

        {/* Small black cursor-marker dot */}
        <span
          className="absolute rounded-full"
          style={{ width: 8, height: 8, background: "#0A0A0A", left: "calc(50% - 80px)", top: "55%", zIndex: 2 }}
        />

        {/* Buttons */}
        <a
          href="#contact"
          className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 px-5 py-2 rounded-full border border-black/80 text-xs md:text-sm bg-transparent hover:bg-black hover:text-white transition-colors z-10"
        >
          Contact Me
        </a>
        <a
          href="https://in.pinterest.com/ujjawalkumardas/_created/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 px-5 py-2 rounded-full border border-black/80 text-xs md:text-sm bg-transparent hover:bg-black hover:text-white transition-colors z-10"
        >
          Portfolio
        </a>

        {/* Bio chat card */}
        <div
          className="absolute bottom-10 right-6 md:right-12 max-w-xs bg-white rounded-2xl p-4 flex gap-3 items-start z-10"
          style={{ boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}
        >
          <div className="w-10 h-10 rounded-md shrink-0" style={{ background: ACCENT }} />
          <p className="text-xs leading-relaxed text-neutral-800">
            <span className="font-medium">Hey, I'm Alex.</span> I believe great visuals don't happen by accident — they're made. And that's exactly what I do.
          </p>
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
