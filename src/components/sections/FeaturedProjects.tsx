import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    name: "Sukrit Heights",
    location: "Guwahati",
    price: "INR 85 L onwards",
    type: "3 & 4 BHK Residences",
    possession: "December 2026",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=2000&q=80",
  },
  {
    name: "Sukrit Greens",
    location: "Jorhat",
    price: "INR 55 L onwards",
    type: "2 & 3 BHK Residences",
    possession: "March 2027",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2000&q=80",
  },
  {
    name: "Sukrit Elite",
    location: "Dibrugarh",
    price: "Price on Request",
    type: "4 BHK Luxury Residences",
    possession: "2028",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=80",
  },
];

export function FeaturedProjects() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % projects.length);
  const prev = () => setI((p) => (p - 1 + projects.length) % projects.length);

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="projects" className="bg-[var(--ivory)] pt-[120px]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-16 reveal">
        <span className="eyebrow eyebrow-line">Our Projects</span>
        <h2 className="font-display text-[36px] lg:text-[56px] mt-6 max-w-[800px] leading-[1.1]">
          Landmark Spaces, Lasting Impressions.
        </h2>
      </div>

      <div className="relative w-full h-[80vh] min-h-[600px] overflow-hidden reveal">
        {projects.map((p, idx) => (
          <div
            key={p.name}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: idx === i ? 1 : 0, pointerEvents: idx === i ? "auto" : "none" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${p.image})`,
                transform: idx === i ? "scale(1.05)" : "scale(1)",
                transition: "transform 8s ease",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
              }}
            />

            <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 lg:px-12 flex items-end pb-20 lg:pb-28">
              <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 lg:p-12 max-w-[520px]">
                <div className="text-[var(--gold)] text-[11px] uppercase tracking-[0.3em] mb-4">
                  {p.location}
                </div>
                <h3 className="font-display text-white text-[32px] lg:text-[44px] leading-tight">
                  {p.name}
                </h3>
                <div className="mt-6 grid grid-cols-2 gap-y-3 gap-x-6 text-white/80 text-[13px]">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-1">Price</div>
                    {p.price}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-1">Possession</div>
                    {p.possession}
                  </div>
                  <div className="col-span-2">
                    <div className="text-[10px] uppercase tracking-[0.25em] text-white/50 mb-1">Configuration</div>
                    {p.type}
                  </div>
                </div>
                <a href="#contact" className="story-link mt-8 inline-flex">
                  Know More <span>→</span>
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 z-20 flex gap-3">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-[var(--gold)] hover:border-[var(--gold)] transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border border-white/40 text-white flex items-center justify-center hover:bg-[var(--gold)] hover:border-[var(--gold)] transition-all"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Slide indicator */}
        <div className="absolute top-8 right-8 lg:top-12 lg:right-12 z-20 text-white/80 font-display text-[20px]">
          <span className="text-[var(--gold)]">{String(i + 1).padStart(2, "0")}</span>
          <span className="mx-2 opacity-50">/</span>
          <span>{String(projects.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}
