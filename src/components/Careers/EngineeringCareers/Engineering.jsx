import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../Footer";
import careersimg from '../../../Images/careers.png';
import TopNavbar from "../../TopNavbar";
import career1 from '../../../Images/career1.png'




const EngineeringCareers = () => {
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
          <h3>Careers in Engineering & Technology</h3>

          <div className="caree6">
            <div className="caree8"  onClick={() => navigate("/electricalengineering")}>
              <img src={career1} alt="" />
              <h3>Electronic Engineer</h3>
            </div>
            <div className="caree8">
              <img src={career1} alt="" />
              <h3>Chemical Engineer</h3>
            </div>
            <div className="caree8">
              <img src={career1} alt="" />
              <h3>Communication Engineer</h3>
            </div>
          </div>
          <div className="caree6">
            <div className="caree8">
              <img src={career1} alt="" />
              <h3>Instrumental  Engineer</h3>
            </div>
            <div className="caree8">
              <img src={career1} alt="" />
              <h3>Flight Engineer</h3>
            </div>
            <div className="caree8">
              <img src={career1} alt="" />
              <h3>Agricultural Engineer</h3>
            </div>
          </div>
          <div className="caree6">
            <div className="caree8">
              <img src={career1} alt="" />
              <h3>Aeronautical  Engineer</h3>
            </div>
            <div className="caree8">
              <img src={career1} alt="" />
              <h3>Software Engineer</h3>
            </div>
            <div className="caree8">
              <img src={career1} alt="" />
              <h3>Sales Engineer</h3>
            </div>
          </div>
          <div className="caree6">
            <div className="caree8">
              <img src={career1} alt="" />
              <h3>Civil Engineer</h3>
            </div>
            <div className="caree8">
              <img src={career1} alt="" />
              <h3>Automobile Engineer</h3>
            </div>
            <div className="caree8">
              <img src={career1} alt="" />
              <h3>Web Engineer</h3>
            </div>
          </div>
          <div className="caree6">
            <div className="caree8">
              <img src={career1} alt="" />
              <h3>Robotics Engineer</h3>
            </div>
            <div className="caree8">
              <img src={career1} alt="" />
              <h3>Materials Engineer</h3>
            </div>
            <div className="caree8">
              <img src={career1} alt="" />
              <h3>Petroleum Engineer</h3>
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

export default EngineeringCareers;
