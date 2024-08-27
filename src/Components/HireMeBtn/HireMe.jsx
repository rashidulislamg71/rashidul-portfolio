import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import styles from "./HireMe.module.css";
// import { Link } from "react-scroll";

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
        {/* <Link to="contact_section"
         spy={true}
         smooth={true}
         offset={-70}
         duration={400}
         delay={0.8}> */}
        <button className={styles.hireMeBtn}>Hire Me</button>
        {/* </Link> */}
      </div>
    </ScrollTrigger>
  );
};

export default HireMe;