import React, {useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";
import TopPart from "./TopPart";
import img8 from "../Images/c57.png";
import img9 from "../Images/c58.png";

import MobileLoanNavbar from "./MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';

const CourseAndFee = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [flag, setFlag] = useState(false)
  const getFlag = ()=>{
    setFlag(prev => !prev);
  }
  return (
    <>
      <div className="loan100">
        <i class="fa-solid fa-bars" onClick={handleShow}></i>
      </div>
      <Navbar />
      <Banner />
      <TopPart />
      <div className="clg14">
        <div className="clg15">
          <div className="clg22">
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
          <div className="clg40">
            <div className="clg41">
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementu
              </p>
            </div>
            <div className="clg42">
              <h5>Jamia Miliya Islamia, Course & Fee Structure</h5>
              <p>
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
            </div>
            <div className="clg25">
              <div className="clg26">
                <button>Course</button>
                <button>Total Tuition Fee</button>
                <button>Eligibility</button>
              </div>
              <div className="clg29">
                <p>B.Sc Anaesthesia Technology (AT)</p>
                <p>2,34,645</p>
                <p>Graduation</p>
              </div>
              <div className="clg29">
                <p>
                  Bachelor of Audiology and Speech-Language Pathology (BASLP)
                </p>
                <p>2,34,645</p>
                <p>Graduation</p>
              </div>
              <div className="clg29">
                <p>B.Sc Cardiac Perfusion Technology (CPT)</p>
                <p>2,34,645</p>
                <p>Graduation</p>
              </div>
              <div className="clg29">
                <p>B.Sc Cardio Vascular Technology (CVT)</p>
                <p>2,34,645</p>
                <p>Graduation</p>
              </div>
              <div className="clg29">
                <p>B.Sc Diabetes Sciences (DBS)</p>
                <p>2,34,645</p>
                <p>Graduation</p>
              </div>
              <div className="clg29">
                <p>B.Sc Dialysis Therapy (DT)</p>
                <p>2,34,645</p>
                <p>Graduation</p>
              </div>
              <div className="clg29">
                <p>B.Sc Dialysis Therapy (DT)</p>
                <p>2,34,645</p>
                <p>Graduation</p>
              </div>
              <div className="clg29">
                <p>B.Sc Dialysis Therapy (DT)</p>
                <p>2,34,645</p>
                <p>Graduation</p>
              </div>
              <div className="clg29">
                <p>B.Sc Dialysis Therapy (DT)</p>
                <p>2,34,645</p>
                <p>Graduation</p>
              </div>
              <div className="clg29">
                <p>B.Sc Dialysis Therapy (DT)</p>
                <p>2,34,645</p>
                <p>Graduation</p>
              </div>
              <div className="clg29">
                <p>B.Sc Dialysis Therapy (DT)</p>
                <p>2,34,645</p>
                <p>Graduation</p>
              </div>
            </div>
            <div className="clg43">
              <h4>Entrance Exams Accepted by Jamia Miliya Islamia</h4>
              <p>
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <ul>
                <li>CET</li>
                <li>PGCET</li>
                <li>AP PGCET</li>
                <li>GATE</li>
                <li>UGC NET</li>
                <li>CAT</li>
                <li>XAT</li>
                <li>CMAT</li>
              </ul>
            </div>
            <div className="clg43">
              <h4> Jamia Miliya Islamia Fee Payment Guidelines</h4>
              <p>
                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </p>
              <ul>
                <li>Go to official website</li>
                <li>Click on Admission</li>
                <li>Click on Apply Now</li>
                <li>Fill out and submit the application form online</li>
                <li>Pay the application fee online.</li>
              </ul>
            </div>
            <div className="clg28">
              <p>Show More</p>
            </div>
          </div>
          <div className="clg44">
            <div className="clg45">
              <div className="clg46">
                <p>B.Tech [Bachelor of Technology] Full Time • On Campus</p>
              </div>
              <div className="clg47">
                <div className="clg48">
                  <p>₹ 11,70,000 (4 Years) Avg. Fees</p>
                </div>
                <div className="clg49">
                  <button className="clg50">Interested</button>
                  <button className="clg51">Brochure</button>
                </div>
              </div>
            </div>
            <div className="clg52">
              <p>All Branches Technology</p>
            </div>
            <div className="clg53">
              <div className="clg54">
                <h4>Bachelor of Technology [B.Tech] (Aerospace Engineering)</h4>
                <p>Check Eligibility</p>
              </div>
              <div className="clg55">
                <h6>₹ 1,00,000</h6>
                <p>View Detail Fees</p>
              </div>
              <div className="clg56">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="clg57"/>
            <div className="clg53">
              <div className="clg54">
                <h4>Bachelor of Technology [B.Tech] (Aerospace Engineering)</h4>
                <p>Check Eligibility</p>
              </div>
              <div className="clg55">
                <h6>₹ 1,00,000</h6>
                <p>View Detail Fees</p>
              </div>
              <div className="clg56">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="clg57"/>
            <div className="clg53">
              <div className="clg54">
                <h4>Bachelor of Technology [B.Tech] (Aerospace Engineering)</h4>
                <p>Check Eligibility</p>
              </div>
              <div className="clg55">
                <h6>₹ 1,00,000</h6>
                <p>View Detail Fees</p>
              </div>
              <div className="clg56">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="clg57"/>
            <div className="clg53">
              <div className="clg54">
                <h4>Bachelor of Technology [B.Tech] (Aerospace Engineering)</h4>
                <p>Check Eligibility</p>
              </div>
              <div className="clg55">
                <h6>₹ 1,00,000</h6>
                <p>View Detail Fees</p>
              </div>
              <div className="clg56">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="clg57"/>
            <div className="clg53">
              <div className="clg54">
                <h4>Bachelor of Technology [B.Tech] (Aerospace Engineering)</h4>
                <p>Check Eligibility</p>
              </div>
              <div className="clg55">
                <h6>₹ 1,00,000</h6>
                <p>View Detail Fees</p>
              </div>
              <div className="clg56">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="clg57"/>
            <div className="clg53">
              <div className="clg54">
                <h4>Bachelor of Technology [B.Tech] (Aerospace Engineering)</h4>
                <p>Check Eligibility</p>
              </div>
              <div className="clg55">
                <h6>₹ 1,00,000</h6>
                <p>View Detail Fees</p>
              </div>
              <div className="clg56">
                <button>Apply Now</button>
              </div>
            </div>
          </div>
          <div className="clg44">
            <div className="clg45">
              <div className="clg46">
                <p>MBA [Master of Business Administration]</p>
              </div>
              <div className="clg47">
                <div className="clg48">
                  <p>₹ 11,70,000 (4 Years) Avg. Fees</p>
                </div>
                <div className="clg49">
                  <button className="clg50">Interested</button>
                  <button className="clg51">Brochure</button>
                </div>
              </div>
            </div>
            <div className="clg52">
              <p>All Branches Technology</p>
            </div>
            <div className="clg53">
              <div className="clg54">
                <h4>Bachelor of Technology [B.Tech] (Aerospace Engineering)</h4>
                <p>Check Eligibility</p>
              </div>
              <div className="clg55">
                <h6>₹ 1,00,000</h6>
                <p>View Detail Fees</p>
              </div>
              <div className="clg56">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="clg57"/>
            <div className="clg53">
              <div className="clg54">
                <h4>Bachelor of Technology [B.Tech] (Aerospace Engineering)</h4>
                <p>Check Eligibility</p>
              </div>
              <div className="clg55">
                <h6>₹ 1,00,000</h6>
                <p>View Detail Fees</p>
              </div>
              <div className="clg56">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="clg57"/>
            <div className="clg53">
              <div className="clg54">
                <h4>Bachelor of Technology [B.Tech] (Aerospace Engineering)</h4>
                <p>Check Eligibility</p>
              </div>
              <div className="clg55">
                <h6>₹ 1,00,000</h6>
                <p>View Detail Fees</p>
              </div>
              <div className="clg56">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="clg57"/>
            <div className="clg53">
              <div className="clg54">
                <h4>Bachelor of Technology [B.Tech] (Aerospace Engineering)</h4>
                <p>Check Eligibility</p>
              </div>
              <div className="clg55">
                <h6>₹ 1,00,000</h6>
                <p>View Detail Fees</p>
              </div>
              <div className="clg56">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="clg57"/>
            <div className="clg53">
              <div className="clg54">
                <h4>Bachelor of Technology [B.Tech] (Aerospace Engineering)</h4>
                <p>Check Eligibility</p>
              </div>
              <div className="clg55">
                <h6>₹ 1,00,000</h6>
                <p>View Detail Fees</p>
              </div>
              <div className="clg56">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="clg57"/>
            <div className="clg53">
              <div className="clg54">
                <h4>Bachelor of Technology [B.Tech] (Aerospace Engineering)</h4>
                <p>Check Eligibility</p>
              </div>
              <div className="clg55">
                <h6>₹ 1,00,000</h6>
                <p>View Detail Fees</p>
              </div>
              <div className="clg56">
                <button>Apply Now</button>
              </div>
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
          <div className="clg30">
            <div className="clg33">
              <h6 className={!flag?"clg33h6":"clg33p"} onClick={getFlag}>Featured News</h6>
              <p className={flag?"clg33h6":"clg33p"} onClick={getFlag}>Recent News</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35" style={{ paddingBottom: "20px" }}>
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
          </div>
          <div className="clg30">
            <div className="clg33">
              <h6 className={!flag?"clg33h6":"clg33p"} onClick={getFlag}>Trending Articles</h6>
              <p className={flag?"clg33h6":"clg33p"} onClick={getFlag}>Recent Articles</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35" style={{ paddingBottom: "20px" }}>
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
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

export default CourseAndFee;
