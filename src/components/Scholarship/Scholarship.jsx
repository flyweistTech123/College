import React, { useState, useEffect } from "react";
import './Scholarship.css'
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
import scholarshipimg from '../../Images/schrolarship.png';
import img from '../../Images/clgschro.png'
import TopNavbar from "../TopNavbar";
import Sidebar3 from "../Sidebar3";
import { IoMdArrowDropright } from "react-icons/io";


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
        <div className="schro">
          <TopNavbar />
        </div>
        <div className="app6">
          <img src={scholarshipimg} />
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
      <div className="schro5">
        <div className="screen2">
          <Sidebar3 />
        </div>


        <div className="schro12">
          <div className="schro6">
            <div className="schro7">
              <div className="schro8"><h6>TATA Scholarship-Cornell University</h6></div>
              <div className="schro9">
                <p>International Student Eligible : <span>Yes</span></p>
                <p>Amount : <span>Variable Amount</span></p>
                <p>Type : <span>College Specific</span></p>
                <p>Level Of Study  : <span>Bachelors</span></p>
                <p>Number Of Scholorships : <span>40</span></p>
                <h5>Read more  <IoMdArrowDropright /></h5>
              </div>
              <div className="schro10">
                <button>Apply Now</button>
                <button>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Hubert H. Humphery Fellows...........</h6></div>
              <div className="schro9">
                <p>International Student Eligible : <span>Yes</span></p>
                <p>Amount : <span>Variable Amount</span></p>
                <p>Type : <span>College Specific</span></p>
                <p>Level Of Study  : <span>Bachelors</span></p>
                <p>Number Of Scholorships : <span>40</span></p>
                <h5>Read more  <IoMdArrowDropright /></h5>
              </div>
              <div className="schro10">
                <button>Apply Now</button>
                <button>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Ontario Trillium Scholarship...........</h6></div>
              <div className="schro9">
                <p>International Student Eligible : <span>Yes</span></p>
                <p>Amount : <span>Variable Amount</span></p>
                <p>Type : <span>College Specific</span></p>
                <p>Level Of Study  : <span>Bachelors</span></p>
                <p>Number Of Scholorships : <span>40</span></p>
                <h5>Read more  <IoMdArrowDropright /></h5>
              </div>
              <div className="schro10">
                <button>Apply Now</button>
                <button>Get Alert</button>
              </div>
            </div>
          </div>
          <div className="schro11">
          </div>
          <div className="schro6">
            <div className="schro7">
              <div className="schro8"><h6>TATA Scholarship-Cornell University</h6></div>
              <div className="schro9">
                <p>International Student Eligible : <span>Yes</span></p>
                <p>Amount : <span>Variable Amount</span></p>
                <p>Type : <span>College Specific</span></p>
                <p>Level Of Study  : <span>Bachelors</span></p>
                <p>Number Of Scholorships : <span>40</span></p>
                <h5>Read more  <IoMdArrowDropright /></h5>
              </div>
              <div className="schro10">
                <button>Apply Now</button>
                <button>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Hubert H. Humphery Fellows...........</h6></div>
              <div className="schro9">
                <p>International Student Eligible : <span>Yes</span></p>
                <p>Amount : <span>Variable Amount</span></p>
                <p>Type : <span>College Specific</span></p>
                <p>Level Of Study  : <span>Bachelors</span></p>
                <p>Number Of Scholorships : <span>40</span></p>
                <h5>Read more  <IoMdArrowDropright /></h5>
              </div>
              <div className="schro10">
                <button>Apply Now</button>
                <button>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Ontario Trillium Scholarship...........</h6></div>
              <div className="schro9">
                <p>International Student Eligible : <span>Yes</span></p>
                <p>Amount : <span>Variable Amount</span></p>
                <p>Type : <span>College Specific</span></p>
                <p>Level Of Study  : <span>Bachelors</span></p>
                <p>Number Of Scholorships : <span>40</span></p>
                <h5>Read more  <IoMdArrowDropright /></h5>
              </div>
              <div className="schro10">
                <button>Apply Now</button>
                <button>Get Alert</button>
              </div>
            </div>
          </div>

          <div className="schro13">
            <div className="schro14">
              <div className="schro15">Most Popular Links</div>
              <div className="schro16">Study in Delhi College</div>
              <div className="schro16">Study in Chandigarh College</div>
              <div className="schro16">Study in Delhi College</div>
              <div className="schro16">Study in Chandigarh College</div>
              <div className="schro16">Study in Delhi College</div>
            </div>
            <div className="schro17">
              <div className="schro18">Most Applied Colleges</div>
              <div className="schro19">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>College Name</h5>
                  <p>College City</p>
                </div>
                <button>Apply</button>
              </div>
              <div className="schro19">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>College Name</h5>
                  <p>College City</p>
                </div>
                <button>Apply</button>
              </div>
              <div className="schro19">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>College Name</h5>
                  <p>College City</p>
                </div>
                <button>Apply</button>
              </div>
              <div className="schro19">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>College Name</h5>
                  <p>College City</p>
                </div>
                <button>Apply</button>
              </div>
              <div className="schro19">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>College Name</h5>
                  <p>College City</p>
                </div>
                <button>Apply</button>
              </div>

            </div>
            <div className="schro21">
              <div className="schro22">Most Applied Scholarships</div>
              <div className="schro23">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>Scholarship Name</h5>
                  <p>Amount</p>
                </div>
                <button>Apply</button>
              </div>
              <div className="schro23">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>Scholarship Name</h5>
                  <p>Amount</p>
                </div>
                <button>Apply</button>
              </div>
              <div className="schro23">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>Scholarship Name</h5>
                  <p>Amount</p>
                </div>
                <button>Apply</button>
              </div>
              <div className="schro23">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>Scholarship Name</h5>
                  <p>Amount</p>
                </div>
                <button>Apply</button>
              </div>
              <div className="schro23">
                <img src={img} alt="" />
                <div className="schro20">
                  <h5>Scholarship Name</h5>
                  <p>Amount</p>
                </div>
                <button>Apply</button>
              </div>

            </div>
          </div>
          <div className="schro11">
          </div>

          <div className="schro6">
            <div className="schro7">
              <div className="schro8"><h6>TATA Scholarship-Cornell University</h6></div>
              <div className="schro9">
                <p>International Student Eligible : <span>Yes</span></p>
                <p>Amount : <span>Variable Amount</span></p>
                <p>Type : <span>College Specific</span></p>
                <p>Level Of Study  : <span>Bachelors</span></p>
                <p>Number Of Scholorships : <span>40</span></p>
                <h5>Read more  <IoMdArrowDropright /></h5>
              </div>
              <div className="schro10">
                <button>Apply Now</button>
                <button>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Hubert H. Humphery Fellows...........</h6></div>
              <div className="schro9">
                <p>International Student Eligible : <span>Yes</span></p>
                <p>Amount : <span>Variable Amount</span></p>
                <p>Type : <span>College Specific</span></p>
                <p>Level Of Study  : <span>Bachelors</span></p>
                <p>Number Of Scholorships : <span>40</span></p>
                <h5>Read more  <IoMdArrowDropright /></h5>
              </div>
              <div className="schro10">
                <button>Apply Now</button>
                <button>Get Alert</button>
              </div>
            </div>
            <div className="schro7">
              <div className="schro8"><h6>Ontario Trillium Scholarship...........</h6></div>
              <div className="schro9">
                <p>International Student Eligible : <span>Yes</span></p>
                <p>Amount : <span>Variable Amount</span></p>
                <p>Type : <span>College Specific</span></p>
                <p>Level Of Study  : <span>Bachelors</span></p>
                <p>Number Of Scholorships : <span>40</span></p>
                <h5>Read more  <IoMdArrowDropright /></h5>
              </div>
              <div className="schro10">
                <button>Apply Now</button>
                <button>Get Alert</button>
              </div>
            </div>
          </div>

        </div>



      </div>


      <div className="schro24">
      </div>

      {/* <div className="home25" style={{ marginTop: "60px" }}>
        <div className="home26">
          <Slider {...settings3}>
            <div className="home29">
              <button className="home27">City Name</button>
            </div>
            <div className="home29">
              <button className="home28" style={{ width: "140px" }}>MBA/PGDM</button>
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
      </div> */}
      <Footer />
    </>
  );
};

export default Scholarship;
