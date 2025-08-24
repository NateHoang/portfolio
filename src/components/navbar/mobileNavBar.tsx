import React, { useEffect, useState } from "react";
import "./mobileNavBar.css";

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

const MobileNavbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState(navLinks[0].name);
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = navLinks[0].name;
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

  const handleNavLinkClick = (
    linkName: string,
    linkUrl: string,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    setActiveLink(linkName);
    const section = document.querySelector(linkUrl) as HTMLElement;
    if (section) {
      window.scrollTo({
        top: section.offsetTop, // Adjust if you have a fixed header
        behavior: "smooth",
      });
    }
    setNavbarOpen(false); // Close the navbar on click
  };

  return (
    <div>
      <div className="header">
        Nathan Hoang
        <span className="hamburger" onClick={() => setNavbarOpen(!navbarOpen)}>
          &#9776;
        </span>
      </div>
      <ul className={`navbar ${navbarOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <li
            className={`navbar-item ${
              activeLink === link.name ? "active" : ""
            }`}
            key={link.name}
          >
            <a
              href={link.url}
              onClick={(e) => handleNavLinkClick(link.name, link.url, e)}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNavbar;
