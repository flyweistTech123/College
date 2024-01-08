import React, { useState, useEffect } from "react";
import './Careers.css'
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
import careersimg from '../../Images/careers.png';
import TopNavbar from "../TopNavbar";
import career1 from '../../Images/career1.png'
import career2 from '../../Images/career2.png'
import career3 from '../../Images/career3.png'
import career4 from '../../Images/career4.png'
import career5 from '../../Images/career5.png'
import career6 from '../../Images/career6.png'
import career7 from '../../Images/career7.png'
import career8 from '../../Images/career8.png'
import career9 from '../../Images/career9.png'
import career10 from '../../Images/career10.png'
import career11 from '../../Images/career11.png'
import career12 from '../../Images/career12.png'
import career13 from '../../Images/career13.png'
import career14 from '../../Images/career14.png'
import career15 from '../../Images/career15.png'
import career16 from '../../Images/career16.png'
import career17 from '../../Images/career17.png'
import career18 from '../../Images/career18.png'
import career19 from '../../Images/career19.png'
import career20 from '../../Images/career20.png'
import career21 from '../../Images/career21.png'
import career22 from '../../Images/career22.png'
import career23 from '../../Images/career23.png'


const Careers = () => {
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
          <img src={careersimg} />
        </div>
        <div className="caree1">
          <div className="home100">
            <i class="fa-solid fa-bars" onClick={handleShow}></i>
          </div>
          <div className="caree2">
            <h2>Start Your Dream Career</h2>
          </div>
          <div className="caree3">
            <button onClick={() => navigate("/screen2")}>
              Explore College & University
            </button>
          </div>
        </div>
      </div>

      <div className="caree4">
        <h2>What Career you are Looking For</h2>
        <div className="home4">
          <input
            type="text"
            placeholder="Search for colleges, exams, Q & A, Articles..."
          />
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>

        <div className="caree5">
          <h3>Choose By Interest</h3>

          <div className="caree6">
            <div className="caree7"  onClick={() => navigate("/engineeringcareers")}>
              <img src={career1} alt="" />
              <h3>Engineering</h3>
            </div>
            <div className="caree7" onClick={() => navigate("/engineeringcareers")}>
              <img src={career2} alt="" />
              <h3>Law</h3>
            </div>
            <div className="caree7">
              <img src={career3} alt="" />
              <h3>Aerospace & Aviation</h3>
            </div>
          </div>
          <div className="caree6">
            <div className="caree7">
              <img src={career4} alt="" />
              <h3>Agricultural</h3>
            </div>
            <div className="caree7">
              <img src={career5} alt="" />
              <h3>Animation,Web Design</h3>
            </div>
            <div className="caree7">
              <img src={career6} alt="" />
              <h3>Management</h3>
            </div>
          </div>
          <div className="caree6">
            <div className="caree7">
              <img src={career7} alt="" />
              <h3>HealthCare</h3>
            </div>
            <div className="caree7">
              <img src={career8} alt="" />
              <h3>Journalism</h3>
            </div>
            <div className="caree7">
              <img src={career9} alt="" />
              <h3>Media & Entertainment</h3>
            </div>
          </div>
          <div className="caree6">
            <div className="caree7">
              <img src={career10} alt="" />
              <h3>Design</h3>
            </div>
            <div className="caree7">
              <img src={career11} alt="" />
              <h3>Banking</h3>
            </div>
            <div className="caree7">
              <img src={career12} alt="" />
              <h3>Finance</h3>
            </div>
          </div>
          <div className="caree6">
            <div className="caree7">
              <img src={career13} alt="" />
              <h3>Food Processing</h3>
            </div>
            <div className="caree7">
              <img src={career14} alt="" />
              <h3>Humanities & Arts</h3>
            </div>
            <div className="caree7">
              <img src={career15} alt="" />
              <h3>Information Technology</h3>
            </div>
          </div>
          <div className="caree6">
            <div className="caree7">
              <img src={career16} alt="" />
              <h3>Hotel Management</h3>
            </div>
            <div className="caree7">
              <img src={career17} alt="" />
              <h3>Arts</h3>
            </div>
            <div className="caree7">
              <img src={career18} alt="" />
              <h3>Vocational Course</h3>
            </div>
          </div>
          <div className="caree6">
            <div className="caree7">
              <img src={career19} alt="" />
              <h3>Educational & Skill Development</h3>
            </div>
            <div className="caree7">
              <img src={career20} alt="" />
              <h3>Marketing</h3>
            </div>
            <div className="caree7">
              <img src={career21} alt="" />
              <h3>Merchant Navy</h3>
            </div>
          </div>
          <div className="caree6">
            <div className="caree7">
              <img src={career22} alt="" />
              <h3>Sciences</h3>
            </div>
            <div className="caree7">
              <img src={career23} alt="" />
              <h3>Physical Education</h3>
            </div>
          </div>

        </div>
      </div>

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


      <Footer />
    </>
  );
};

export default Careers;
