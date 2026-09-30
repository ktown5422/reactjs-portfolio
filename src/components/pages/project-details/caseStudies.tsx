import codeCommitImage from "@/../public/image/CodeStreak-app-pic.png";
import realEstateImage from "@/../public/image/NestFind-real-state-app-pic.png";
import {
  IconBuildingEstate,
  IconCalendarStats,
  IconDatabase,
  IconGitCommit,
  IconLayoutDashboard,
  IconSearch,
} from "@tabler/icons-react";
import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export type CaseStudy = {
  eyebrow: string;
  meta: string;
  title: string;
  summary: string;
  stack: string[];
  liveLink: string;
  repoLink: string;
  image: StaticImageData;
  imageAlt: string;
  facts: { label: string; value: string }[];
  overviewTitle: string;
  overviewText: string;
  process: { icon: ReactElement; title: string; text: string }[];
  outcomeTitle: string;
  outcomes: string[];
};

export const caseStudies = {
  codestreak: {
    eyebrow: "Featured case study",
    meta: "Developer platform / 2026",
    title: "CodeStreak",
    summary:
      "A GitHub-backed project for helping developers build consistency, share momentum, and turn regular commits into a community habit.",
    stack: ["React", "Next.js", "GitHub", "Community UX"],
    liveLink: "https://codestreakapp.vercel.app/",
    repoLink: "https://github.com/ktown5422/code-commit-club",
    image: codeCommitImage,
    imageAlt: "CodeStreak project preview",
    facts: [
      { label: "Project type", value: "Developer community platform" },
      { label: "Role", value: "Frontend + product UX" },
      { label: "Focus", value: "Consistency, accountability, progress" },
      { label: "Source", value: "GitHub project" },
    ],
    overviewTitle: "Designing for developer consistency.",
    overviewText:
      "CodeStreak is strongest when it feels like more than a code sample. The case study now frames it as a product: a place where developers can see progress, stay accountable, and connect around the habit of shipping small improvements.",
    process: [
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
    ],
    outcomeTitle: "A stronger story for a GitHub project.",
    outcomes: [
      "A portfolio-worthy project story that shows product thinking, not just a repository link.",
      "A clearer developer-community angle built around commits, accountability, and learning habits.",
      "A flexible visual foundation that can scale as CodeStreak grows.",
    ],
  },
  nestfind: {
    eyebrow: "Full-stack case study",
    meta: "Marketplace platform / 2026",
    title: "NestFind Real Estate App",
    summary:
      "A modern property discovery app built around authenticated flows, searchable listings, responsive screens, and a polished marketplace experience.",
    stack: ["Next.js", "Clerk", "Supabase", "GCP", "Tailwind"],
    liveLink: "https://nestfindapp.vercel.app/",
    repoLink: "https://github.com/ktown5422/real-estate-app",
    image: realEstateImage,
    imageAlt: "NestFind Real Estate App preview",
    facts: [
      { label: "Project type", value: "Real estate marketplace app" },
      { label: "Role", value: "Full-stack product build" },
      { label: "Focus", value: "Auth, listings, search, responsive UI" },
      { label: "Source", value: "GitHub project" },
    ],
    overviewTitle: "Building trust into property discovery.",
    overviewText:
      "NestFind gives the portfolio a full-stack product example. It shows that the work goes beyond visual polish into user accounts, data structure, listings, search behavior, and production deployment.",
    process: [
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
    ],
    outcomeTitle: "A full-stack project recruiters can inspect.",
    outcomes: [
      "A stronger proof point for full-stack React and Next.js work.",
      "A recruiter-friendly example of auth, data, search, and polished UI in one project.",
      "A flexible foundation that can grow into saved listings, agent workflows, and richer property management.",
    ],
  },
} satisfies Record<string, CaseStudy>;

export type CaseStudyKey = keyof typeof caseStudies;
