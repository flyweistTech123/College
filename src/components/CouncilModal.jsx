import React from "react";
import img from "../Images/c1.png";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function MyVerticallyCenteredModal(props) {
  console.log(props.show);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <>
            <div className="council1">
                <img src={img} alt="" />
                <h2>Register Now To Consult a Counsellor</h2>
            </div>
            <div className="council2">
                <i class="fa-solid fa-user"></i>
                <input type="text" placeholder="Full Name" />
            </div>
            <div className="council2">
                <i class="fa-solid fa-envelope"></i>
                <input type="email" placeholder="Email" />
            </div>
            <div className="council4">
                <div className="council3">
                    <p>+91</p>
                </div>
                <input type="text" placeholder="Enter your Mobile Number" />
            </div>
            <div className="council2">
                <i class="fa-solid fa-location-dot"></i>
                <input type="text" placeholder="City you live in" />
            </div>
            <div className="council2">
                <i class="fa-solid fa-graduation-cap"></i>
                <input type="text" placeholder="Course" />
            </div>
            <div className="council5">
                <p>By Submitting this form you accept and agree to our <spam>Terms Of Use.</spam></p>
            </div>
            <div className="council5">
                <button>Submit</button>
            </div>
        </>
      </Modal.Body>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
