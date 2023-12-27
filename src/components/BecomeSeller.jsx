import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import MobileLoanNavbar from "./MobileLoanNavabr";
import img2 from "../Images/c89.png";
import img3 from "../Images/c90.png";

import TopNavbar from "./TopNavbar";

const BecomeSeller = () => {
  const navigate = useNavigate();

  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);
  return (
    <>
      <div className="seller1">
        <TopNavbar color="white"/>
        <div className="home100">
          <i class="fa-solid fa-bars" onClick={handleShow}></i>
        </div>
        <div className="connect7">
          <div className="connect8" style={{width:"50%"}}>
            <h2 style={{color:"#fff"}}>Increase Your Presence and Diversity Your Campus</h2>
            <p style={{color:"#fff"}}>
            Register for free and you will be noticed by more Students than ever !
            </p>
            <button className="change1">Register</button>
          </div>
          <div className="connect9">
            <div className="seller2">
              <img src={img2} alt="" />
              <h6>India's </h6>
              <h5>Fastest Growing</h5>
              <p>College Search Engine</p>
            </div>
            <div className="seller3" style={{ width: "100%", height: "70px;" }}>
              <button onClick={() => navigate("/screen2")}>
                Explore College & University
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="connect13">
        <h4>Expand Your Search</h4>
        <p>
          Attract the best Students, College Hub Recruits qualified, qualified
          Students
        </p>
        <div className="seller4">
          <div className="seller5">
            <img src={img3} alt="" />
          </div>
          <div className="seller5">
            <img src={img3} alt="" />
          </div>
          <div className="seller5">
            <img src={img3} alt="" />
          </div>
          <div className="seller5">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
      <div className="seller5">
        <h6>
          Join hundreds of institutions across India & the world on College Hub!
        </h6>
        <p>
          Fill in the following details to get listed your college/ University
          on College Hub to Stand out from the crowd. Start to attract, engage
          and enroll students with us!
        </p>
        <div className="seller6">
          <p>Peronal Information</p>
          <div className="seller7">
            <div className="seller8">
              <label>First Name</label>
              <input type="text" placeholder="Enter First Name" />
            </div>
            <div className="seller8">
              <label>Last Name</label>
              <input type="text" placeholder="Enter Last Name" />
            </div>
            <div className="seller8">
              <label>Email</label>
              <input type="text" placeholder="Enter Email" />
            </div>
            <div className="seller8">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter Phone Number" />
            </div>
          </div>
        </div>
        <div className="seller6">
          <p>College Information</p>
          <div className="seller7">
            <div className="seller8">
              <label>College Name</label>
              <input type="text" placeholder="Enter First Name" />
            </div>
            <div className="seller8">
              <label>College Website </label>
              <input type="text" placeholder="Enter Last Name" />
            </div>
          </div>
        </div>
        <div className="seller6">
          <p>About College</p>
          <div className="seller9">
            <input type="text" placeholder="About College" />
          </div>
        </div>
        <div className="seller6">
          <p>Select Faculty</p>
          <div className="seller9">
            <input type="text" placeholder="About College" />
          </div>
        </div>
        <div className="seller6">
          <p>Alternative College</p>
          <div className="seller9">
            <input type="text" placeholder="About College" />
          </div>
        </div>
        <div className="seller6">
          <p>Select College Logo (Logo only)</p>
          <div className="seller9">
            <input type="file" placeholder="Logo Only" />
          </div>
        </div>
        <button className="seller10">Submit</button>
      </div>
      <div className="seller11">
        <h6>Trust By Leading Institutions</h6>
        <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
          ac aliquet odio mattis.</p>
          <button>Explore Institution</button>
      </div>
      <Offcanvas show={show2} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <MobileLoanNavbar />
        </Offcanvas.Body>
      </Offcanvas>
      <Footer />
    </>
  );
};

export default BecomeSeller;
