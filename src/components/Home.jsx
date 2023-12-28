import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import img from "../Images/c33.png";
import img3 from "../Images/c1.png";
import img4 from "../Images/c4.png";
import img5 from "../Images/c5.png";
import img6 from "../Images/c6.png";
import img7 from "../Images/c7.png";
import img8 from "../Images/c8.png";
import img9 from "../Images/c9.png";
import img10 from "../Images/c10.png";
import img11 from "../Images/c11.png";
import img12 from "../Images/c12.png";
import img13 from "../Images/c13.png";
import img14 from "../Images/c14.png";
import img15 from "../Images/c15.png";
import img16 from "../Images/c16.png";
import img17 from "../Images/c17.png";
import img18 from "../Images/c18.png";
import img19 from "../Images/c19.png";
import img20 from "../Images/c20.png";
import img21 from "../Images/c21.png";
import img22 from "../Images/c22.png";
import img23 from "../Images/c23.png";
import img24 from "../Images/c24.png";
import img25 from "../Images/c25.png";
import img26 from "../Images/c26.png";
import Dropdown from "react-bootstrap/Dropdown";
import clgimg from '../Images/clgimh.png'

import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import HomeTable from "./HomeTable";

import Records from "./data.json";

import TopNavbar from "./TopNavbar";

const Home = () => {
  const navigate = useNavigate();
  const [showt, setShowt] = useState(false);

  const [faltu, setFaltu] = useState(true);

  const handleClose = () => setShowt(false);
  const handleShow = () => setShowt(true);

  const [slideShow, setSlideShow] = useState(4);
  const [slideShow2, setSlideShow2] = useState(8);
  useEffect(() => {
    if (window.innerWidth < 800) {
      setSlideShow(1);
      setSlideShow2(3);
    } else if (window.innerWidth > 800 && window.innerWidth < 1100) {
      setSlideShow(2);
      setSlideShow2(3);
    } else setSlideShow(4);
  });




  const moreMenu = [
    {
      name: "Institute",
      link: "/screen2",
    },
    {
      name: "Q&A  ",
    },
    {
      name: "Test and Services  ",
      link: "/test",
    },
    {
      name: "Practice Questions",
    },

    {
      name: "Loan",
      link: "/loan",
    },

    {
      name: "Reviews",
    },

    {
      name: "Counsellor Connect",
      link: "/council-connect",
    },
    {
      name: "Become a partner",
      link: "/become-partner",
    },
    {
      name: "One Stop Solution",
      link: "/one-stop",
    },
    {
      name: "Profile",
      link: "/profile",
    },
  ];



  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: slideShow,
    slidesToScroll: 1,
    autoplay: true,
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
  function NavMenu() {
    return (
      <>
        <div className="menu1">
          <h3>Top Exams</h3>
          <div className="menu2">
            <div className="menu3">
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

  const [showNavbar2, setShowNavbar2] = useState(false);
  function NavMenu2() {
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

  const handleClick2 = () => {
    setShowNavbar2((prev) => !prev);
  };

  const handleFaltu = () => {
    setFaltu((prev) => !prev);
  };
  

  return (
    <>
      <div className="home200">
        <div className="home1">
          <Slider {...settings}>
            <div className="car1">
              <img src={img26} />
            </div>
            <div className="car1">
              <img src={img} />
            </div>
          </Slider>
          <div className="home2">
            <div className="home100">
              <i class="fa-solid fa-bars" onClick={handleShow}></i>
            </div>
            <TopNavbar color="#1A3B5A" />

            {showNavbar ? <NavMenu2 /> : " "}
            {showNavbar2 ? <NavMenu /> : ""}
            <div className="home5">
              <h2>Let's start your career journey.</h2>
            </div>
            <div className="home4">
              
              <input
                type="text"
                placeholder="Search for colleges, exams, Q & A, Articles..."
              />
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className="home6">
              <button onClick={() => navigate("/screen2")}>
                Explore College & University
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home7">
        <h2>Top Cities</h2>
        <div className="home8">
          <div className="home9" onClick={() => navigate("/delhi")}>
            <img src={img4} alt="" />
            <p>Delhi</p>
          </div>
          <div className="home9" onClick={() => navigate("/mumbai")} >
            <img src={img5} alt="" />
            <p>Mumbai</p>
          </div>
          <div className="home9" onClick={() => navigate("/kolkata")}>
            <img src={img6} alt="" />
            <p>Kolkata</p>
          </div>
          <div className="home9" onClick={() => navigate("/chennai")} >
            <img src={img7} alt="" />
            <p>Chennai</p>
          </div>
          <div className="home9" onClick={() => navigate("/agra")} >
            <img src={img8} alt="" />
            <p>Agra</p>
          </div>
          <div className="home9" onClick={() => navigate("/jaipur")} >
            <img src={img9} alt="" />
            <p>Jaipur</p>
          </div>
          <div className="home9" onClick={() => navigate("/jaipur")} >
            <img src={img9} alt="" />
            <p>Jaipur</p>
          </div>
          <div className="home9" onClick={() => navigate("/jaipur")} >
            <img src={img9} alt="" />
            <p>Jaipur</p>
          </div>
        </div>
      </div>

      <div className="home555">
        <p>Jamia Miliya Islamia College of Engineering Delhi : Admissions Open for  B.E | MBA | MCA 2023 </p>
        <button>Apply Now!</button>
      </div>

      <div className="home18">
        <h2>Explore your future</h2>
        <p>Select your college</p>
        <div className="home19">
          <div className={faltu ? "home20" : "home200"} onClick={handleFaltu}>
          Colleges
          <hr />
          </div>
          <div className={faltu ? "home200" : "home20"} onClick={handleFaltu}>
          Exams
          <hr />
          </div>
        </div>
        <div className="home21">
          <div className="home22" onClick={() => navigate("/management")}>
            <img className="impimg" src={img16} alt="" />
            <div className="home23">
              <h6>Management</h6>
              <p>461 colleges</p>
            </div>
            <img className="img23" src={img11} />
          </div>
          <div className="home22" onClick={() => navigate("/management")}>
            <img className="impimg" src={img14} alt="" />
            <div className="home23">
              <h6>Engineering</h6>
              <p>461 colleges</p>
            </div>
            <img className="img23" src={img11} />
          </div>
          <div className="home22" onClick={() => navigate("/management")}>
            <img className="impimg" src={img15} alt="" />
            <div className="home23">
              <h6>Law</h6>
              <p>461 colleges</p>
            </div>
            <img className="img23" src={img11} />
          </div>
          <div className="home22" onClick={() => navigate("/management")}>
            <img className="impimg" src={img17} alt="" />
            <div className="home23">
              <h6>Science</h6>
              <p>461 colleges</p>
            </div>
            <img className="img23" src={img11} />
          </div>
          <div className="home22" onClick={() => navigate("/management")}>
            <img className="impimg" src={img18} alt="" />
            <div className="home23">
              <h6>Commerce</h6>
              <p>461 colleges</p>
            </div>
            <img className="img23" src={img11} />
          </div>
          <div className="home22">
            <img className="impimg" src={img19} alt="" />
            <div className="home23">
              <h6>Arts</h6>
              <p>461 colleges</p>
            </div>
            <img className="img23" src={img11} />
          </div>
          <div className="home22">
            <img className="impimg" src={img20} alt="" />
            <div className="home23">
              <h6>Medical</h6>
              <p>461 colleges</p>
            </div>
            <img className="img23" src={img11} />
          </div>
          <div className="home22">
            <img className="impimg" src={img21} alt="" />
            <div className="home23">
              <h6>Paramedical</h6>
              <p>461 colleges</p>
            </div>
            <img className="img23" src={img11} />
          </div>
          <div className="home22">
            <img className="impimg" src={img22} alt="" />
            <div className="home23">
              <h6>Pharmacy</h6>
              <p>461 colleges</p>
            </div>
            <img className="img23" src={img11} />
          </div>
        </div>
      </div>
      <div className="home10">
        <h2>Top Colleges Near Me</h2>
        <div className="home11">
          <Slider {...settings2}>
            <div className="home12">
              <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
              <div className="home13">
                <div className="home14">
                  <h4>Jamai milia islamia</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              {/* <hr className="home16" /> */}
              <div className="home17">
                <p>View all courses and fees</p>
                <img
                  src={img11}
                  alt=""
                  onClick={() => navigate("/college-info")}
                />
              </div>
             
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <div className="home17">
                <p>Speak to Expert</p>
                <img src={img11} alt="" />
              </div>
              <div className="home177">
                <button>Apply Now</button>
              </div>
            </div>
            <div className="home12">
              <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
              <div className="home13">
                <div className="home14">
                  <h4>Jamai milia islamia</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              <div className="home17">
                <p>View all courses and fees</p>
                <img
                  src={img11}
                  alt=""
                  onClick={() => navigate("/college-info")}
                />
              </div>
             
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              {/* <hr className="home16" /> */}
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <div className="home17">
                <p>Speak to Expert</p>
                <img src={img11} alt="" />
              </div>
              <div className="home177">
                <button>Apply Now</button>
              </div>
            </div>
            <div className="home12">
              <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
              <div className="home13">
                <div className="home14">
                  <h4>Jamai milia islamia</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              <div className="home17">
                <p>View all courses and fees</p>
                <img
                  src={img11}
                  alt=""
                  onClick={() => navigate("/college-info")}
                />
              </div>
             
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <div className="home17">
                <p>Speak to Expert</p>
                <img src={img11} alt="" />
              </div>
              <div className="home177">
                <button>Apply Now</button>
              </div>
            </div>
            <div className="home12">
              <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
              <div className="home13">
                <div className="home14">
                  <h4>Jamai milia islamia</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              <div className="home17">
                <p>View all courses and fees</p>
                <img
                  src={img11}
                  alt=""
                  onClick={() => navigate("/college-info")}
                />
              </div>
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <div className="home17">
                <p>Speak to Expert</p>
                <img src={img11} alt="" />
              </div>
              <div className="home177">
                <button>Apply Now</button>
              </div>
            </div>
            <div className="home12">
              <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
              <div className="home13">
                <div className="home14">
                  <h4>Jamai milia islamia</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              <div className="home17">
                <p>View all courses and fees</p>
                <img
                  src={img11}
                  alt=""
                  onClick={() => navigate("/college-info")}
                />
              </div>
             
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <div className="home17">
                <p>Speak to Expert</p>
                <img src={img11} alt="" />
              </div>
              <div className="home177">
                <button>Apply Now</button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    
      <div className="home10">
        <h2>Top Universities</h2>
        <div className="home11">
        <Slider {...settings2}>
            <div className="home12">
              <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
              <div className="home13">
                <div className="home14">
                  <h4>Jamai milia islamia</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              {/* <hr className="home16" /> */}
              <div className="home17">
                <p>View all courses and fees</p>
                <img
                  src={img11}
                  alt=""
                  onClick={() => navigate("/college-info")}
                />
              </div>
             
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <div className="home17">
                <p>Speak to Expert</p>
                <img src={img11} alt="" />
              </div>
              <div className="home177">
                <button>Apply Now</button>
              </div>
            </div>
            <div className="home12">
              <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
              <div className="home13">
                <div className="home14">
                  <h4>Jamai milia islamia</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              <div className="home17">
                <p>View all courses and fees</p>
                <img
                  src={img11}
                  alt=""
                  onClick={() => navigate("/college-info")}
                />
              </div>
             
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              {/* <hr className="home16" /> */}
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <div className="home17">
                <p>Speak to Expert</p>
                <img src={img11} alt="" />
              </div>
              <div className="home177">
                <button>Apply Now</button>
              </div>
            </div>
            <div className="home12">
              <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
              <div className="home13">
                <div className="home14">
                  <h4>Jamai milia islamia</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              <div className="home17">
                <p>View all courses and fees</p>
                <img
                  src={img11}
                  alt=""
                  onClick={() => navigate("/college-info")}
                />
              </div>
             
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <div className="home17">
                <p>Speak to Expert</p>
                <img src={img11} alt="" />
              </div>
              <div className="home177">
                <button>Apply Now</button>
              </div>
            </div>
            <div className="home12">
              <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
              <div className="home13">
                <div className="home14">
                  <h4>Jamai milia islamia</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              <div className="home17">
                <p>View all courses and fees</p>
                <img
                  src={img11}
                  alt=""
                  onClick={() => navigate("/college-info")}
                />
              </div>
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <div className="home17">
                <p>Speak to Expert</p>
                <img src={img11} alt="" />
              </div>
              <div className="home177">
                <button>Apply Now</button>
              </div>
            </div>
            <div className="home12">
              <img className="home12img" src={img10} alt="" onClick={() => navigate("/college-info")} />
              <div className="home13">
                <div className="home14">
                  <h4>Jamai milia islamia</h4>
                  <p>30,000 yearly</p>
                </div>
                <div className="home15">
                  <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                  <p>20.5k Reviews</p>
                </div>
              </div>
              <div className="home17">
                <p>View all courses and fees</p>
                <img
                  src={img11}
                  alt=""
                  onClick={() => navigate("/college-info")}
                />
              </div>
             
              <div className="home17">
                <p>Download Broachers</p>
                <img src={img11} alt="" />
              </div>
              <div className="home17">
                <p>Compare</p>
                <img src={img11} alt="" />
              </div>
              <div className="home17">
                <p>Speak to Expert</p>
                <img src={img11} alt="" />
              </div>
              <div className="home177">
                <button>Apply Now</button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="home25">
        <h1>Top Features College</h1>
        <div className="home26">
          <Slider {...settings3}>
            <div className="home29">
              <button className="home27">City Name</button>
            </div>
            <div className="home29">
              <button className="home28" style={{ width: "120px" }}>MBA/PGDM</button>
            </div>
            <div className="home29">
              <button className="home28">B.sc</button>
            </div>
            <div className="home29">
              <button className="home28">B.Com</button>
            </div>
            <div className="home29">
              <button className="home28">BA</button>
            </div>
            <div className="home29">
              <button className="home28">BE/B.Tech</button>
            </div>
            <div className="home29">
              <button className="home28">BEA/BBM</button>
            </div>
            <div className="home29">
              <button className="home28">M.sc</button>
            </div>
            <div className="home29">
              <button className="home28">M.A</button>
            </div>
            <div className="home29">
              <button className="home28">B.F.A</button>
            </div>
            <div className="home29">
              <button className="home28">M.F.A</button>
            </div>
            <div className="home29">
              <button className="home28">B.Design</button>
            </div>
            <div className="home29">
              <button className="home28">M.Design</button>
            </div>
          </Slider>
        </div>
      </div>
      <HomeTable />
      <Footer />
      <Offcanvas show={showt} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <div className="home101">
            <img src={img3} alt="" />
            <>
              <div className="drop100">
                {Records?.map((ele, i) =>
                  ele?.item ? (
                    <Dropdown key={i}>
                      <Dropdown.Toggle variant="none" id="dropdown-basic">
                        {ele?.name}
                      </Dropdown.Toggle>
                      <div className="drop1">
                        <Dropdown.Menu style={{ display: "flex" }}>
                          {ele?.item?.map((element) => (
                            <Dropdown.Item>
                              <div className="drop2">
                                {element?.name}
                                {element?.subItems?.map((ele, i) => (
                                  <>
                                    <p>{ele}</p>
                                  </>
                                ))}
                              </div>
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </div>
                    </Dropdown>
                  ) : (
                    <Dropdown key={i}>
                      <Dropdown.Toggle
                        variant="none"
                        id="dropdown-basic"
                        onClick={() => navigate(ele?.link)}
                      >
                        {ele?.name}
                      </Dropdown.Toggle>
                    </Dropdown>
                  )
                )}
              </div>
            </>
            <p>
              <Dropdown>
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  More
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {moreMenu?.map((ele, i) => (
                    <Dropdown.Item href={ele?.link}>{ele?.name}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </p>
            <div className="login10">
              <i class="fa-solid fa-user"></i>
              <p>Login</p>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Home;
