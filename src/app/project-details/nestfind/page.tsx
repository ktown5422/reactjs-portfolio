import CaseStudyBody from "@/components/pages/project-details/CaseStudyBody";
import LinkBackHome from "@/components/shared/LinkBackHome";
import PageShell from "@/components/shared/PageShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NestFind Real Estate App Case Study",
  description:
    "A full-stack case study for Kevin Townson's real estate marketplace app built with Next.js, Clerk, Supabase, GCP, and Tailwind.",
};

const NestFindProjectDetails = () => {
  return (
    <PageShell>
      <LinkBackHome />
      <CaseStudyBody study="nestfind" />
    </PageShell>
  );
};

export default NestFindProjectDetails;
