import React, { useState, useEffect } from "react";
import './Courses.css'
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
import course from '../../Images/course.png';
import TopNavbar from "../TopNavbar";
import course1 from '../../Images/course11.png'
import img from "../../Images/c33.png";
import img3 from "../../Images/c1.png";
import img4 from "../../Images/c4.png";
import img5 from "../../Images/c5.png";
import img6 from "../../Images/c6.png";
import img7 from "../../Images/c7.png";
import img8 from "../../Images/c8.png";
import img9 from "../../Images/c9.png";
import img10 from "../../Images/c10.png";
import img11 from "../../Images/c11.png";
import img14 from "../../Images/c14.png";
import img15 from "../../Images/c15.png";
import img16 from "../../Images/c16.png";
import img17 from "../../Images/c17.png";
import img18 from "../../Images/c18.png";
import img19 from "../../Images/c19.png";
import img20 from "../../Images/c20.png";
import img21 from "../../Images/c21.png";
import img22 from "../../Images/c22.png";
import img23 from "../../Images/c23.png";
import img24 from "../../Images/c24.png";
import img25 from "../../Images/c25.png";
import img26 from "../../Images/c26.png";
import IIt2 from '../../Images/IIT2.png'
import { IoIosArrowForward } from "react-icons/io";





const Courses = () => {
  const navigate = useNavigate();



  const [showNavbar, setShowNavbar] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);
  const [show3, setShow3] = useState(false);

  function NavMenu() {
    return (
      <>
        <div className="menu1">
          <h3>Top Universities</h3>
          <div className="menu2">
            <div className="menu3">
              <h6>Delhi</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
            <div className="menu3">
              <h6>Mumbai</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
            <div className="menu3">
              <h6>Chennai</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
            <div className="menu3">
              <h6>Bangalore</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
          </div>
        </div>
      </>
    );
  }

  const handleClick = () => {
    setShowNavbar((prev) => !prev);
  };

  return (
    <>
      <div className="app1">
        <div className="schro">
          <TopNavbar />
        </div>
        <div className="app6">
          <img src={course} />
        </div>
        <div className="schro1">
          <div className="home100">
            <i class="fa-solid fa-bars" onClick={handleShow}></i>
          </div>
          <div className="schro2">
            <h2>Search for Courses in India</h2>
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

      <div className="course1">
        <h1>Don’t Know What to Choose Choose by your level ?</h1>

        <div className="course2" >
          <div className="course3" onClick={()=>navigate('/courses_details')}>
            <div className="course4">
              <img src={course1} alt="" />
              <div className="course5">
                <h6>After 10th Courses</h6>
                <p>Applicable for Diploma and certificate courses</p>
              </div>
            </div>
            <div className="course9">
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Iti</p>
                </div>
              </div>
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Arts</p>
                </div>
              </div>
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Dentals</p>
                </div>
              </div>
            </div>
            <div className="course9">
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p style={{ paddingLeft: '10px' }}>Animation</p>
                </div>
              </div>
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Arts</p>
                </div>
              </div>
            </div>

          </div>
          <div className="course3">
            <div className="course4">
              <img src={course1} alt="" />
              <div className="course5">
                <h6>After 10th Courses</h6>
                <p>Applicable for Diploma and certificate courses</p>
              </div>
            </div>
            <div className="course9">
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Iti</p>
                </div>
              </div>
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Arts</p>
                </div>
              </div>
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Dentals</p>
                </div>
              </div>
            </div>
            <div className="course9">
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p style={{ paddingLeft: '10px' }}>Animation</p>
                </div>
              </div>
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Arts</p>
                </div>
              </div>
            </div>

          </div>
          <div className="course3">
            <div className="course4">
              <img src={course1} alt="" />
              <div className="course5">
                <h6>After 10th Courses</h6>
                <p>Applicable for Diploma and certificate courses</p>
              </div>
            </div>
            <div className="course9">
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Iti</p>
                </div>
              </div>
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Arts</p>
                </div>
              </div>
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Dentals</p>
                </div>
              </div>
            </div>
            <div className="course9">
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p style={{ paddingLeft: '10px' }}>Animation</p>
                </div>
              </div>
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Arts</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="course2" >
          <div className="course3">
            <div className="course4">
              <img src={course1} alt="" />
              <div className="course5">
                <h6>After 10th Courses</h6>
                <p>Applicable for Diploma and certificate courses</p>
              </div>
            </div>
            <div className="course9">
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Iti</p>
                </div>
              </div>
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Arts</p>
                </div>
              </div>
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Dentals</p>
                </div>
              </div>
            </div>
            <div className="course9">
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p style={{ paddingLeft: '10px' }}>Animation</p>
                </div>
              </div>
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Arts</p>
                </div>
              </div>
            </div>

          </div>
          <div className="course3">
            <div className="course4">
              <img src={course1} alt="" />
              <div className="course5">
                <h6>After 10th Courses</h6>
                <p>Applicable for Diploma and certificate courses</p>
              </div>
            </div>
            <div className="course9">
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Iti</p>
                </div>
              </div>
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Arts</p>
                </div>
              </div>
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Dentals</p>
                </div>
              </div>
            </div>
            <div className="course9">
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p style={{ paddingLeft: '10px' }}>Animation</p>
                </div>
              </div>
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Arts</p>
                </div>
              </div>
            </div>

          </div>
          <div className="course3">
            <div className="course4">
              <img src={course1} alt="" />
              <div className="course5">
                <h6>After 10th Courses</h6>
                <p>Applicable for Diploma and certificate courses</p>
              </div>
            </div>
            <div className="course9">
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Iti</p>
                </div>
              </div>
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Arts</p>
                </div>
              </div>
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Dentals</p>
                </div>
              </div>
            </div>
            <div className="course9">
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p style={{ paddingLeft: '10px' }}>Animation</p>
                </div>
              </div>
              <div className="course6">
                <div className="course7">
                  <p>12</p>
                </div>
                <div className="course8">
                  <p>Arts</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <h1>Choose By Interest</h1>

        <div className="course12">
          <div className="course13">
            <div className="course14">
              <img className="impimg" src={img16} alt="" />
              <div className="home23">
                <h6>Management</h6>
                <p>461 colleges</p>
              </div>
            </div>
            <div className="course15">
              <button>Explore <IoIosArrowForward /></button>
            </div>
          </div>
          <div className="course13">
            <div className="course14">
              <img className="impimg" src={img14} alt="" />
              <div className="home23">
                <h6>Engineering</h6>
                <p>461 colleges</p>
              </div>
            </div>
            <div className="course15">
              <button>Explore <IoIosArrowForward /></button>
            </div>
          </div>
          <div className="course13">
            <div className="course14">
              <img className="impimg" src={img15} alt="" />
              <div className="home23">
                <h6>Law</h6>
                <p>461 colleges</p>
              </div>
            </div>
            <div className="course15">
              <button>Explore <IoIosArrowForward /></button>
            </div>
          </div>
        </div>
        <div className="course12">
          <div className="course13">
            <div className="course14">
              <img className="impimg" src={img17} alt="" />
              <div className="home23">
                <h6>Science</h6>
                <p>461 colleges</p>
              </div>
            </div>
            <div className="course15">
              <button>Explore <IoIosArrowForward /></button>
            </div>
          </div>
          <div className="course13">
            <div className="course14">
              <img className="impimg" src={img18} alt="" />
              <div className="home23">
                <h6>Commerce</h6>
                <p>461 colleges</p>
              </div>
            </div>
            <div className="course15">
              <button>Explore <IoIosArrowForward /></button>
            </div>
          </div>
          <div className="course13">
            <div className="course14">
              <img className="impimg" src={img19} alt="" />
              <div className="home23">
                <h6>Arts</h6>
                <p>461 colleges</p>
              </div>
            </div>
            <div className="course15">
              <button>Explore <IoIosArrowForward /></button>
            </div>
          </div>
        </div>
        <div className="course12">
          <div className="course13">
            <div className="course14">
              <img className="impimg" src={img20} alt="" />
              <div className="home23">
                <h6>Medical</h6>
                <p>461 colleges</p>
              </div>
            </div>
            <div className="course15">
              <button>Explore <IoIosArrowForward /></button>
            </div>
          </div>
          <div className="course13">
            <div className="course14">
              <img className="impimg" src={img21} alt="" />
              <div className="home23">
                <h6>Paramedical</h6>
                <p>461 colleges</p>
              </div>
            </div>
            <div className="course15">
              <button>Explore <IoIosArrowForward /></button>
            </div>
          </div>
          <div className="course13">
            <div className="course14">
              <img className="impimg" src={img22} alt="" />
              <div className="home23">
                <h6>Pharmacy</h6>
                <p>461 colleges</p>
              </div>
            </div>
            <div className="course15">
              <button>Explore <IoIosArrowForward /></button>
            </div>
          </div>
        </div>
      </div>

      <div className="course17">
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
      </div>

      <Footer />
    </>
  );
};

export default Courses;
