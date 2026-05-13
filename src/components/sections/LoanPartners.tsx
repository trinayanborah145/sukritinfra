import { useEffect, useRef, useState } from "react";

export function LoanPartners() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="loan-partners"
      ref={sectionRef}
      className="relative py-[100px]"
      style={{ backgroundColor: "#F8F5F0" }}
    >
      <div className="max-w-[1100px] mx-auto px-6 lg:px-[8%]">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center gap-[48px]">
          {/* Left Column */}
          <div
            className="w-full md:w-[55%]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.85s ease",
            }}
          >
            <div
              className="text-[11px] uppercase font-medium mb-[14px]"
              style={{
                fontFamily: "DM Sans, sans-serif",
                letterSpacing: "0.28em",
                color: "#B8963E",
              }}
            >
              FINANCING PARTNERS
            </div>
            <h2
              className="font-normal m-0 loan-partners-heading"
              style={{
                fontFamily: "Cormorant Garamond, serif",
                color: "#1C1C1C",
                lineHeight: 1.15,
              }}
            >
              We Help You Finance <br />
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#B8963E",
                  textDecorationThickness: "1.5px",
                  textUnderlineOffset: "6px",
                }}
              >
                Your Dream Home.
              </span>
            </h2>
          </div>

          {/* Right Column */}
          <div
            className="w-full md:w-[45%]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.85s ease 0.15s",
            }}
          >
            <p
              className="text-[14px] font-normal mb-[20px]"
              style={{
                fontFamily: "DM Sans, sans-serif",
                color: "#888888",
                lineHeight: 1.7,
                margin: "0 0 20px 0",
              }}
            >
              Our trusted banking partners offer exclusive home loan assistance with competitive interest rates and simplified documentation — so you can focus on choosing your home, not the paperwork.
            </p>
            <button
              className="loan-cta-btn w-full md:w-auto"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #1C1C1C",
                color: "#1C1C1C",
                fontFamily: "DM Sans, sans-serif",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                fontWeight: 500,
                padding: "12px 26px",
                borderRadius: "0",
                transition: "all 0.35s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#1C1C1C";
                e.currentTarget.style.color = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#1C1C1C";
              }}
            >
              TALK TO OUR LOAN ADVISOR →
            </button>
          </div>
        </div>

        {/* Full Width Divider */}
        <div
          className="mt-[36px]"
          style={{
            borderTop: "1px solid #E2DDD8",
            transformOrigin: "left",
            transform: isVisible ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 0.9s ease 0.3s",
          }}
        />

        {/* Bank Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 bank-cards-container">
          {/* Card 1 */}
          <div
            className="bank-card"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s, background 0.35s ease, color 0.35s ease, border-color 0.35s ease",
            }}
          >
            <div className="card-number">01</div>
            <div className="card-bank-name">HDFC</div>
            <div className="card-bank-type">Bank</div>
            <div className="card-separator">
              <div className="card-approved">Approved Lending Partner</div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bank-card"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.55s, transform 0.7s ease 0.55s, background 0.35s ease, color 0.35s ease, border-color 0.35s ease",
            }}
          >
            <div className="card-number">02</div>
            <div className="card-bank-name">
              IDFC <span style={{ fontWeight: 300, color: "#B8963E" }}>FIRST</span>
            </div>
            <div className="card-bank-type">Home Loans</div>
            <div className="card-separator">
              <div className="card-approved">Approved Lending Partner</div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="bank-card"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s, background 0.35s ease, color 0.35s ease, border-color 0.35s ease",
            }}
          >
            <div className="card-number">03</div>
            <div className="card-bank-name">PNB</div>
            <div className="card-bank-type">Home Loans</div>
            <div className="card-separator">
              <div className="card-approved">Approved Lending Partner</div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center mx-auto mt-[28px]" style={{ maxWidth: "560px" }}>
          <p
            className="text-[11px] italic m-0"
            style={{ fontFamily: "DM Sans, sans-serif", color: "#AAAAAA" }}
          >
            * Home loan approval is subject to respective bank eligibility criteria and documentation. Sukrit Infrastructure facilitates this process as a referral partner.
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500&family=DM+Sans:wght@300;400;500;600&display=swap');

        .loan-partners-heading {
          font-size: 42px;
        }

        .bank-cards-container {
          gap: 0;
          margin-top: 0;
        }

        .bank-card {
          background-color: #FFFFFF;
          border: 1px solid #E2DDD8;
          border-radius: 0;
          padding: 36px 32px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
        }

        /* Border sharing rules desktop */
        @media (min-width: 768px) {
          .bank-card:not(:last-child) {
            border-right: none;
          }
        }

        /* Border sharing rules mobile */
        @media (max-width: 767px) {
          .loan-partners-heading {
            font-size: 34px !important;
          }
          .bank-card {
            width: 100%;
            border-top: 1px solid #E2DDD8;
          }
          .bank-card:not(:last-child) {
            border-bottom: none;
          }
        }

        .card-number {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          color: #D0CBC4;
          letter-spacing: 0.1em;
          margin-bottom: 18px;
          transition: color 0.35s ease;
        }

        .card-bank-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px;
          font-weight: 400;
          line-height: 1;
          color: #1C1C1C;
          transition: color 0.35s ease;
        }

        .card-bank-type {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: #B8963E;
          margin-bottom: 24px;
        }

        .card-separator {
          border-top: 1px solid #E2DDD8;
          margin-top: auto;
          padding-top: 16px;
          transition: border-color 0.35s ease;
        }

        .card-approved {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #B8963E;
        }

        /* Hover States */
        .bank-card:hover {
          background-color: #1C1C1C !important;
        }
        
        .bank-card:hover .card-number {
          color: #555555;
        }

        .bank-card:hover .card-bank-name {
          color: #FFFFFF;
        }

        .bank-card:hover .card-separator {
          border-color: rgba(255, 255, 255, 0.08);
        }
      `}</style>
    </section>
  );
}
