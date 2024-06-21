import AboutTopLeftElement from "@/components/pages/about-us/AboutTopLeftElement";
import ContactBody from "@/components/pages/contact/ContactBody";
import Footer from "@/components/pages/landing-one/Footer";
import ServiceBottomRight from "@/components/pages/service/AboutTopLeftElement";
import LinkBackHome from "@/components/shared/LinkBackHome";
import Navbar from "@/components/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Page",
};

const Contact = () => {
  return (
    <div className="position-relative overflow-hidden">
      <div className="container">
        <Navbar />
        <LinkBackHome />
        <ContactBody />
        <Footer />
      </div>
      <AboutTopLeftElement />
      <ServiceBottomRight />
    </div>
  );
};

export default Contact;
