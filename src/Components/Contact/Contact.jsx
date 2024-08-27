/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import styles from "./Contact.module.css";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { FaWhatsappSquare } from "react-icons/fa";
import contact from "../../assets/images/contact/contact_me2.png";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;
    const newErrors = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "একটি বৈধ ইমেইল ঠিকানা প্রবেশ করুন।";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    emailjs
      .sendForm(
        "service_95qtmfk",
        "template_bpv24su",
        form.current,
        "7xg82TxmrYm_fyH-6"
      )
      .then((response) => {
        setResponseMessage("ইমেইল সফলভাবে পাঠানো হয়েছে!");
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
      })
      .catch((error) => {
        setResponseMessage("ইমেইল পাঠাতে ব্যর্থ হয়েছে।");
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div id="contact_section" className={styles.contact_section}>
        <div className={styles.contact_bg}>
          <h2>CONTACT</h2>
          <div className={` ${styles.flex} ${styles.contact_ways}`}>
            <div className={`${styles.flex} ${styles.contact_left} `}>
              <div className={` ${styles.contact_greetings}`}>
                <h3>Welcome Back in Contact!</h3>
                <p>
                  I'm very very excited to chat with you! I feel happiness{" "}
                  <br /> when I talk to you. So, Feel free to share your
                  thoughts or questions. <br />
                  I'm always here and ready to assist with anything you need.
                  <br />
                  <span> Let's get started now! </span>
                </p>
              </div>
              <div className={`${styles.flex} ${styles.left_bottom}`}>
                <div className={`${styles.flex} ${styles.contact_icon}`}>
                  <span>
                    <FaWhatsappSquare />
                  </span>
                  <span>
                    <FaSquareGithub />
                  </span>
                  <span>
                    <FaLinkedin />
                  </span>
                  <span>
                    <ImFacebook2 />
                  </span>
                </div>
                <div className={`${styles.flex} ${styles.contact_way}`}>
                  <b>01782-242671</b>
                  <b>GitHub</b>
                  <b>Linkedin</b>
                  <b>Facebook</b>
                </div>
              </div>
            </div>
            <div className={styles.contact_right}>
              <form
                ref={form}
                className={styles.contact_form}
                onSubmit={handleSubmit}
              >
                <div className={styles.form_group}>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Full Name"
                    autoFocus
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.form_group}>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.form_group}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className={styles.error}>{errors.email}</p>
                  )}
                </div>

                <div className={styles.form_group}>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.form_group}>
                  <textarea
                    id={styles.message}
                    name="message"
                    rows="5"
                    required
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className={styles.submit_btn}>
                  Send Message
                </button>
                {responseMessage && (
                  <p className={styles.response}>{responseMessage}</p>
                )}
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
