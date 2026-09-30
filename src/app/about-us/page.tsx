import AboutBody from "@/components/pages/about/AboutBody";
import LinkBackHome from "@/components/shared/LinkBackHome";
import PageShell from "@/components/shared/PageShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Kevin Townson: a software engineer with World Wide Technology experience, a Google IT Support certificate, and a growing focus on cloud and infrastructure.",
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
