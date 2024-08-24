/* eslint-disable no-unused-vars */

import React, { useState, useRef, useEffect } from "react";
import styles from "./Services.module.css";
import ScrollTrigger from "react-scroll-trigger";
import { SiConvertio } from "react-icons/si";
import { BsFillEnvelopeHeartFill } from "react-icons/bs";
import { IoIosPaperPlane } from "react-icons/io";
import { BsFillLayersFill } from "react-icons/bs";
import { MdOutlineDevicesOther } from "react-icons/md";

import { SiCodersrank } from "react-icons/si";
// import coder from "../../assets/images/about img/coding.png";
import Modal from "../Modal/Modal";

const Services = () => {
  const [visible, setVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.servives_section}>
      <p>Explore my</p>
      <h2>SERVICES</h2>

      <ScrollTrigger
        onEnter={() => setVisible(true)}
        onExit={() => setVisible(false)}
      >
        <div
          className={`${styles.serviceBoxes} ${
            visible ? styles.serviceAnimate : ""
          }`}
        >
          <div className={`${styles.box1} ${styles.singleBox} `}>
            <div className={styles.iconTitle}>
              <span>
                {/* <img src={coder} alt="" /> */}
                <SiCodersrank />
              </span>
              <h3>Front-end Development</h3>
            </div>
            <p>
              Develop visually appealing and functional front-end interfaces
              that work seamlessly on any device.
            </p>
            <button
              onClick={() =>
                handleOpenModal(
                  `  <h3>Front-end Development</h3>
              <p>Craft high-quality, interactive user interfaces with a focus on performance and responsiveness. We build visually appealing, functional front-end components that enhance user engagement and ensure a seamless experience across all devices and browsers, using the latest web technologies and best practices.</p>
              `
                )
              }
            >
              Read More...
            </button>
          </div>

          <div className={`${styles.box2} ${styles.singleBox}`}>
            <div className={styles.iconTitle}>
              <span>
                <BsFillLayersFill />
              </span>
              <h3>Single Page Application (SPA)</h3>
            </div>
            <p>
              User-friendly single-page applications that provide seamless fast
              navigation and dynamic content updates without full page reloads.
            </p>
            <button
              onClick={() =>
                handleOpenModal(`
              
              <h3>Single Page Application (SPA)</h3>
              <p> Develop fast, user-friendly single-page applications (SPAs) that provide seamless navigation and dynamic content updates without full page reloads. Our SPAs enhance user experience with quick load times and smooth transitions, ensuring an engaging, uninterrupted interaction for users across various devices.</p>
              `)
              }
            >
              Read More...
            </button>
          </div>
          <div className={`${styles.box3} ${styles.singleBox}`}>
            <div className={styles.iconTitle}>
              <span>
                <MdOutlineDevicesOther />
              </span>
              <h3>Pixel-Perfect Responsive Design</h3>
            </div>
            <p>
              Design responsive layouts that ensure consistent, visually
              accurate layouts across all screens for flawless user experience.
            </p>
            <button
              onClick={() =>
                handleOpenModal(`
              
              <h3>Pixel-Perfect Responsive Design</h3>
              <p> Design responsive layouts that look flawless on any device. We ensure every element maintains visual consistency and usability, delivering a high-quality user experience across desktops, tablets, and smartphones through meticulous attention to design and responsive techniques.</p>
              `)
              }
            >
              Read More...
            </button>
          </div>
          <div className={`${styles.box4} ${styles.singleBox}`}>
            <div className={styles.iconTitle}>
              <span>
                <IoIosPaperPlane />
              </span>
              <h3>Landing Page Development & Design</h3>
            </div>
            <p>
              Create visually compelling, responsive landing pages optimized for
              conversion and business growth with strategic CTAs.
            </p>
            <button
              onClick={() =>
                handleOpenModal(
                  `
              
              <h3>Landing Page Development & Design</h3>
              <p> Create conversion-focused landing pages with compelling visuals and clear calls-to-action (CTAs). Our designs are crafted to attract and convert visitors, driving engagement and achieving your business goals through strategic layout and persuasive messaging.</p>
              `
                )
              }
            >
              Read More...
            </button>
          </div>
          <div className={`${styles.box5} ${styles.singleBox}`}>
            <div className={styles.iconTitle}>
              <span>
                <SiConvertio />
              </span>
              <h3>PSD/Figma to HTML/Tailwind CSS/React</h3>
            </div>
            <p>
              Convert Figma or PSD designs into precise, responsive HTML,
              Tailwind CSS React and code.
            </p>
            <button
              onClick={() =>
                handleOpenModal(
                  `
              
                  <h3>Landing Page Development & Design</h3>
                  <p> Convert PSD or Figma designs into precise, responsive HTML, React, and CSS code. We ensure the final code accurately reflects your design vision with pixel-perfect detail and functionality, optimized for performance across different devices and browsers.</p>
                  `
                )
              }
            >
              Read More...
            </button>
          </div>
          <div className={`${styles.box6} ${styles.singleBox}`}>
            <div className={styles.iconTitle}>
              <span>
                <BsFillEnvelopeHeartFill />
              </span>
              <h3>Optimized Email Template Design</h3>
            </div>
            <p>
              Create responsive, cross-platform email templates with HTML,
              Tailwind CSS, and React for enhanced engagement.
            </p>
            <button
              onClick={() =>
                handleOpenModal(
                  `<h3>Optimized Email Template Design</h3> 
                  <p> Design responsive, engaging email templates that perform well across all platforms. We create visually appealing and interactive templates to enhance communication and boost user engagement, ensuring consistent rendering and effectiveness on various email clients and devices.</p>`
                )
              }
            >
              Read More...
            </button>
          </div>
        </div>
      </ScrollTrigger>

      <div className={styles.whyHireMeBtn}>
        <button title="See work style!">Why Hire me?</button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        content={modalContent}
      />
    </div>
  );
};

export default Services;
