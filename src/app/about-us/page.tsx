import AboutBody from "@/components/pages/about/AboutBody";
import LinkBackHome from "@/components/shared/LinkBackHome";
import PageShell from "@/components/shared/PageShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kevin Townson, a software engineer focused on React, Next.js, full-stack product builds, and practical user interfaces.",
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
