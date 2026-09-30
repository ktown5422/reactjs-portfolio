"use client";

import InfrastructureLabs from "@/components/shared/InfrastructureLabs";
import codeCommitImage from "@/../public/image/CodeStreak-app-pic.png";
import realEstateImage from "@/../public/image/NestFind-real-state-app-pic.png";
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconBriefcase2,
  IconCalendarCheck,
  IconCloudCode,
  IconCode,
  IconDeviceDesktopAnalytics,
  IconFileText,
  IconMail,
  IconMapPin,
  IconSparkles,
  IconUserCheck,
  IconWorld,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  {
    title: "CodeStreak",
    type: "Developer platform",
    image: codeCommitImage,
    description:
      "A community project for helping developers stay consistent, share momentum, and turn regular commits into a visible habit.",
    stack: ["React", "Next.js", "GitHub", "Community UX"],
    liveLink: "https://codestreakapp.vercel.app/",
    repoLink: "https://github.com/ktown5422/code-commit-club",
    caseStudyLink: "/project-details",
  },
  {
    title: "NestFind Real Estate App",
    type: "Marketplace app",
    image: realEstateImage,
    description:
      "A modern property discovery app with authenticated flows, searchable listings, and a polished responsive interface.",
    stack: ["Next.js", "Clerk", "Supabase", "GCP", "Tailwind"],
    liveLink: "https://nestfindapp.vercel.app/",
    repoLink: "https://github.com/ktown5422/real-estate-app",
    caseStudyLink: "/project-details/nestfind",
  },
];

const capabilities = [
  {
    icon: <IconCode size={24} />,
    title: "Software engineering",
    text: "Professional experience with production web and mobile applications, APIs, debugging, and CI/CD workflows.",
  },
  {
    icon: <IconCloudCode size={24} />,
    title: "Cloud & infrastructure labs",
    text: "Hands-on learning with Azure, Linux, networking, monitoring, and the systems that support applications.",
  },
  {
    icon: <IconDeviceDesktopAnalytics size={24} />,
    title: "Troubleshooting & documentation",
    text: "Investigating logs and metrics, testing fixes, and documenting what happened and why.",
  },
];

const heroStats = [
  { value: "02", label: "featured infrastructure labs" },
  { value: "3+", label: "years building software" },
  { value: "IT", label: "Google IT Support certificate" },
];

const recruiterSignals = [
  "Professional software engineering background",
  "Building hands-on cloud and infrastructure skills",
  "Google IT Support Professional Certificate",
];

const coreSkills = [
  "Microsoft Azure", "Linux / Ubuntu", "TCP/IP & DNS", "SSH", "Prometheus",
  "Grafana", "Azure Monitor", "Terraform", "Bash", "Technical documentation",
];

const recruiterQuickScan = [
  {
    icon: <IconBriefcase2 size={22} />,
    label: "Target roles",
    value: "Data Center / Infrastructure Support / Cloud Support",
  },
  {
    icon: <IconMapPin size={22} />,
    label: "Location",
    value: "Houston, Texas / Remote-friendly",
  },
  {
    icon: <IconCalendarCheck size={22} />,
    label: "Availability",
    value: "Exploring infrastructure, IT, and cloud opportunities",
  },
  {
    icon: <IconFileText size={22} />,
    label: "Resume",
    value: "Available on request by email",
  },
];

const githubProfileImage = "https://github.com/ktown5422.png";

const eyebrow =
  "font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent";

const SectionHeading = ({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) => (
  <div className="max-w-2xl">
    <span className={eyebrow}>{kicker}</span>
    <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
      {title}
    </h2>
  </div>
);

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const HomeBody = () => {
  return (
    <div className="pt-14 sm:pt-20">
      {/* Hero */}
      <section className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-start rounded-4xl border border-ink/10 bg-card/80 p-8 backdrop-blur sm:p-12"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Exploring infrastructure, IT, and cloud opportunities
          </span>

          <span className={`${eyebrow} mt-6 block`}>
            Kevin Townson / Software Engineer
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            From software to{" "}
            <span className="bg-gradient-to-r from-accent to-ember bg-clip-text text-transparent">
              the systems behind it.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            I’m a Houston-based software engineer expanding into cloud
            infrastructure, Linux, networking, and data center technology.
            I build labs to understand how systems run, fail, and recover.
          </p>

          <ul
            className="mt-6 space-y-2"
            aria-label="Recruiter proof points"
          >
            {recruiterSignals.map((signal) => (
              <li
                key={signal}
                className="flex items-center gap-2 text-sm font-medium text-ink/80"
              >
                <IconUserCheck size={17} className="shrink-0 text-accent" />
                {signal}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/all-projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-sm font-semibold text-canvas transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
            >
              View projects
              <IconArrowUpRight size={18} />
            </Link>
            {[
              { href: "https://github.com/ktown5422", label: "GitHub" },
              {
                href: "mailto:ktown5422@gmail.com?subject=Resume%20request%20for%20Kevin%20Townson",
                label: "Request resume",
              },
              { href: "/contact", label: "Contact me" },
            ].map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="rounded-full border border-ink/15 px-5 py-3 text-sm font-medium text-ink transition hover:border-accent/60 hover:text-accent"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="mt-10 grid w-full grid-cols-3 gap-4 border-t border-ink/10 pt-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <span className="font-display text-3xl font-bold text-accent">
                  {stat.value}
                </span>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.aside
          {...fadeUp}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="group relative aspect-[4/3] overflow-hidden rounded-4xl border border-ink/10 bg-card lg:aspect-auto lg:min-h-[22rem]"
        >
          <Image
            src={githubProfileImage}
            fill
            sizes="(min-width: 1152px) 426px, (min-width: 1024px) 40vw, (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)"
            alt="Kevin Townson GitHub profile"
            className="object-cover object-[50%_30%] transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 pt-16">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              <IconSparkles size={15} className="text-accent" />
              Software • Cloud • Infrastructure
            </span>
            <p className="mt-3 text-sm text-white/85">
              Building on production application experience to learn the
              hardware, operating systems, and networks underneath it.
            </p>
          </div>
        </motion.aside>
      </section>

      <InfrastructureLabs />

      {/* Featured projects */}
      <section className="mt-24" aria-label="Featured projects">
        <SectionHeading
          kicker="Software projects"
          title="My foundation in application development."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.article
              {...fadeUp}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-4xl border border-ink/10 bg-card transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
            >
              <Link
                href={project.liveLink}
                className="relative block overflow-hidden"
              >
                <Image
                  src={project.image}
                  width={720}
                  height={460}
                  alt={`${project.title} preview`}
                  className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
              </Link>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted">
                  <span className="text-accent">{project.type}</span>
                  <span>2026</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-raised px-3 py-1 text-xs font-medium text-muted"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-4 pt-6">
                  {[
                    {
                      href: project.liveLink,
                      label: "Live",
                      icon: <IconWorld size={17} />,
                    },
                    {
                      href: project.caseStudyLink,
                      label: "Case study",
                      icon: <IconArrowUpRight size={17} />,
                    },
                    {
                      href: project.repoLink,
                      label: "Repo",
                      icon: <IconBrandGithub size={17} />,
                    },
                  ].map(({ href, label, icon }) => (
                    <Link
                      key={label}
                      href={href}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition hover:text-accent"
                    >
                      {icon}
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Recruiter snapshot */}
      <section className="mt-24 grid gap-10 rounded-4xl border border-ink/10 bg-card p-8 sm:p-12 lg:grid-cols-2">
        <div>
          <span className={eyebrow}>Recruiter snapshot</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            What I’m learning through hands-on labs.
          </h2>
          <p className="mt-4 text-muted">
            My software background gives me a foundation in debugging, APIs,
            logs, and delivery workflows. I’m now developing practical
            infrastructure skills through personal learning environments.
          </p>
        </div>
        <div
          className="flex flex-wrap content-center gap-2.5"
          aria-label="Core skills"
        >
          {coreSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-ink/10 bg-raised px-4 py-2 text-sm font-medium text-ink/85 transition hover:border-accent/50 hover:text-accent"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Quick scan */}
      <section className="mt-24" aria-label="Recruiter quick scan">
        <SectionHeading
          kicker="Quick scan"
          title="The hiring details without the digging."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {recruiterQuickScan.map((item, index) => (
            <motion.article
              {...fadeUp}
              transition={{ duration: 0.38, delay: index * 0.04 }}
              key={item.label}
              className="rounded-3xl border border-ink/10 bg-card p-6"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                {item.icon}
              </span>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted">
                {item.label}
              </p>
              <strong className="mt-1 block text-sm font-semibold leading-snug">
                {item.value}
              </strong>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section
        className="mt-24 grid gap-5 md:grid-cols-3"
        aria-label="Capabilities"
      >
        {capabilities.map((item, index) => (
          <motion.article
            {...fadeUp}
            transition={{ duration: 0.42, delay: index * 0.06 }}
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
      </section>

      {/* Contact CTA */}
      <section className="relative mt-24 overflow-hidden rounded-4xl border border-ink/10 bg-card p-8 sm:p-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-[100px]"
        />
        <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className={eyebrow}>Next collaboration</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Let&rsquo;s build something clean and useful.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="mailto:ktown5422@gmail.com?subject=Resume%20request%20for%20Kevin%20Townson"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-display text-sm font-semibold text-canvas transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
            >
              Request resume
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition hover:border-accent/60 hover:text-accent"
            >
              Get in touch
            </Link>
            {[
              {
                href: "mailto:ktown5422@gmail.com",
                label: "Email",
                icon: <IconMail size={22} />,
              },
              {
                href: "https://www.linkedin.com/in/kevin-townson/",
                label: "LinkedIn",
                icon: <IconBrandLinkedin size={22} />,
              },
              {
                href: "https://www.youtube.com/@TechManKev",
                label: "YouTube",
                icon: <IconBrandYoutube size={22} />,
              },
            ].map(({ href, label, icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-raised text-muted transition hover:border-accent/50 hover:text-accent"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBody;
