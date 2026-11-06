import {
  IconArrowUpRight,
  IconCloudCode,
  IconDeviceDesktopAnalytics,
  IconNetwork,
} from "@tabler/icons-react";
import Link from "next/link";

const labs = [
  {
    title: "Datacenter Monitoring Lab",
    href: "https://github.com/ktown5422/datacenter-monitoring-lab",
    icon: IconDeviceDesktopAnalytics,
    description: "An Ubuntu Server lab for monitoring CPU, memory, and disk usage with Prometheus, Node Exporter, and Grafana.",
    skills: ["Ubuntu", "Prometheus", "Grafana", "PostgreSQL", "Bash", "Cron"],
    practice: "The walkthrough covers testing alerts, investigating service failures with Linux logs, and verifying PostgreSQL backup and restore.",
  },
  {
    title: "Datacenter Network Operations Lab",
    href: "https://github.com/ktown5422/datacenter-network-operations-lab",
    icon: IconNetwork,
    description: "A three-VM Ubuntu lab in UTM with two private subnets connected by a Linux router.",
    skills: ["IPv4 routing", "DNS & DHCP", "SSH", "UFW", "Wireshark", "iperf3"],
    practice: "The walkthrough covers diagnosing simulated DNS, SSH, and routing failures, verifying recovery, and documenting incidents.",
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

export const infrastructureLabCount = labs.length;

const learningAreas = [
  { title: "Azure Networking Lab", text: "VNets, subnets, NSGs, IP addressing, DNS, SSH, and connectivity troubleshooting." },
  { title: "Azure Monitoring & Incident Response Lab", text: "Azure Monitor, Log Analytics, Action Groups, alerts, incident investigation, and runbooks." },
  { title: "Azure App Deployment Lab", text: "App Service, GitHub Actions, application configuration, deployment logs, and troubleshooting." },
  { title: "IT Support Lab", text: "Active Directory, Windows support, DNS/DHCP, Group Policy, Microsoft 365, and hardware concepts." },
];

export default function InfrastructureLabs({ showLearningAreas = false }: { showLearningAreas?: boolean }) {
  return (
    <section id="infrastructure-labs" className="mt-24 scroll-mt-24" aria-labelledby="infrastructure-labs-heading">
      <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-accent">Hands-on learning</span>
      <h2 id="infrastructure-labs-heading" className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Infrastructure & cloud labs</h2>
      <p className="mt-4 max-w-3xl text-muted">I use personal labs to practice the work behind a reliable service, from monitoring Linux hosts and tracing network failures to documenting recovery. My Azure lab explores how to track and investigate cloud spending.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
