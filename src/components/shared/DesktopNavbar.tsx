"use client";
import { IconChevronDown } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ArrowButton from "../pages/blog-details/ArrowButton";

export const navbarData = [
  {
    id: "home",
    menuTitle: "Home",
    path: "/",
  },
  {
    id: "about-page",
    menuTitle: "About",
    path: "/about-us",
  },
  {
    id: "projects-page",
    menuTitle: "Projects",
    path: "/all-projects",
  },
  {
    id: "contact-page",
    menuTitle: "Contact",
    path: "/contact",
  },
  {
    id: "github-page",
    menuTitle: "GitHub",
    path: "https://github.com/ktown5422",
  },
];

const DesktopNavbar = () => {
  const pathName = usePathname();
  return (
    <div className="desktop-navbar-container">
      <div>
        <Link href={`/`} className="logo-main">
          Kevin Townson
        </Link>
      </div>
      <ul className="desktop-menu-items" id="primary">
        {navbarData.map(({ id, menuTitle, path }) => {
          return (
            <li key={id} className={`menu-item `}>
              <Link
                href={`${path}`}
                target={path.startsWith("http") ? "_blank" : undefined}
                rel={path.startsWith("http") ? "noreferrer" : undefined}
                className={`textL font-medium navbar-hover-text  ${pathName === path ? "text-secondary" : "menu-item-text-white"
                  }`}
              >
                {" "}
                {menuTitle}
              </Link>
            </li>
          );
        })}
      </ul>
      <ArrowButton link="/contact" />
    </div>
  );
};

export default DesktopNavbar;
