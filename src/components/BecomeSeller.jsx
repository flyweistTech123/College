import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar2 from "./Navbar2";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import MobileLoanNavbar from "./MobileLoanNavabr";
import img2 from "../Images/c89.png";
import img3 from "../Images/c90.png";
import partner from '../Images/partner.png'
import trophy from '../Images/trophy.png'
import { FaPlus } from "react-icons/fa6";


import TopNavbar from "./TopNavbar";
import TopPart3 from "./TopPart3";

const BecomeSeller = () => {
  const navigate = useNavigate();

  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);
  return (
    <>
      <div className="app1">
        <div className="schro">
          <TopNavbar />
        </div>
        <div className="app6">
          <img src={partner} />
        </div>

        <div className="partner57">
          <div className="partner56">
            <h3>Increase Your Presence and Diversify Your Campus</h3>
            <p>Register for free and you will be noticed by more  Students than ever !</p>
          </div>
          <div className="partner80">
          <div className="partner55">
            <img src={trophy} alt="" />
            <h3>India’s Fastest Growing</h3>
            <p>College Search Engine </p>
          </div>
          <button>Register Now</button>
          </div>
          
        </div>
        <TopPart3 />
      </div>
      <div className="partnerparent">
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
        <div className="partner90">
          <hr />
        </div>
        <div className="seller55">
          <h6>
            Join hundreds of institutions across India & the world on College Hub!
          </h6>
          <p>
            Fill in the following details to get listed your college/ University
            on College Hub to Stand out from the crowd. Start to attract, engage
            and enroll students with us!
          </p>
          <div className="seller6">
            <p>Personal Information</p>
            <div className="seller7">
              <div className="seller8">
                <label>Full Name</label>
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div className="seller8">
                <label>Designation</label>
                <input type="text" placeholder="Enter Your Designation At Campus" />
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
                <input type="text" placeholder="Enter College Name" />
              </div>
              <div className="seller8">
                <label>College Website </label>
                <input type="text" placeholder="Enter College Website" />
              </div>
            </div>
          </div>
          <div className="seller6">
            <div className="seller8">
              <label>About College</label>
              <input type="text" placeholder="About College" />
            </div>
          </div>

          <div className="partner60">
            <div className="partner61">
              <label>Select College Course</label>
              <select>
                <option value="">Select Course</option>
                <option value="">1</option>
                <option value="">1</option>
              </select>
            </div>
            <div className="partner61">
              <label>College Duration</label>
              <select>
                <option value="">Course Duration</option>
                <option value="">1</option>
                <option value="">1</option>
              </select>
            </div>
            <div className="partner61">
              <label>Course Fee</label>
              <input type="text" placeholder="Enter Course Fee" />
            </div>
          </div>
          <div className="partner62">
            <button>Add <FaPlus /></button>
          </div>

          <div className="partner63">
            <p>Select Facility</p>
            <div className="partner64">
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
            </div>
            <div className="partner64">
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
            </div>
            <div className="partner64">
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
            </div>
            <div className="partner64">
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
              <div className="onesolution11">
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Facility 1</label>
              </div>
            </div>
          </div>



          <div className="seller6">
            <div className="seller8">
              <label>Competitor Colleges</label>
              <input type="text" placeholder="Enter Colleges Separated By Commas" />
            </div>
          </div>

          <div className="partner70">
            <label htmlFor="">College Logo ( only JPEG/JPG/PNG, Max Size: 500kb</label>
            <input type="file" name="" id="" />
          </div>
          <button className="seller10">Submit</button>
        </div>


        <div className="seller11">
          <div className="partner71">
          <h6>Trust By Leading Institutions</h6>
          <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
            ac aliquet odio mattis.</p>
          <button>Explore Institution</button>
          </div>

          <div className="partner72">

          </div>
      
        </div>
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
