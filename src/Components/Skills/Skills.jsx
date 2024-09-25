


import styles from "./Skills.module.css";
import skills_img from "../../assets/images/skills_img/skills.png"

const Skills = () => {
  return (
    <div id={styles.skills_sectiion}>
      <div className={styles.skills_container}>
        <div className={`${styles.skills_inner_content} ${styles.flex}`}>
          <div className={styles.skills_text}>
            <small>Explore My</small>
            <h2>SKILLS</h2>
            <p>
            I specialize in HTML, CSS, Tailwind CSS, JavaScript, and React.js, while continuously learning new technologies to stay updated and deliver innovative, modern web solutions.
            </p>
            <img src={skills_img} alt="Skills" />
          </div>
          <div className={styles.skills_bar_container}>
            <div className={styles.skill_box}>
              <span className={styles.title}>HTML</span>
              <div className={styles.skill_bar}>
                <span className={`${styles.skill_per} ${styles.html}`}></span>
              </div>
            </div>

            <div className={styles.skill_box}>
              <span className={styles.title}>CSS</span>
              <div className={styles.skill_bar}>
                <span className={`${styles.skill_per} ${styles.css}`}></span>
              </div>
            </div>

            <div className={styles.skill_box}>
              <span className={styles.title}>Tailwind CSS</span>
              <div className={styles.skill_bar}>
                <span
                  className={`${styles.skill_per} ${styles.tailwind}`}
                ></span>
              </div>
            </div>

            <div className={styles.skill_box}>
              <span className={styles.title}>JavaScript</span>
              <div className={styles.skill_bar}>
                <span
                  className={`${styles.skill_per} ${styles.javascript}`}
                ></span>
              </div>
            </div>

            <div className={styles.skill_box}>
              <span className={styles.title}>React.js</span>
              <div className={styles.skill_bar}>
                <span className={`${styles.skill_per} ${styles.react}`}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
