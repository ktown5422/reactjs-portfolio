import HomeBody from "@/components/pages/home/HomeBody";
import PageShell from "@/components/shared/PageShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Kevin Townson | Software, Cloud & Infrastructure",
  },
  description:
    "Houston-based software engineer expanding into cloud infrastructure and data center technology. Explore hands-on Azure and Linux labs, professional experience, and software projects.",
};

const page = () => {
  return (
    <PageShell>
      <HomeBody />
    </PageShell>
  );
};

export default page;
