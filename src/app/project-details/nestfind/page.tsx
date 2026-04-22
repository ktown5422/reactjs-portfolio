import RealEstateProjectDetailsBody from "@/components/pages/project-details/RealEstateProjectDetailsBody";
import Footer from "@/components/pages/landing-one/Footer";
import EllipseShapeLandingTwoBottomRight from "@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight";
import EllipseShapeLandingTwoTopLeft from "@/components/pages/landing-two/EllipseShapeLandingTwoTopLeft";
import LinkBackHome from "@/components/shared/LinkBackHome";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NestFind Real Estate App Case Study",
  description:
    "A full-stack case study for Kevin Townson's real estate marketplace app built with Next.js, Clerk, Supabase, GCP, and Tailwind.",
};

const NestFindProjectDetails = () => {
  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <Navbar />
        <LinkBackHome />
        <RealEstateProjectDetailsBody />
        <Footer />
      </div>
      <EllipseShapeLandingTwoTopLeft />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default NestFindProjectDetails;
