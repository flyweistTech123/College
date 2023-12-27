import React, { useState } from "react";
import LoanNavbar from "./LoanNavbar";
import MobileLoanNavbar from "./MobileLoanNavabr";
import Sidebar2 from "./Sidebar2";
import Footer from "./Footer";
import Offcanvas from "react-bootstrap/Offcanvas";
import img from "../Images/c98.png";

const Payment = () => {
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
          <div className="payment1">
            <h6>Payment History</h6>
            <div className="career5 payment2">
              <div className="career6">
                <p>
                  Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et{" "}
                </p>
                <button>Apply For More Colleges</button>
              </div>
              <div className="career7">
                <img src={img} alt="" />
              </div>
            </div>
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

export default Payment;
