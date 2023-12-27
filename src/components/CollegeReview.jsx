import React, { useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import TopPart from "./TopPart";
import Footer from "./Footer";

import img from "../Images/c107.png";
import img8 from "../Images/c57.png";
import img9 from "../Images/c58.png";

import MobileLoanNavbar from "./MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';

const CollegeReview = () => {
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
          <div className="review1">
            <div className="review2">
              <img src={img} alt="" />
              <p>Neha Sharma</p>
              <p>Batch 2019</p>
              <p>B.Tech Mechanical Engineering</p>
            </div>
            <div className="review3">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <div className="review2">
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
          </div>
          <div className="review1">
            <div className="review2">
              <img src={img} alt="" />
              <p>Neha Sharma</p>
              <p>Batch 2019</p>
              <p>B.Tech Mechanical Engineering</p>
            </div>
            <div className="review3">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <div className="review2">
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
          </div>
          <div className="review1">
            <div className="review2">
              <img src={img} alt="" />
              <p>Neha Sharma</p>
              <p>Batch 2019</p>
              <p>B.Tech Mechanical Engineering</p>
            </div>
            <div className="review3">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <div className="review2">
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
          </div>
          <div className="review1">
            <div className="review2">
              <img src={img} alt="" />
              <p>Neha Sharma</p>
              <p>Batch 2019</p>
              <p>B.Tech Mechanical Engineering</p>
            </div>
            <div className="review3">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>
            <div className="review2">
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
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
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MobileLoanNavbar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CollegeReview;
