"use client";

import { IconArrowUpRight, IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export const navbarData = [
  { id: "home", menuTitle: "Home", path: "/" },
  { id: "about-page", menuTitle: "About", path: "/about-us" },
  { id: "projects-page", menuTitle: "Projects", path: "/all-projects" },
  { id: "contact-page", menuTitle: "Contact", path: "/contact" },
  { id: "github-page", menuTitle: "GitHub", path: "https://github.com/ktown5422" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-canvas/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight"
          onClick={() => setOpen(false)}
        >
          Kevin Townson<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navbarData.map(({ id, menuTitle, path }) => {
            const external = path.startsWith("http");
            const active = pathName === path;
            return (
              <Link
                key={id}
                href={path}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-raised text-accent"
                    : "text-muted hover:bg-raised hover:text-ink"
                }`}
              >
                {menuTitle}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 font-display text-sm font-semibold text-canvas transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25 sm:inline-flex"
          >
            Let&apos;s talk
            <IconArrowUpRight size={16} />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-card text-ink transition hover:border-accent/50 hover:text-accent md:hidden"
          >
            {open ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Mobile"
          className="border-t border-ink/5 bg-canvas/95 px-4 pb-6 pt-3 backdrop-blur-xl md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navbarData.map(({ id, menuTitle, path }) => {
              const external = path.startsWith("http");
              const active = pathName === path;
              return (
                <li key={id}>
                  <Link
                    href={path}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                    className={`block rounded-2xl px-4 py-3 text-base font-medium transition ${
                      active
                        ? "bg-raised text-accent"
                        : "text-muted hover:bg-raised hover:text-ink"
                    }`}
                  >
                    {menuTitle}
                  </Link>
                </li>
              );
            })}
            <li className="mt-2">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 font-display text-sm font-semibold text-canvas"
              >
                Let&apos;s talk
                <IconArrowUpRight size={16} />
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
