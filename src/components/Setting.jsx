import React, { useState } from "react";
import Sidebar2 from "./Sidebar2";
import LoanNavbar from "./LoanNavbar";
import MobileLoanNavbar from "./MobileLoanNavabr";
import Footer from "./Footer";
import Offcanvas from "react-bootstrap/Offcanvas";
import img from "../Images/c101.png";

const Setting = () => {
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);
  return (
    <>
      <LoanNavbar />
      <div className="home100">
        <i class="fa-solid fa-bars" onClick={handleShow}></i>
      </div>
      <div className="profile1">
        <div className="profile2">
          <Sidebar2 />
        </div>
        <div className="profile3">
          <div className="setting1">
            <div className="setting2">
              <p>Notification & Reminders</p>
              <p>
                Never miss important reminders & notifications about the latest
                education news and your admission journey status
              </p>
              <div className="setting3">
                <div className="setting4">
                  <p>Email</p>
                  <img src={img} alt="" />
                </div>
                <div className="setting4">
                  <p>SMS</p>
                  <img src={img} alt="" />
                </div>
                <div className="setting4">
                  <p>Whats App</p>
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="setting5">
            <h6>Report An Issue</h6>
            <textarea></textarea>
            <button>Submit</button>
          </div>
        </div>
      </div>
      <Footer />
      <Offcanvas show={show2} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <MobileLoanNavbar />
          <Sidebar2 />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Setting;
