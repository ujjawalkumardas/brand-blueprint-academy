import bgAsset from "@/assets/firefly-me.png.asset.json";

const Index = () => {
  return (
    <div
      className="min-h-screen w-full bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${bgAsset.url})` }}
    >
      <div className="flex flex-col items-center pt-12 md:pt-16 px-4">
        <h1
          className="text-6xl md:text-8xl font-serif tracking-tight text-black"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          UJJAWAL
        </h1>
        <div className="mt-5 flex gap-5">
          <a
            href="#portfolio"
            className="px-8 py-2.5 rounded-full border border-black text-black text-base md:text-lg hover:bg-black hover:text-white transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-2.5 rounded-full border border-black text-black text-base md:text-lg hover:bg-black hover:text-white transition-colors"
          >
            Contact Here
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
