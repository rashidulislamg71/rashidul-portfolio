/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import styles from "./Contact.module.css";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaWhatsappSquare } from "react-icons/fa";
import contact from "..//../assets/images/contact/contact_me2.png";

import { MdMarkEmailUnread } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";

import { IoShareSocialSharp } from "react-icons/io5";
import { MdAddLocationAlt } from "react-icons/md";
import { MdContactless } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <div className={styles.contact_section}>
        <div className={styles.contact_bg}>
          <h2>CONTACT</h2>

          <div className={` ${styles.flex} ${styles.contact_ways}`}>
            <div className={`${styles.flex} ${styles.contact_left} `}>
              <div className={` ${styles.contact_greetings}`}>
                <h3>Welcome Back in Contact!</h3>
                <p>
                  I am very excited to talk to you. <br />
                  Feel Free to say. I am waiting for you.{" "}
                </p>
              </div>
              <div className={`${styles.flex} ${styles.left_bottom}`}>
                <div className={`${styles.flex} ${styles.contact_icon}`}>
                 <span> <FaSquarePhone /></span>
               <span> <FaLinkedin /></span>
                 <span> <FaSquareGithub /></span>
                </div>
                <div className={`${styles.flex} ${styles.contact_way}`}>
                  <b>01782-242671</b>
                  <b>Linkedin</b>
                  <b>GitHub</b>
                </div>
              </div>
            </div>
            <div className={styles.contact_right}>
              <form className={styles.contact_form}>
                <div className={styles.form_group}>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Full Name"
                  />
                </div>

                <div className={styles.form_group}>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Phone Number"
                  />
                </div>

                <div className={styles.form_group}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email"
                  />
                </div>

                <div className={styles.form_group}>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    placeholder="Address"
                  />
                </div>

                <div className={styles.form_group}>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Message"
                  ></textarea>
                </div>

                <button type="submit" className={styles.submit_btn}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className={styles.address_info}>
          Sirajganj Rajshahi, <br /> Dhaka, Bangladesh
        </div>
      </div>
    </>
  );
};

export default Contact;
