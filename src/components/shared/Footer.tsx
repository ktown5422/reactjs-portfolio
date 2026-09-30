import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";

const footerLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about-us" },
  { title: "Projects", path: "/all-projects" },
  { title: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ktown5422",
    icon: <IconBrandGithub size={20} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kevin-townson/",
    icon: <IconBrandLinkedin size={20} />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@TechManKev",
    icon: <IconBrandYoutube size={20} />,
  },
  {
    label: "Email",
    href: "mailto:ktown5422@gmail.com",
    icon: <IconMail size={20} />,
  },
];

const Footer = () => {
  return (
    <footer className="relative z-10 mt-24 border-t border-ink/5">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-display font-semibold">
            Kevin Townson<span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            © {new Date().getFullYear()} — Built with Next.js and Tailwind CSS.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerLinks.map(({ title, path }) => (
              <li key={path}>
                <Link
                  href={path}
                  className="text-sm font-medium text-muted transition hover:text-accent"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          {socialLinks.map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-card text-muted transition hover:border-accent/50 hover:text-accent"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
