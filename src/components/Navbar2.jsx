import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import img2 from "../Images/c1.png";
import img3 from "../Images/c85.png";
import img27 from "../Images/c59.png";
import MyVerticallyCenteredModal2 from "./CouncilModal";

const Navbar2 = () => {
  const navigate = useNavigate();

  const [showt, setShowt] = useState(false);
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

  const [showNavbar, setShowNavbar] = useState(false);
  function NavMenu(){
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
            <div className="menu4">hello</div>
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
    )
  }

  const handleClick = ()=>{
    setShowNavbar(prev=>!prev);
  }


  return (
    <>
      <MyVerticallyCenteredModal show={showt} onHide={() => setShowt(false)} />
      <MyVerticallyCenteredModal2
        show={show}
        onHide={() => setShow(false)}
      />
      <div className="connect2">
        <div className="connect3">
          <img src={img2} alt="" onClick={() => navigate("/")} />
        </div>
        <div className="connect4">
          <div className="connect5">
            <p>Courses</p>
            <img src={img3} alt="" onClick={handleClick}/>
          </div>
          <div className="connect5">
            <p>Colleges</p>
            <img src={img3} alt="" onClick={handleClick}/>
          </div>
          <div className="connect5 cnt">
            <p>Study Guide</p>
            <img src={img3} alt="" onClick={handleClick}/>
          </div>
          <div className="connect5">
            <p onClick={()=>navigate("/test2")}>Test</p>
          </div>
          <div className="connect5 cnt">
            <p onClick={() => setShow(true)}>Get Counselling</p>
          </div>
        </div>
        <div className="connect6" onClick={() => setShowt(true)}>
          <i class="fa-solid fa-user"></i>
          <p style={{ marginTop: "10px" }}>Login</p>
        </div>
      </div>
      {
        showNavbar ? <NavMenu /> : " "
      }
    </>
  );
};

export default Navbar2;
