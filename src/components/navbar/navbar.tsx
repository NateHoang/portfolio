import { useEffect, useState } from "react";
import picture from "../../assets/IMG_1744.jpg";
import "./navbar.css";

interface NavLink {
  name: string;
  url: string;
}

const navLinks: NavLink[] = [
  { name: "Introduction", url: "#introduction" },
  { name: "About", url: "#about" },
  { name: "Education", url: "#education" },
  { name: "Experience", url: "#experience" },
  { name: "Projects", url: "#projects" },
  { name: "Interest", url: "#interest" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Introduction"); // Default to Introduction

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "Introduction";
      navLinks.forEach((link) => {
        const section = document.querySelector(link.url);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          const offset = -60; // Height of your navbar
          if (sectionTop - offset < window.innerHeight / 2) {
            currentSection = link.name;
          }
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const createNavLinks = (links: NavLink[]) => {
    return links.map((link, index) => (
      <li className="nav-item" key={index}>
        <a
          className={`nav-link ${activeLink === link.name ? "active" : ""}`}
          href={link.url}
          onClick={(e) => {
            e.preventDefault();
            setActiveLink(link.name);
            const section = document.querySelector(link.url);
            if (section) {
              window.scrollTo({
                top: (section as HTMLElement).offsetTop,
                behavior: "smooth",
              });
            }
          }}
        >
          {link.name}
        </a>
      </li>
    ));
  };

  return (
    <nav className="nav navbar-expand-md navbar-dark bg-dark">
      <div className="navbar-header">
        <img src={picture} alt="Profile" className="navbar-picture" />
      </div>
      <div className="mx-auto order-0"></div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">{createNavLinks(navLinks)}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
