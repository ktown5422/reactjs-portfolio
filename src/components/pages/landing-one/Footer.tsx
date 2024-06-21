import Link from "next/link";

const Footer = () => {
  return (
    <footer className="landing-footer m-t-120px position-relative z-2">
      <div className="landing-footer__left">
        <p className="landing-footer__copyright-text textL">
          Copyright @ {new Date().getFullYear()}{" "}
        </p>
        <p className="landing-footer__design-text textL">
          Designed By{" "}
          <Link className="textL" href="/home-page">
            Kevin Townson
          </Link>
        </p>
      </div>
      <ul className="landing-footer__menu">
        <li className="landing-footer__menu-item">
          <Link className="textL" href={`/home-page`}>
            Home
          </Link>
        </li>
        <li className="landing-footer__menu-item">
          <Link className="textL" href={`/about-us`}>
            About
          </Link>
        </li>
        <li className="landing-footer__menu-item">
          <Link className="textL" href={`/all-projects`}>
            Projects
          </Link>
        </li>
        <li className="landing-footer__menu-item">
          <Link className="textL" href={`/contact`}>
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
