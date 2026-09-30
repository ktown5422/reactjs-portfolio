import notFoundImage from "@/../public/image/not-found.png";
import PageShell from "@/components/shared/PageShell";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <PageShell>
      <div className="flex flex-col items-center py-24 text-center">
        <Image
          src={notFoundImage}
          width={594}
          height={450}
          alt="Page not found illustration"
          className="h-auto w-full max-w-md"
        />
        <h1 className="mt-10 font-display text-4xl font-bold tracking-tight">
          Page not found.
        </h1>
        <p className="mt-3 max-w-md text-muted">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-sm font-semibold text-canvas transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
        >
          Back to home
        </Link>
      </div>
    </PageShell>
  );
};

export default NotFound;
