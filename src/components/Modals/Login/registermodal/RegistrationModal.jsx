import React from 'react';
import './RegistrationModal.css';
import { IoMdClose } from "react-icons/io";

const Registratation = ({ onClose, children }) => {
  return (
    <div className="Registratation-overlay" onClick={onClose}>
      <div className="Registratation-content" onClick={(e) => e.stopPropagation()}>
        {/* <span className="close-btn" onClick={onClose}><IoMdClose style={{width:'50px', height:'30px'}} /></span> */}
        {children}
      </div>
    </div>
  );
};

export default Registratation;