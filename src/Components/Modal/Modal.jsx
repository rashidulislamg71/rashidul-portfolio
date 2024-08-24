import React from 'react';
import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, content }) => {
  return (
    <div className={`${styles.modalOverlay} ${isOpen ? styles.open : ''}`}>
      <div className={`${styles.modalContent} ${isOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default Modal;