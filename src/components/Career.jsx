import React, { useState } from "react";
import LoanNavbar from "./LoanNavbar";
import MobileLoanNavbar from "./MobileLoanNavabr";
import Sidebar2 from "./Sidebar2";
import Footer from "./Footer";
import Offcanvas from 'react-bootstrap/Offcanvas';

import img from "../Images/c97.png";
import TopNavbar from "./TopNavbar";
import { IoIosArrowDown } from "react-icons/io";
  

const Career = () => {
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);
  return (
    <>
      <div className="schro">
        <TopNavbar />
      </div>
      <div className="home100">
        <i class="fa-solid fa-bars" onClick={handleShow}></i>
      </div>
      <div className="profile1">
        <div className="profile2">
          <Sidebar2 />
        </div>
        <div className="profile3">
          <div className="career1">
            <h6>Congratulations</h6>
            <p>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum
              , ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
              per inceptos himenaeos.</p>
            <button>Download Now</button>
            <hr className="career2" />
            <div className="career3">
              <h5>Disclaimer :</h5>
              <p>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit inte
                rdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>
            <div className="career4">
              <p>Read More    <IoIosArrowDown   size={25}/></p>
            </div>
          </div>
          <div className="career5">
            <div className="career6">
              <p>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et </p>
              <button>Request a Call Back</button>
            </div>
            <div className="career7">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Offcanvas show={show2} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MobileLoanNavbar />
          <Sidebar2 />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Career;
