/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-scroll";
import styles from "./Navigation.module.css";
import portfolio_logo from ".//../../../public/Rashidul_logo.png";
import { FiX } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";


const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef();


  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

 
  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
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
          >
            {/* <h3>Rashidul</h3>
            <h4>Islam</h4> */}
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
};

export default Navigation;
