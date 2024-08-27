/* eslint-disable react/display-name */
import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from "react";
import { Link, scrollSpy } from "react-scroll";
import styles from "./Navigation.module.css";
import portfolio_logo from ".//../../../public/Rashidul_logo.png";
import { FiX } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

const Navigation = forwardRef((props, ref) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const navRef = useRef();

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    setIsVisible(true);
    window.addEventListener("scroll", handleScroll);
    scrollSpy.update();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useImperativeHandle(ref, () => ({
    activeLink,
    setActiveLink,
  }));

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
    navRef.current.classList.remove(styles.responsive_nav);
  };

  return (
    <div>
      <header
        className={`${styles.nav_styles}  ${isVisible ? styles.visible : ""} ${
          scrolled ? styles.scrolled : ""
        }`}
      >
        <div className={styles.logo}>
          <Link
            to="hero_section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
            delay={0.8}
            onSetActive={() => setActiveLink("hero_section")}
            className={activeLink === "hero_section" ? styles.active : ""}
          >
            <img src={portfolio_logo} alt="" />
          </Link>
        </div>
        <nav ref={navRef} className={styles.navigation_section}>
          <Link
            to="hero_section"
            spy={true}
            smooth={true}
            offset={-100}
            duration={400}
            delay={0.8}
            onClick={closeMenu}
            onSetActive={() => setActiveLink("hero_section")}
            className={activeLink === "hero_section" ? styles.active : ""}
          >
            Home
          </Link>

          <Link
            to="about_section"
            spy={true}
            smooth={true}
            offset={-74}
            duration={400}
            delay={0.8}
            onClick={closeMenu}
            onSetActive={() => setActiveLink("about_section")}
            className={activeLink === "about_section" ? styles.active : ""}
          >
            About
          </Link>

          <Link
            to="service_section"
            spy={true}
            smooth={true}
            offset={-74}
            duration={400}
            delay={0.8}
            onClick={closeMenu}
            onSetActive={() => setActiveLink("service_section")}
            className={activeLink === "service_section" ? styles.active : ""}
          >
            Services
          </Link>

          <Link
            to="projects_section"
            spy={true}
            smooth={true}
            offset={-74}
            duration={400}
            delay={0.8}
            onClick={closeMenu}
            onSetActive={() => setActiveLink("projects_section")}
            className={activeLink === "projects_section" ? styles.active : ""}
          >
            Projects
          </Link>

          <Link
            to="skills_section"
            spy={true}
            smooth={true}
            offset={-74}
            duration={400}
            delay={0.8}
            onClick={closeMenu}
            onSetActive={() => setActiveLink("skills_section")}
            className={activeLink === "skills_section" ? styles.active : ""}
          >
            Skills
          </Link>

          <Link
            to="contact_section"
            spy={true}
            smooth={true}
            offset={-74}
            duration={400}
            delay={0.8}
            onClick={closeMenu}
            onSetActive={() => setActiveLink("contact_section")}
            className={activeLink === "contact_section" ? styles.active : ""}
          >
            Contact me
          </Link>
        </nav>

        {showMenu ? (
          <button
            className={`${styles.nav_btn} ${styles.nav_close_btn}`}
            onClick={showNavbar}
          >
            <FiX />
          </button>
        ) : (
          <button className={styles.nav_btn} onClick={showNavbar}>
            <RxHamburgerMenu />
          </button>
        )}
      </header>
    </div>
  );
});

export default Navigation;
