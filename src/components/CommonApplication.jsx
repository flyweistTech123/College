import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import TopPart3 from "./TopPart3";
import MyVerticallyCenteredModal from "./CouncilModal";
import Offcanvas from 'react-bootstrap/Offcanvas';
import MobileLoanNavbar from "./MobileLoanNavabr";
import LoginModal from "./LoginModal";
import TopNavbar from "./TopNavbar";
import common from '../Images/common.png'
import common2 from '../Images/common1.png'
import Sidebar4 from "./Sidebar4";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import location from '../Images/loaction.png'
import { IoMdArrowDropright } from "react-icons/io";
import ShortList from "./Modals/ShortList/ShortList";
import ApplyNowModal from "./Modals/Login/Apply";
import Sidebar3 from "./Sidebar3";



const StarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const isFilled = i < rating;
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          color={isFilled ? '#ffd700' : '#ccc'}
        />
      );
    }
    return stars;
  };

  return <div>{renderStars()}</div>;
};


const CommonApplication = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);
  const [show3, setShow3] = useState(false);

  const [showNavbar, setShowNavbar] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalShow1, setModalShow1] = useState(false);





  const handleClick = () => {
    setShowNavbar(prev => !prev);
  }


  return (
    <>
      <MyVerticallyCenteredModal
        show={show}
        onHide={() => setShow(false)}
      />
      <LoginModal show={show3} onHide={() => setShow3(false)} />
      <div className="app1">
        <div className="schro">
          <TopNavbar />
        </div>
        <div className="app6">
          <img src={common} />
        </div>
        <div className="schro1">
          <div className="home100">
            <i class="fa-solid fa-bars" onClick={handleShow}></i>
          </div>
          <div className="schro2">
            <h2>Let's start your career journey.</h2>
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
      <TopPart3 />

      <ShortList show={modalShow}
        onHide={() => setModalShow(false)} />

      <div className="common1">
        <div className="screen2">
          <Sidebar3 />
        </div>

        <div className="common50">
          <div className="common2">
            <img src={common2} alt="" />
            <div className="common3">
              <h1>Parul University Vaddora (PUV)</h1>
              <div className="common4"><StarRating rating={5} />
                <div className="common5">
                  <img src={location} alt="" />
                  <p>Vaddora</p>
                </div>

              </div>
              <h5>Parul University offers various undergraduate, postgraduate, diploma, and PhD courses in a wide range of discipline</h5>
              <div className="common6">
                <p><span>Info :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Placements :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Courses & Fees :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Admissions :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Cut Off :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Scholarships :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common7">
                <button onClick={() => setModalShow(true)}>Short List</button>
                <button onClick={() => setModalShow1(true)}>Read more <IoMdArrowDropright /></button>
              </div>
            </div>
          </div>
          <div className="common2">
            <img src={common2} alt="" />
            <div className="common3">
              <h1>Parul University Vaddora (PUV)</h1>
              <div className="common4"><StarRating rating={5} />
                <div className="common5">
                  <img src={location} alt="" />
                  <p>Vaddora</p>
                </div>

              </div>
              <h5>Parul University offers various undergraduate, postgraduate, diploma, and PhD courses in a wide range of discipline</h5>
              <div className="common6">
                <p><span>Info :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Placements :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Courses & Fees :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Admissions :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Cut Off :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Scholarships :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common7">
                <button onClick={() => setModalShow(true)}>Short List</button>
                <button onClick={() => setModalShow1(true)}>Read more <IoMdArrowDropright /></button>
              </div>
            </div>
          </div>
          <div className="common2">
            <img src={common2} alt="" />
            <div className="common3">
              <h1>Parul University Vaddora (PUV)</h1>
              <div className="common4"><StarRating rating={5} />
                <div className="common5">
                  <img src={location} alt="" />
                  <p>Vaddora</p>
                </div>

              </div>
              <h5>Parul University offers various undergraduate, postgraduate, diploma, and PhD courses in a wide range of discipline</h5>
              <div className="common6">
                <p><span>Info :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Placements :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Courses & Fees :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Admissions :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Cut Off :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Scholarships :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common7">
                <button onClick={() => setModalShow(true)}>Short List</button>
                <button onClick={() => setModalShow1(true)}>Read more <IoMdArrowDropright /></button>
              </div>
            </div>
          </div>
          <div className="common2">
            <img src={common2} alt="" />
            <div className="common3">
              <h1>Parul University Vaddora (PUV)</h1>
              <div className="common4"><StarRating rating={5} />
                <div className="common5">
                  <img src={location} alt="" />
                  <p>Vaddora</p>
                </div>

              </div>
              <h5>Parul University offers various undergraduate, postgraduate, diploma, and PhD courses in a wide range of discipline</h5>
              <div className="common6">
                <p><span>Info :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Placements :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Courses & Fees :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Admissions :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Cut Off :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Scholarships :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common7">
                <button onClick={() => setModalShow(true)}>Short List</button>
                <button onClick={() => setModalShow1(true)}>Read more <IoMdArrowDropright /></button>
              </div>
            </div>
          </div>
          <div className="common2">
            <img src={common2} alt="" />
            <div className="common3">
              <h1>Parul University Vaddora (PUV)</h1>
              <div className="common4"><StarRating rating={5} />
                <div className="common5">
                  <img src={location} alt="" />
                  <p>Vaddora</p>
                </div>

              </div>
              <h5>Parul University offers various undergraduate, postgraduate, diploma, and PhD courses in a wide range of discipline</h5>
              <div className="common6">
                <p><span>Info :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Placements :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Courses & Fees :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Admissions :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Cut Off :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common6">
                <p><span>Scholarships :</span> Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risu</p>
              </div>
              <div className="common7">
                <button onClick={() => setModalShow(true)}>Short List</button>
                <button onClick={() => setModalShow1(true)}>Read more <IoMdArrowDropright /></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="loan21">
      </div>
      <Footer />
      <div className="home555">
        <p>Jamia Miliya Islamia College of Engineering Delhi : Admissions Open for  B.E | MBA | MCA 2023 </p>
        <button onClick={() => setModalShow1(true)}>Apply Now!</button>
      </div>

      <ApplyNowModal show={modalShow1}
        onHide={() => setModalShow1(false)} />
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
