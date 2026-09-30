"use client";

import ReactCounterUp from "@/components/shared/ReactCounterUp";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconChevronsRight,
  IconSchool,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const githubProfileImage = "https://github.com/ktown5422.png";

const experience = [
  {
    time: "December 2023 - February 2024",
    title: "Software Engineer II",
    company: "World Wide Technology",
  },
  {
    time: "May 2021 - December 2023",
    title: "Associate Software Engineer",
    company: "World Wide Technology",
  },
];

const whatIDo = [
  "Web Development",
  "Infrastructure & Cloud Labs",
  "Troubleshooting & Documentation",
];

const numbers = [
  { value: 3, suffix: "+", label: "Years experience" },
  { value: 2, suffix: "", label: "Professional projects" },
  { value: 2, suffix: "", label: "Featured infrastructure labs" },
];

const education = [
  { year: "Professional certificate", title: "Google IT Support Professional Certificate", school: "Google" },
  {
    year: "2019",
    title: "LC101 Programming Course",
    school: "LaunchCode",
  },
  {
    year: "2019",
    title: "Web Development Course",
    school: "Savvy Coders",
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com/ktown5422", icon: <IconBrandGithub size={28} /> },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kevin-townson",
    icon: <IconBrandLinkedin size={28} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/techmankev/",
    icon: <IconBrandInstagram size={28} />,
  },
];

const card = "rounded-4xl border border-ink/10 bg-card";
const cardTitle =
  "font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const AboutBody = () => {
  return (
    <div className="grid gap-5 pb-4 pt-12 lg:grid-cols-12">
      {/* Hello */}
      <motion.section
        {...fadeUp()}
        className={`${card} p-8 sm:p-12 lg:col-span-8`}
      >
        <span className={cardTitle}>About me</span>
        <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          Hello, I&rsquo;m Kevin Townson, a{" "}
          <span className="bg-gradient-to-r from-accent to-ember bg-clip-text text-transparent">
            Software Engineer.
          </span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          I’m based in Houston, Texas, with professional experience building
          and supporting production web and mobile applications. Today, I’m
          expanding into cloud infrastructure, Linux, networking, monitoring,
          IT operations, and data center technology.
        </p>
      </motion.section>

      <motion.section {...fadeUp(0.05)} className={`${card} p-8 sm:p-12 lg:col-span-12 lg:order-last`}>
        <span className={cardTitle}>Building on my software background</span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight">Understanding what runs beneath the application.</h2>
        <p className="mt-4 text-muted">At World Wide Technology, I contributed to a cellular site survey platform and the Schnucks Rewards mobile application. My work involved React Native, JavaScript, TypeScript, Python, REST APIs, Google Cloud, Firebase, GitHub Actions, GitLab CI/CD, Sentry, and Git.</p>
        <p className="mt-4 text-muted">That experience taught me to investigate production issues, work with logs and APIs, collaborate with technical teams, and document systems. I’m building on it through personal infrastructure labs, where I configure services, investigate failures, troubleshoot connectivity, and write down what I learn. These are learning environments, not professional cloud experience or production systems.</p>
        <h3 className="mt-6 font-display text-xl font-semibold">Where I’m going</h3>
        <p className="mt-3 text-muted">I’m exploring data center technician, infrastructure support, IT field services, network technician, cloud support, junior cloud engineer, and technical support opportunities. Long term, I want to understand the full stack: hardware, operating systems, networking, cloud infrastructure, and applications.</p>
      </motion.section>

      {/* Profile image */}
      <motion.section
        {...fadeUp(0.05)}
        className={`${card} relative min-h-[18rem] overflow-hidden lg:col-span-4`}
      >
        <Image
          src={githubProfileImage}
          width={520}
          height={520}
          alt="Kevin Townson GitHub profile"
          className="aspect-[4/3] w-full object-cover object-[50%_30%] lg:aspect-auto lg:h-full"
          priority
        />
      </motion.section>

      {/* Experience */}
      <motion.section
        {...fadeUp(0.1)}
        className={`${card} p-8 lg:col-span-5`}
        aria-label="My experience"
      >
        <span className={cardTitle}>My experience</span>
        <div className="mt-6 space-y-6">
          {experience.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 border-l-2 border-accent/40 pl-4"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted">
                  {item.time}
                </p>
                <p className="mt-1 font-display text-lg font-semibold">
                  {item.title}
                </p>
                <p className="text-sm text-muted">{item.company}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* What I do */}
      <motion.section
        {...fadeUp(0.15)}
        className={`${card} p-8 lg:col-span-3`}
        aria-label="What I do"
      >
        <span className={cardTitle}>What I do</span>
        <ul className="mt-6 space-y-4">
          {whatIDo.map((item) => (
            <li key={item} className="flex items-center gap-2 font-medium">
              <IconChevronsRight size={18} className="shrink-0 text-accent" />
              {item}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Numbers */}
      <motion.section
        {...fadeUp(0.2)}
        className={`${card} flex flex-col justify-center gap-6 p-8 lg:col-span-4`}
        aria-label="Experience in numbers"
      >
        {numbers.map((item) => (
          <div key={item.label} className="flex items-baseline gap-4">
            <span className="font-display text-4xl font-bold text-accent">
              <ReactCounterUp end={item.value} />
              {item.suffix}
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
              {item.label}
            </span>
          </div>
        ))}
      </motion.section>

      {/* Socials */}
      <motion.section
        {...fadeUp(0.25)}
        className={`${card} flex flex-col items-center justify-center gap-4 p-8 lg:col-span-3`}
        aria-label="Social profiles"
      >
        <div className="flex items-center gap-3">
          {socials.map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-ink/10 bg-raised text-muted transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
            >
              {icon}
            </Link>
          ))}
        </div>
        <p className="text-sm font-medium text-muted">Follow me</p>
      </motion.section>

      {/* Education */}
      <motion.section
        {...fadeUp(0.3)}
        className={`${card} p-8 lg:col-span-5`}
        aria-label="Education"
      >
        <span className={cardTitle}>Education</span>
        <div className="mt-6 space-y-5">
          {education.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <IconSchool size={22} />
              </span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted">
                  {item.year}
                </p>
                <p className="mt-0.5 font-display font-semibold">
                  {item.title}
                </p>
                <p className="text-sm text-muted">{item.school}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        {...fadeUp(0.35)}
        className={`${card} relative flex flex-col items-start justify-center overflow-hidden p-8 lg:col-span-4`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/15 blur-[80px]"
        />
        <h2 className="relative font-display text-2xl font-bold tracking-tight">
          Let&rsquo;s work together...!
        </h2>
        <Link
          href="/contact"
          className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-sm font-semibold text-canvas transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
        >
          Get in touch
          <IconArrowUpRight size={18} />
        </Link>
      </motion.section>
    </div>
  );
};

export default AboutBody;
