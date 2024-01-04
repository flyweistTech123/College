import React, { useState } from "react";
import TopPart from "./TopPart";
import Footer from "./Footer";

import img from "../Images/c50.png";
import img2 from "../Images/c51.png";
import img3 from "../Images/c52.png";
import img4 from "../Images/c53.png";
import img5 from "../Images/c54.png";
import img8 from "../Images/c57.png";
import img9 from "../Images/c58.png";
import img6 from "../Images/c55.png";
import cap from '../Images/cap.png'
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";


import MobileLoanNavbar from "./MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import CollegeInfotoppart from "./CollegeInfo/CollegeInfotoppart";

const Admission = () => {
  const [show, setShow] = useState(false);
  
  const [flag, setFlag] = useState(false)

  const getFlag = () => {
    setFlag(prev => !prev);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="loan100">
        <i class="fa-solid fa-bars" onClick={handleShow}></i>
      </div>
      <CollegeInfotoppart />
      <TopPart />
      <div className="clg14">
        <div className="clg15">
          <div className="clg58">
            <div className="clg59">
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
                sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
                scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu
                tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet
                lacinia. Aliquam in elementu
              </p>
            </div>
            <div className="clg60">
              <h5>JMI Latest Updates</h5>
              <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
            </div>
            <div className="clg60">
              <h5>Table Of Content</h5>
              <ul>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
                <li>Lorem Ipsum</li>
              </ul>
            </div>
          </div>
          <div className="clg61">
            <h4>Highlights for Jamia Miliya Isalamia University,</h4>
            <hr />
            <div className="clg23">
              <div className="clg24">
                <img src={img} alt="" />
                <p>Institution Type</p>
                <p>Private</p>
              </div>
              <div className="clg24">
                <img src={img2} alt="" />
                <p>Courses Offered</p>
                <p>BCA,MCA</p>
              </div>
              <div className="clg24">
                <img src={img5} alt="" />
                <p>Application Mode</p>
                <p>Online/Offline</p>
              </div>
              <div className="clg24">
                <img src={img6} alt="" />
                <p>Admission Mode</p>
                <p>Online/Offline</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="clg16">
          <div className="clg30">
            <div className="clg31">
              <img src={img8} alt="" />
              <p>Are You Interested in College ?</p>
            </div>
            <div className="clg32">
              <button className="clg8">Placement Report</button>
              <button className="clg9">Apply Now</button>
            </div>
          </div>
          <div className="clg3011">
            <div className="clg33">
              <h6 className={!flag ? "clg33h6" : "clg33p"} onClick={getFlag}>Featured News</h6>
              <p className={flag ? "clg33h6" : "clg33p"} onClick={getFlag}>Recent News</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
            <hr className="clg34" />
            <div className="clg35" style={{ paddingBottom: "20px" }}>
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
          </div>
          <div className="clg3011">
            <div className="clg33">
              <h6 className={!flag ? "clg33h6" : "clg33p"} onClick={getFlag}>Trending Articles</h6>
              <p className={flag ? "clg33h6" : "clg33p"} onClick={getFlag}>Recent Articles</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
            <hr className="clg34" />
            <div className="clg35" style={{ paddingBottom: "20px" }}>
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
          </div>

          <div className="clg3011">
            <div className="ingooo11">
              <img src={cap} alt="" />
              <div className="ingooo12">
                <p>Jamia Millia Islamia -[JMI]</p>
                <h6>Contact Information</h6>
              </div>
            </div>

            <div className="ingooo13">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2738243856347!2d77.2775680742905!3d28.56153908730327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce351945f45eb%3A0xf96252dd41babf89!2sJamia%20Millia%20Islamia!5e0!3m2!1sen!2sin!4v1704371273634!5m2!1sen!2sin" width="350" height="113" loading="lazy"></iframe>
            </div>

            <div className="ingooo14">
              <p>Address: </p>
              <p>Jamia Millia Islamia-[JMI], New Delhi
                Main Rd, JMI Campus,Delhi.</p>
            </div>
            <div className="ingooo15">
              <span><IoLocationSharp /> View on Map-- <IoIosArrowForward /></span>
            </div>

            <div className="ingooo16">
              <button>Show Phone & Email</button>
              <button>Go To College Website -- <IoIosArrowForward /></button>
            </div>
          </div>
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

export default Admission;
