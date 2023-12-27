import React, { useState } from "react";
import LoanNavbar from "./LoanNavbar";
import MobileLoanNavbar from "./MobileLoanNavabr";
import Sidebar2 from "./Sidebar2";
import Footer from "./Footer";

import img from "../Images/c96.png";
import Offcanvas from 'react-bootstrap/Offcanvas';

const Feed = () => {
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
          <div className="feed1">
            <h6>My Feeds</h6>
            <div className="feed2">
              <img src={img} alt="" />
              <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit 
                interdum, ac aliquet odio mattis. Rorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
            <div className="feed2">
              <img src={img} alt="" />
              <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit 
                interdum, ac aliquet odio mattis. Rorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
            <div className="feed2">
              <img src={img} alt="" />
              <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit 
                interdum, ac aliquet odio mattis. Rorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
            <div className="feed2">
              <img src={img} alt="" />
              <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit 
                interdum, ac aliquet odio mattis. Rorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            </div>
            <div className="feed2">
              <img src={img} alt="" />
              <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit 
                interdum, ac aliquet odio mattis. Rorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
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

export default Feed;
