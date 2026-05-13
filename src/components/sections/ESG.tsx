import { Leaf, Recycle, Globe2 } from "lucide-react";

const pillars = [
  { icon: Leaf, title: "Green Construction Practices" },
  { icon: Recycle, title: "Sustainable Materials" },
  { icon: Globe2, title: "Community Development" },
];

export function ESG() {
  return (
    <section
      id="vision"
      className="relative min-h-[80vh] py-[140px] px-6 lg:px-12 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1448375240586-882707db888b?w=2000&q=80)",
      }}
    >
      <div className="absolute inset-0 bg-[var(--charcoal)]/75" />
      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        <span className="eyebrow">Our Vision</span>
        <h2 className="font-display text-white text-[36px] lg:text-[52px] mt-6 max-w-[820px] mx-auto leading-[1.15]">
          Building Responsibly for a Greener Assam
        </h2>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="reveal border border-white/25 p-10 text-center backdrop-blur-sm bg-white/[0.03] transition-all hover:border-[var(--gold)]"
              >
                <div className="text-[var(--gold)] inline-flex">
                  <Icon size={36} strokeWidth={1.2} />
                </div>
                <div className="mt-8 font-display text-white text-[22px]">{p.title}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <a
            href="#contact"
            className="btn-gold !text-white"
            style={{ background: "var(--gold)", borderColor: "var(--gold)" }}
          >
            Explore Our Vision <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
