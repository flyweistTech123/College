import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import img from "../Images/c86.png";
import img2 from "../Images/c46.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import MobileLoanNavbar from "./MobileLoanNavabr";
import img8 from "../Images/c45.png";
import img3 from "../Images/c118.png";

import TopNavbar from "./TopNavbar";

const CounsellorConnect = () => {
  const navigate = useNavigate();
  const [slideShow, setSlideShow] = useState(4);
  useEffect(() => {
    if (window.innerWidth < 800) {
      setSlideShow(1);
    } else if (window.innerWidth > 800 && window.innerWidth < 1100) {
      setSlideShow(2);
    } else setSlideShow(4);
  });
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: slideShow,
    slidesToScroll: 4,
    autoplay: true,
  };

  const [show2, setShow2] = useState(false);

  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);
  return (
    <>
      <div className="connect1">
        <TopNavbar color="white" />
        <div className="home100">
          <i class="fa-solid fa-bars" onClick={handleShow}></i>
        </div>
        <div className="connect7">
          <div className="connect8" style={{marginBottom:"20px"}}>
            <h2 style={{color:"#fff"}}>Connect With India’s Top Counsellor</h2>
            <p style={{color:"#fff"}}>
              Our Counsellor are available throughout for Chat & support at each
              step of your application Process
            </p>
            <button className="change1">Connect</button>
          </div>
          <div className="connect9">
            <div className="connect10">
              <img src={img} alt="" />
              <p>+2 minutes to speak to your counsellor</p>
              <div className="connect11">
                <i class="fa-solid fa-phone"></i>
                <i class="fa-brands fa-whatsapp"></i>
                <i class="fa-solid fa-envelope"></i>
              </div>
            </div>
            <div className="connect12">
              <button onClick={() => navigate("/screen2")}>
                Explore College & University
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="connect13">
        <div className="connect14">
          <div className="connect15">
            <p>Engineer</p>
          </div>
          <div className="connect15">
            <p>Management </p>
          </div>
          <div className="connect15">
            <p>Science</p>
          </div>
          <div className="connect15">
            <p>Finance</p>
          </div>
          <div className="connect15">
            <p>Engineer</p>
          </div>
          <div className="connect15">
            <p>College 1</p>
          </div>
          <div className="connect15">
            <p>College 2</p>
          </div>
          <div className="connect15">
            <p>College 3</p>
          </div>
          <div className="connect15">
            <p>College 4</p>
          </div>
          <div className="connect15">
            <p>College 5</p>
          </div>
          <div className="connect15">
            <p>Lorem Ipsum</p>
          </div>
          <div className="connect15">
            <p>Lorem Ipsum</p>
          </div>
          <div className="connect15">
            <p>Lorem Ipsum</p>
          </div>
          <div className="connect15">
            <p>Lorem Ipsum</p>
          </div>
          <div className="connect15">
            <p>Lorem Ipsum</p>
          </div>
        </div>
      </div>
      <div className="connect16">
        <Slider {...settings2}>
          <div className="connect17">
            <img src={img2} alt="" />
            <div className="connect18">
              <h5>Neha Sharma</h5>
              <p>Counselling Finance</p>
              <h6>6000+ Students | 7+ yrs exp</h6>
            </div>
            <div className="connect19">
              <p>Connect with expert</p>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
          <div className="connect17">
            <img src={img2} alt="" />
            <div className="connect18">
              <h5>Neha Sharma</h5>
              <p>Counselling Finance</p>
              <h6>6000+ Students | 7+ yrs exp</h6>
            </div>
            <div className="connect19">
              <p>Connect with expert</p>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
          <div className="connect17">
            <img src={img2} alt="" />
            <div className="connect18">
              <h5>Neha Sharma</h5>
              <p>Counselling Finance</p>
              <h6>6000+ Students | 7+ yrs exp</h6>
            </div>
            <div className="connect19">
              <p>Connect with expert</p>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
          <div className="connect17">
            <img src={img2} alt="" />
            <div className="connect18">
              <h5>Neha Sharma</h5>
              <p>Counselling Finance</p>
              <h6>6000+ Students | 7+ yrs exp</h6>
            </div>
            <div className="connect19">
              <p>Connect with expert</p>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
          <div className="connect17">
            <img src={img2} alt="" />
            <div className="connect18">
              <h5>Neha Sharma</h5>
              <p>Counselling Finance</p>
              <h6>6000+ Students | 7+ yrs exp</h6>
            </div>
            <div className="connect19">
              <p>Connect with expert</p>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
          <div className="connect17">
            <img src={img2} alt="" />
            <div className="connect18">
              <h5>Neha Sharma</h5>
              <p>Counselling Finance</p>
              <h6>6000+ Students | 7+ yrs exp</h6>
            </div>
            <div className="connect19">
              <p>Connect with expert</p>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
          <div className="connect17">
            <img src={img2} alt="" />
            <div className="connect18">
              <h5>Neha Sharma</h5>
              <p>Counselling Finance</p>
              <h6>6000+ Students | 7+ yrs exp</h6>
            </div>
            <div className="connect19">
              <p>Connect with expert</p>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
        </Slider>
      </div>
      <div className="connect40">
        <div className="connect41">
          <h4>How are Academic Counsellor Can Help YouGet Addmission</h4>
          <ul className="connect43">
            <li>Register yourself</li>
            <li>Career Counselling</li>
            <li>Entrance Test</li>
            <li>University short List</li>
            <li>Documentation</li>
            <li>Application</li>
            <li>Financial Documentation</li>
            <li>Visa Application</li>
            <li>Post Visa</li>
          </ul>
          <button>Fix an Appointment</button>
        </div>
        <div className="connect42">
          <img src={img3} alt="" />
        </div>
      </div>
      <div className="connect16">
        <Slider {...settings2}>
          <div className="connect17">
            <img src={img2} alt="" />
            <div className="connect18">
              <h5>Neha Sharma</h5>
              <p>Counselling Finance</p>
              <h6>6000+ Students | 7+ yrs exp</h6>
            </div>
            <div className="connect19">
              <p>Connect with expert</p>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
          <div className="connect17">
            <img src={img2} alt="" />
            <div className="connect18">
              <h5>Neha Sharma</h5>
              <p>Counselling Finance</p>
              <h6>6000+ Students | 7+ yrs exp</h6>
            </div>
            <div className="connect19">
              <p>Connect with expert</p>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
          <div className="connect17">
            <img src={img2} alt="" />
            <div className="connect18">
              <h5>Neha Sharma</h5>
              <p>Counselling Finance</p>
              <h6>6000+ Students | 7+ yrs exp</h6>
            </div>
            <div className="connect19">
              <p>Connect with expert</p>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
          <div className="connect17">
            <img src={img2} alt="" />
            <div className="connect18">
              <h5>Neha Sharma</h5>
              <p>Counselling Finance</p>
              <h6>6000+ Students | 7+ yrs exp</h6>
            </div>
            <div className="connect19">
              <p>Connect with expert</p>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
          <div className="connect17">
            <img src={img2} alt="" />
            <div className="connect18">
              <h5>Neha Sharma</h5>
              <p>Counselling Finance</p>
              <h6>6000+ Students | 7+ yrs exp</h6>
            </div>
            <div className="connect19">
              <p>Connect with expert</p>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
          <div className="connect17">
            <img src={img2} alt="" />
            <div className="connect18">
              <h5>Neha Sharma</h5>
              <p>Counselling Finance</p>
              <h6>6000+ Students | 7+ yrs exp</h6>
            </div>
            <div className="connect19">
              <p>Connect with expert</p>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
          <div className="connect17">
            <img src={img2} alt="" />
            <div className="connect18">
              <h5>Neha Sharma</h5>
              <p>Counselling Finance</p>
              <h6>6000+ Students | 7+ yrs exp</h6>
            </div>
            <div className="connect19">
              <p>Connect with expert</p>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
        </Slider>
      </div>
      <div className="connect30">
        <p>
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
      </div>
      <div className="app38">
        <div className="app29">
          <div className="app30">
            <p>Register for the scholarship Test Now</p>
            <button>Register Now</button>
          </div>
          <div className="app31">
            <img src={img8} alt="" />
          </div>
        </div>
        <div className="app29">
          <div className="app30">
            <p>Register for the scholarship Test Now</p>
            <button>Register Now</button>
          </div>
          <div className="app31">
            <img src={img8} alt="" />
          </div>
        </div>
        <div className="app29">
          <div className="app30">
            <p>Register for the scholarship Test Now</p>
            <button>Register Now</button>
          </div>
          <div className="app31">
            <img src={img8} alt="" />
          </div>
        </div>
      </div>
      <Footer />
      <Offcanvas show={show2} onHide={handleClose}>
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

export default CounsellorConnect;
