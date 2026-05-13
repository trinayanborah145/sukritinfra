export function Marquee() {
  const items = ["Quality", "Trust", "Excellence", "Innovation", "Assam", "Sukrit"];
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="relative bg-[var(--charcoal)] py-8 overflow-hidden border-y border-white/5">
      <div className="flex marquee-track whitespace-nowrap">
        {repeated.map((t, i) => (
          <span
            key={i}
            className="text-[var(--gold)] font-display text-[28px] lg:text-[34px] uppercase mx-10"
            style={{ letterSpacing: "0.18em" }}
          >
            {t} <span className="mx-8 opacity-60">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
