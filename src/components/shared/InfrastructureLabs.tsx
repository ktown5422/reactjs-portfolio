import { IconArrowUpRight, IconCloudCode, IconDeviceDesktopAnalytics } from "@tabler/icons-react";
import Link from "next/link";

const labs = [
  {
    title: "Datacenter Monitoring Lab",
    href: "https://github.com/ktown5422/datacenter-monitoring-lab",
    icon: IconDeviceDesktopAnalytics,
    description: "A personal environment for learning how Linux servers and services are monitored, how failures are investigated, and how backups support recovery.",
    skills: ["Ubuntu", "Prometheus", "Grafana", "PostgreSQL", "Alerts", "Backups"],
    practice: "Practicing metrics collection, service monitoring, log investigation, troubleshooting, and technical documentation.",
  },
  {
    title: "Azure Cost Visibility Dashboard",
    href: "https://github.com/ktown5422/azure-cost-visibility-dashboard",
    icon: IconCloudCode,
    description: "A hands-on Azure lab exploring how cloud spending is monitored, how budgets trigger notifications, and how unexpected costs can be investigated.",
    skills: ["Cost Management", "Budgets", "Azure Monitor", "Logic Apps", "Workbooks", "Tags"],
    practice: "Practicing actual and forecast thresholds, Action Groups, email notifications, Log Analytics, and cost investigation workflows.",
  },
];

const learningAreas = [
  { title: "Azure Networking Lab", text: "VNets, subnets, NSGs, IP addressing, DNS, SSH, and connectivity troubleshooting." },
  { title: "Azure Monitoring & Incident Response Lab", text: "Azure Monitor, Log Analytics, Action Groups, alerts, incident investigation, and runbooks." },
  { title: "Azure App Deployment Lab", text: "App Service, GitHub Actions, application configuration, deployment logs, and troubleshooting." },
  { title: "IT Support Lab", text: "Active Directory, Windows support, DNS/DHCP, Group Policy, Microsoft 365, and hardware concepts." },
];

export default function InfrastructureLabs({ showLearningAreas = false }: { showLearningAreas?: boolean }) {
  return (
    <section className="mt-24" aria-label="Infrastructure and cloud labs">
      <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent">Hands-on learning</span>
      <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Infrastructure & cloud labs</h2>
      <p className="mt-4 max-w-3xl text-muted">Personal learning environments where I configure systems, monitor services, troubleshoot failures, and document what I learn. These labs are not production systems or professional cloud experience.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {labs.map(({ title, href, icon: Icon, description, skills, practice }) => (
          <article key={title} className="flex flex-col rounded-4xl border border-ink/10 bg-card p-7 sm:p-8">
            <Icon size={32} className="text-accent" aria-hidden="true" />
            <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-accent">Personal lab</p>
            <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">{title}</h3>
            <p className="mt-3 text-muted">{description}</p>
            <div className="mt-5 flex flex-wrap gap-2">{skills.map(skill => <span key={skill} className="rounded-full bg-raised px-3 py-1 text-xs font-medium text-muted">{skill}</span>)}</div>
            <p className="mt-5 text-sm leading-relaxed text-muted">{practice}</p>
            <Link href={href} className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-accent">View repository <IconArrowUpRight size={18} /><span className="sr-only"> for {title}</span></Link>
          </article>
        ))}
      </div>
      {showLearningAreas && (
        <div className="mt-10">
          <h3 className="font-display text-2xl font-bold">Additional lab learning areas</h3>
          <p className="mt-3 text-muted">Other areas in my GitHub learning roadmap. Public repositories are not linked yet.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {learningAreas.map(area => <article key={area.title} className="rounded-3xl border border-ink/10 p-6"><h4 className="font-display font-semibold">{area.title}</h4><p className="mt-2 text-sm text-muted">{area.text}</p></article>)}
          </div>
        </div>
      )}
    </section>
  );
}
