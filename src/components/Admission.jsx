import React, {useState} from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import TopPart from "./TopPart";
import Footer from "./Footer";

import img from "../Images/c50.png";
import img2 from "../Images/c51.png";
import img3 from "../Images/c52.png";
import img4 from "../Images/c53.png";
import img5 from "../Images/c54.png";
import img8 from "../Images/c57.png";
import img9 from "../Images/c58.png";
import img6 from "../Images/c55.png";

import MobileLoanNavbar from "./MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';

const Admission = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
  return (
    <>
      <div className="loan100">
        <i class="fa-solid fa-bars" onClick={handleShow}></i>
      </div>
      <Navbar />
      <Banner />
      <TopPart />
      <div className="clg14">
        <div className="clg15">
            <div className="clg58">
                <div className="clg59">
                    <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, 
                        dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem 
                        sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
                         sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia 
                         nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac 
                         scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu 
                         tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet 
                         lacinia. Aliquam in elementu
                    </p>
                </div>
                <div className="clg60">
                    <h5>JMI Latest Updates</h5>
                    <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
                        ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per 
                        inceptos himenaeos.
                    </p>
                </div>
                <div className="clg60">
                    <h5>Table Of Content</h5>
                    <ul>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                        <li>Lorem Ipsum</li>
                    </ul>
                </div>
            </div>
            <div className="clg61">
                <h4>Highlights for Jamia Miliya Isalamia University,</h4>
                <hr />
                <div className="clg23">
              <div className="clg24">
                <img src={img} alt="" />
                <p>Institution Type</p>
                <p>Private</p>
              </div>
              <div className="clg24">
                <img src={img2} alt="" />
                <p>Courses Offered</p>
                <p>BCA,MCA</p>
              </div>
              <div className="clg24">
                <img src={img5} alt="" />
                <p>Application Mode</p>
                <p>Online/Offline</p>
              </div>
              <div className="clg24">
                <img src={img6} alt="" />
                <p>Admission Mode</p>
                <p>Online/Offline</p>
              </div>
            </div>
            <hr />
            </div>
        </div>
        <div className="clg16">
          <div className="clg30">
            <div className="clg31">
              <img src={img8} alt="" />
              <p>Are You Interested in College ?</p>
            </div>
            <div className="clg32">
              <button className="clg8">Placement Report</button>
              <button className="clg9">Apply Now</button>
            </div>
          </div>
          <div className="clg30">
            <div className="clg33">
              <h6 className="clg33h6">Featured News</h6>
              <p className="clg33p">Recent News</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35" style={{ paddingBottom: "20px" }}>
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
          </div>
          <div className="clg30">
            <div className="clg33">
              <h6 className="clg33h6">Trending Articles</h6>
              <p className="clg33p">Recent Articles</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35" style={{ paddingBottom: "20px" }}>
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Offcanvas show={show} onHide={handleClose}>
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

export default Admission;
