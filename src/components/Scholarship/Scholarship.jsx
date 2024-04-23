import React, { useState, useEffect } from "react";
import './Scholarship.css'
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
import scholarshipimg from '../../Images/schrolarship.png';
import img from '../../Images/clgschro.png'
import TopNavbar from "../TopNavbar";
import Sidebar3 from "../Sidebar3";
import { IoMdArrowDropright } from "react-icons/io";
import ApplyNowModal from "../Modals/Login/Apply";


const Scholarship = () => {
  const navigate = useNavigate();
  const [slideShow2, setSlideShow2] = useState(8);
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 800) {
      setSlideShow2(3);
    } else if (window.innerWidth > 800 && window.innerWidth < 1100) {
      setSlideShow2(3);
    } else setSlideShow2(8);
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  const settings3 = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: slideShow2,
    slidesToScroll: 1,
    autoplay: true,
  };

  const [showNavbar, setShowNavbar] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);
  const [show3, setShow3] = useState(false);



  return (
    <>
      <div className="app1">
        <div className="schro">
          <TopNavbar />
        </div>
        <div className="app6">
          <img src={scholarshipimg} />
        </div>
        <div className="schro1">
          <div className="home100">
            <i class="fa-solid fa-bars" onClick={handleShow}></i>
          </div>
          <div className="schro2">
            <h2>Let's start your career journey.</h2>
          </div>
          <div className="home4">
            <input
              type="text"
              placeholder="Search for colleges, exams, Q & A, Articles..."
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="schro3">
            <button onClick={() => navigate("/screen2")}>
              Explore College & University
            </button>
          </div>
        </div>
      </div>
      <div className="schro5">
        <div className="schro58">
          <Sidebar3 />
        </div>


        <div className="schro12">
          <div className="schro6">
            <div className="schro7">
              <div className="schro8"><h6>TATA Scholarship-Cornell University</h6></div>
              <div className="schro9">
                <p>International Student Eligible : <span>Yes</span></p>
                <p>Amount : <span>Variable Amount</span></p>
                <p>Type : <span>College Specific</span></p>
                <p>Level Of Study  : <span>Bachelors</span></p>
                <p>Number Of Scholorships : <span>40</span></p>
                <h5 onClick={() => setModalShow(true)}>Read more  <IoMdArrowDropright /></h5>
              </div>
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Hubert H. Humphery Fellows...........</h6></div>
              <div className="schro9">
                <p>International Student Eligible : <span>Yes</span></p>
                <p>Amount : <span>Variable Amount</span></p>
                <p>Type : <span>College Specific</span></p>
                <p>Level Of Study  : <span>Bachelors</span></p>
                <p>Number Of Scholorships : <span>40</span></p>
                <h5 onClick={() => setModalShow(true)}>Read more  <IoMdArrowDropright /></h5>
              </div>
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Ontario Trillium Scholarship...........</h6></div>
              <div className="schro9">
                <p>International Student Eligible : <span>Yes</span></p>
                <p>Amount : <span>Variable Amount</span></p>
                <p>Type : <span>College Specific</span></p>
                <p>Level Of Study  : <span>Bachelors</span></p>
                <p>Number Of Scholorships : <span>40</span></p>
                <h5 onClick={() => setModalShow(true)}>Read more  <IoMdArrowDropright /></h5>
              </div>
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
          </div>
          <div className="schro11">

          </div>

          <div className="schro6">
            <div className="schro7">
              <div className="schro8"><h6>TATA Scholarship-Cornell University</h6></div>
              <div className="schro9">
                <p>International Student Eligible : <span>Yes</span></p>
                <p>Amount : <span>Variable Amount</span></p>
                <p>Type : <span>College Specific</span></p>
                <p>Level Of Study  : <span>Bachelors</span></p>
                <p>Number Of Scholorships : <span>40</span></p>
                <h5 onClick={() => setModalShow(true)}>Read more  <IoMdArrowDropright /></h5>
              </div>
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Hubert H. Humphery Fellows...........</h6></div>
              <div className="schro9">
                <p>International Student Eligible : <span>Yes</span></p>
                <p>Amount : <span>Variable Amount</span></p>
                <p>Type : <span>College Specific</span></p>
                <p>Level Of Study  : <span>Bachelors</span></p>
                <p>Number Of Scholorships : <span>40</span></p>
                <h5>Read more  <IoMdArrowDropright /></h5>
              </div>
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Ontario Trillium Scholarship...........</h6></div>
              <div className="schro9">
                <p>International Student Eligible : <span>Yes</span></p>
                <p>Amount : <span>Variable Amount</span></p>
                <p>Type : <span>College Specific</span></p>
                <p>Level Of Study  : <span>Bachelors</span></p>
                <p>Number Of Scholorships : <span>40</span></p>
                <h5 onClick={() => setModalShow(true)}>Read more  <IoMdArrowDropright /></h5>
              </div>
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
          </div>

          <div className="schro13">
            <div className="schro14">
              <div className="schro15">Most Popular Links</div>
              <div className="schro16">Study in Delhi College</div>
              <div className="schro16">Study in Chandigarh College</div>
              <div className="schro16">Study in Delhi College</div>
              <div className="schro16">Study in Chandigarh College</div>
              <div className="schro16">Study in Delhi College</div>
            </div>
            <div className="schro17">
              <div className="schro18">Most Applied Colleges</div>
              <div className="schro19">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>College Name</h5>
                  <p>College City</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>
              <div className="schro19">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>College Name</h5>
                  <p>College City</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>
              <div className="schro19">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>College Name</h5>
                  <p>College City</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>
              <div className="schro19">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>College Name</h5>
                  <p>College City</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>
              <div className="schro19">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>College Name</h5>
                  <p>College City</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>

            </div>
            <div className="schro21">
              <div className="schro22">Most Applied Scholarships</div>
              <div className="schro23">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>Scholarship Name</h5>
                  <p>Amount</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>
              <div className="schro23">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>Scholarship Name</h5>
                  <p>Amount</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>
              <div className="schro23">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>Scholarship Name</h5>
                  <p>Amount</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>
              <div className="schro23">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>Scholarship Name</h5>
                  <p>Amount</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>
              <div className="schro23">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>Scholarship Name</h5>
                  <p>Amount</p>
                </div>
                <button onClick={() => setModalShow(true)}>Apply</button>
              </div>

            </div>
          </div>
          <div className="schro11">
          </div>

          <div className="schro6">
            <div className="schro7">
              <div className="schro8"><h6>TATA Scholarship-Cornell University</h6></div>
              <div className="schro9">
                <p>International Student Eligible : <span>Yes</span></p>
                <p>Amount : <span>Variable Amount</span></p>
                <p>Type : <span>College Specific</span></p>
                <p>Level Of Study  : <span>Bachelors</span></p>
                <p>Number Of Scholorships : <span>40</span></p>
                <h5 onClick={() => setModalShow(true)}>Read more  <IoMdArrowDropright /></h5>
              </div>
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Hubert H. Humphery Fellows...........</h6></div>
              <div className="schro9">
                <p>International Student Eligible : <span>Yes</span></p>
                <p>Amount : <span>Variable Amount</span></p>
                <p>Type : <span>College Specific</span></p>
                <p>Level Of Study  : <span>Bachelors</span></p>
                <p>Number Of Scholorships : <span>40</span></p>
                <h5 onClick={() => setModalShow(true)}>Read more  <IoMdArrowDropright /></h5>
              </div>
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Ontario Trillium Scholarship...........</h6></div>
              <div className="schro9">
                <p>International Student Eligible : <span>Yes</span></p>
                <p>Amount : <span>Variable Amount</span></p>
                <p>Type : <span>College Specific</span></p>
                <p>Level Of Study  : <span>Bachelors</span></p>
                <p>Number Of Scholorships : <span>40</span></p>
                <h5 onClick={() => setModalShow(true)}>Read more  <IoMdArrowDropright /></h5>
              </div>
              <div className="schro10">
                <button onClick={() => setModalShow(true)}>Apply Now</button>
                <button onClick={() => setModalShow(true)}>Get Alert</button>
              </div>
            </div>
          </div>

          <div className="examm15">
            Load more
          </div>


        </div>

      </div>


      <div className="schro24">
      </div>
      <Footer />
      <div className="home555">
        <p>Jamia Miliya Islamia College of Engineering Delhi : Admissions Open for  B.E | MBA | MCA 2023 </p>
        <button onClick={() => setModalShow(true)}>Apply Now!</button>
      </div>

      <ApplyNowModal show={modalShow}
        onHide={() => setModalShow(false)} />
    </>
  );
};

export default Scholarship;
