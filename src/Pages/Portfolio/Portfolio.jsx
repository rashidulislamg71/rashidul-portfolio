import Navigation from "../../Components/Navigation/Navigation";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Projeacts from "../../Components/Projects/Projects";
import Skills from "./../../Components/Skills/Skills";
import Contact from "./../../Components/Contact/Contact";
import styles from "./Portfolio.module.css";
import Services from "../../Components/MyServices/Services";

function Portfolio() {
  return (
    <div className={styles.portfolio}>
      <section id="navigation_section">
        <Navigation />
      </section>

      <section id="hero_section">
        <Hero />
      </section>

      <section id="about_section">
        <About />
      </section>

      <section id="services_section">
        <Services />
      </section>

      <section id="projects_section">
        <Projeacts />
      </section>

      <section id="skills_section">
        <Skills />
      </section>

      <section id="contact_section">
        <Contact />
      </section>
    </div>
  );
}

export default Portfolio;
