import { useState } from "react";
import { Building2, MapPin, HardHat, Search } from "lucide-react";
import { Link } from "@tanstack/react-router";

const tabs = ["Buy", "Rent", "Commercial"];

export function PropertySearch() {
  const [tab, setTab] = useState(0);
  const [budget, setBudget] = useState(50);

  return (
    <section className="py-[120px] px-6 lg:px-12 bg-[var(--ivory)]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 reveal">
          <span className="eyebrow eyebrow-line">Discover</span>
          <h2 className="font-display text-[32px] lg:text-[44px] mt-6 leading-[1.15]">
            Find the most{" "}
            <span className="italic text-[var(--gold)]">reliable</span> &{" "}
            <span className="italic text-[var(--gold)]">appreciating</span> Real Estate Properties
          </h2>
        </div>

        <div className="lg:col-span-7 reveal">
          <div className="bg-white border border-[var(--divider)] p-8 lg:p-10">
            {/* Tabs */}
            <div className="flex gap-8 border-b border-[var(--divider)]">
              {tabs.map((t, i) => (
                <button
                  key={t}
                  onClick={() => setTab(i)}
                  className={`relative pb-4 text-[12px] uppercase tracking-[0.25em] font-medium transition-colors ${
                    tab === i ? "text-[var(--text-soft)]" : "text-[var(--text-muted)]"
                  }`}
                >
                  {t}
                  {tab === i && (
                    <span className="absolute left-0 right-0 bottom-[-1px] h-[2px] bg-[var(--gold)]" />
                  )}
                </button>
              ))}
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Selector icon={<Building2 size={16} />} label="Project Type" value="Residential" />
              <Selector icon={<MapPin size={16} />} label="Location" value="Guwahati" />
              <Selector icon={<HardHat size={16} />} label="Status" value="Ready to Move" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <Selector label="Bedrooms" value="3 BHK" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)] mb-3">
                  Budget · ₹{budget} Cr
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full accent-[var(--gold)]"
                />
                <div className="flex justify-between text-[11px] text-[var(--text-muted)] mt-2">
                  <span>0</span><span>100 Cr</span>
                </div>
              </div>
            </div>

            <Link to="/projects" className="mt-10 w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--charcoal)] text-white text-[12px] uppercase tracking-[0.25em] hover:bg-[var(--gold)] transition-colors">
              <Search size={14} /> 24 Projects Found <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Selector({ icon, label, value }: { icon?: React.ReactNode; label: string; value: string }) {
  return (
    <div className="border-b border-[var(--divider)] pb-3">
      <div className="text-[10px] uppercase tracking-[0.25em] text-[var(--text-muted)] mb-2">{label}</div>
      <div className="flex items-center gap-3 text-[var(--text-soft)] text-[14px]">
        {icon && <span className="text-[var(--gold)]">{icon}</span>}
        <span>{value}</span>
        <span className="ml-auto text-[var(--text-muted)]">▾</span>
      </div>
    </div>
  );
}
