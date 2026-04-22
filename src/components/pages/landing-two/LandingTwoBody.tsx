"use client";

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
  IconMapPin,
  IconMail,
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
    icon: <IconCode size={25} />,
    title: "Frontend systems",
    text: "React and Next.js interfaces with component structure, responsive behavior, and clean interaction states.",
  },
  {
    icon: <IconCloudCode size={25} />,
    title: "Cloud-backed apps",
    text: "Auth, databases, APIs, deployment, and the glue code that turns an interface into a usable product.",
  },
  {
    icon: <IconDeviceDesktopAnalytics size={25} />,
    title: "Product polish",
    text: "Layout, hierarchy, copy, and visual rhythm that help projects feel intentional instead of template-built.",
  },
];

const heroStats = [
  { value: "02", label: "featured GitHub projects" },
  { value: "3+", label: "years building software" },
  { value: "2026", label: "portfolio refresh" },
];

const recruiterSignals = [
  "React / Next.js frontend engineering",
  "Full-stack product builds with auth, data, and deployment",
  "Readable GitHub projects with live demos",
];

const coreSkills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Supabase",
  "Clerk",
  "Google Cloud",
  "Tailwind",
  "MongoDB",
  "Redux",
  "REST APIs",
  "Responsive UI",
];

const recruiterQuickScan = [
  {
    icon: <IconBriefcase2 size={22} />,
    label: "Target roles",
    value: "Frontend Engineer / React Developer / Full-stack Junior",
  },
  {
    icon: <IconMapPin size={22} />,
    label: "Location",
    value: "Houston, Texas / Remote-friendly",
  },
  {
    icon: <IconCalendarCheck size={22} />,
    label: "Availability",
    value: "Open to software roles and product builds",
  },
  {
    icon: <IconFileText size={22} />,
    label: "Resume",
    value: "Available on request by email",
  },
];

const githubProfileImage = "https://github.com/ktown5422.png";

const LandingTwoBody = () => {
  return (
    <main className="home-2026 mt-xxl-10 mt-xl-8 mt-6 position-relative z-2">
      <section className="home-hero-2026">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="home-hero-2026__copy card-style-two"
        >
          <div className="home-hero-2026__status-row">
            <span className="home-hero-2026__status">
              Available for software roles and product builds
            </span>
            <span className="home-hero-2026__signal" aria-hidden="true" />
          </div>
          <span className="home-hero-2026__eyebrow textS">
            Kevin Townson / React and Next.js Software Engineer
          </span>
          <h1 className="home-hero-2026__title">
            I build full-stack web apps that feel sharp, useful, and ready to ship.
          </h1>
          <p className="textL home-hero-2026__text">
            I work across React, Next.js, cloud services, and product UI to turn
            ideas into fast, practical software with a little bit of taste.
          </p>
          <div className="home-hero-2026__proof-list" aria-label="Recruiter proof points">
            {recruiterSignals.map((signal) => (
              <span key={signal}>
                <IconUserCheck size={17} />
                {signal}
              </span>
            ))}
          </div>
          <div className="home-hero-2026__actions">
            <Link href="/all-projects" className="home-hero-2026__primary">
              <span>View projects</span>
              <IconArrowUpRight size={20} />
            </Link>
            <Link
              href="https://github.com/ktown5422"
              className="home-hero-2026__secondary"
            >
              GitHub
            </Link>
            <Link
              href="mailto:ktown5422@gmail.com?subject=Resume%20request%20for%20Kevin%20Townson"
              className="home-hero-2026__secondary"
            >
              Request resume
            </Link>
            <Link href="/contact" className="home-hero-2026__secondary">
              Contact me
            </Link>
          </div>
          <div className="home-hero-2026__stats">
            {heroStats.map((stat) => (
              <div className="home-hero-2026__stat" key={stat.label}>
                <span>{stat.value}</span>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="home-profile-2026 card-style-two"
        >
          <Image
            src={githubProfileImage}
            width={520}
            height={640}
            alt="Kevin Townson GitHub profile"
            className="home-profile-2026__image"
            priority
          />
          <div className="home-profile-2026__content">
            <span className="home-profile-2026__badge">
              <IconSparkles size={18} />
              Product-minded engineer
            </span>
            <p>
              Focused on portfolio-grade interfaces, practical app architecture,
              and software that reads clearly to real users.
            </p>
          </div>
        </motion.aside>
      </section>

      <section className="home-projects-2026" aria-label="Featured projects">
        <div className="home-section-heading">
          <span className="textS">Selected work</span>
          <h2 className="heading-2">The projects I want people to notice first.</h2>
        </div>
        <div className="home-projects-2026__grid">
          {featuredProjects.map((project, index) => (
            <motion.article
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="home-project-card card-style-two"
              key={project.title}
            >
              <Link href={project.liveLink} className="home-project-card__media">
                <Image
                  src={project.image}
                  width={720}
                  height={460}
                  alt={`${project.title} preview`}
                  className="home-project-card__image"
                />
              </Link>
              <div className="home-project-card__content">
                <div className="home-project-card__meta">
                  <span>{project.type}</span>
                  <span>2026</span>
                </div>
                <h3 className="heading-3">{project.title}</h3>
                <p className="textM">{project.description}</p>
                <div className="home-project-card__stack">
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
                <div className="home-project-card__links">
                  <Link href={project.liveLink}>
                    <IconWorld size={18} />
                    Live
                  </Link>
                  {project.caseStudyLink ? (
                    <Link href={project.caseStudyLink}>
                      <IconArrowUpRight size={18} />
                      Case study
                    </Link>
                  ) : null}
                  <Link href={project.repoLink}>
                    <IconBrandGithub size={18} />
                    Repo
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="home-recruiter-2026 card-style-two">
        <div className="home-recruiter-2026__intro">
          <span className="textS">Recruiter snapshot</span>
          <h2 className="heading-2">What I bring to a React or full-stack team.</h2>
          <p className="textM">
            I am strongest where frontend craft meets practical product engineering:
            building clear interfaces, wiring real data flows, and deploying work
            people can actually try.
          </p>
        </div>
        <div className="home-recruiter-2026__skills" aria-label="Core skills">
          {coreSkills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="home-quick-scan-2026" aria-label="Recruiter quick scan">
        <div className="home-section-heading">
          <span className="textS">Quick scan</span>
          <h2 className="heading-2">The hiring details without the digging.</h2>
        </div>
        <div className="home-quick-scan-2026__grid">
          {recruiterQuickScan.map((item, index) => (
            <motion.article
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.38, delay: index * 0.04 }}
              className="home-quick-scan-card card-style-two"
              key={item.label}
            >
              <span className="home-quick-scan-card__icon">{item.icon}</span>
              <span className="home-quick-scan-card__label">{item.label}</span>
              <strong>{item.value}</strong>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="home-capabilities-2026" aria-label="Capabilities">
        {capabilities.map((item, index) => (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay: index * 0.06 }}
            className="home-capability-card card-style-two"
            key={item.title}
          >
            <span className="home-capability-card__icon">{item.icon}</span>
            <h3 className="heading-4">{item.title}</h3>
            <p className="textM">{item.text}</p>
          </motion.article>
        ))}
      </section>

      <section className="home-contact-2026 card-style-two">
        <div>
          <span className="textS home-contact-2026__eyebrow">
            Next collaboration
          </span>
          <h2 className="heading-2">Let’s build something clean and useful.</h2>
        </div>
        <div className="home-contact-2026__actions">
          <Link
            href="mailto:ktown5422@gmail.com?subject=Resume%20request%20for%20Kevin%20Townson"
            className="home-contact-2026__primary"
          >
            Request resume
          </Link>
          <Link href="/contact" className="home-contact-2026__primary">
            Get in touch
          </Link>
          <Link
            href="mailto:ktown5422@gmail.com"
            className="home-contact-2026__icon-link"
            aria-label="Email"
          >
            <IconMail size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kevin-townson/"
            className="home-contact-2026__icon-link"
            aria-label="LinkedIn"
          >
            <IconBrandLinkedin size={24} />
          </Link>
          <Link
            href="https://www.youtube.com/@TechManKev"
            className="home-contact-2026__icon-link"
            aria-label="YouTube"
          >
            <IconBrandYoutube size={24} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LandingTwoBody;
