import React, { useState, useEffect } from "react";
import './Courses.css'
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
import TopNavbar from "../TopNavbar";
import course1 from '../../Images/course11.png'
import img12 from '../../Images/course_details.png'
import img11 from '../../Images/course_details1.png'
import img from "../../Images/c50.png";
import img2 from "../../Images/c51.png";
import img3 from "../../Images/c52.png";
import img4 from "../../Images/c53.png";
import img5 from "../../Images/c54.png";
import img6 from "../../Images/c55.png";
import img7 from "../../Images/c56.png";
import img8 from "../../Images/clginfoo.png";
import img9 from "../../Images/c58.png";
import cap from '../../Images/cap.png'
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { MdDownload } from "react-icons/md";


import './Course_details.css'
import TopPart from "../TopPart";
import TopPartcourse from "../TopPartcourse";





const Courses_details = () => {
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

            <div className="course_details23">
                <h4>BTech CSE: Course Details, Admission, Fees, Eligibility, Syllabus, Jobs & Salary</h4>
            </div>
            <TopPartcourse />



            <div className="clg14">
                <div className="clg15">
                    <div className="clg21">
                        <div className="clg17">
                            <h5>Bachelor of Technology [B.Tech] (Computer Science and Engineering) - Latest Notifications</h5>
                            <div className="clg18">
                                <h6>25 May 2023</h6>
                                <p>
                                    Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                    vulputate libero et velit interdum, ac aliquet odio mattis.
                                </p>
                            </div>
                            <div className="clg18">
                                <h6>25 May 2023</h6>
                                <p>
                                    Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                    vulputate libero et velit interdum, ac aliquet odio mattis.
                                </p>
                            </div>
                        </div>
                        <div className="clg19">
                            <h5>BTech CSE is a 4 year UG course</h5>
                            <ul className="clg20">
                                <li>
                                    BTech CSE is a 4 year UG course that studies practical and theoretical knowledge of computer hardware and software. This course lays emphasis on the basics of computer programming and networking while also comprising a plethora of topics.The admission process for the B.tech CSE is to clear entrance exams such as JEE at a national or state level.
                                </li>
                                <li>
                                    BTech CSE Entrance Exams are JEE Main, SRMJEEE, etc. The eligibility criteria for the course B.tech CSE is students have to qualify 10+2 with a minimum of 55% marks from the science stream. The average fee for the course B.tech CSE is INR 2 lakhs to INR 10 lakhs. BTech CSE Syllabus deals with Operating System, Data Structures, Computer Networks etc. If the student wants to do higher studies then MTech, MS and MBA are the popular destinations.
                                </li>
                                <li>
                                    The average CTC from IIT Delhi is INR 16 Lakhs while that of IIT Bombay is INR 17.5 Lakhs. The job profiles after the course B.tech CSE are Data Analyst, Software developer, Game developer, networking engineer, testing engineer, database administrator, etc. The top recruiting companies are TCS, Infosys, Hexaware, Syntel, Wipro, etc.
                                </li>
                            </ul>
                        </div>
                        <div className="course_details25">
                            <button>Apply Now</button>
                            <button>Brochure</button>
                            <button>Check Eligibility</button>
                        </div>
                    </div>
                    <div className="course_details26">
                    <h5>Table of Contents</h5>
                        <ul>
                            <li>1. BTech CSE: Course Details</li>
                            <li>1.1 Why Study?</li>
                            <li>1. BTech CSE: Admission Process</li>
                            <li>2.1 Eligibility</li>
                            <li>2.2 Admission Process</li>
                            <li>2.1.1 Merit Based</li>
                            <li>2.1.2 Entrance Based</li>
                            <li>2.3 Entrance Exams</li>
                            <li>2.3.1 Important Dates</li>
                            <li>2.3.2 BTech CSE Entrance Exam Syllabus</li>
                            <li>1. BTech CSE Syllabus</li>
                            <li>2. BTech CSE Course Comparison</li>
                            <li>4.1 BTech CSE vs BTech IT</li>
                            <li>4.2 BTech CSE vs BCA</li>
                            <li>1. Colleges as per NIRF Engineering Rankings 2023</li>
                            <li>5.1 Colleges with NIRF Engg Ranking Comparison: 2021 vs 2022 vs 2023</li>
                            <li>1. BTech CSE Colleges</li>
                            <li>6.1 Hyderabad</li>
                            <li>6.2 Lucknow</li>
                            <li>6.3 Bhubaneshwar</li>
                            <li>6.4 Jaipur</li>
                            <li>6.5 Kolkata</li>
                            <li>1. BTech CSE Jobs</li>
                            <li>2. FAQs</li>
                        </ul>
                    </div>
                    <div className="clg22">
                        <h5>B.Tech and Other  Courses & Fees 2023 </h5>
                        <div className="clg25">
                            <div className="clg26">
                                <button>Course</button>
                                <button>Avg. Fees</button>
                                <button>Duration</button>
                            </div>
                            <div className="clg29">
                                <p>B.Tech</p>
                                <p>11,300</p>
                                <p>4 Years</p>
                            </div>
                            <div className="clg29">
                                <p>MBA</p>
                                <p>11,300</p>
                                <p>2 Years</p>
                            </div>
                            <div className="clg29">
                                <p>M.Tech</p>
                                <p>11,300</p>
                                <p>2 Years</p>
                            </div>
                            <div className="clg29">
                                <p>B.Tech</p>
                                <p>11,300</p>
                                <p>4 Years</p>
                            </div>
                            <div className="clg29">
                                <p>B.Tech</p>
                                <p>11,300</p>
                                <p>4 Years</p>
                            </div>
                            <div className="clg29">
                                <p>B.Tech</p>
                                <p>11,300</p>
                                <p>4 Years</p>
                            </div>
                            <div className="clg29">
                                <p>B.Tech</p>
                                <p>11,300</p>
                                <p>4 Years</p>
                            </div>
                        </div>
                        <div className="clg28">
                            <button>More Courses</button>
                        </div>
                    </div>
                    <div className="clg40">
                        <div className="clg41">
                            <p>
                                Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                                torquent per conubia nostra, per inceptos himenaeos. Praesent
                                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                                diam sit amet lacinia. Aliquam in elementu
                            </p>
                        </div>
                        <div className="clg42">
                            <h5>Jamia Miliya Islamia, Course & Fees Structure</h5>
                            <p>
                                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                vulputate libero et velit interdum, ac aliquet odio mattis.
                                Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra, per inceptos himenaeos.
                            </p>
                        </div>
                        <div className="clg25">
                            <div className="clg26">
                                <button>Course</button>
                                <button>Total Tuition Fee</button>
                                <button>Eligibility</button>
                            </div>
                            <div className="clg29">
                                <p>B.Sc Anaesthesia Technology (AT)</p>
                                <p>2,34,645</p>
                                <p>Graduation</p>
                            </div>
                            <div className="clg29">
                                <p>
                                    Bachelor of Audiology and Speech-Language Pathology (BASLP)
                                </p>
                                <p>2,34,645</p>
                                <p>Graduation</p>
                            </div>
                            <div className="clg29">
                                <p>B.Sc Cardiac Perfusion Technology (CPT)</p>
                                <p>2,34,645</p>
                                <p>Graduation</p>
                            </div>
                            <div className="clg29">
                                <p>B.Sc Cardio Vascular Technology (CVT)</p>
                                <p>2,34,645</p>
                                <p>Graduation</p>
                            </div>
                            <div className="clg29">
                                <p>B.Sc Diabetes Sciences (DBS)</p>
                                <p>2,34,645</p>
                                <p>Graduation</p>
                            </div>
                            <div className="clg29">
                                <p>B.Sc Dialysis Therapy (DT)</p>
                                <p>2,34,645</p>
                                <p>Graduation</p>
                            </div>
                            <div className="clg29">
                                <p>B.Sc Dialysis Therapy (DT)</p>
                                <p>2,34,645</p>
                                <p>Graduation</p>
                            </div>
                            <div className="clg29">
                                <p>B.Sc Dialysis Therapy (DT)</p>
                                <p>2,34,645</p>
                                <p>Graduation</p>
                            </div>
                            <div className="clg29">
                                <p>B.Sc Dialysis Therapy (DT)</p>
                                <p>2,34,645</p>
                                <p>Graduation</p>
                            </div>
                            <div className="clg29">
                                <p>B.Sc Dialysis Therapy (DT)</p>
                                <p>2,34,645</p>
                                <p>Graduation</p>
                            </div>
                            <div className="clg29">
                                <p>B.Sc Dialysis Therapy (DT)</p>
                                <p>2,34,645</p>
                                <p>Graduation</p>
                            </div>
                        </div>
                        <div className="clg43">
                            <h4>Entrance Exams Accepted by Jamia Miliya Islamia</h4>
                            <p>
                                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                vulputate libero et velit interdum, ac aliquet odio mattis.
                                Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra, per inceptos himenaeos.
                            </p>
                        </div>
                        <div className="clg43">
                            <h4> Jamia Miliya Islamia Fee Payment Guidelines</h4>
                            <p>
                                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                vulputate libero et velit interdum, ac aliquet odio mattis.
                                Class aptent taciti sociosqu ad litora torquent per conubia
                                nostra, per inceptos himenaeos.
                            </p>
                        </div>
                        <div className="clg28">
                            <p>Show More</p>
                        </div>
                    </div>
                    <div className="clg44">
                        <div className="clg45">
                            <div className="clg46">
                                <p>B.Tech [Bachelor of Technology] Full Time • On Campus</p>
                            </div>
                            <div className="clg47">
                                <div className="clg48">
                                    <p>₹ 11,70,000 (4 Years) Avg. Fees</p>
                                </div>
                                <div className="clg49">
                                    <button className="clg50">Interested</button>
                                    <button className="clg51">Brochure  <MdDownload /></button>
                                </div>
                            </div>
                        </div>
                        <div className="clg52">
                            <p>All Branches Technology</p>
                        </div>
                        <div className="clg53">
                            <div className="clg54">
                                <h4>Bachelor of Technology [B.Tech] (Aerospace Engineering)</h4>
                                <p>Check Eligibility</p>
                            </div>
                            <div className="clg55">
                                <h6>₹ 1,00,000</h6>
                                <p>View Detail Fees</p>
                            </div>
                            <div className="clg56">
                                <button>Apply Now</button>
                            </div>
                        </div>
                        <hr className="clg57" />
                        <div className="clg53">
                            <div className="clg54">
                                <h4>Bachelor of Technology [B.Tech] (Aerospace Engineering)</h4>
                                <p>Check Eligibility</p>
                            </div>
                            <div className="clg55">
                                <h6>₹ 1,00,000</h6>
                                <p>View Detail Fees</p>
                            </div>
                            <div className="clg56">
                                <button>Apply Now</button>
                            </div>
                        </div>
                        <hr className="clg57" />
                        <div className="clg53">
                            <div className="clg54">
                                <h4>Bachelor of Technology [B.Tech] (Aerospace Engineering)</h4>
                                <p>Check Eligibility</p>
                            </div>
                            <div className="clg55">
                                <h6>₹ 1,00,000</h6>
                                <p>View Detail Fees</p>
                            </div>
                            <div className="clg56">
                                <button>Apply Now</button>
                            </div>
                        </div>
                        <hr className="clg57" />
                        <div className="clg53">
                            <div className="clg54">
                                <h4>Bachelor of Technology [B.Tech] (Aerospace Engineering)</h4>
                                <p>Check Eligibility</p>
                            </div>
                            <div className="clg55">
                                <h6>₹ 1,00,000</h6>
                                <p>View Detail Fees</p>
                            </div>
                            <div className="clg56">
                                <button>Apply Now</button>
                            </div>
                        </div>
                        <hr className="clg57" />
                        <div className="clg53">
                            <div className="clg54">
                                <h4>Bachelor of Technology [B.Tech] (Aerospace Engineering)</h4>
                                <p>Check Eligibility</p>
                            </div>
                            <div className="clg55">
                                <h6>₹ 1,00,000</h6>
                                <p>View Detail Fees</p>
                            </div>
                            <div className="clg56">
                                <button>Apply Now</button>
                            </div>
                        </div>
                        <hr className="clg57" />
                        <div className="clg53">
                            <div className="clg54">
                                <h4>Bachelor of Technology [B.Tech] (Aerospace Engineering)</h4>
                                <p>Check Eligibility</p>
                            </div>
                            <div className="clg55">
                                <h6>₹ 1,00,000</h6>
                                <p>View Detail Fees</p>
                            </div>
                            <div className="clg56">
                                <button>Apply Now</button>
                            </div>
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

export default Courses_details;
