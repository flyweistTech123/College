import React, {useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";
import TopPart from "./TopPart";
import img from "../Images/c50.png";
import img2 from "../Images/c51.png";
import img3 from "../Images/c52.png";
import img4 from "../Images/c53.png";
import img5 from "../Images/c54.png";
import img6 from "../Images/c55.png";
import img7 from "../Images/c56.png";
import img8 from "../Images/c57.png";
import img9 from "../Images/c58.png";

import MobileLoanNavbar from "./MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';

const CollegeInfo = () => {
  const [show, setShow] = useState(false);

  const [flag, setFlag] = useState(false)

  const getFlag = ()=>{
    setFlag(prev => !prev);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
          <div className="clg21">
            <div className="clg17">
              <h5>Last Update for Jamia Millia Islamia</h5>
              <div className="clg18">
                <i class="fa-solid fa-calendar"></i>
                <h6>25 May 2023</h6>
                <p>
                  Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>
              <div className="clg18">
                <i class="fa-solid fa-calendar"></i>
                <h6>25 May 2023</h6>
                <p>
                  Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>
            </div>
            <div className="clg17">
              <h5>Last Update for Jamia Millia Islamia</h5>
              <div className="clg18">
                <i class="fa-solid fa-calendar"></i>
                <h6>25 May 2023</h6>
                <p>
                  Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>
              <div className="clg18">
                <i class="fa-solid fa-calendar"></i>
                <h6>25 May 2023</h6>
                <p>
                  Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>
            </div>
            <div className="clg17">
              <h5>Last Update for Jamia Millia Islamia</h5>
              <div className="clg18">
                <i class="fa-solid fa-calendar"></i>
                <h6>25 May 2023</h6>
                <p>
                  Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </p>
              </div>
              <div className="clg18">
                <i class="fa-solid fa-calendar"></i>
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
            <hr />
            <div className="clg23">
              <div className="clg24">
                <img src={img} alt="" />
                <p>Institution Type</p>
                <p>Private</p>
              </div>
              <div className="clg24">
                <img src={img2} alt="" />
                <p>Total Faculty</p>
                <p>500</p>
              </div>
              <div className="clg24">
                <img src={img3} alt="" />
                <p>Year Of Establishment</p>
                <p>2003</p>
              </div>
              <div className="clg24">
                <img src={img4} alt="" />
                <p>Gender Accepted</p>
                <p>Co-Ed</p>
              </div>
              <div className="clg24">
                <img src={img5} alt="" />
                <p>Student Enrollment</p>
                <p>21306</p>
              </div>
              <div className="clg24">
                <img src={img6} alt="" />
                <p>Campus Area</p>
                <p>1000 Acres</p>
              </div>
            </div>
          </div>
          <div className="clg22">
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
            <div className="clg35" style={{paddingBottom:"20px"}}>
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
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
            <div className="clg35" style={{paddingBottom:"20px"}}>
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
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

export default CollegeInfo;
