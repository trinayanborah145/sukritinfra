import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 1400);
  };

  return (
    <section id="contact" className="py-[120px] px-6 lg:px-12 bg-[var(--ivory)]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div className="reveal">
          <span className="eyebrow eyebrow-line">Get in Touch</span>
          <h2 className="font-display text-[36px] lg:text-[48px] mt-6 leading-[1.15]">
            Begin Your Journey Home.
          </h2>
          <p className="mt-8 text-[var(--text-muted)] text-[16px] leading-[1.8] max-w-[420px]">
            Visit our experience centre or write to us. Our team will respond personally within one business day.
          </p>

          <div className="mt-12 space-y-6">
            <Item icon={<MapPin size={16} />} label="Address" value="GS Road, Christian Basti, Guwahati 781005, Assam" />
            <Item icon={<Phone size={16} />} label="Phone" value="+91 361 245 8800" />
            <Item icon={<Mail size={16} />} label="Email" value="hello@sukritinfrastructure.in" />
          </div>

          <div className="mt-12 border border-[var(--divider)] aspect-[16/9] overflow-hidden">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=91.71%2C26.13%2C91.79%2C26.18&layer=mapnik"
              className="w-full h-full grayscale"
              loading="lazy"
              title="Map"
            />
          </div>
        </div>

        <form onSubmit={onSubmit} className="reveal space-y-8">
          <Field id="name" label="Full Name" />
          <Field id="phone" label="Phone Number" type="tel" />
          <Field id="email" label="Email Address" type="email" />
          <Field id="city" label="City of Interest" />
          <div className="floating-field">
            <textarea id="message" rows={3} placeholder=" " />
            <label htmlFor="message">Message</label>
          </div>

          <button
            type="submit"
            disabled={sending || sent}
            className="w-full inline-flex items-center justify-center gap-3 bg-[var(--gold)] text-white py-5 text-[12px] uppercase tracking-[0.3em] font-medium hover:bg-[#9a7d2f] transition-colors disabled:opacity-70"
          >
            {sending ? (
              <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            ) : sent ? (
              "Thank You — We'll Be In Touch"
            ) : (
              <>Send Enquiry <span>→</span></>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

function Item({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-5">
      <div className="text-[var(--gold)] mt-1">{icon}</div>
      <div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--text-muted)] mb-1">{label}</div>
        <div className="text-[var(--text-soft)] text-[15px]">{value}</div>
      </div>
    </div>
  );
}

function Field({ id, label, type = "text" }: { id: string; label: string; type?: string }) {
  return (
    <div className="floating-field">
      <input id={id} type={type} placeholder=" " />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
