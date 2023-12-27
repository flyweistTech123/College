import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Footer";
import img from "../Images/c34.png";
import img2 from "../Images/c1.png";
import img3 from "../Images/c85.png";
import img4 from "../Images/c36.png";
import img5 from "../Images/c37.png";
import img6 from "../Images/c38.png";

import TopNavbar from "./TopNavbar";

const Scholarship = () => {
  const navigate = useNavigate();
  const [slideShow2, setSlideShow2] = useState(8);
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
        <div className="home100">
          <i class="fa-solid fa-bars" onClick={handleShow}></i>
        </div>
        <div className="app6">
          <img src={img} />
        </div>
        <div className="home2">
          <TopNavbar />
          {/*<div className=" sch1 app4">
            <img src={img2} alt="" onClick={() => navigate("/")} />
            <div className="connect4">
              <div className="connect5">
                <p>Courses</p>
                <img src={img3} alt="" onClick={handleClick} />
              </div>
              <div className="connect5 ">
                <p>Colleges</p>
                <img src={img3} alt="" onClick={handleClick} />
              </div>
              <div className="connect5 cnt ">
                <p>Study Guide</p>
                <img src={img3} alt="" onClick={handleClick} />
              </div>
              <div className="connect5 n">
                <p onClick={() => navigate("/test2")}>Test</p>
              </div>
              <div className="connect5 cnt ">
                <p onClick={() => setShow(true)}>Get Counselling</p>
              </div>
            </div>
            <div className="app3" onClick={() => setShow3(true)}>
              <i class="fa-solid fa-user"></i>
              <p>Login</p>
            </div>
          </div>*/}
          {showNavbar ? <NavMenu /> : " "}

          <div className="home5 sch2">
            <h2>Getting Quality Education is NowMore Easy...</h2>
          </div>
          <div className="home6">
            <button onClick={() => navigate("/screen2")}>
              Explore College & University
            </button>
          </div>
        </div>
      </div>
      <div className="home25" style={{ marginTop: "60px" }}>
        <div className="home26">
          <Slider {...settings3}>
            <div className="home29">
              <button className="home27">City Name</button>
            </div>
            <div className="home29">
              <button className="home28" style={{width:"140px"}}>MBA/PGDM</button>
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
      <div className="sch5">
        <div className="sch6">
          <div className="sch14">
            <div className="sch15">
              <h6>Shree Ram College-Delhi University</h6>
              <hr className="sch16" />
              <div className="sch17">
                <ul>
                  <li>International student eligible : yes</li>
                  <li>Amount : Variable Amount</li>
                  <li>Type : Full-Ride-Scholarship</li>
                  <li>Level of Study : Bachelor</li>
                  <li>No. of Scholarships : 20</li>
                </ul>
                <p onClick={() => navigate("/read-more")}>Read More</p>
              </div>
              <div className="sch18">
                <button className="sch19">Apply Now</button>
                <button className="sch20">Get Alert</button>
              </div>
            </div>
            <div className="sch15">
              <h6>Shree Ram College-Delhi University</h6>
              <hr className="sch16" />
              <div className="sch17">
                <ul>
                  <li>International student eligible : yes</li>
                  <li>Amount : Variable Amount</li>
                  <li>Type : Full-Ride-Scholarship</li>
                  <li>Level of Study : Bachelor</li>
                  <li>No. of Scholarships : 20</li>
                </ul>
                <p>Read More</p>
              </div>
              <div className="sch18">
                <button className="sch19">Apply Now</button>
                <button className="sch20">Get Alert</button>
              </div>
            </div>
            <div className="sch15">
              <h6>Shree Ram College-Delhi University</h6>
              <hr className="sch16" />
              <div className="sch17">
                <ul>
                  <li>International student eligible : yes</li>
                  <li>Amount : Variable Amount</li>
                  <li>Type : Full-Ride-Scholarship</li>
                  <li>Level of Study : Bachelor</li>
                  <li>No. of Scholarships : 20</li>
                </ul>
                <p>Read More</p>
              </div>
              <div className="sch18">
                <button className="sch19">Apply Now</button>
                <button className="sch20">Get Alert</button>
              </div>
            </div>
            <div className="sch15">
              <h6>Shree Ram College-Delhi University</h6>
              <hr className="sch16" />
              <div className="sch17">
                <ul>
                  <li>International student eligible : yes</li>
                  <li>Amount : Variable Amount</li>
                  <li>Type : Full-Ride-Scholarship</li>
                  <li>Level of Study : Bachelor</li>
                  <li>No. of Scholarships : 20</li>
                </ul>
                <p>Read More</p>
              </div>
              <div className="sch18">
                <button className="sch19">Apply Now</button>
                <button className="sch20">Get Alert</button>
              </div>
            </div>
            <div className="sch15">
              <h6>Shree Ram College-Delhi University</h6>
              <hr className="sch16" />
              <div className="sch17">
                <ul>
                  <li>International student eligible : yes</li>
                  <li>Amount : Variable Amount</li>
                  <li>Type : Full-Ride-Scholarship</li>
                  <li>Level of Study : Bachelor</li>
                  <li>No. of Scholarships : 20</li>
                </ul>
                <p>Read More</p>
              </div>
              <div className="sch18">
                <button className="sch19">Apply Now</button>
                <button className="sch20">Get Alert</button>
              </div>
            </div>
            <div className="sch15">
              <h6>Shree Ram College-Delhi University</h6>
              <hr className="sch16" />
              <div className="sch17">
                <ul>
                  <li>International student eligible : yes</li>
                  <li>Amount : Variable Amount</li>
                  <li>Type : Full-Ride-Scholarship</li>
                  <li>Level of Study : Bachelor</li>
                  <li>No. of Scholarships : 20</li>
                </ul>
                <p>Read More</p>
              </div>
              <div className="sch18">
                <button className="sch19">Apply Now</button>
                <button className="sch20">Get Alert</button>
              </div>
            </div>
          </div>
        </div>
        <div className="sch7">
          <div className="sch8">
            <h4>Application for Admission are Open</h4>
            <hr className="sch9" />
            <div className="sch10">
              <div className="sch11">
                <img src={img4} alt="" />
                <div className="sch12">
                  <h6>Lorem Ipsum</h6>
                  <p>Dorem Ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="sch13">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="sch9" />
            <div className="sch10">
              <div className="sch11">
                <img src={img4} alt="" />
                <div className="sch12">
                  <h6>Lorem Ipsum</h6>
                  <p>Dorem Ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="sch13">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="sch9" />
            <div className="sch10">
              <div className="sch11">
                <img src={img4} alt="" />
                <div className="sch12">
                  <h6>Lorem Ipsum</h6>
                  <p>Dorem Ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="sch13">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="sch9" />
            <div className="sch10">
              <div className="sch11">
                <img src={img4} alt="" />
                <div className="sch12">
                  <h6>Lorem Ipsum</h6>
                  <p>Dorem Ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="sch13">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="sch9" />
            <div className="sch10">
              <div className="sch11">
                <img src={img4} alt="" />
                <div className="sch12">
                  <h6>Lorem Ipsum</h6>
                  <p>Dorem Ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="sch13">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="sch9" />
            <div className="sch10">
              <div className="sch11">
                <img src={img4} alt="" />
                <div className="sch12">
                  <h6>Lorem Ipsum</h6>
                  <p>Dorem Ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="sch13">
                <button>Apply Now</button>
              </div>
            </div>
            <hr className="sch9" />
          </div>
        </div>
      </div>
      <div className="sch21">
        <div className="sch22">
          <h6>Top Rated Scholarship</h6>
          <hr className="sch23" />
          <div className="sch24">
            <h5>Ontario Graduate Scholarship</h5>
            <p>Amount: $10,847, Deadline: June 2023</p>
          </div>
          <hr className="sch25" />
          <div className="sch24">
            <h5>Ontario Graduate Scholarship</h5>
            <p>Amount: $10,847, Deadline: June 2023</p>
          </div>
          <hr className="sch25" />
          <div className="sch24">
            <h5>Ontario Graduate Scholarship</h5>
            <p>Amount: $10,847, Deadline: June 2023</p>
          </div>
          <hr className="sch25" />
          <div className="sch24">
            <h5>Ontario Graduate Scholarship</h5>
            <p>Amount: $10,847, Deadline: June 2023</p>
          </div>
        </div>
        <div className="sch26">
          <img src={img5} alt="" />
        </div>
        <div className="sch27">
          <h6>Scholarship Helpline Number</h6>
          <div className="sch28">
            <p>Helpline Number 2230220230</p>
          </div>
          <div className="sch29">
            <p>Most Popular Links</p>
          </div>
          <div className="sch30">
            <p>Study in Delhi College</p>
          </div>
          <div className="sch30">
            <p>Study in Chandigarh College</p>
          </div>
          <div className="sch30">
            <p>Study in Mumbai College</p>
          </div>
          <div className="sch30">
            <p>Study in Pune College</p>
          </div>
          <div className="sch30">
            <p>Study in Bangalore College</p>
          </div>
          <div className="sch30">
            <p>Study in Jaipur College</p>
          </div>
          <div className="sch30">
            <p>Study in Noida College</p>
          </div>
          <div className="sch30">
            <p>Study in Amity College</p>
          </div>
          <div className="sch30">
            <p>Study in Ontario College</p>
          </div>
        </div>
      </div>
      <div className="sch31">
        <img src={img6} alt="" />
      </div>
      <Footer />
    </>
  );
};

export default Scholarship;
