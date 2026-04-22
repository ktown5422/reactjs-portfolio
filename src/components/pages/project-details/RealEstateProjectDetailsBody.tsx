"use client";

import realEstateImage from "@/../public/image/NestFind-real-state-app-pic.png";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBuildingEstate,
  IconDatabase,
  IconSearch,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const stack = ["Next.js", "Clerk", "Supabase", "GCP", "Tailwind"];

const projectFacts = [
  { label: "Project type", value: "Real estate marketplace app" },
  { label: "Role", value: "Full-stack product build" },
  { label: "Focus", value: "Auth, listings, search, responsive UI" },
  { label: "Source", value: "GitHub project" },
];

const processItems = [
  {
    icon: <IconBuildingEstate size={26} />,
    title: "Shape the marketplace experience",
    text: "Built the interface around fast property discovery, clear listing details, and a layout that makes browsing feel straightforward on desktop and mobile.",
  },
  {
    icon: <IconSearch size={26} />,
    title: "Support searchable flows",
    text: "Focused the project around practical user behavior: finding properties, comparing options, and moving through listings without unnecessary friction.",
  },
  {
    icon: <IconDatabase size={26} />,
    title: "Connect real app services",
    text: "Used modern full-stack pieces like authentication, database-backed content, and cloud deployment so the project reads like a product, not a static mockup.",
  },
];

const outcomes = [
  "A stronger proof point for full-stack React and Next.js work.",
  "A recruiter-friendly example of auth, data, search, and polished UI in one project.",
  "A flexible foundation that can grow into saved listings, agent workflows, and richer property management.",
];

const RealEstateProjectDetailsBody = () => {
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
            Full-stack case study
          </span>
          <p className="project-case-hero__meta textS">
            Marketplace platform / 2026
          </p>
          <h1 className="heading-1 project-case-hero__title">
            NestFind Real Estate App
          </h1>
          <p className="textL project-case-hero__summary">
            A modern property discovery app built around authenticated flows,
            searchable listings, responsive screens, and a polished marketplace
            experience.
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
            href="https://nestfindapp.vercel.app/"
            className="project-case-hero__repo-link"
          >
            <IconArrowUpRight size={19} />
            <span>View live site</span>
          </Link>
          <Link
            href="https://github.com/ktown5422/real-estate-app"
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
            src={realEstateImage}
            width={860}
            height={620}
            alt="NestFind Real Estate App preview"
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
          <h2 className="heading-2">Building trust into property discovery.</h2>
          <p className="textL">
            NestFind gives the portfolio a full-stack product example. It shows
            that the work goes beyond visual polish into user accounts, data
            structure, listings, search behavior, and production deployment.
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
          <h2 className="heading-2">A full-stack project recruiters can inspect.</h2>
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

export default RealEstateProjectDetailsBody;
