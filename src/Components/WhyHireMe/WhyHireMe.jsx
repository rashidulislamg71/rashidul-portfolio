/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import styles from "./WhyHireMe.module.css";

import whyHireMeImage from "../../assets/images/Why_Hire/why.png";
import HireMe from "../HireMeBtn/HireMe";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useState} from "react";
import ScrollTrigger from "react-scroll-trigger";

const WhyHireMe = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div id="whyHireHe" className={styles.whyHireMe}>
      <ScrollTrigger
        onEnter={() => setVisible(true)}
        onExit={() => setVisible(false)}
      >
        <div className={styles.banner}>
          <div
            className={`${styles.banner_content} ${
              visible ? styles.animated : ""
            }`}
          >
            <h2>Thank You So Much!</h2>
            <p>
              I'm excited to collaborate with you. With a blend of creativity,
               technical expertise, and a strong commitment to excellence,
               I'll help turn your ideas into reality, delivering results
              that exceed expectations.
            </p>

            <Link to="/">
              <button className={styles.BackHomeBtn}>
                {" "}
                <FaArrowLeft /> Home
              </button>
            </Link>
          </div>
        </div>
      </ScrollTrigger>
      <div className={styles.innerContent}>
        <img src={whyHireMeImage} alt="Why Hire Me" />
        <div className={styles.content}>
          <h3>Expert in Front-End Development</h3>
          <p>
            I specialize in creating modern, responsive websites that provide an
            excellent user experience, using advanced technologies and
            techniques.
          </p>

          <h3>Clean and Efficient Code</h3>
          <p>
            I ensure my code is well-organized and easy to understand, which
            simplifies future updates and maintenance for better long-term
            efficiency.
          </p>

          <h3>Client-Centric Approach</h3>
          <p>
            I prioritize understanding your specific needs and goals,
            collaborating closely with you to deliver a solution that meets your
            exact requirements.
          </p>

          <h3>Comprehensive Skill Set</h3>
          <p>
            My expertise spans front-end development and a wide array of tools
            and technologies, enhancing the project’s overall quality,
            efficiency, and functionality.
          </p>

          <h3>Timely Delivery</h3>
          <p>
            I am committed to meeting project deadlines, ensuring that all work
            is completed on schedule without compromising quality.
          </p>

          <h3>Flexible and Adaptable</h3>
          <p>
            I am flexible and open to feedback, adjusting the project as needed
            to align with your evolving needs and preferences.
          </p>

          <h3>Passion for Innovation</h3>
          <p>
            I am dedicated to staying current with the latest industry trends
            and technologies, bringing innovative ideas to enhance your project.
          </p>

          <h3>Efficient Problem Solving</h3>
          <p>
            I address challenges swiftly and effectively, resolving issues to
            maintain project momentum and avoid delays.
          </p>

          <h3>Performance Optimization</h3>
          <p>
            I focus on optimizing performance to ensure fast load times and
            smooth interactions, enhancing user satisfaction and overall website
            efficiency.
          </p>

          <h3>Transparent Communication</h3>
          <p>
            I maintain clear and regular communication throughout the project,
            keeping you informed and engaged at every stage of development.
          </p>

          <h3>Long-Term Support</h3>
          <p>
            I provide ongoing support even after the project is completed,
            addressing any issues and making necessary updates to keep
            everything running smoothly.
          </p>

          <h3>User-Centric Testing</h3>
          <p>
            I conduct thorough testing to ensure the website performs well
            across all devices and browsers, providing a seamless experience for
            every user.
          </p>

          <h3>Post-Launch Support</h3>
          <p>
            I provide continued assistance after your website goes live,
            addressing any issues promptly and performing updates to keep your
            site fully functional and up-to-date.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyHireMe;
