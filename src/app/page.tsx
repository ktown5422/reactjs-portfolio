import Footer from "@/components/pages/landing-one/Footer";
import EllipseShapeLandingTwoBottomRight from "@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight";
import EllipseShapeLandingTwoTopLeft from "@/components/pages/landing-two/EllipseShapeLandingTwoTopLeft";
import LandingTwoBody from "@/components/pages/landing-two/LandingTwoBody";
import Navbar from "@/components/shared/Navbar";
import Snowfall from "@/components/shared/Snowfall";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kevin Townson | Software Engineer",
  description:
    "Portfolio of Kevin Townson, a software engineer building polished web apps, cloud-backed products, and useful digital experiences.",
};

const page = () => {
  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <Navbar />
        <div className="pt-xxl-5 pt-4"></div>
        <LandingTwoBody />
        <Footer />
        <Snowfall />
      </div>
      <EllipseShapeLandingTwoTopLeft />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default page;
