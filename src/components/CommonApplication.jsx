import React, {useState} from "react";
import img from "../Images/c39.png";
import img2 from "../Images/c1.png";
import img3 from "../Images/c114.png";
import img7 from "../Images/c44.png";
import img8 from "../Images/c45.png";
import img9 from "../Images/c46.png";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import TopPart3 from "./TopPart3";
import MyVerticallyCenteredModal from "./CouncilModal";
import Offcanvas from 'react-bootstrap/Offcanvas';
import MobileLoanNavbar from "./MobileLoanNavabr";
import LoginModal from "./LoginModal";
import TopNavbar from "./TopNavbar";

const CommonApplication = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);
  const [show3, setShow3] = useState(false);

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
    )
  }

  const handleClick = ()=>{
    setShowNavbar(prev=>!prev);
  }

  return (
    <>
        <MyVerticallyCenteredModal
        show={show}
        onHide={() => setShow(false)}
      />
      <LoginModal show={show3} onHide={()=>setShow3(false)} />
      <div className="app1">
      <div className="home100">
          <i class="fa-solid fa-bars" onClick={handleShow}></i>
        </div>
        <div className="app6">
          <img src={img} />
        </div>
        <div className="home2">
          <TopNavbar color="white"/>
          {
          showNavbar ? <NavMenu /> : " "
          }
          <div className="home5 sch2 app5">
            <h2>
              One Application and Limitless Possibilities to 200+ Colleges
              across India!
            </h2>
          </div>
          <div className="home6">
            <button onClick={() => navigate("/screen2")}>
              Explore College & University
            </button>
          </div>
        </div>
      </div>
      <TopPart3 />
      <div className="app14">
        <h3>We Tried To Help You Pick Easily</h3>
        <div className="app15">
          <div className="app16">
            <p>Preferred City</p>
          </div>
          <div className="app16">
            <p>Course Level</p>
          </div>
          <div className="app16">
            <p>Course Stream</p>
          </div>
          <div className="app16">
            <p>Degree Type</p>
          </div>
        </div>
        <div className="app17">
          <div className="app16">
            <p>Payment Mode</p>
          </div>
          <div className="app16">
            <p>Course Type</p>
          </div>
          <div className="app16">
            <p>Engineering</p>
          </div>
          <div className="app16">
            <p>Management UG</p>
          </div>
          <div className="app16">
            <p>Computer </p>
          </div>
        </div>
        <div className="app18">
          <div className="app19">
            <p>Pharmacy</p>
          </div>
          <div className="app19">
            <p>Law</p>
          </div>
          <div className="app19">
            <p>Medical</p>
          </div>
          <div className="app19">
            <p>B.Tech</p>
          </div>
          <div className="app19">
            <p>MBA</p>
          </div>
          <div className="app19">
            <p>PGDM</p>
          </div>
          <div className="app19">
            <p>MBA</p>
          </div>
        </div>
        <div className="app18" style={{marginLeft:"40px"}}>
          <div className="app19">
            <p>BCA</p>
          </div>
          <div className="app19">
            <p>B.Pharma</p>
          </div>
          <div className="app19">
            <p>Scholarship</p>
          </div>
        </div>
      </div>
      <div className="app20">
        <div className="app21">
          <div className="app23">
            <div className="app24">
              <div className="app25">
                <img src={img7} alt="" />
                <div className="app26">
                  <h6>340 Courses</h6>
                  <p>
                    <i class="fa-solid fa-indian-rupee-sign"></i>5,000
                  </p>
                </div>
              </div>
              <div className="app27">
                <h5>Parul University Vadodra</h5>
              </div>
              <div className="app28">
                <button>Short List</button>
              </div>
            </div>
            <div className="app24">
              <div className="app25">
                <img src={img7} alt="" />
                <div className="app26">
                  <h6>340 Courses</h6>
                  <p>
                    <i class="fa-solid fa-indian-rupee-sign"></i>5,000
                  </p>
                </div>
              </div>
              <div className="app27">
                <h5>Parul University Vadodra</h5>
              </div>
              <div className="app28">
                <button>Short List</button>
              </div>
            </div>
            <div className="app24">
              <div className="app25">
                <img src={img7} alt="" />
                <div className="app26">
                  <h6>340 Courses</h6>
                  <p>
                    <i class="fa-solid fa-indian-rupee-sign"></i>5,000
                  </p>
                </div>
              </div>
              <div className="app27">
                <h5>Parul University Vadodra</h5>
              </div>
              <div className="app28">
                <button>Short List</button>
              </div>
            </div>
            <div className="app24">
              <div className="app25">
                <img src={img7} alt="" />
                <div className="app26">
                  <h6>340 Courses</h6>
                  <p>
                    <i class="fa-solid fa-indian-rupee-sign"></i>5,000
                  </p>
                </div>
              </div>
              <div className="app27">
                <h5>Parul University Vadodra</h5>
              </div>
              <div className="app28">
                <button>Short List</button>
              </div>
            </div>
            <div className="app24">
              <div className="app25">
                <img src={img7} alt="" />
                <div className="app26">
                  <h6>340 Courses</h6>
                  <p>
                    <i class="fa-solid fa-indian-rupee-sign"></i>5,000
                  </p>
                </div>
              </div>
              <div className="app27">
                <h5>Parul University Vadodra</h5>
              </div>
              <div className="app28">
                <button>Short List</button>
              </div>
            </div>
            <div className="app24">
              <div className="app25">
                <img src={img7} alt="" />
                <div className="app26">
                  <h6>340 Courses</h6>
                  <p>
                    <i class="fa-solid fa-indian-rupee-sign"></i>5,000
                  </p>
                </div>
              </div>
              <div className="app27">
                <h5>Parul University Vadodra</h5>
              </div>
              <div className="app28">
                <button>Short List</button>
              </div>
            </div>
            <div className="app24">
              <div className="app25">
                <img src={img7} alt="" />
                <div className="app26">
                  <h6>340 Courses</h6>
                  <p>
                    <i class="fa-solid fa-indian-rupee-sign"></i>5,000
                  </p>
                </div>
              </div>
              <div className="app27">
                <h5>Parul University Vadodra</h5>
              </div>
              <div className="app28">
                <button>Short List</button>
              </div>
            </div>
            <div className="app24">
              <div className="app25">
                <img src={img7} alt="" />
                <div className="app26">
                  <h6>340 Courses</h6>
                  <p>
                    <i class="fa-solid fa-indian-rupee-sign"></i>5,000
                  </p>
                </div>
              </div>
              <div className="app27">
                <h5>Parul University Vadodra</h5>
              </div>
              <div className="app28">
                <button>Short List</button>
              </div>
            </div>
            <div className="app24">
              <div className="app25">
                <img src={img7} alt="" />
                <div className="app26">
                  <h6>340 Courses</h6>
                  <p>
                    <i class="fa-solid fa-indian-rupee-sign"></i>5,000
                  </p>
                </div>
              </div>
              <div className="app27">
                <h5>Parul University Vadodra</h5>
              </div>
              <div className="app28">
                <button>Short List</button>
              </div>
            </div>
            <div className="app24">
              <div className="app25">
                <img src={img7} alt="" />
                <div className="app26">
                  <h6>340 Courses</h6>
                  <p>
                    <i class="fa-solid fa-indian-rupee-sign"></i>5,000
                  </p>
                </div>
              </div>
              <div className="app27">
                <h5>Parul University Vadodra</h5>
              </div>
              <div className="app28">
                <button>Short List</button>
              </div>
            </div>
            <div className="app24">
              <div className="app25">
                <img src={img7} alt="" />
                <div className="app26">
                  <h6>340 Courses</h6>
                  <p>
                    <i class="fa-solid fa-indian-rupee-sign"></i>5,000
                  </p>
                </div>
              </div>
              <div className="app27">
                <h5>Parul University Vadodra</h5>
              </div>
              <div className="app28">
                <button>Short List</button>
              </div>
            </div>
            <div className="app24">
              <div className="app25">
                <img src={img7} alt="" />
                <div className="app26">
                  <h6>340 Courses</h6>
                  <p>
                    <i class="fa-solid fa-indian-rupee-sign"></i>5,000
                  </p>
                </div>
              </div>
              <div className="app27">
                <h5>Parul University Vadodra</h5>
              </div>
              <div className="app28">
                <button>Short List</button>
              </div>
            </div>
            <div className="app24">
              <div className="app25">
                <img src={img7} alt="" />
                <div className="app26">
                  <h6>340 Courses</h6>
                  <p>
                    <i class="fa-solid fa-indian-rupee-sign"></i>5,000
                  </p>
                </div>
              </div>
              <div className="app27">
                <h5>Parul University Vadodra</h5>
              </div>
              <div className="app28">
                <button>Short List</button>
              </div>
            </div>
            <div className="app24">
              <div className="app25">
                <img src={img7} alt="" />
                <div className="app26">
                  <h6>340 Courses</h6>
                  <p>
                    <i class="fa-solid fa-indian-rupee-sign"></i>5,000
                  </p>
                </div>
              </div>
              <div className="app27">
                <h5>Parul University Vadodra</h5>
              </div>
              <div className="app28">
                <button>Short List</button>
              </div>
            </div>
            <div className="app24">
              <div className="app25">
                <img src={img7} alt="" />
                <div className="app26">
                  <h6>340 Courses</h6>
                  <p>
                    <i class="fa-solid fa-indian-rupee-sign"></i>5,000
                  </p>
                </div>
              </div>
              <div className="app27">
                <h5>Parul University Vadodra</h5>
              </div>
              <div className="app28">
                <button>Short List</button>
              </div>
            </div>
            <div className="app24">
              <div className="app25">
                <img src={img7} alt="" />
                <div className="app26">
                  <h6>340 Courses</h6>
                  <p>
                    <i class="fa-solid fa-indian-rupee-sign"></i>5,000
                  </p>
                </div>
              </div>
              <div className="app27">
                <h5>Parul University Vadodra</h5>
              </div>
              <div className="app28">
                <button>Short List</button>
              </div>
            </div>
          </div>
        </div>
        <div className="app22">
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
      </div>
      <div className="app7">
        <div className="app33">
          <p>Why College Hub ONE APPLICATION is the right choice for you</p>
          <ul className="app32">
            <li>FRIENDLY</li>
            <li>FAST</li>
            <li>EASY</li>
          </ul>
        </div>
      </div>
      <div className="app34">
        <div className="app35">
          <h6>Connect with India's Top Counsellor</h6>
          <p>Need Confidence Choosing your university or Courses.</p>
          <p>Call us at 99523020120</p>
        </div>
        <div className="app36">
          <div className="app37">
            <img src={img9} alt="" />
            <h5>Neha Sharma</h5>
            <p>Counselling Finance</p>
            <h6>6000+ students | 7+ yrs exp</h6>
          </div>
          <div className="app37">
            <img src={img9} alt="" />
            <h5>Neha Sharma</h5>
            <p>Counselling Finance</p>
            <h6>6000+ students | 7+ yrs exp</h6>
          </div>
          <div className="app37">
            <img src={img9} alt="" />
            <h5>Neha Sharma</h5>
            <p>Counselling Finance</p>
            <h6>6000+ students | 7+ yrs exp</h6>
          </div>
          <div className="app37">
            <img src={img9} alt="" />
            <h5>Neha Sharma</h5>
            <p>Counselling Finance</p>
            <h6>6000+ students | 7+ yrs exp</h6>
          </div>
        </div>
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
        </Offcanvas.Header>
        <Offcanvas.Body>
            <MobileLoanNavbar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CommonApplication;
