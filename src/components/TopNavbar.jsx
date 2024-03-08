import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import logo from '../Images/logo.png'
import MoreModal from "./Modals/MoreModal";
import login from '../Images/loginpage.png'
import google from '../Images/google.png'
import prfileicon from '../Images/profileimg.png'
import Overlay from 'react-bootstrap/Overlay';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Universities from "./PopoverUniversityModal/Universities";.




const TopNavbar = (props) => {

  const popover = (
    <Popover id="popover-basic" style={{ border: 'none' }}>
      <Popover.Body className="popover5">
        <h4>Top Universities</h4>
        <div className="popover1">
          <div className="popover2">
            <h4>Delhi</h4>
            <div className="popover3">
              <p onClick={() => navigate('/college-info')}>Jawahar lal Nehru</p>
              <p onClick={() => navigate('/college-info')}>IGNOU</p>
              <p onClick={() => navigate('/college-info')}>Jamia Miliya Islamia</p>
              <p onClick={() => navigate('/college-info')}>IP University</p>
              <p onClick={() => navigate('/college-info')}>Jawahar lal Nehru</p>
              <p onClick={() => navigate('/college-info')}>IGNOU</p>
              <p onClick={() => navigate('/college-info')}>Jamia Miliya Islamia</p>
              <p onClick={() => navigate('/college-info')}>IP University</p>
              <p onClick={() => navigate('/college-info')}>Jawahar lal Nehru</p>
              <p onClick={() => navigate('/college-info')}>IGNOU</p>
              <p onClick={() => navigate('/college-info')}>Jamia Miliya Islamia</p>
              <p onClick={() => navigate('/college-info')}>IP University</p>
              <p onClick={() => navigate('/college-info')}>Jawahar lal Nehru</p>
              <p onClick={() => navigate('/college-info')}>IGNOU</p>
              <p onClick={() => navigate('/college-info')}>Jamia Miliya Islamia</p>
              <p onClick={() => navigate('/college-info')}>IP University</p>
            </div>
          </div>
          <div className="popover2">
            <h4>Mumbai</h4>
            <div className="popover3">
              <p>University of Mumbai</p>
              <p>Kishan chand</p>
              <p>ST. XAVIER</p>
              <p>Wilson University</p>
              <p>University of mumbai</p>
              <p>Kishan chand</p>
              <p>ST. XAVIER</p>
              <p>Wilson University</p>
              <p>University of Mumbai</p>
              <p>Kishan chand</p>
              <p>ST. XAVIER</p>
              <p>Wilson University</p>
              <p>University of mumbai</p>
              <p>Kishan chand</p>
              <p>ST. XAVIER</p>
              <p>Wilson University</p>
            </div>
          </div>
          <div className="popover2">
            <h4>Chennai</h4>
            <div className="popover3">
              <p>University of Chennai</p>
              <p>University of Madras</p>
              <p>Vels University</p>
              <p>Wilson University</p>
              <p>University of Chennai</p>
              <p>University of Madras</p>
              <p>Vels University</p>
              <p>Wilson University</p>
              <p>University of Chennai</p>
              <p>University of Madras</p>
              <p>Vels University</p>
              <p>Wilson University</p>
              <p>University of Chennai</p>
              <p>University of Madras</p>
              <p>Vels University</p>
              <p>Wilson University</p>
            </div>
          </div>

          <div className="popover2" style={{ border: "none" }}>
            <h4>Bangalore</h4>
            <div className="popover3">
              <p>Bangalore University</p>
              <p>REVA University</p>
              <p>ST. Joseph University</p>
              <p>IIT of Science</p>
              <p>Bangalore University</p>
              <p>REVA University</p>
              <p>ST. Joseph University</p>
              <p>IIT of Science</p>
              <p>Bangalore University</p>
              <p>REVA University</p>
              <p>ST. Joseph University</p>
              <p>IIT of Science</p>

            </div>
          </div>
          <div>

          </div>
        </div>
      </Popover.Body>
    </Popover>
  );
  const popover1 = (
    <Popover id="popover-basic" style={{ border: 'none' }}>
      <Popover.Body className="popover51">
        <h4>Top Courses</h4>
        <div className="popover1">
          <div className="popover2">
            <h4>Management</h4>
            <div className="popover3">
              <p onClick={() => navigate('/courses')}>B.Tech /BA</p>
              <p onClick={() => navigate('/courses')}>Business tools</p>
              <p onClick={() => navigate('/courses')}>Communication</p>
              <p onClick={() => navigate('/courses')}>CSR</p>
              <p onClick={() => navigate('/courses')}>Business analytics</p>
              <p onClick={() => navigate('/courses')}>Business tools</p>
              <p onClick={() => navigate('/courses')}>Communication</p>
              <p onClick={() => navigate('/courses')}>CSR</p>
              <p onClick={() => navigate('/courses')}>Business analytics</p>
              <p onClick={() => navigate('/courses')}>Business tools</p>
              <p onClick={() => navigate('/courses')}>Communication</p>
              <p onClick={() => navigate('/courses')}>CSR</p>
              <p onClick={() => navigate('/courses')}>Business analytics</p>
              <p onClick={() => navigate('/courses')}>Business tools</p>
              <p onClick={() => navigate('/courses')}>Communication</p>
              <p onClick={() => navigate('/courses')}>CSR</p>
            </div>
          </div>
          <div className="popover2">
            <h4>Finance</h4>
            <div className="popover3">
              <p>Accounting</p>
              <p>Banking</p>
              <p>Investing</p>
              <p>Law</p>
              <p>Insurance</p>
            </div>
          </div>
          <div className="popover2">
            <h4>Design</h4>
            <div className="popover3">
              <p>UX UI Design</p>
              <p>Graphic Design</p>
              <p>Interaction Design</p>
              <p>Universal Design</p>
              <p>Architect Design </p>
            </div>
          </div>

          <div className="popover2" style={{ border: "none" }}>
            <h4>Health Care</h4>
            <div className="popover3">
              <p>Fitness & Nutrition</p>
              <p>Health Care Research</p>
              <p>Health Care Management</p>
            </div>
          </div>
          <div>

          </div>
        </div>
      </Popover.Body>
    </Popover>
  );
  const popover2 = (
    <Popover id="popover-basic" style={{ border: 'none' }}>
      <Popover.Body className="popover52">
        <h4>Top Exams</h4>
        <div className="popover1">
          <div className="popover2">
            <div className="popover3">
              <p onClick={() => navigate('/exam')}>CAT</p>
              <p onClick={() => navigate('/exam')}>UGC NET</p>
              <p onClick={() => navigate('/exam')}>IES Exams</p>
              <p onClick={() => navigate('/exam')}>NEET- UG</p>
              <p onClick={() => navigate('/exam')}>IBPS RRB</p>
              <p onClick={() => navigate('/exam')}>CAT</p>
              <p onClick={() => navigate('/exam')}>UGC NET</p>
              <p onClick={() => navigate('/exam')}>IES Exams</p>
              <p onClick={() => navigate('/exam')}>NEET- UG</p>
              <p onClick={() => navigate('/exam')}>IBPS RRB</p>
              <p onClick={() => navigate('/exam')}>CAT</p>
              <p onClick={() => navigate('/exam')}>UGC NET</p>
              <p onClick={() => navigate('/exam')}>IES Exams</p>
              <p onClick={() => navigate('/exam')}>NEET- UG</p>
              <p onClick={() => navigate('/exam')}>IBPS RRB</p>
            </div>
          </div>
          <div className="popover2">
            <div className="popover3">
              <p onClick={() => navigate('/exam')}>NDA</p>
              <p onClick={() => navigate('/exam')}>CA</p>
              <p onClick={() => navigate('/exam')}>NID</p>
              <p onClick={() => navigate('/exam')}>IIT- JEE</p>
              <p onClick={() => navigate('/exam')}>UPSC</p>
            </div>
          </div>
          <div className="popover2">
            <div className="popover3">
              <p onClick={() => navigate('/exam')}>CAT</p>
              <p onClick={() => navigate('/exam')}>UGC NET</p>
              <p onClick={() => navigate('/exam')}>IES Exams</p>
              <p onClick={() => navigate('/exam')}>NEET- UG</p>
              <p onClick={() => navigate('/exam')}>IBPS RRB</p>
              <p onClick={() => navigate('/exam')}>CAT</p>
              <p onClick={() => navigate('/exam')}>UGC NET</p>
              <p onClick={() => navigate('/exam')}>IES Exams</p>
              <p onClick={() => navigate('/exam')}>NEET- UG</p>
              <p onClick={() => navigate('/exam')}>IBPS RRB</p>
              <p onClick={() => navigate('/exam')}>CAT</p>
              <p onClick={() => navigate('/exam')}>UGC NET</p>
              <p onClick={() => navigate('/exam')}>IES Exams</p>
              <p onClick={() => navigate('/exam')}>NEET- UG</p>
              <p onClick={() => navigate('/exam')}>IBPS RRB</p>
            </div>
          </div>

          <div className="popover2" style={{ border: "none" }}>
            <div className="popover3">
              <p onClick={() => navigate('/exam')}>NDA</p>
              <p onClick={() => navigate('/exam')}>CA</p>
              <p onClick={() => navigate('/exam')}>NID</p>
              <p onClick={() => navigate('/exam')}>IIT- JEE</p>
              <p onClick={() => navigate('/exam')}>UPSC</p>
            </div>
          </div>
          <div>

          </div>
        </div>
      </Popover.Body>
    </Popover>
  );


  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowNavbar(false);
        setShowNavbar2(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const [isMoremodalOpen, setMoremodalOpen] = useState(false)

  const openMoremodal = () => {
    setMoremodalOpen(true);
  }

  const closeMoremodal = () => {
    setMoremodalOpen(false);
  }


  const [isRegistratationmodalOpen, setRegistratationmodalOpen] = useState(false)

  const openRegistratatiomodal = () => {
    setRegistratationmodalOpen(true);
  }

  const closeRegistratatiomodal = () => {
    setRegistratationmodalOpen(false);
  }
  const initialShowProfile = localStorage.getItem('showProfile') === 'true';

  const [showProfile, setShowProfile] = useState(initialShowProfile);

  useEffect(() => {
    localStorage.setItem('showProfile', showProfile);
  }, [showProfile]);


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
        <div className="menu1" >
          <h3>Top Universities</h3>
          <div className="menu2">
            <div className="menu3">
              <h6>Delhi</h6>
              <p>Jawahar lal Nehru</p>
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
  const moreMenu = [


    {
      name: "Mock Test",
      link: "/mocktest",
    },

    {
      name: "College Predictor",
      link: '/college-predictor',
    },
    {
      name: "Scholarship Test",
      link: '/scholarshiptest',
    },
    {
      name: "Community",
      link: '/community',
    },

    {
      name: "Review a College",
      link: '/review',
    },

    {
      name: "One stop solution",
      link: '/one-stop-solution',
    },

    {
      name: "Become a Partner",
      link: '/become-partner',
    },
  ];



  const [show, setShow] = useState(false);
  const handleclose = () => {

    setShow(false);
    setShow12(true)
  }

  function MyVerticallyCenteredModal(props) {
    console.log("Hello");
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <>
            <div className="login3">
              <div className="login5">
                <img src={login} alt="" />
              </div>
              <div className="login4">
                <h6>REGISTRATATION DETAILS</h6>
                <div className="login81">
                  <div className="login7">
                    <input
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      placeholder="Stream"
                    />
                    <input
                      type="text"
                      placeholder="Sub-Stream"
                    />
                    <div className="login122">
                      <input type="checkbox" id="checkbox1" />
                      <label for="checkbox1">Looking or Distance</label>
                    </div>

                    <input
                      type="text"
                      placeholder="Given Any Entrance Exam"
                    />
                  </div>
                  <div class="dotted-line">
                    <span>Or</span>
                  </div>
                  <div className="login2">
                    <img src={google} alt="" />
                    <p>Google</p>
                  </div>
                </div>
                <div className="login9">
                  <button onClick={() => handleclose()}>Next</button>
                </div>
              </div>
            </div>
          </>
        </Modal.Body>
      </Modal>
    );
  }

  const handleotpclose = () => {

    setShow12(false)
    setotpshow(true)

  }

  const [show12, setShow12] = useState(false);

  function Login122(props) {
    console.log("Hello");
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <>
            <div className="login3">
              <div className="login5">
                <img src={login} alt="" />
              </div>
              <div className="login41">
                <h6>LOGIN</h6>
                <div className="login8">
                  <div className="login6">
                    <p>+91</p>
                  </div>
                  <div className="login71">
                    <input
                      type="text"
                      placeholder="Enter your mobile number"
                    />
                  </div>
                </div>
                <div className="login9">
                  <button onClick={() => handleotpclose()} >Request OTP</button>
                </div>
              </div>
            </div>
          </>
        </Modal.Body>
      </Modal>
    );
  }

  const handleotpclose1 = () => {

    setotpshow(false)
    setShowProfile(true)

  }

  const [otpshow, setotpshow] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;

    // Move focus to the next input box if a digit is entered
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    setOtp(newOtp);
  };

  function Otp1(props) {
    console.log("Hello");
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <>
            <div className="otp11">
              <div className="otp-container">
                <h2>Enter OTP</h2>
                <div className="otp-inputs">
                  {otp.map((digit, index) => (
                    <input
                      type="text"
                      id={`otp-input-${index}`}
                      key={index}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      maxLength="1"
                    />
                  ))}
                </div>
              </div>
              <div className="login9">
                <button onClick={() => handleotpclose1()}>Submit</button>
              </div>
            </div>
          </>
        </Modal.Body>
      </Modal>
    );
  }



  const data = [
    "Universities",
  ]

  const data1 = [
    "Management", "Engineering", "Law", "Science", "Commerce", "Arts", "Paramedical", "Pharmacy"
  ]

  return (
    <>
      <div className="home3">
        <div className="newNav">
          <img
            src={logo}
            alt=""
            onClick={() => navigate("/")}
            className="logoimg"
          />
        </div>

        <div className="newNav2">
          <div className="drop3">
            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
              <p style={{ color: props.color }}>Universities</p>
            </OverlayTrigger>

            <OverlayTrigger trigger="click"  placement="bottom" overlay={popover1}>
                <p style={{ color: props.color }}>Courses</p>
            </OverlayTrigger>
            <OverlayTrigger trigger="click" placement="bottom" overlay={popover2}>
              <p style={{ color: props.color }}>Exams</p>
            </OverlayTrigger>
            <p
              onClick={() => navigate("/scholarships")}
              style={{ color: props.color }}
            >
              Scholarships
            </p>
            <p
              onClick={() => navigate("/loan")}
              style={{ color: props.color }}
            >
              Loan
            </p>
            <p onClick={() => navigate("/common-applications")} style={{ color: props.color }}>
              Common Application
            </p>
            <p onClick={() => navigate("/careers")} style={{ color: props.color }}>
              Careers
            </p>

            <p onClick={() => navigate("/hostels")} style={{ color: props.color }}>
              Hostels
            </p>
            <p onClick={() => navigate("/hostels")} style={{ color: props.color }}>
              Internships
            </p>
            <p style={{ color: props.color }} onClick={openMoremodal}>
              More
            </p>

            {isMoremodalOpen && (
              <MoreModal onClose={closeMoremodal}>
                <ul className="custom-Moremodal">
                  {moreMenu.map((ele, i) => (
                    <li key={i}>
                      <a href={ele?.link}>{ele?.name}</a>
                      <div className="moremodal12"></div>
                    </li>
                  ))}
                </ul>
              </MoreModal>
            )}

            {showProfile ? (
              <div className="profileicons">
                <p style={{ color: props.color }}>
                  <img src={prfileicon} alt="jjjj" onClick={() => navigate('/profile')} />
                </p>
              </div>


            ) : (
              <div>
                <button className="loginn" onClick={() => setShow(true)}>
                  Login
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
      {showNavbar ? <NavMenu2 /> : ""}
      {showNavbar2 ? <NavMenu /> : ""}
      <MyVerticallyCenteredModal show={show} onHide={() => setShow(false)} />
      <Login122 show={show12} onHide={() => setShow12(false)} />
      <Otp1 show={otpshow} onHide={() => setotpshow(false)} />
    </>
  );
};

export default TopNavbar;
