import React, {useState} from "react";
import LoanNavbar from "./LoanNavbar";
import MobileLoanNavbar from "./MobileLoanNavabr";
import Sidebar2 from "./Sidebar2";
import Offcanvas from 'react-bootstrap/Offcanvas';
import img from "../Images/c95.png";

const TestPerform = () => {
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
          <div className="perform1">
            <img src={img} alt="" />
            <p>Oops! You don't have any performance records yet.</p>
          </div>
        </div>
      </div>
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

export default TestPerform;
