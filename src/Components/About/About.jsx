/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */

import styles from "./About.module.css";
import {useRef, useEffect} from "react"
import about_img_Rashidul_Islam from "../../assets/images/Rashidul islam.jpeg";
import coding from "../../assets/images/about img/coding.png";
import programming from "../../assets/images/about img/programming.png";
import responsive from "../../assets/images/about img/responsive devices.png";

const About = () => {
  const aboutSectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const hireBtnRef = useRef(null);

  useEffect(() => {
    const aboutSection = aboutSectionRef.current;
    const image = imageRef.current;
    const text = textRef.current;
    const  hireBtn =  hireBtnRef.current;
  
    if (!aboutSection || !image || !text || ! hireBtn) return;
  
    const checkPosition = () => {
      const rect = aboutSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

        // 30% of the window height from top and bottom
        const threshold = windowHeight * 0.3;
  
      if ( rect.top <= windowHeight - threshold &&
        rect.bottom >= threshold) {
        image.classList.add(styles.show);
        text.classList.add(styles.show);
        hireBtn.classList.add(styles.show);
      } else {
        image.classList.remove(styles.show);
        text.classList.remove(styles.show);
        hireBtn.classList.remove(styles.show);
      }
    };
  
    window.addEventListener('scroll', checkPosition);
    checkPosition(); // Initial check
  
    return () => window.removeEventListener('scroll', checkPosition);
  }, []);

  return (
    <div className={styles.aboutContainer}>
      <section className={styles.aboutMe} ref={aboutSectionRef}>
        <div className={styles.innerContainer}>
          <h2>ABOUT ME</h2>
          <div className={styles.content}>
            <div className={styles.aboutImg}>
              <img
                src={about_img_Rashidul_Islam}
                alt="Rashidul Islam"
                ref={imageRef}
              />
            </div>
            <div className={styles.aboutText}>
              <p ref={textRef}>
                <h3>HELLO SIR,</h3> This is Md: Rashidul Islam. <br /> A dedicated
                 <span> Front-end Web Developer</span> with a genuine passion for
                coding. With every line of code, I find joy in the process and
                am committed to delivering excellence in every project I
                undertake. My focus is on providing clean, efficient code and
                achieving pixel-perfect, responsive designs.
                <br />
                <br />
                As a Front-end Web Developer, my primary goal is to create
                user-friendly and visually appealing interfaces that adapt
                seamlessly across all devices. I believe in the importance of
                responsive design, ensuring that every user hasa consistent and
                optimal experience regardless of their device or screen size.
                <br />
                <br />
                I approach each project with meticulous attention to detail,
                striving for perfection in every aspect of front-end
                development. From conceptualization to implementation, I work
                tirelessly to translate ideas into intuitive and engaging user
                experiences.
              </p>

              <button ref={hireBtnRef} className={styles.hireMeBtn}>Hire Me</button>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default About;
