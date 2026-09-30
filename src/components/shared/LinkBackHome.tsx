import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";

const LinkBackHome = () => {
  return (
    <div className="mt-10">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-card px-4 py-2 text-sm font-medium text-muted transition hover:border-accent/50 hover:text-accent"
      >
        <IconArrowLeft size={18} />
        <span>Back to home</span>
      </Link>
    </div>
  );
};

export default LinkBackHome;
