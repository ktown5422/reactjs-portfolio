import AboutTopLeftElement from "@/components/pages/about-us/AboutTopLeftElement";
import AboutUsBody from "@/components/pages/about-us/AboutUsBody";
import Footer from "@/components/pages/landing-one/Footer";
import EllipseShapeLandingTwoBottomRight from "@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight";
import LinkBackHome from "@/components/shared/LinkBackHome";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";
import aboutOne from "@/../public/image/about-1.png"

export const metadata: Metadata = {
  title: "About",
  description: "About Page",
};

const AboutUs = () => {
  return (
    <div className="position-relative overflow-hidden ">
      <div className="container">
        <Navbar />
        <LinkBackHome />
        <AboutUsBody />
        <Footer />
      </div>
      <AboutTopLeftElement />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default AboutUs;
