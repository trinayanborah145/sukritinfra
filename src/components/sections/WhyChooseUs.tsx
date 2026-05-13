import { Building2, BadgeCheck, Clock, Handshake } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Architectural Excellence",
    desc: "Every space designed with intention, balancing form and function with timeless elegance.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "A track record of honouring commitments — your home, ready when promised.",
  },
  {
    icon: Handshake,
    title: "Customer First",
    desc: "Relationships built on care, with every detail tuned to the families who will live here.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Dealings",
    desc: "Clear pricing, clear paperwork, clear conscience — the way real estate should be.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative bg-[var(--charcoal)] py-[120px] px-6 lg:px-12 overflow-hidden grain">
      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="text-center reveal">
          <span className="eyebrow">Our Promise</span>
          <h2 className="font-display text-white text-[36px] lg:text-[56px] mt-6 max-w-[720px] mx-auto leading-[1.15]">
            Built on Integrity. Delivered with Excellence.
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="reveal group relative border border-[var(--gold)]/30 p-10 transition-all duration-500 hover:border-[var(--gold)] hover:bg-white/[0.02]"
                style={{ transitionDelay: `${i * 0.1}s`, boxShadow: "0 0 0 rgba(184,150,62,0)" }}
              >
                <div className="text-[var(--gold)] mb-8">
                  <Icon size={32} strokeWidth={1.2} />
                </div>
                <h3 className="font-display text-white text-[24px] lg:text-[26px] leading-tight">
                  {f.title}
                </h3>
                <p className="mt-4 text-white/60 text-[14px] leading-[1.7]">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
