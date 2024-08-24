/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import styles from "./Contact.module.css";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaWhatsappSquare } from "react-icons/fa";

import { MdMarkEmailUnread } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";

import { IoShareSocialSharp } from "react-icons/io5";
import { MdAddLocationAlt } from "react-icons/md";
import { MdContactless } from "react-icons/md";

const Contact = () => {
  return (
    <div className={styles.contact_section}>
      <h2 className={styles.title}>Contact Me</h2>
      <div className={styles.contact_info}>
        <div className={styles.social}>
          <div className={styles.title}>
            <sapn>
              <IoShareSocialSharp />
            </sapn>
            <h3>Social -</h3>
          </div>

          <div className={styles.socialIcons}>
            <a target="_blank" title="Linkedin"  href="https://www.linkedin.com/in/rashidulislam71/" title="Linkedin" className={styles.linkedin}>
              <FaLinkedin />
            </a>
            <a target="_blank" title="Facebook" href="https://web.facebook.com/rashidulislam72/" className={styles.facebook}>
              <ImFacebook2 />
            </a>

            <a target="_blank" href="https://github.com/rashidulislamg71" title="Github" className={styles.github}>
              <FaSquareGithub />
            </a>

            {/* <a href="#" title="Twitter" className={styles.twittr}>
              <FaXTwitter />
            </a>

            <a href="#" title="WhatsApp" className={styles.whatsApp}>
              <FaWhatsappSquare />
            </a> */}
          </div>
        </div>

        <div className={styles.emailAndPhone}>
          <div className={styles.title}>
            <sapn>
              <MdContactless />
            </sapn>
            <h3>Email or Phone -</h3>
          </div>
          <div className={styles.link}>
            <a href="mailto:jrashidulislam0103@gmail.com?subject=Subject%20Line&body=This%20is%20the%20body%20text">
              <span className={styles.email}>
                <MdMarkEmailUnread />
              </span>
              jrashidulislam0103@gmail.com
            </a>
            <br />
            <a href="tel:+880 1782-241671">
              <span className={styles.phone}>
                <FaSquarePhone />
              </span>
              +880 1782-241671 
            </a>
          </div>
        </div>

        <div className={styles.address}>
          <div className={styles.title}>
            <sapn>
              {" "}
              <MdAddLocationAlt />{" "}
            </sapn>
            <h3>Address -</h3>
          </div>

          <div className={styles.address_info}>
            Sirajganj <br />
            Rajshahi, Dhaka
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
