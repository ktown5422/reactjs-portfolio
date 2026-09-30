import ProjectsBody from "@/components/pages/projects/ProjectsBody";
import LinkBackHome from "@/components/shared/LinkBackHome";
import PageShell from "@/components/shared/PageShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected GitHub projects by Kevin Townson, including CodeStreak and the NestFind Real Estate App.",
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
