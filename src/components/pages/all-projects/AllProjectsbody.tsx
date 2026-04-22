"use client";

import codeCommitImage from "@/../public/image/CodeStreak-app-pic.png";
import realEstateImage from "@/../public/image/NestFind-real-state-app-pic.png";
import { IconArrowUpRight, IconBrandGithub, IconWorld } from "@tabler/icons-react";
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
  link: string;
  linkLabel: string;
  linkType: "Live" | "Repo";
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
    outcome: "Built around accountability, learning momentum, and clean developer-focused UX.",
    stack: ["React", "Next.js", "GitHub", "Community UX"],
    proof: [
      "Product thinking around developer habits",
      "Live deployed app with GitHub-backed positioning",
      "Clear UX flow for repeat engagement",
    ],
    link: "https://code-commit-club.vercel.app/",
    caseStudyLink: "/project-details",
    repoLink: "https://github.com/ktown5422/code-commit-club",
    linkLabel: "View live site",
    linkType: "Live",
    featured: true,
  },
  {
    title: "Real Estate App",
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
    link: "https://real-estate-app-inky-two.vercel.app/",
    repoLink: "https://github.com/ktown5422/real-estate-app",
    linkLabel: "View live site",
    linkType: "Live",
  },
];

const featuredProject = projects.find((project) => project.featured) ?? projects[0];
const supportingProjects = projects.filter(
  (project) => project.title !== featuredProject.title
);

const pageStats = [
  { value: "02", label: "github projects" },
  { value: "08", label: "core tools" },
  { value: "100%", label: "portfolio focus" },
];

const AllProjectBody = () => {
  return (
    <main className="all-projects-index mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
      <section className="all-projects-hero">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="all-projects-hero__copy"
        >
          <span className="all-projects-hero__eyebrow textS">
            Selected work
          </span>
          <h1 className="heading-1 all-projects-hero__title">
            GitHub-backed projects with clean interfaces and practical engineering.
          </h1>
          <p className="textL all-projects-hero__text">
            A tighter look at the two projects I want hiring teams and
            collaborators to notice first: CodeStreak and Real Estate App.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="all-projects-hero__stats"
        >
          {pageStats.map((stat) => (
            <div className="all-projects-hero__stat" key={stat.label}>
              <span className="all-projects-hero__stat-value">{stat.value}</span>
              <span className="all-projects-hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="featured-project card-style-two">
        <div className="featured-project__media">
          <Image
            src={featuredProject.image}
            width={900}
            height={560}
            alt={`${featuredProject.title} preview`}
            className="featured-project__image"
            priority
          />
        </div>
        <div className="featured-project__content">
          <span className="featured-project__label textS">Featured project</span>
          <div>
            <p className="featured-project__meta textS">
              {featuredProject.category} / {featuredProject.year}
            </p>
            <h2 className="heading-2">{featuredProject.title}</h2>
          </div>
          <p className="textL featured-project__summary">
            {featuredProject.summary}
          </p>
          <p className="featured-project__outcome textM">
            {featuredProject.outcome}
          </p>
          <div className="featured-project__stack">
            {featuredProject.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="featured-project__proof">
            <span className="featured-project__proof-title">What it proves</span>
            <ul>
              {featuredProject.proof.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <Link className="featured-project__link" href={featuredProject.link}>
            <span>{featuredProject.linkLabel}</span>
            <IconArrowUpRight size={20} />
          </Link>
          {featuredProject.caseStudyLink ? (
            <Link
              className="featured-project__repo-link"
              href={featuredProject.caseStudyLink}
            >
              <IconWorld size={19} />
              <span>View case study</span>
            </Link>
          ) : null}
          {featuredProject.repoLink ? (
            <Link className="featured-project__repo-link" href={featuredProject.repoLink}>
              <IconBrandGithub size={19} />
              <span>View GitHub repo</span>
            </Link>
          ) : null}
        </div>
      </section>

      <section className="project-grid" aria-label="More projects">
        {supportingProjects.map((project, index) => (
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="project-card card-style-two"
            key={project.title}
          >
            <Link href={project.link} className="project-card__media">
              <Image
                src={project.image}
                width={640}
                height={420}
                alt={`${project.title} preview`}
                className="project-card__image"
              />
            </Link>
            <div className="project-card__content">
              <div className="project-card__topline">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3 className="heading-4">{project.title}</h3>
              <p className="textM project-card__summary">{project.summary}</p>
              <div className="project-card__stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="project-card__proof">
                <span>What it proves</span>
                <ul>
                  {project.proof.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <Link href={project.link} className="project-card__link">
                {project.linkType === "Repo" ? (
                  <IconBrandGithub size={19} />
                ) : (
                  <IconWorld size={19} />
                )}
                <span>{project.linkLabel}</span>
              </Link>
              {project.caseStudyLink ? (
                <Link href={project.caseStudyLink} className="project-card__link">
                  <IconWorld size={19} />
                  <span>View case study</span>
                </Link>
              ) : null}
              {project.repoLink ? (
                <Link href={project.repoLink} className="project-card__link">
                  <IconBrandGithub size={19} />
                  <span>View GitHub repo</span>
                </Link>
              ) : null}
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  );
};

export default AllProjectBody;
