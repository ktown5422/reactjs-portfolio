import ProjectsBody from "@/components/pages/projects/ProjectsBody";
import LinkBackHome from "@/components/shared/LinkBackHome";
import PageShell from "@/components/shared/PageShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Kevin Townson’s labs in PC assembly, datacenter monitoring, network operations, and Azure cost monitoring, alongside his software projects.",
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
