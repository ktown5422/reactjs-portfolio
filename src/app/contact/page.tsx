import ContactBody from "@/components/pages/contact/ContactBody";
import LinkBackHome from "@/components/shared/LinkBackHome";
import PageShell from "@/components/shared/PageShell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kevin Townson for React, Next.js, full-stack software roles, freelance product builds, and collaboration opportunities.",
};

const Contact = () => {
  return (
    <PageShell>
      <LinkBackHome />
      <ContactBody />
    </PageShell>
  );
};

export default Contact;
