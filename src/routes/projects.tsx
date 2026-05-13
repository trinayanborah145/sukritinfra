import { createFileRoute } from "@tanstack/react-router";
import { ProjectsDiscovery } from "@/components/sections/ProjectsDiscovery";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { useEffect } from "react";

export const Route = createFileRoute("/projects")({
  component: Projects,
  head: () => ({
    meta: [
      { title: "Projects — Sukrit Infrastructure" },
      {
        name: "description",
        content:
          "Discover our portfolio of landmark residential and commercial developments across Assam.",
      },
    ],
  }),
});

function Projects() {
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
      <ProjectsDiscovery />
      <Footer />
    </>
  );
}
