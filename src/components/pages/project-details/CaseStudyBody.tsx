"use client";

import {
  IconArrowLeft,
  IconArrowUpRight,
  IconBrandGithub,
  IconCircleCheck,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CaseStudyKey, caseStudies } from "./caseStudies";

const eyebrow =
  "font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const CaseStudyBody = ({ study }: { study: CaseStudyKey }) => {
  const data = caseStudies[study];

  return (
    <div className="pt-6">
      {/* Hero */}
      <section className="mt-8 grid overflow-hidden rounded-4xl border border-ink/10 bg-card lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          {...fadeUp()}
          className="flex flex-col items-start gap-4 p-8 sm:p-12"
        >
          <span className={eyebrow}>{data.eyebrow}</span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              {data.meta}
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              {data.title}
            </h1>
          </div>
          <p className="text-lg text-muted">{data.summary}</p>
          <div className="flex flex-wrap gap-2">
            {data.stack.map((item) => (
              <span
                key={item}
                className="rounded-full bg-raised px-3 py-1 text-xs font-medium text-muted"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <Link
              href={data.liveLink}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-sm font-semibold text-canvas transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
            >
              View live site
              <IconArrowUpRight size={18} />
            </Link>
            <Link
              href={data.repoLink}
              className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-5 py-3 text-sm font-medium text-ink transition hover:border-accent/60 hover:text-accent"
            >
              <IconBrandGithub size={18} />
              View GitHub repo
            </Link>
            <Link
              href="/all-projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition hover:text-accent"
            >
              <IconArrowLeft size={17} />
              Back to projects
            </Link>
          </div>
        </motion.div>
        <motion.div {...fadeUp(0.08)} className="relative min-h-[16rem]">
          <Image
            src={data.image}
            width={860}
            height={620}
            alt={data.imageAlt}
            className="h-full w-full object-cover object-top"
            priority
          />
        </motion.div>
      </section>

      {/* Facts */}
      <section
        className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        aria-label="Project details"
      >
        {data.facts.map((fact, index) => (
          <motion.div
            {...fadeUp(index * 0.05)}
            key={fact.label}
            className="rounded-3xl border border-ink/10 bg-card p-6"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              {fact.label}
            </span>
            <span className="mt-2 block font-display font-semibold leading-snug">
              {fact.value}
            </span>
          </motion.div>
        ))}
      </section>

      {/* Story */}
      <section className="mt-20">
        <motion.div {...fadeUp()} className="max-w-3xl">
          <span className={eyebrow}>Overview</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {data.overviewTitle}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {data.overviewText}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {data.process.map((item, index) => (
            <motion.article
              {...fadeUp(index * 0.07)}
              key={item.title}
              className="rounded-3xl border border-ink/10 bg-card p-7 transition hover:-translate-y-1 hover:border-accent/40"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                {item.icon}
              </span>
              <h3 className="mt-5 font-display text-xl font-bold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <motion.section
        {...fadeUp()}
        className="relative mt-20 overflow-hidden rounded-4xl border border-ink/10 bg-card p-8 sm:p-12"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-[100px]"
        />
        <div className="relative">
          <span className={eyebrow}>Outcome</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {data.outcomeTitle}
          </h2>
          <ul className="mt-6 space-y-3">
            {data.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-3 text-muted">
                <IconCircleCheck
                  size={22}
                  className="mt-0.5 shrink-0 text-accent"
                />
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </motion.section>
    </div>
  );
};

export default CaseStudyBody;
