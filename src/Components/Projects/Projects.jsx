


import styles from "./Projects.module.css";
import trust_farms from "../../assets/images/trust-farm.png"

const Projects = () => {
  return (
    <section className={styles.projects_section}>
      <h3 className={styles.title}>My Projects</h3>
      <div className={styles.projects_content}>
        <div className={styles.my_projects}>
          <div className={`${styles.todo_app} ${styles.projects_app}`}>
            <div className={styles.app_box}>
              <div className={styles.todo_image}>
                <img src={trust_farms} alt="" />
                <b>Trust-farms (E-commerce)</b>
              </div>
              <div className={styles.app_features}>
                <h4>App Features:</h4>
                <div className={styles.features_list}>
                  <div>
                    <li>User authentication (sign up and login)</li>
                    <li>Add To Cart and Delete</li>
                  </div>
                  <div>
                    <li>Search</li>
                    <li>Responsive design</li>
                  </div>
                </div>
              </div>
              <div className={styles.live_and_github_link}>
                <a
                  href="https://trust-farms.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Link
                </a>
                <a
                  href="https://github.com/rashidulislamg71/trust-farms"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Link
                </a>
              </div>
              <div className={styles.project_details_btn}>
                <a href=""></a>
                {/* <button>Read Project Details</button> */}
              </div>
            </div>
          </div>
          {/* <div className={`${styles.todo_app} ${styles.projects_app}`}>
            <div className={styles.app_box}>
              <div className={styles.todo_image}>
                <img src={todo_image} alt="" />
                <b>ToDo App</b>
              </div>
              <div className={styles.app_features}>
                <h4>App Features:</h4>
                <div className={styles.features_list}>
                  <div>
                    <li>Add daily Tasks</li>
                    <li>Edit Task</li>
                  </div>
                  <div>
                    <li>Delete Task</li>
                    <li>Saved tasks at local storage</li>
                  </div>
                </div>
              </div>
              <div className={styles.live_and_github_link}>
                <a
                  href="https://tasks-list-three.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Link
                </a>
                <a
                  href="https://github.com/rashidulislamg71/tasks-list"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Link
                </a>
              </div>
              <div></div>
            </div>
          </div>
          <div className={`${styles.todo_app} ${styles.projects_app}`}>
            <div className={styles.app_box}>
              <div className={styles.todo_image}>
                <img src={todo_image} alt="" />
                <b>ToDo App</b>
              </div>
              <div className={styles.app_features}>
                <h4>App Features:</h4>
                <div className={styles.features_list}>
                  <div>
                    <li>Add daily Tasks</li>
                    <li>Edit Task</li>
                  </div>
                  <div>
                    <li>Delete Task</li>
                    <li>Saved tasks at local storage</li>
                  </div>
                </div>
              </div>
              <div className={styles.live_and_github_link}>
                <a
                  href="https://tasks-list-three.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Link
                </a>
                <a
                  href="https://github.com/rashidulislamg71/tasks-list"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Link
                </a>
              </div>
              <div></div>
            </div>
          </div> */}
        </div>
      </div>

      <div className={styles.tools}></div>
    </section>
  );
};

export default Projects;
