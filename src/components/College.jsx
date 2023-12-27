import React, {useState} from "react";
import LoanNavbar from "./LoanNavbar";
import MobileLoanNavbar from "./MobileLoanNavabr";
import Sidebar2 from "./Sidebar2";
import Footer from "./Footer";
import Offcanvas from 'react-bootstrap/Offcanvas';
import img from "../Images/c96.png";

const College = () => {
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
          <div className="college1">
            <p className="college7">Recommendation</p>
            <p className="college8">Shortlist</p>
            <p className="college8">Applications</p>
          </div>
          <div className="college2">
            <img src={img} alt="" />
            <div className="college3">
              <p>Pannache - INSD GhatkoparMumbai, Maharashtra</p>
              <p>
                Why should you choose this college? Know more about the
                College.Checkout USPs
              </p>
            </div>
            <div className="college4">
              <button className="college5">Schedule A Call</button>
              <button className="college6">Move to Shortlist</button>
            </div>
          </div>
          <div className="college2">
            <img src={img} alt="" />
            <div className="college3">
              <p>Pannache - INSD GhatkoparMumbai, Maharashtra</p>
              <p>
                Why should you choose this college? Know more about the
                College.Checkout USPs
              </p>
            </div>
            <div className="college4">
              <button className="college5">Schedule A Call</button>
              <button className="college6">Move to Shortlist</button>
            </div>
          </div>
          <div className="college2">
            <img src={img} alt="" />
            <div className="college3">
              <p>Pannache - INSD GhatkoparMumbai, Maharashtra</p>
              <p>
                Why should you choose this college? Know more about the
                College.Checkout USPs
              </p>
            </div>
            <div className="college4">
              <button className="college5">Schedule A Call</button>
              <button className="college6">Move to Shortlist</button>
            </div>
          </div>
          <div className="college2">
            <img src={img} alt="" />
            <div className="college3">
              <p>Pannache - INSD GhatkoparMumbai, Maharashtra</p>
              <p>
                Why should you choose this college? Know more about the
                College.Checkout USPs
              </p>
            </div>
            <div className="college4">
              <button className="college5">Schedule A Call</button>
              <button className="college6">Move to Shortlist</button>
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

export default College;
