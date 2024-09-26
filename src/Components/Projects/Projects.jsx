import styles from "./Projects.module.css";
import trust_farms from "../../assets/images/Project_img/trust-farm.png";
import cryptop_img from "../../assets/images/Project_img/Cryptop.png";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoMdArrowDropup } from "react-icons/io";

const Projects = () => {
  return (
    <section className={styles.projects_section}>
      <h3 className={styles.title}>My Projects</h3>
      <div className={styles.projects_container}>
        <div className={`${styles.projects_content} ${styles.flex}`}>
          <div className={styles.single_project}>
            <div className={styles.project_detailes}>
              <div className={styles.project_img}>
                <img src={trust_farms} alt="Project_img" />
              </div>
              <div className={styles.project_text}>
                <h3>Trust Farms (E-commerce)</h3>
                <div className={`${styles.project_links} ${styles.flex}`}>
                  <a href="https://trust-farms.vercel.app/" target="_blank">
                    Live Preview
                  </a>
                  <a href="https://github.com/rashidulislamg71/trust-farms" target="_blank">
                    GitHub Link
                  </a>
                </div>
                <div className={`${styles.flex} ${styles.project_details_btn}`}>

                <button>More Project Details</button>
                <span><IoArrowForwardSharp /></span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.single_project}>
            <div className={styles.project_detailes}>
              <div className={styles.project_img}>
                <img src={cryptop_img} alt="cryptop" />
              </div>
              <div className={styles.project_text}>
                <h3>Cryptop (Template)</h3>
                <div className={`${styles.project_links} ${styles.flex}`}>
                  <a href="https://cryptopcom.vercel.app/" target="_blank">
                    Live Preview
                  </a>
                  <a href="https://github.com/rashidulislamg71/cryptop.com" target="_blank">
                    GitHub Link
                  </a>
                </div>
                <div className={`${styles.flex} ${styles.project_details_btn}`}>

                <button>More Project Details</button>
                <span><IoArrowForwardSharp /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.see_more_projects}>
        <button>
          View More Projects {" "}
        </button>
          <span>
            {" "}
            <IoArrowForwardSharp />
          </span>
      </div>
    </section>
  );
};

export default Projects;
