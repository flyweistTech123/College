import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import img28 from "../Images/c1.png";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import img27 from "../Images/c59.png";
import logo from '../Images/logo.png'
import MoreModal from "./Modals/MoreModal";

const TopNavbar = (props) => {
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
  const moreMenu = [


    {
      name: "Mock Test",
      link: "/mocktest",
    },
    // {
    //   name: "Institute",
    //   link: "/screen2",
    // },
    {
      name: "College Predictor",
      link:'/college-predictor',
    },

    {
      name: "Review a College",
      link:'/review',
    },
    // {
    //   name: "Test and Services  ",
    //   link: "/test",
    // },
    {
      name: "One stop solution",
      link:'/one-stop-solution',
    },

    // {
    //   name: "Loan",
    //   link: "/loan",
    // },

    {
      name: "Become a Partner",
      link:'/become-partner',
    },

    // {
    //   name: "Counsellor Connect",
    //   link: "/council-connect",
    // },
    // {
    //   name: "Become a partner",
    //   link: "/become-partner",
    // },
    // {
    //   name: "One Stop Solution",
    //   link: "/one-stop",
    // },
    // {
    //   name: "Profile",
    //   link: "/profile",
    // },
  ];

  const [show, setShow] = useState(false);

  function MyVerticallyCenteredModal(props) {
    console.log("Hello");
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <>
            <div className="login1">
              <div className="login2">
                <h4>Login</h4>
                <div className="login3">
                  <div className="login4">
                    <div className="login8">
                      <div className="login6">
                        <p>+91</p>
                      </div>
                      <div className="login7">
                        <input
                          type="text"
                          placeholder="Enter your mobile number"
                        />
                      </div>
                    </div>
                    <div className="login9">
                      <button>Request OTP</button>
                    </div>
                  </div>
                  <div className="login5">
                    <img src={img27} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </>
        </Modal.Body>
      </Modal>
    );
  }


  const data = [
    "Universities", "Courses", "Exams"
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
            {data.map((i, index) => (
              <div ref={dropdownRef}>
                <p onClick={() => setShowNavbar(true)} style={{ color: props.color }}> {i} </p>
              </div>
            ))}

            <p
              onClick={() => navigate("/scholarships")}
              style={{ color: props.color }}
            >
              Scholarships
            </p>
            {/* <div ref={dropdownRef}>
                <p onClick={() => setShowNavbar2(true)} style={{color:props.color}}>Scholarships</p>
              </div>  */}
            <p
              onClick={() => navigate("/loan")}
              style={{ color: props.color }}
            >
              Loan
            </p>
            <p onClick={() => navigate("/common-applications")} style={{ color: props.color }}>
              Common Application
            </p>
            <p onClick={() => navigate("/scholarshiptest")} style={{ color: props.color }}>
              Scholarship Test
            </p>

            <p onClick={() => navigate("/hostels")} style={{ color: props.color }}>
              Hostels
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

            <div>
              <button className="loginn" onClick={() => setShow(true)}>Log In</button>
            </div>


            {/* <p style={{ color: props.color }}>
              <span onClick={handleShow} className="modal-trigger">
                More
              </span>

              <Modal show={showModal} onHide={handleClose} className="modalll12">
                <Modal.Header closeButton>
                  <Modal.Title>More</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ul className="custom-dropdown">
                    {moreMenu.map((ele, i) => (
                      <li key={i}>
                        <a href={ele?.link}>{ele?.name}</a>
                      </li>
                    ))}
                  </ul>
                </Modal.Body>
              </Modal>
            </p> */}
          </div>

        </div>
        {/* <div className="newNav3">
          <div className="login10" style={{ marginTop: "-31px" }}>
            <i class="fa-solid fa-user" style={{ color: props.color }}></i>
            <p onClick={() => setShow(true)} style={{ color: props.color }}>
            Log In
            </p>
          </div>
        </div> */}
      </div>



      {/* <div className="nav-course">
        <div className="newNav2">
          <div className="drop3">
            {data1.map((i, index) => (
              <div ref={dropdownRef}>
                <p style={{ color: props.color }}> {i} </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {showNavbar ? <NavMenu2 /> : ""}
      {showNavbar2 ? <NavMenu /> : ""}
      <MyVerticallyCenteredModal show={show} onHide={() => setShow(false)} />
    </>
  );
};

export default TopNavbar;
