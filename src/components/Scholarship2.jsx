import React, { useState } from "react";
import TopPart from "./TopPart";
import Footer from "./Footer";

import img8 from "../Images/c57.png";
import img9 from "../Images/c58.png";
import cap from '../Images/cap.png'


import MobileLoanNavbar from "./MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoLocationSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import CollegeInfotoppart from "./CollegeInfo/CollegeInfotoppart";


const Scholarship2 = () => {
    const [show, setShow] = useState(false);
    const [flag, setFlag] = useState(false)

    const getFlag = () => {
        setFlag(prev => !prev);
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="loan100">
                <i class="fa-solid fa-bars" onClick={handleShow}></i>
            </div>
            <CollegeInfotoppart />
            <TopPart />
            <div className="clg14">
                <div className="clg15">
                    <div className="clg62">
                        <div className="clg64">
                            <h6>B.Tech Scholarship</h6>
                            <ul>
                                <li>
                                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                            </ul>
                        </div>
                        <div className="clg64">
                            <h6>B.Tech Scholarship</h6>
                            <ul>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                            </ul>
                        </div>
                        <div className="clg64">
                            <h6>M.Tech Scholarship</h6>
                            <ul>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                                <li>
                                    Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
                                    et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad
                                    litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus
                                    urna at turpis condimentum lobortis. Ut commodo efficitur neque.
                                </li>
                            </ul>
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
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <MobileLoanNavbar />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Scholarship2;