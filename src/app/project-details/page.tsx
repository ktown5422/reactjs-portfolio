import AboutTopLeftElement from "@/components/pages/about-us/AboutTopLeftElement";
import Footer from "@/components/pages/landing-one/Footer";
import EllipseShapeLandingTwoBottomRight from "@/components/pages/landing-two/EllipseShapeLandingTwoBottomRight";
import ProjectDetailsBody from "@/components/pages/project-details/ProjectDetailsBody";
import LinkBackHome from "@/components/shared/LinkBackHome";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Details",
  description: "Project Details",
};

const ProjectDetails = () => {
  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <Navbar />
        <LinkBackHome />
        <ProjectDetailsBody />
        <Footer />
      </div>
      <AboutTopLeftElement />
      <EllipseShapeLandingTwoBottomRight />
    </div>
  );
};

export default ProjectDetails;
