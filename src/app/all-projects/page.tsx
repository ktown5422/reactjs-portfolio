import AboutTopLeftElement from "@/components/pages/about-us/AboutTopLeftElement";
import AllProjectBody from "@/components/pages/all-projects/AllProjectsbody";
import Footer from "@/components/pages/landing-one/Footer";
import EllipseShapeLandingTwoBottomRight from "@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight";
import LinkBackHome from "@/components/shared/LinkBackHome";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Projects",
};

const AllProjects = () => {
  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <Navbar />
        <LinkBackHome />
        <AllProjectBody />
        <Footer />
      </div>
      <AboutTopLeftElement />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default AllProjects;
