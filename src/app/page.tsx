import HomeBody from "@/components/pages/home/HomeBody";
import PageShell from "@/components/shared/PageShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Kevin Townson | Software Engineer",
  },
  description:
    "Portfolio of Kevin Townson, a software engineer building polished web apps, cloud-backed products, and useful digital experiences.",
};

const page = () => {
  return (
    <PageShell>
      <HomeBody />
    </PageShell>
  );
};

export default page;
