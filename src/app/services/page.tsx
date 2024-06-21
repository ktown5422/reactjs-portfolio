import AboutTopLeftElement from "@/components/pages/about-us/AboutTopLeftElement";
import Footer from "@/components/pages/landing-one/Footer";
import ServiceBottomRight from "@/components/pages/service/AboutTopLeftElement";
import ServiceBody from "@/components/pages/service/ServiceBody";
import LinkBackHome from "@/components/shared/LinkBackHome";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service - Grid System Unique Portfolio NextJs Template",
  description: "NextJs Template",
};

const Services = () => {
  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <Navbar />
        <LinkBackHome />
        <ServiceBody />
        <Footer />
      </div>
      <AboutTopLeftElement />
      <ServiceBottomRight />
    </div>
  );
};

export default Services;
