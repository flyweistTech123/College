import React, {useState} from "react";
import LoanNavbar from "./LoanNavbar";
import Footer from "./Footer";
import MobileLoanNavbar from "./MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';

const Test = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <LoanNavbar />
      <div className="loan100">
        <i class="fa-solid fa-bars" onClick={handleShow}></i>
      </div>
      <div className="test1">
        <div className="nav3 test2">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search for colleges, exams, ...." />
        </div>
      </div>
      <div className="test3">
        <h4>Online Test Series</h4>
        <p>
          Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac{" "}
        </p>
      </div>
      <div className="test3">
        <h4>Select your exam Categories</h4>
        <div className="test4">
          <button className="test5">B.Tech</button>
          <button className="test6">M.Tech</button>
          <button className="test6">Placement Test</button>
          <button className="test6">State Exam</button>
          <button className="test6">CBSE</button>
          <button className="test6">JEE</button>
        </div>
      </div>
      <div className="test3">
        <h4>FAQs</h4>
        <div className="test7">
          <h4>Q1.</h4>
          <p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis ?</p>
        </div>
        <div className="test7">
          <h4>Q1.</h4>
          <p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis ?</p>
        </div>
        <div className="test7">
          <h4>Q1.</h4>
          <p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis ?</p>
        </div>
        <div className="test7">
          <h4>Q1.</h4>
          <p>Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis ?</p>
        </div>
      </div>
      <Footer />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MobileLoanNavbar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Test;
