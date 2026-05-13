import { useEffect, useRef, useState } from "react";
import heroVideo from "./0511.mp4";

export function Hero() {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const onScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY * 0.4;
        bgRef.current.style.transform = `translate3d(0, ${y}px, 0)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[var(--charcoal)]">
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={heroVideo}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.72) 35%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.1) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center max-w-[1440px] mx-auto px-6 lg:px-[8%]">
        <div
          className="eyebrow eyebrow-line text-[var(--gold)] mb-6"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s ease 0.8s",
          }}
        >
          Est. 2005 · Assam, India
        </div>

        <h1 className="font-display text-white text-[44px] sm:text-[60px] lg:text-[88px] leading-[1.05] font-normal max-w-[900px]">
          <span className={`line-mask ${loaded ? "is-visible" : ""}`}>
            <span style={{ transitionDelay: "0.4s" }}>A World Where</span>
          </span>
          <span className={`line-mask ${loaded ? "is-visible" : ""}`}>
            <span style={{ transitionDelay: "0.6s" }}>Legacy Meets Vision.</span>
          </span>
        </h1>

        <p
          className="mt-8 text-[#efefef] font-light text-[16px] lg:text-[18px] max-w-[480px] leading-relaxed"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s ease 1.1s",
          }}
        >
          Crafting landmark spaces across Assam with uncompromising quality and timeless design.
        </p>

        <div
          className="mt-10"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s ease 1.3s",
          }}
        >
          <a href="#projects" className="btn-light">
            Explore Our Projects <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
