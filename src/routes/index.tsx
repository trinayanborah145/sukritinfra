import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { Marquee } from "@/components/sections/Marquee";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { PropertySearch } from "@/components/sections/PropertySearch";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { LoanPartners } from "@/components/sections/LoanPartners";
import { WorkInMotion } from "@/components/sections/WorkInMotion";
import { About } from "@/components/sections/About";
import { FoundersMessage } from "@/components/sections/FoundersMessage";
import { ESG } from "@/components/sections/ESG";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { useRevealAll } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sukrit Infrastructure — Building Assam's Tomorrow, Today." },
      {
        name: "description",
        content:
          "Sukrit Infrastructure crafts landmark residential and commercial spaces across Assam — 25+ years of trusted real estate development with uncompromising quality.",
      },
      { property: "og:title", content: "Sukrit Infrastructure — Luxury Real Estate in Assam" },
      {
        property: "og:description",
        content:
          "Crafting landmark spaces across Assam with uncompromising quality and timeless design.",
      },
      {
        property: "og:image",
        content: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&q=80",
      },
    ],
  }),
});

function Index() {
  useRevealAll();
  useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <BrandStatement />
        <WorkInMotion />
        <Marquee />
        <FeaturedProjects />
        <PropertySearch />
        <WhyChooseUs />
        <Stats />
        <About />
        <FoundersMessage />
        <Testimonials />
        <LoanPartners />
        <ESG />
        <Contact />
      </main>
      <Footer />
      <a href="#contact" className="side-enquire hidden lg:block">Enquire Now</a>
    </>
  );
}
