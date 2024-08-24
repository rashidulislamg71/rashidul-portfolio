

import styles from "./Skills.module.css";
import figma from "../../assets/images/figma.png";
import git from "../../assets/images/git.png";
import firebase from "../../assets/images/firebase.png";
import vscode from "../../assets/images/vscode.png"

//*Skills Logo */
import { PiFileHtmlBold } from "react-icons/pi";
import { PiFileCssBold } from "react-icons/pi";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";

const Skills = () => {
  return (
    <div className={styles.skills_section}>
      <h3 className={styles.title}>Skills And Tools</h3>
      <div className={styles.skills_names}>
        <div className={`${styles.skill_logo} ${styles.html_logo}`}>
          <div>
            <span>
              <PiFileHtmlBold />
            </span>
          </div>
          <h5>HTML</h5>
        </div>
        <div className={`${styles.skill_logo} ${styles.css_logo}`}>
          <div>
            <span>
              <PiFileCssBold />
            </span>
          </div>{" "}
          <h5>CSS</h5>
        </div>
        <div className={`${styles.skill_logo} ${styles.tailwind_logo}`}>
          <div>
            <span>
              <SiTailwindcss />{" "}
            </span>
          </div>
          <h5>TailwindCSS</h5>
        </div>
        <div className={`${styles.skill_logo} ${styles.javaScript_logo}`}>
          <div>
            <span>
              <IoLogoJavascript />
            </span>
          </div>
          <h5>JavaScript</h5>
        </div>
        <div className={`${styles.skill_logo} ${styles.react_logo}`}>
          <div>
            <span>
              <TbBrandReactNative />
            </span>
          </div>
          <h5>React.js</h5>
        </div>
      </div>

      <div className={styles.tools}>
        <div className={styles.tools_name}>
          <div>
            <img className={styles.vscode} src={vscode} alt="Figma" /> <span>VS Code</span>
          </div>
          <div>
            <img src={figma} alt="Figma" /> <span>Figma</span>
          </div>

          <div>
            <img src={git} alt="Git" /> <span>Git&GitHub</span>
          </div>
          <div>
            <img src={firebase} alt="Firebase" /> <span>Firebase</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
