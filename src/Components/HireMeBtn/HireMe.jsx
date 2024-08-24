import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import styles from "./HireMe.module.css";

const HireMe = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setVisible(true)}
      onExit={() => setVisible(false)}
    >
      <div
        className={`${styles.HireMe_container} ${
          visible ? styles.serviceAnimate : ""
        }`}
      >
        <button className={styles.hireMeBtn}>Hire Me</button>
      </div>
    </ScrollTrigger>
  );
};

export default HireMe;