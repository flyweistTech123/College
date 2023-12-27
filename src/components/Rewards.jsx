import React, {useState} from "react";
import Sidebar2 from "./Sidebar2";
import LoanNavbar from "./LoanNavbar";
import MobileLoanNavbar from "./MobileLoanNavabr";
import Footer from "./Footer";
import Offcanvas from "react-bootstrap/Offcanvas";
import img from "../Images/c95.png";
import img2 from "../Images/c98.png";

const Rewards = () => {
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
            <p>Oops! You don't have No Reward Points.</p>
          </div>
          <div className="career5 payment2">
            <div className="career6">
              <p>
                Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et{" "}
              </p>
              <button>Upload Now</button>
            </div>
            <div className="career7">
              <img src={img2} alt="" />
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

export default Rewards;
