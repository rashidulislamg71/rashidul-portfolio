import React from 'react';
import styles from "./Modal.module.css";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ isOpen, onClose, content }) => {
  return (
    <div className={`${styles.modalOverlay} ${isOpen ? styles.open : ''}`}>
      <div className={`${styles.modalContent} ${isOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={onClose}><RxCross2 /></button>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Modal;