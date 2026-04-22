"use client";

import codeCommitImage from "@/../public/image/CodeStreak-app-pic.png";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconCalendarStats,
  IconGitCommit,
  IconLayoutDashboard,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const stack = ["React", "Next.js", "GitHub", "Community UX"];

const projectFacts = [
  { label: "Project type", value: "Developer community platform" },
  { label: "Role", value: "Frontend + product UX" },
  { label: "Focus", value: "Consistency, accountability, progress" },
  { label: "Source", value: "GitHub project" },
];

const processItems = [
  {
    icon: <IconGitCommit size={26} />,
    title: "Make progress visible",
    text: "Framed the experience around the action developers care about most: showing up, committing code, and building momentum over time.",
  },
  {
    icon: <IconLayoutDashboard size={26} />,
    title: "Structure the product surface",
    text: "Organized the page around clear sections, reusable cards, and focused calls to action so the project reads like a real app.",
  },
  {
    icon: <IconCalendarStats size={26} />,
    title: "Support repeat engagement",
    text: "Shaped the concept around consistency and community, giving the project a purpose beyond a one-time visit.",
  },
];

const outcomes = [
  "A portfolio-worthy project story that shows product thinking, not just a repository link.",
  "A clearer developer-community angle built around commits, accountability, and learning habits.",
  "A flexible visual foundation that can scale as CodeStreak grows.",
];

const ProjectDetailsBody = () => {
  return (
    <main className="project-case-study mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
      <section className="project-case-hero card-style-two">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="project-case-hero__content"
        >
          <span className="project-case-hero__eyebrow textS">
            Featured case study
          </span>
          <p className="project-case-hero__meta textS">
            Developer platform / 2026
          </p>
          <h1 className="heading-1 project-case-hero__title">
            CodeStreak
          </h1>
          <p className="textL project-case-hero__summary">
            A GitHub-backed project for helping developers build consistency,
            share momentum, and turn regular commits into a community habit.
          </p>
          <div className="project-case-hero__stack">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <Link href="/all-projects" className="project-case-hero__link">
            <span>Back to projects</span>
            <IconArrowUpRight size={20} />
          </Link>
          <Link
            href="https://code-commit-club.vercel.app/"
            className="project-case-hero__repo-link"
          >
            <IconArrowUpRight size={19} />
            <span>View live site</span>
          </Link>
          <Link
            href="https://github.com/ktown5422/code-commit-club"
            className="project-case-hero__repo-link"
          >
            <IconBrandGithub size={19} />
            <span>View GitHub repo</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="project-case-hero__media"
        >
          <Image
            src={codeCommitImage}
            width={860}
            height={620}
            alt="CodeStreak project preview"
            className="project-case-hero__image"
            priority
          />
        </motion.div>
      </section>

      <section className="project-facts-grid" aria-label="Project details">
        {projectFacts.map((fact, index) => (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="project-fact card-style-two"
            key={fact.label}
          >
            <span className="project-fact__label">{fact.label}</span>
            <span className="project-fact__value">{fact.value}</span>
          </motion.div>
        ))}
      </section>

      <section className="project-story">
        <div className="project-story__intro card-style-two">
          <span className="project-story__eyebrow textS">Overview</span>
          <h2 className="heading-2">Designing for developer consistency.</h2>
          <p className="textL">
            CodeStreak is strongest when it feels like more than a code
            sample. The case study now frames it as a product: a place where
            developers can see progress, stay accountable, and connect around
            the habit of shipping small improvements.
          </p>
        </div>

        <div className="project-process">
          {processItems.map((item, index) => (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="project-process__item card-style-two"
              key={item.title}
            >
              <span className="project-process__icon">{item.icon}</span>
              <h3 className="heading-4">{item.title}</h3>
              <p className="textM">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="project-outcome card-style-two">
        <div>
          <span className="project-outcome__eyebrow textS">Outcome</span>
          <h2 className="heading-2">A stronger story for a GitHub project.</h2>
        </div>
        <ul>
          {outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default ProjectDetailsBody;
