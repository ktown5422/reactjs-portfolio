import CaseStudyBody from "@/components/pages/project-details/CaseStudyBody";
import LinkBackHome from "@/components/shared/LinkBackHome";
import PageShell from "@/components/shared/PageShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeStreak Case Study",
  description:
    "A developer community project case study by Kevin Townson focused on GitHub commits, consistency, accountability, and modern product UX.",
};

const ProjectDetails = () => {
  return (
    <PageShell>
      <LinkBackHome />
      <CaseStudyBody study="codestreak" />
    </PageShell>
  );
};

export default ProjectDetails;
