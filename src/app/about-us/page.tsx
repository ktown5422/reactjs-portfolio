import AboutBody from "@/components/pages/about/AboutBody";
import LinkBackHome from "@/components/shared/LinkBackHome";
import PageShell from "@/components/shared/PageShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Kevin Townson is applying his software engineering experience at World Wide Technology to a career in data center operations.",
};

const AboutUs = () => {
  return (
    <PageShell>
      <LinkBackHome />
      <AboutBody />
    </PageShell>
  );
};

export default AboutUs;
