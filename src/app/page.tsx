import HomeBody from "@/components/pages/home/HomeBody";
import PageShell from "@/components/shared/PageShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Kevin Townson | Software Engineering to Data Center Operations",
  },
  description:
    "Kevin Townson is a Houston-based software engineer pursuing a Data Center Technician role through hands-on Linux monitoring, networking, and troubleshooting labs.",
};

const page = () => {
  return (
    <PageShell>
      <HomeBody />
    </PageShell>
  );
};

export default page;
