import React from 'react';
import './MoreModal.css';
import { IoMdClose } from "react-icons/io";

const MoreModal = ({ onClose, children }) => {
  return (
    <div className="Repostmodal-overlay" onClick={onClose}>
      <div className="Repostmodal-content" onClick={(e) => e.stopPropagation()}>
        {/* <span className="close-btn" onClick={onClose}><IoMdClose style={{width:'50px', height:'30px'}} /></span> */}
        {children}
      </div>
    </div>
  );
};

export default MoreModal;