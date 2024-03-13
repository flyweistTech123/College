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





import img from '../../Images/internshio.png'




const Internships = () => {
    const navigate = useNavigate();

    const [showNavbar, setShowNavbar] = useState(false);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow2(false);
    const handleShow = () => setShow2(true);
    const [show3, setShow3] = useState(false);


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
                                        <IoMdHeartEmpty  size={20} color="#121212"/>
                                        <p>WatchList</p>
                                    </div>
                                    <div className="internships25">
                                        <FaCalendarDays   size={20} color="#121212"/>
                                        <p>+ Calendar</p>
                                    </div>
                                </div>

                                <button>Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Internships;
