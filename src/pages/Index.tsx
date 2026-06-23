import { useEffect, useRef } from "react";
import bgAsset from "@/assets/ujjawal-bg.jpg.asset.json";

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
    <div
      className="min-h-screen w-full bg-no-repeat bg-center bg-cover relative cursor-none"
      style={{ backgroundImage: `url(${bgAsset.url})` }}
    >
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 w-6 h-6 rounded-full bg-white z-50"
        style={{ mixBlendMode: "difference" }}
      />
      <a
        href="#contact"
        className="absolute left-[10%] top-1/2 -translate-y-1/2 px-5 py-2 rounded-full border border-black text-black text-xs md:text-sm bg-transparent hover:bg-black hover:text-white transition-colors"
      >
        Contact Me
      </a>
      <a
        href="https://in.pinterest.com/ujjawalkumardas/_created/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-[10%] top-1/2 -translate-y-1/2 px-5 py-2 rounded-full border border-black text-black text-xs md:text-sm bg-transparent hover:bg-black hover:text-white transition-colors"
      >
        Portfolio
      </a>
    </div>
  );
};

export default Index;
