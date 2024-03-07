import React, { useState } from "react";
import Footer from "../Footer";
import TopPart from "../TopPart";
import img from "../../Images/c50.png";
import img2 from "../../Images/c51.png";
import img3 from "../../Images/c52.png";
import img4 from "../../Images/c53.png";
import img5 from "../../Images/c54.png";
import img6 from "../../Images/c55.png";
import img7 from "../../Images/c56.png";
import img8 from "../../Images/clginfoo.png";
import img9 from "../../Images/c58.png";
import cap from '../../Images/cap.png'
import newimg from '../../Images/newimg.png'
import './CollegeInfo.css'
import { IoIosArrowForward } from "react-icons/io";


import MobileLoanNavbar from "../MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { CollegeInfotoppart } from "./CollegeInfotoppart";
import { IoLocationSharp } from "react-icons/io5";







const CollegeInfo = () => {
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
          <div className="clg155">
            <p>Ad Management</p>
          </div>
          <div className="clg21">
            <div className="clg17">
              <h5>Last Update for Jamia Millia Islamia</h5>
              <div className="clg18">
                <h6>25 May 2023</h6>
                <p>
                  Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>
              <div className="clg18">
                <h6>25 May 2023</h6>
                <p>
                  Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>
            </div>
            <div className="clg19">
              <h5>Jamia Millia Islamia University Quick Facts</h5>
              <ul className="clg20">
                <li>
                  JMI placement 2023 records the highest CTC of INR 25 LPA.
                </li>
                <li>
                  JMI Welcomes a Team from Applied Science University for the
                  German student exchange program.
                </li>
                <li>
                  A Global Webinar on "E-Literature Explorations of Literary
                  Creativity" is Hosted by JMI.
                </li>
                <li>
                  UGC notifies AMU and JMI in writing that CUET scores are
                  required for undergraduate admission in all central
                  universities.
                </li>
                <li>
                  JMI and the Taiwan Economic Culture Center team up to improve
                  academic cooperation.
                </li>
                <li>
                  Jamia Millia Islamia conducted Entrepreneurship Development
                  Program.
                </li>
                <li>
                  In the upcoming session, Jamia intends to offer dual degrees,
                  online education, and FYUP.
                </li>
                <li>
                  The University was recognised as a central university on
                  December 26, 1988.
                </li>
                <li>
                  In 1962, Jamia Millia Islamia University was declared a
                  “deemed to be university” by the University Grants Commission.
                </li>
              </ul>
            </div>
          </div>
          <div className="clg22">
            <h5>Jamia Miliya Islamia, New Delhi Highlights</h5>
            <div className="clg23">
              <div className="clg24">
                <div className="ingooo10">
                  <img src={img} alt="" />
                  <p>Institution Type</p>
                </div>
                <p>Private</p>
              </div>
              <div className="clg24">
                <div className="ingooo10">
                  <img src={img2} alt="" />
                  <p>Total Faculty</p>
                </div>
                <p>500</p>
              </div>
              <div className="clg24">
                <div className="ingooo10">
                  <img src={img3} alt="" />
                  <p>Year of Establishment</p>
                </div>
                <p>2003</p>
              </div>
              <div className="clg24">
                <div className="ingooo10">
                  <img src={img4} alt="" />
                  <p>Gender Accepted</p>
                </div>
                <p>Co-Ed</p>
              </div>
              <div className="clg24">
                <div className="ingooo10">
                  <img src={img5} alt="" />
                  <p>Student Enrollment</p>
                </div>
                <p>21306</p>
              </div>
              <div className="clg24">
                <div className="ingooo10">
                  <img src={img6} alt="" />
                  <p>Campus Area</p>
                </div>
                <p>1000 Acres</p>
              </div>
            </div>
          </div>
          <div className="clg221">
            <h5>Jamia Miliya Islamia, New Delhi Ranking</h5>
            <div className="clg25">
              <div className="clg26">
                <button>Publisher</button>
                <button>Ranking</button>
                <button>Stream</button>
              </div>
              <div className="clg26">
                <div className="clg27img">
                  <img src={img7} alt="" />
                </div>
                <p>19</p>
                <p>Engineering</p>
              </div>
              <div className="clg26">
                <div className="clg27img">
                  <img src={img7} alt="" />
                </div>
                <p>19</p>
                <p>MBA</p>
              </div>
              <div className="clg26">
                <div className="clg27img">
                  <img src={img7} alt="" />
                </div>
                <p>19</p>
                <p>Pharmacy</p>
              </div>
            </div>
            <div className="clg28">
              <p>Show More</p>
            </div>
          </div>
          <div className="clg222">
            <h5>Jamia Miliya Islamia, New Delhi Course & Fees 2023</h5>
            <div className="clg25">
              <div className="clg26">
                <button>Course</button>
                <button>Avg. Fees</button>
                <button>Duration</button>
              </div>
              <div className="clg29">
                <p>B.Tech</p>
                <p>11,300</p>
                <p>4 Years</p>
              </div>
              <div className="clg29">
                <p>MBA</p>
                <p>11,300</p>
                <p>2 Years</p>
              </div>
              <div className="clg29">
                <p>M.Tech</p>
                <p>11,300</p>
                <p>2 Years</p>
              </div>
              <div className="clg29">
                <p>B.Tech</p>
                <p>11,300</p>
                <p>4 Years</p>
              </div>
              <div className="clg29">
                <p>B.Tech</p>
                <p>11,300</p>
                <p>4 Years</p>
              </div>
              <div className="clg29">
                <p>B.Tech</p>
                <p>11,300</p>
                <p>4 Years</p>
              </div>
              <div className="clg29">
                <p>B.Tech</p>
                <p>11,300</p>
                <p>4 Years</p>
              </div>
            </div>
            <div className="clg28">
              <p>Show More</p>
            </div>
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
            <div className="newclasas1">
              <p>Students aslo visited</p>
              <div className="newclasas4">
                <div className="newclasas2">
                  <img src={newimg} alt="" />
                  <div className="newclasas3">
                    <h6>India institute of Management [ IIM ]</h6>
                    <span>Indore, Madhya Pradesh | 8.7 / 10</span><br />
                    <span>BE/B.Tech</span>
                    <h5> ₹ 46.09 k First Year Fees</h5>
                  </div>
                </div>
                <div className="newclasas2">
                  <img src={newimg} alt="" />
                  <div className="newclasas3">
                    <h6>India institute of Management [ IIM ]</h6>
                    <span>Indore, Madhya Pradesh | 8.7 / 10</span><br />
                    <span>BE/B.Tech</span>
                    <h5> ₹ 46.09 k First Year Fees</h5>
                  </div>
                </div>
                <div className="newclasas2">
                  <img src={newimg} alt="" />
                  <div className="newclasas3">
                    <h6>India institute of Management [ IIM ]</h6>
                    <span>Indore, Madhya Pradesh | 8.7 / 10</span><br />
                    <span>BE/B.Tech</span>
                    <h5> ₹ 46.09 k First Year Fees</h5>
                  </div>
                </div>
                <div className="newclasas2">
                  <img src={newimg} alt="" />
                  <div className="newclasas3">
                    <h6>India institute of Management [ IIM ]</h6>
                    <span>Indore, Madhya Pradesh | 8.7 / 10</span><br />
                    <span>BE/B.Tech</span>
                    <h5> ₹ 46.09 k First Year Fees</h5>
                  </div>
                </div>
              </div>

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
      <div className="home60">
        <div className="home61">
          <h1>Subscribe To Our NewsLetter</h1>
          <div className="home62">
            <input type="text" name="" id="" placeholder="Name" />
            <input type="text" name="" id="" placeholder="Mobile" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="text" name="" id="" placeholder="Your Stream" />
          </div>
          <div className="home63">
            <button>Submit</button>
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

export default CollegeInfo;
