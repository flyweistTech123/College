import React, { useState } from "react";

import img2 from "../Images/c61.png";
import img3 from "../Images/c62.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

import MyVerticallyCenteredModal from "./CouncilModal";
import TopNavbar from "./TopNavbar";

const LoanNavbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const [showNavbar, setShowNavbar] = useState(false);
  function NavMenu() {
    return (
      <>
        <div className="menu1">
          <h3>Top Universities</h3>
          <div className="menu2">
            <div className="menu3">
              <h6>Delhi</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
            <div className="menu3">
              <h6>Mumbai</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
            <div className="menu3">
              <h6>Chennai</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
            <div className="menu3">
              <h6>Bangalore</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
          </div>
        </div>
      </>
    );
  }

  const handleClick = () => {
    setShowNavbar((prev) => !prev);
  };

  return (
    <>
      <MyVerticallyCenteredModal show={show} onHide={() => setShow(false)} />
     
      <div className="loan1">
        <TopNavbar color="white" />
        {/*<div className="loan2">
          <img src={img2} alt="" onClick={() => navigate("/")} />
        </div>
        <div className="loan3">
          <div className="loan4">
            <p>Courses</p>
            <img src={img3} alt="" onClick={handleClick} />
          </div>
          <div className="loan4">
            <p>Colleges</p>
            <img src={img3} alt="" onClick={handleClick} />
          </div>
          <div className="loan4">
            <p>Study Guide</p>
            <img src={img3} alt="" onClick={handleClick} />
          </div>
          <div className="loan4">
            <p onClick={() => navigate("/test2")}>Test</p>
          </div>
          <div className="loan4" onClick={() => setShow(true)}>
            <p>Get Counselling</p>
          </div>
  </div>*/}
      </div>
      {showNavbar ? <NavMenu /> : " "}
    </>
  );
};

export default LoanNavbar;
