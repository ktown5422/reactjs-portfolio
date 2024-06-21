"use client";
import {
  ArrowDown2,
  Blogger,
  Briefcase,
  CallAdd,
  Home2,
  UserSquare,
} from "iconsax-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import AnimateHeight from "react-animate-height";

const navbarData = [
  {
    id: "menu1",
    icon: <Home2 />,
    menuTitle: "Home",
    path: "#",
    menuItems: [
      {
        id: "homeONe",
        title: "Home One",
        menuItemPath: "/home-page",
      },
      {
        id: "homeTwo",
        title: "Home Two",
        menuItemPath: "/home-page",
      },
    ],
  },
  {
    id: "menu2",
    menuTitle: "Blog",
    icon: <Blogger />,
    path: "#",
    menuItems: [
      {
        id: "all-blogs",
        title: "Blogs",
        menuItemPath: "/blogs",
      },
      {
        id: "Blogs-details",
        title: "Blog Details",
        menuItemPath: "/blog-details",
      },
    ],
  },
  {
    id: "project",
    menuTitle: "Projects",
    icon: <Briefcase />,
    path: "#",
    menuItems: [
      {
        id: "all-project",
        title: "All Project",
        menuItemPath: "/all-projects",
      },
      {
        id: "project-details",
        title: "Project Details",
        menuItemPath: "/project-details",
      },
    ],
  },
  {
    id: "services-section",
    menuTitle: "Services",
    icon: <Briefcase />,
    path: "/services",
  },

  {
    id: "about-page",
    icon: <UserSquare />,
    menuTitle: "About",
    path: "/about-us",
  },
  {
    id: "contact-page",
    icon: <CallAdd />,
    menuTitle: "Contact",
    path: "/contact",
  },
];

type Props = {
  sidebarToggle: boolean;
  handleToggle: () => void;
  setSidebarToggle: Dispatch<SetStateAction<boolean>>;
};
const MobileNavbar = ({
  sidebarToggle,
  handleToggle,
  setSidebarToggle,
}: Props) => {
  const [dropDown, setDropDown] = useState("");

  const handleDropDown = (id: string) => {
    if (dropDown === id) {
      setDropDown("");
    } else {
      setDropDown(id);
    }
  };

  const pathName = usePathname();

  return (
    <div className="">
      <div
        className={`mobile-sidebar-overlay ${sidebarToggle
          ? "mobile-sidebar-overlay-show"
          : "mobile-sidebar-overlay-hide"
          }`}
        onClick={handleToggle}
      ></div>
      <div
        className={`mobile-sidebar-containe ${sidebarToggle ? "mobile-sidebar-show" : "mobile-sidebar-hide"
          }`}
      >
        <Link href={`/`} className="d-block logo-main-mobile">
          Bento<span>X</span>
        </Link>

        <div className="sidebar-menu-container">
          <ul className="mobile-sidebar-menus">
            {navbarData.map(({ id, menuTitle, path, menuItems, icon }) => {
              let isActive = menuItems?.some(
                (path) => pathName == path.menuItemPath
              );
              return menuItems ? (
                <li
                  key={`${id}`}
                  className={` position-relative  ${isActive && "text-secondary"
                    }`}
                >
                  <p
                    onClick={() => handleDropDown(id)}
                    className="d-flex align-items-center mobile-menu-item justify-content-between mobile-single-menu"
                  >
                    {" "}
                    <span className=" mobile-menu-link">
                      {icon} <span className="textXL">{menuTitle}</span>{" "}
                    </span>
                    <ArrowDown2
                      className={`${dropDown === id ? "icon-rotate" : "icon-normal"
                        }`}
                    />
                  </p>
                  <AnimateHeight
                    duration={500}
                    height={dropDown === id ? "auto" : 0}
                    aria-label={`example-panel-${menuTitle}`}
                  >
                    <ul className="list-unstyled mobile-sidebar-menu-modal">
                      {menuItems.map(({ id, title, menuItemPath }) => (
                        <li key={id} className={`sub-item `}>
                          <Link
                            onClick={() => setSidebarToggle(false)}
                            href={`${menuItemPath}`}
                            className="d-flex align-items-center justify-content-between mobile-single-menu "
                          >
                            {" "}
                            <span
                              className={`textM mobile-menu-link ${pathName === menuItemPath && "text-secondary"
                                }`}
                            >
                              {title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AnimateHeight>
                </li>
              ) : (
                <li
                  key={id}
                  className={`mobile-menu-item  ${pathName === path && "text-secondary"
                    }`}
                >
                  <Link
                    onClick={() => setSidebarToggle(false)}
                    href={`${path}`}
                    className="d-flex align-items-center justify-content-between mobile-single-menu"
                  >
                    {" "}
                    <span className="textXL mobile-menu-link">
                      {icon} <span>{menuTitle}</span>{" "}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
