import React, {useState} from "react";
import img2 from "../Images/c61.png";
import img3 from "../Images/c62.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom";

import MyVerticallyCenteredModal from "./CouncilModal";

const MobileLoanNavbar = () => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

  return (
    <>
    <MyVerticallyCenteredModal
        show={show}
        onHide={() => setShow(false)}
      />
      <div className="loan101">
        <div className="loan2">
          <img src={img2} alt="" onClick={()=>navigate("/")}/>
        </div>
        <div className="loan3">
          <div className="loan4">
            <p>Courses</p>
            <img src={img3} alt="" />
          </div>
          <div className="loan4">
            <p>Colleges</p>
            <img src={img3} alt="" />
          </div>
          <div className="loan4">
            <p>Study Guide</p>
            <img src={img3} alt="" />
          </div>
          <div className="loan4">
            <p onClick={()=>navigate("/test2")}>Test</p>
          </div>
          <div className="loan4" onClick={()=>setShow(true)}>
            <p>Get Counselling</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileLoanNavbar;
