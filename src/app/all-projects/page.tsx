import ProjectsBody from "@/components/pages/projects/ProjectsBody";
import LinkBackHome from "@/components/shared/LinkBackHome";
import PageShell from "@/components/shared/PageShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Kevin Townson’s Datacenter Monitoring Lab, Azure Cost Visibility Dashboard, and software projects including CodeStreak and NestFind.",
};

const AllProjects = () => {
  return (
    <PageShell>
      <LinkBackHome />
      <ProjectsBody />
    </PageShell>
  );
};

export default AllProjects;
