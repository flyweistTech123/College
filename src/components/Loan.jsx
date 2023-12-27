import React, {useState} from "react";
import LoanNavbar from "./LoanNavbar";
import MobileLoanNavbar from "./MobileLoanNavabr";
import Footer from "./Footer";
import {useNavigate} from "react-router-dom";
import img from "../Images/c63.png";
import img2 from "../Images/c64.png";
import img3 from "../Images/c65.png";
import img4 from "../Images/c66.png";
import img5 from "../Images/c67.png";
import img6 from "../Images/c68.png";
import img7 from "../Images/c69.png";
import img8 from "../Images/c70.png";
import img9 from "../Images/c71.png";
import img10 from "../Images/c72.png";
import img11 from "../Images/c73.png";
import img12 from "../Images/c74.png";
import img13 from "../Images/c75.png";
import img14 from "../Images/c76.png";
import img15 from "../Images/c77.png";
import img16 from "../Images/c78.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import TopNavbar from "./TopNavbar";

const Loan = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  return (
    <>
    <div className="loan5">
      <TopNavbar color="white" />
      <div className="loan100">
        <i class="fa-solid fa-bars" onClick={handleShow}></i>
      </div>
        <div className="loan6">
          <div className="loan7">
            <h3>Education Loans in All Over India</h3>
            <p>Helping young Indians DREAM BIG &ACHIEVE BIGGER</p>
            <button>Apply Now</button>
          </div>
          <div className="loan8">
            <div className="loan9">
              <img src={img2} alt="" />
              <h6>
                Calculate <spam>EMI</spam>
              </h6>
              <p>
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
            <div className="loan9">
              <img src={img3} alt="" />
              <h6>
                <spam>KYE</spam> know your Eligibility
              </h6>
              <p>
                Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="loan10">
        <div className="loan11">
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img4} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
          <img src={img10} alt="" />
          <img src={img11} alt="" />
          <img src={img12} alt="" />
        </div>
      </div>
      <div className="loan12">
        <div className="loan13">
          <p>Bank Name</p>
          <p>Interest Rate</p>
          <p>Max Type</p>
          <p>Loan Type</p>
          <p>Scheme</p>
          <p>Compare</p>
        </div>
        <div className="loan14">
          <div className="loan15">
            <div className="loan16">
              <p>100%percent Paperless Approved</p>
            </div>
            <img src={img4} alt="" />
            <p className="loan17">Historical Interest rates</p>
            <button>Details</button>
          </div>
          <div className="loan18">
            <p>UP to INR 7.50 lacs 10.55% above INR 7.50 Lacs 10.80%</p>
          </div>
          <div className="loan18">
            <p>15 Years</p>
          </div>
          <div className="loan18">
            <p>Student</p>
          </div>
          <div className="loan18">
            <p>Padho Pradesh CSIS Skill Loan Scheme</p>
          </div>
          <div className="loan18">
            <div className="ext1">
              <button className="ext2" onClick={()=>navigate("/eligibility-check")}>Eligibility Check</button>
              <button className="ext3">Apply Now</button>
            </div>
          </div>
        </div>
        <div className="loan14">
          <div className="loan15">
            <div className="loan16">
              <p>100%percent Paperless Approved</p>
            </div>
            <img src={img4} alt="" />
            <p className="loan17">Historical Interest rates</p>
            <button>Details</button>
          </div>
          <div className="loan18">
            <p>UP to INR 7.50 lacs 10.55% above INR 7.50 Lacs 10.80%</p>
          </div>
          <div className="loan18">
            <p>15 Years</p>
          </div>
          <div className="loan18">
            <p>Student</p>
          </div>
          <div className="loan18">
            <p>Padho Pradesh CSIS Skill Loan Scheme</p>
          </div>
          <div className="loan18">
          <div className="ext1">
              <button className="ext2" onClick={()=>navigate("/eligibility-check")}>Eligibility Check</button>
              <button className="ext3">Apply Now</button>
            </div>
          </div>
        </div>
        <div className="loan14">
          <div className="loan15">
            <div className="loan16">
              <p>100%percent Paperless Approved</p>
            </div>
            <img src={img4} alt="" />
            <p className="loan17">Historical Interest rates</p>
            <button>Details</button>
          </div>
          <div className="loan18">
            <p>UP to INR 7.50 lacs 10.55% above INR 7.50 Lacs 10.80%</p>
          </div>
          <div className="loan18">
            <p>15 Years</p>
          </div>
          <div className="loan18">
            <p>Student</p>
          </div>
          <div className="loan18">
            <p>Padho Pradesh CSIS Skill Loan Scheme</p>
          </div>
          <div className="loan18">
          <div className="ext1">
              <button className="ext2" onClick={()=>navigate("/eligibility-check")}>Eligibility Check</button>
              <button className="ext3">Apply Now</button>
            </div>
          </div>
        </div>
        <div className="loan14">
          <div className="loan15">
            <div className="loan16">
              <p>100%percent Paperless Approved</p>
            </div>
            <img src={img4} alt="" />
            <p className="loan17">Historical Interest rates</p>
            <button>Details</button>
          </div>
          <div className="loan18">
            <p>UP to INR 7.50 lacs 10.55% above INR 7.50 Lacs 10.80%</p>
          </div>
          <div className="loan18">
            <p>15 Years</p>
          </div>
          <div className="loan18">
            <p>Student</p>
          </div>
          <div className="loan18">
            <p>Padho Pradesh CSIS Skill Loan Scheme</p>
          </div>
          <div className="loan18">
          <div className="ext1">
              <button className="ext2" onClick={()=>navigate("/eligibility-check")}>Eligibility Check</button>
              <button className="ext3">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="loan19">
        <p>Show More</p>
      </div>
      <div className="loan20">
        <p>HOW TO PROCEED WITH YOUR APPLICATION</p>
        <div className="loan21">
          <div className="loan22">
            <img src={img13} alt="" />
            <p>Collect Letter of Admission</p>
          </div>
          <div className="loan22">
            <img src={img14} alt="" />
            <p>Collect Letter of Admission</p>
          </div>
          <div className="loan22">
            <img src={img15} alt="" />
            <p>Collect Letter of Admission</p>
          </div>
          <div className="loan22">
            <img src={img16} alt="" />
            <p>Collect Letter of Admission</p>
          </div>
        </div>
      </div>
      <Footer />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MobileLoanNavbar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Loan;
