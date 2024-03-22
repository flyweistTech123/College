import React, { useState, useEffect } from "react";
import './Internships.css'
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
import TopNavbar from "../TopNavbar";
import intern from '../../Images/Internships.png'
import { FaChevronDown } from "react-icons/fa";
import { BsFilterLeft } from "react-icons/bs";
import { IoMdEye } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { RiBuilding2Fill } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaCalendarDays } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";





import img from '../../Images/internshio.png'
import ApplyNowModal from "../Modals/Login/Apply";




const Internships = () => {
    const navigate = useNavigate();

    const [showNavbar, setShowNavbar] = useState(false);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow2(false);
    const handleShow = () => setShow2(true);
    const [show3, setShow3] = useState(false);
    const [modalShow, setModalShow] = useState(false);


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
                    <img src={intern} />
                </div>
                <div className="schro1">
                    <div className="home100">
                        <i class="fa-solid fa-bars" onClick={handleShow}></i>
                    </div>
                    <div className="schro2">
                        <h2>Internships In India</h2>
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
                            Search Internships
                        </button>
                    </div>
                </div>
            </div>

            <div className="internships">
                <div className="internships1">
                    <div className="internships2">
                        <p>Internships</p>
                    </div>
                    <div className="internships3">
                        <p>Sort By</p>
                        <FaChevronDown color="#121212" />
                    </div>

                    <div className="internships4">
                        <BsFilterLeft color="#FFFFFF" />
                        <p>All Filters</p>
                        <FaChevronDown color="#FFFFFF" />
                    </div>
                    <div className="internships3">
                        <p>Management</p>
                        <FaChevronDown color="#121212" />
                    </div>
                    <div className="internships3">
                        <p>Type</p>
                        <FaChevronDown color="#121212" />
                    </div>
                    <div className="internships3">
                        <p>Eligibility</p>
                        <FaChevronDown color="#121212" />
                    </div>
                    <div className="internships3">
                        <p>Category</p>
                        <FaChevronDown color="#121212" />
                    </div>
                </div>


                <div className="internships5">
                    <div className="internships6">
                        <div className="internships7">
                            <div className="internships8">
                                <img src={img} alt="" />
                                <div className="internships9">
                                    <h6>Social Media Executive Internship</h6>
                                    <p>One Impression...</p>
                                </div>
                            </div>

                            <div className="internships10">
                                <div className="internships11">
                                    <p>#Engineering Students</p>
                                </div>
                                <div className="internships11">
                                    <p>#MBA Students</p>
                                </div>
                                <div className="internships11">
                                    <p>#MBA Students</p>
                                </div>
                                <div className="internships12">
                                    <h5>+3 more</h5>
                                </div>
                            </div>

                            <div className="internships13">
                                <div className="internships14">
                                    <IoMdEye color="#FFFFFF" size={20} />
                                    <p>289 Impression</p>
                                </div>
                                <div className="internships15">
                                    <IoTime color="#FFFFFF" size={20} />
                                    <p>20 Days Left</p>
                                </div>
                            </div>
                        </div>
                        <div className="internships7">
                            <div className="internships8">
                                <img src={img} alt="" />
                                <div className="internships9">
                                    <h6>Social Media Executive Internship</h6>
                                    <p>One Impression...</p>
                                </div>
                            </div>

                            <div className="internships10">
                                <div className="internships11">
                                    <p>#Engineering Students</p>
                                </div>
                                <div className="internships11">
                                    <p>#MBA Students</p>
                                </div>
                                <div className="internships11">
                                    <p>#MBA Students</p>
                                </div>
                                <div className="internships12">
                                    <h5>+3 more</h5>
                                </div>
                            </div>

                            <div className="internships13">
                                <div className="internships14">
                                    <IoMdEye color="#FFFFFF" size={20} />
                                    <p>289 Impression</p>
                                </div>
                                <div className="internships15">
                                    <IoTime color="#FFFFFF" size={20} />
                                    <p>20 Days Left</p>
                                </div>
                            </div>
                        </div>
                        <div className="internships7">
                            <div className="internships8">
                                <img src={img} alt="" />
                                <div className="internships9">
                                    <h6>Social Media Executive Internship</h6>
                                    <p>One Impression...</p>
                                </div>
                            </div>

                            <div className="internships10">
                                <div className="internships11">
                                    <p>#Engineering Students</p>
                                </div>
                                <div className="internships11">
                                    <p>#MBA Students</p>
                                </div>
                                <div className="internships11">
                                    <p>#MBA Students</p>
                                </div>
                                <div className="internships12">
                                    <h5>+3 more</h5>
                                </div>
                            </div>

                            <div className="internships13">
                                <div className="internships14">
                                    <IoMdEye color="#FFFFFF" size={20} />
                                    <p>289 Impression</p>
                                </div>
                                <div className="internships15">
                                    <IoTime color="#FFFFFF" size={20} />
                                    <p>20 Days Left</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="internships16">
                        <div className="internships17">
                            <div className="internships18">
                                <img src={img} alt="" />
                                <div className="internships19">
                                    <h6>Social Media Executive Internship</h6>
                                    <p><RiBuilding2Fill /> One Impression...</p>
                                    <p> <IoLocation />Gurgaon</p>
                                    <div className="internships20">
                                        <div className="internships21">
                                            <p>#Marketing </p>
                                        </div>
                                        <div className="internships21">
                                            <p>#Engineering  </p>
                                        </div>
                                        <div className="internships21">
                                            <p>#MBA</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="internships22">
                                <hr />
                            </div>

                            <div className="internships23">
                                <div className="internships24">
                                    <div className="internships25">
                                        <IoMdHeartEmpty size={20} color="#121212" />
                                        <p>WatchList</p>
                                    </div>
                                    <div className="internships25">
                                        <FaCalendarDays size={20} color="#121212" />
                                        <p>+ Calendar</p>
                                    </div>
                                </div>

                                <button>Apply Now</button>
                            </div>
                        </div>

                        <div className="internships26">
                            <div className="internships27">
                                <IoTime color="#FFFFFF" size={20} />
                                <p>Application Dead Line 20 Days Left</p>
                            </div>

                            <div className="internships28">
                                <IoMdEye color="#FFFFFF" size={20} />
                                <p>Impression <br /><span>289</span></p>
                            </div>
                        </div>
                        <div className="internships29">
                            <h6>Eligibility</h6>
                            <div className="internships30">
                                <div className="internships31"><p>Engineering Students</p></div>
                                <div className="internships31"><p>MBA Students</p></div>
                                <div className="internships31"><p>Undergraduate</p></div>
                                <div className="internships31"><p>Postgraduate</p></div>
                            </div>
                        </div>

                        <div className="internships32">
                            <div className="internships33">
                                <div className="internships34">
                                    <h5>About the Internship</h5>
                                    <h6>One Impression is hiring for the position of Social Media Executive Intern!</h6>
                                    <h5>Responsibilities of the Intern:</h5>
                                </div>

                                <div className="internships35">
                                    <ul>
                                        <li>Create interesting, brand-focused content while remaining up to date on content trends to establish a new social media presence.</li>
                                        <li>Content creation for both long-form and short-form.</li>
                                        <li>Build and execute a social media strategy through competitive research, benchmarking, messaging, and audience identification.</li>
                                        <li>Generate, edit, publish, and share daily content (Original text, images, videos, or HTML) that builds meaningful connections and encourages community members to take action.</li>
                                        <li>Set up and optimize company pages within each platform to increase the visibility of the company’s social content.</li>
                                        <li>Moderate all user-generated content in line with the moderation policy for each community.</li>
                                        <li>Create editorial calendars and syndication schedules.</li>
                                        <li>Continually improve by capturing and analyzing the appropriate social data/metrics, insights, and best practices, and then acting on the information.</li>
                                        <li>Collaborate with other departments (Customer relations, sales, etc.) to manage reputation, identify key players, and coordinate actions.</li>
                                        <li>Capable of effectively leading, presenting, and selling, as well as establishing rapport with clients and internal constituencies.</li>
                                        <li>Facilitation and participation in brainstorming sessions, development of an overall vision/strategy, and timely delivery of high-quality content.</li>
                                        <li>Implement and manage social media metrics tracking tools to measure the effectiveness of content and campaigns.</li>
                                        <li>Attention to detail and the ability to multitask effectively in a deadline-driven environment are required.</li>
                                        <li>Utilize tools like Canva, Adobe, and others to create visually appealing graphics and multimedia content. Communicate with followers, and respond to queries, comments, and messages promptly.</li>
                                    </ul>
                                </div>
                                <div className="internships34">
                                    <h5>Requirements:</h5>
                                </div>

                                <div className="internships35">
                                    <ul>
                                        <li>Create interesting, brand-focused content while remaining up to date on content trends to establish a new social media presence.</li>
                                        <li>Content creation for both long-form and short-form.</li>
                                        <li>Build and execute a social media strategy through competitive research, benchmarking, messaging, and audience identification.</li>
                                        <li>Generate, edit, publish, and share daily content (Original text, images, videos, or HTML) that builds meaningful connections and encourages community members to take action.</li>
                                        <li>Set up and optimize company pages within each platform to increase the visibility of the company’s social content.</li>
                                        <li>Moderate all user-generated content in line with the moderation policy for each community.</li>
                                        <li>Create editorial calendars and syndication schedules.</li>
                                        <li>Continually improve by capturing and analyzing the appropriate social data/metrics, insights, and best practices, and then acting on the information.</li>
                                        <li>Collaborate with other departments (Customer relations, sales, etc.) to manage reputation, identify key players, and coordinate actions.</li>
                                        <li>Capable of effectively leading, presenting, and selling, as well as establishing rapport with clients and internal constituencies.</li>
                                        <li>Facilitation and participation in brainstorming sessions, development of an overall vision/strategy, and timely delivery of high-quality content.</li>
                                        <li>Implement and manage social media metrics tracking tools to measure the effectiveness of content and campaigns.</li>
                                        <li>Attention to detail and the ability to multitask effectively in a deadline-driven environment are required.</li>
                                        <li>Utilize tools like Canva, Adobe, and others to create visually appealing graphics and multimedia content. Communicate with followers, and respond to queries, comments, and messages promptly.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="internships36">
                            <h6>What are the important dates & deadlines?</h6>
                            <div className="internships27">
                                <IoTime color="#FFFFFF" size={20} />
                                <p>Application Dead Line 20 Days Left</p>
                            </div>
                        </div>
                        <div className="internships37">
                            <h6>Additional Information</h6>
                            <div className="internships38">
                                <div className="internships27">
                                    <IoLocationSharp color="#FFFFFF" size={20} />
                                    <p>Internship Location(s) Gurgaon</p>
                                </div>
                                <div className="internships27">
                                    <FaSackDollar color="#FFFFFF" size={20} />
                                    <p>Stipend Stipend : Not Disclosed</p>
                                </div>
                            </div>
                            <div className="internships27">
                                <IoTime color="#FFFFFF" size={20} />
                                <p>Internship Type/Timings Not Disclosed</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="examm15">
                    Load more
                </div>
                <div className="internships39">
                    <div className="home61">
                        <h1>Subscribe To Our NewsLetter</h1>
                        <div className="home62">
                            <input type="text" name="" id="" placeholder="Name" />
                            <input type="text" name="" id="" placeholder="Mobile" />
                            <input type="email" name="" id="" placeholder="Email" />
                            <input type="text" name="" id="" placeholder="Your Stream" />
                        </div>
                        <div className="home63">
                            <button>Submit</button>
                        </div>
                    </div>
                </div>


            </div>


            <Footer />

            <div className="home555">
                <p>Jamia Miliya Islamia College of Engineering Delhi : Admissions Open for  B.E | MBA | MCA 2023 </p>
                <button onClick={() => setModalShow(true)}>Apply Now!</button>
            </div>

            <ApplyNowModal show={modalShow}
                onHide={() => setModalShow(false)} />
        </>
    );
};

export default Internships;
