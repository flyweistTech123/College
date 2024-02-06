import React, { useState, useEffect } from "react";
import './Courses.css'
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
import TopNavbar from "../TopNavbar";
import img12 from '../../Images/course_details.png'
import img11 from '../../Images/course_details1.png'
import img from "../../Images/c50.png";
import img8 from "../../Images/clginfoo.png";
import img9 from "../../Images/c58.png";
import cap from '../../Images/cap.png'
import img121 from "../../Images/c107.png";

import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

import './Course_details.css'
import TopPartcourse from "../TopPartcourse";





const Course_Review = () => {
  const navigate = useNavigate();



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
  const [flag, setFlag] = useState(false)

  const getFlag = () => {
    setFlag(prev => !prev);
  }
  return (
    <>
      <div className="app1">
        <div className="schro">
          <TopNavbar />
        </div>
        <div className="course_details21">
          <img src={img11} />
          <img src={img12} />
        </div>
      </div>
      <TopPartcourse />


      <div className="clg14">
        <div className="clg15">
          <div className="review1">
            <div className="review2">
              <img src={img121} alt="" />
              <h6>Neha Sharma</h6>
              <h6>Batch 2019</h6>
              <h6>B.Tech Mechanical Engineering</h6>
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
              <img src={img121} alt="" />
              <h6>Neha Sharma</h6>
              <h6>Batch 2019</h6>
              <h6>B.Tech Mechanical Engineering</h6>
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
              <img src={img121} alt="" />
              <h6>Neha Sharma</h6>
              <h6>Batch 2019</h6>
              <h6>B.Tech Mechanical Engineering</h6>
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
              <img src={img121} alt="" />
              <h6>Neha Sharma</h6>
              <h6>Batch 2019</h6>
              <h6>B.Tech Mechanical Engineering</h6>
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
              <img src={img121} alt="" />
              <h6>Neha Sharma</h6>
              <h6>Batch 2019</h6>
              <h6>B.Tech Mechanical Engineering</h6>
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
              <img src={img121} alt="" />
              <h6>Neha Sharma</h6>
              <h6>Batch 2019</h6>
              <h6>B.Tech Mechanical Engineering</h6>
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
              <img src={img121} alt="" />
              <h6>Neha Sharma</h6>
              <h6>Batch 2019</h6>
              <h6>B.Tech Mechanical Engineering</h6>
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
              <img src={img121} alt="" />
              <h6>Neha Sharma</h6>
              <h6>Batch 2019</h6>
              <h6>B.Tech Mechanical Engineering</h6>
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
          <div className="clg3011">
            <div className="clg33">
              <h6 className={!flag ? "clg33h6" : "clg33p"} onClick={getFlag}>Featured News</h6>
              <p className={flag ? "clg33h6" : "clg33p"} onClick={getFlag}>Recent News</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
            <hr className="clg34" />
            <div className="clg35" style={{ paddingBottom: "20px" }}>
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
          </div>
          <div className="clg3011">
            <div className="clg33">
              <h6 className={!flag ? "clg33h6" : "clg33p"} onClick={getFlag}>Trending Articles</h6>
              <p className={flag ? "clg33h6" : "clg33p"} onClick={getFlag}>Recent Articles</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
            <hr className="clg34" />
            <div className="clg35" style={{ paddingBottom: "20px" }}>
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
          </div>

          <div className="clg3011">
            <div className="ingooo11">
              <img src={cap} alt="" />
              <div className="ingooo12">
                <p>Jamia Millia Islamia -[JMI]</p>
                <h6>Contact Information</h6>
              </div>
            </div>

            <div className="ingooo13">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2738243856347!2d77.2775680742905!3d28.56153908730327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce351945f45eb%3A0xf96252dd41babf89!2sJamia%20Millia%20Islamia!5e0!3m2!1sen!2sin!4v1704371273634!5m2!1sen!2sin" width="350" height="113" loading="lazy"></iframe>
            </div>

            <div className="ingooo14">
              <p>Address: </p>
              <p>Jamia Millia Islamia-[JMI], New Delhi
                Main Rd, JMI Campus,Delhi.</p>
            </div>
            <div className="ingooo15">
              <span><IoLocationSharp /> View on Map-- <IoIosArrowForward /></span>
            </div>

            <div className="ingooo16">
              <button>Show Phone & Email</button>
              <button>Go To College Website -- <IoIosArrowForward /></button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Course_Review;
