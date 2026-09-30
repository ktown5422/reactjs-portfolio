"use client";

import InfrastructureLabs from "@/components/shared/InfrastructureLabs";
import codeCommitImage from "@/../public/image/CodeStreak-app-pic.png";
import realEstateImage from "@/../public/image/NestFind-real-state-app-pic.png";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconCheck,
  IconWorld,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Project = {
  title: string;
  category: string;
  year: string;
  image: StaticImageData;
  summary: string;
  outcome: string;
  stack: string[];
  proof: string[];
  features: string[];
  link: string;
  linkLabel: string;
  caseStudyLink?: string;
  repoLink?: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "CodeStreak",
    category: "Developer community platform",
    year: "2026",
    image: codeCommitImage,
    summary:
      "A community-minded project for helping developers stay active, share progress, and build stronger coding habits through consistent commits.",
    outcome:
      "Built around accountability, learning momentum, and clean developer-focused UX.",
    stack: ["React", "Next.js", "GitHub", "Community UX"],
    proof: [
      "Product thinking around developer habits",
      "Live deployed app with GitHub-backed positioning",
      "Clear UX flow for repeat engagement",
    ],
    features: [
      "Developer accountability",
      "Community positioning",
      "Repeat-use UX",
    ],
    link: "https://codestreakapp.vercel.app/",
    caseStudyLink: "/project-details",
    repoLink: "https://github.com/ktown5422/code-commit-club",
    linkLabel: "View live site",
    featured: true,
  },
  {
    title: "NestFind Real Estate App",
    category: "Marketplace platform",
    year: "2026",
    image: realEstateImage,
    summary:
      "A modern property discovery experience with authenticated flows, searchable listings, and a polished responsive interface.",
    outcome: "Built for browsing speed, trust, and conversion.",
    stack: ["Next.js", "Clerk", "Supabase", "GCP", "Tailwind"],
    proof: [
      "Authenticated full-stack app structure",
      "Searchable marketplace-style UI",
      "Cloud-ready deployment and data flow",
    ],
    features: ["Auth flows", "Property search", "Database-backed listings"],
    link: "https://nestfindapp.vercel.app/",
    caseStudyLink: "/project-details/nestfind",
    repoLink: "https://github.com/ktown5422/real-estate-app",
    linkLabel: "View live site",
  },
];

const featuredProject =
  projects.find((project) => project.featured) ?? projects[0];
const supportingProjects = projects.filter(
  (project) => project.title !== featuredProject.title
);

const pageStats = [
  { value: "02", label: "infrastructure labs" },
  { value: "02", label: "web applications" },
  { value: "GitHub", label: "source & documentation" },
];

const eyebrow =
  "font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent";

const chip = "rounded-full bg-raised px-3 py-1 text-xs font-medium text-muted";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="flex flex-wrap items-center gap-3 pt-2">
    <Link
      href={project.link}
      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-display text-sm font-semibold text-canvas transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
    >
      {project.linkLabel}
      <IconArrowUpRight size={17} />
    </Link>
    {project.caseStudyLink ? (
      <Link
        href={project.caseStudyLink}
        className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent/60 hover:text-accent"
      >
        <IconWorld size={17} />
        Case study
      </Link>
    ) : null}
    {project.repoLink ? (
      <Link
        href={project.repoLink}
        className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink transition hover:border-accent/60 hover:text-accent"
      >
        <IconBrandGithub size={17} />
        Repo
      </Link>
    ) : null}
  </div>
);

const ProofList = ({ items }: { items: string[] }) => (
  <ul className="mt-2 space-y-1.5">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2 text-sm text-muted">
        <IconCheck size={16} className="mt-0.5 shrink-0 text-accent" />
        {item}
      </li>
    ))}
  </ul>
);

const ProjectsBody = () => {
  return (
    <div className="pt-6">
      {/* Hero */}
      <section className="grid gap-10 pt-8 lg:grid-cols-[1.6fr_1fr] lg:items-end">
        <motion.div {...fadeUp()}>
          <span className={eyebrow}>Selected work</span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Hands-on infrastructure labs and software projects.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Personal labs exploring monitoring, cloud costs, and troubleshooting,
            alongside the web applications that reflect my software foundation.
          </p>
        </motion.div>
        <motion.div
          {...fadeUp(0.08)}
          className="flex gap-8 border-l-2 border-accent/30 pl-6 lg:flex-col lg:gap-5"
        >
          {pageStats.map((stat) => (
            <div key={stat.label}>
              <span className="font-display text-3xl font-bold text-accent">
                {stat.value}
              </span>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      <InfrastructureLabs showLearningAreas />

      <div className="mt-24">
        <span className={eyebrow}>Application development</span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Software Projects
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Web applications that reflect my foundation in software engineering.
        </p>
      </div>

      {/* Featured project */}
      <motion.section
        {...fadeUp(0.1)}
        className="mt-8 grid overflow-hidden rounded-4xl border border-ink/10 bg-card lg:grid-cols-2"
      >
        <div className="relative min-h-[16rem]">
          <Image
            src={featuredProject.image}
            width={900}
            height={560}
            alt={`${featuredProject.title} preview`}
            className="h-full w-full object-cover object-top"
            priority
          />
        </div>
        <div className="flex flex-col gap-4 p-8 sm:p-10">
          <span className={eyebrow}>Software project</span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              {featuredProject.category} / {featuredProject.year}
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">
              {featuredProject.title}
            </h2>
          </div>
          <p className="text-muted">{featuredProject.summary}</p>
          <p className="text-sm font-medium text-ink/80">
            {featuredProject.outcome}
          </p>
          <div className="flex flex-wrap gap-2">
            {featuredProject.stack.map((item) => (
              <span key={item} className={chip}>
                {item}
              </span>
            ))}
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              What it proves
            </span>
            <ProofList items={featuredProject.proof} />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              Feature focus
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {featuredProject.features.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <ProjectLinks project={featuredProject} />
        </div>
      </motion.section>

      {/* More projects */}
      <section className="mt-10 grid gap-6" aria-label="More projects">
        {supportingProjects.map((project, index) => (
          <motion.article
            {...fadeUp(index * 0.06)}
            key={project.title}
            className="grid overflow-hidden rounded-4xl border border-ink/10 bg-card transition hover:border-accent/40 lg:grid-cols-2"
          >
            <Link
              href={project.link}
              className="group relative block min-h-[16rem] overflow-hidden"
            >
              <Image
                src={project.image}
                width={640}
                height={420}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              />
            </Link>
            <div className="flex flex-col gap-4 p-8 sm:p-10">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted">
                <span className="text-accent">{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3 className="font-display text-2xl font-bold tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {project.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className={chip}>
                    {item}
                  </span>
                ))}
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                  What it proves
                </span>
                <ProofList items={project.proof} />
              </div>
              <ProjectLinks project={project} />
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  );
};

export default ProjectsBody;
