import React, { useState, useEffect } from "react";
import './ScholarshipTest.css'
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
import test from '../../Images/test.png';
import img from '../../Images/clgschro.png'
import TopNavbar from "../TopNavbar";
import Sidebar3 from "../Sidebar3";
import { IoMdArrowDropright } from "react-icons/io";
import TopPart3 from "../TopPart3";
import { IoShareSocial } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { GoQuestion } from "react-icons/go";
import { IoDocumentText } from "react-icons/io5";
import { MdFileDownload } from "react-icons/md";
import { FaPlay } from "react-icons/fa6";


import img1 from '../../Images/schrotest1.png'
import img2 from '../../Images/schrotest2.png'
import img3 from '../../Images/schrotest3.png'
import img4 from '../../Images/IIT2.png'








const ScholarshipTest = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const questionsAndAnswers = [
        {
            id: 1,
            question: '1. I have lost my internet connection while taking an online test. Can I resume the online test series once the connection is back?',
            answer: 'Ans. Yes, you can continue the test once your internet connection is back, the test will resume from where you had left.',
        },
        {
            id: 2,
            question: '1. I have lost my internet connection while taking an online test. Can I resume the online test series once the connection is back?',
            answer: 'Ans. Yes, you can continue the test once your internet connection is back, the test will resume from where you had left.',
        },
        {
            id: 3,
            question: '1. I have lost my internet connection while taking an online test. Can I resume the online test series once the connection is back?',
            answer: 'Ans. Yes, you can continue the test once your internet connection is back, the test will resume from where you had left.',
        },
        {
            id: 4,
            question: '1. I have lost my internet connection while taking an online test. Can I resume the online test series once the connection is back?',
            answer: 'Ans. Yes, you can continue the test once your internet connection is back, the test will resume from where you had left.',
        },
        {
            id: 5,
            question: '1. I have lost my internet connection while taking an online test. Can I resume the online test series once the connection is back?',
            answer: 'Ans. Yes, you can continue the test once your internet connection is back, the test will resume from where you had left.',
        },


    ];
    const handleQuestionClick = (id) => {
        setSelectedQuestion(id === selectedQuestion ? null : id);
    };
    const getArrowIcon = (id) => {
        return selectedQuestion === id ? '▼' : '►';
    };
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
    const [faltu, setFaltu] = useState(null);

    const handleFaltu = (index) => {
        setFaltu(index);
    };

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
                    <img src={test} style={{ height: '234px' }} />
                </div>
                <div className="schro1">
                    <div className="home100">
                        <i class="fa-solid fa-bars" onClick={handleShow}></i>
                    </div>
                    <div className="schrotest">
                        <h2>Let’s Start your Scholar ships Test Journey.</h2>
                    </div>
                </div>
            </div>
            <TopPart3 />

            <div className="schrotest1">
                <div className="schrotest2">
                    <h3>Online Scholarship Test Series</h3>
                    <p>Looking for a one-stop solution to practice online mock tests for entrance exams? Then you are at the right destination. Collegedunia provides you with a wide range of test series to help you prepare online for any entrance exam with ease. Get online test series for JEE Mains, JEE Advanced, MAT, CAT, NEET and other exams. We provide the latest pattern & syllabus-based Online Mock Tests with elaborate solutions & performance analysis for all Entrance and Board Examinations.</p>
                    <h3>Selet Your Exam Categories</h3>
                    <div className="schrotest3">
                        {["B.Tech/BE Exams", "Medical(UG) Exams", "State(B.Tech/BE)Exams", "GATE", "CAT & MBA"].map((bank, index) => (
                            <div
                                key={index}
                                className={faltu === index ? "schrotest4" : "schrotest5"}
                                onClick={() => handleFaltu(index)}
                            >
                                {bank}
                            </div>
                        ))}
                    </div>

                    <div className="schrotest14">
                        <div className="schrotest15">
                            <img src={img4} alt="" />
                            <h6>JEE Mains</h6>
                        </div>
                        <div className="schrotest15">
                            <img src={img4} alt="" />
                            <h6>JEE Advance</h6>
                        </div>
                    </div>
                </div>

                <div className="schrotest6">
                    <div className="schrotest7">
                        <div className="schrotest8">
                            <h6>JEE Mains 2024  Full Test- 1</h6>
                            <IoShareSocial style={{ width: "18px", height: '19.92px' }} />
                        </div>

                        <div className="schrotest9">
                            <img src={img3} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>180 Min</p>
                            <img src={img2} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>75 Questions</p>
                        </div>

                        <div className="schrotest10">
                            <img src={img1} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>456 Attempted</p>
                        </div>

                        <div className="schrotest11">
                            <button>Start <FaPlay /></button>
                            <button>Download <MdFileDownload /></button>
                        </div>

                    </div>
                    <div className="schrotest7">
                        <div className="schrotest8">
                            <h6>JEE Mains 2024  Full Test- 1</h6>
                            <IoShareSocial style={{ width: "18px", height: '19.92px' }} />
                        </div>

                        <div className="schrotest9">
                            <img src={img3} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>180 Min</p>
                            <img src={img2} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>75 Questions</p>
                        </div>

                        <div className="schrotest10">
                            <img src={img1} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>456 Attempted</p>
                        </div>

                        <div className="schrotest11">
                            <button>Start <FaPlay /></button>
                            <button>Download <MdFileDownload /></button>
                        </div>

                    </div>
                    <div className="schrotest7">
                        <div className="schrotest8">
                            <h6>JEE Mains 2024  Full Test- 1</h6>
                            <IoShareSocial style={{ width: "18px", height: '19.92px' }} />
                        </div>

                        <div className="schrotest9">
                            <img src={img3} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>180 Min</p>
                            <img src={img2} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>75 Questions</p>
                        </div>

                        <div className="schrotest10">
                            <img src={img1} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>456 Attempted</p>
                        </div>

                        <div className="schrotest11">
                            <button>Start <FaPlay /></button>
                            <button>Download <MdFileDownload /></button>
                        </div>

                    </div>

                </div>
                <div className="schrotest6">
                    <div className="schrotest7">
                        <div className="schrotest8">
                            <h6>JEE Mains 2024  Full Test- 1</h6>
                            <IoShareSocial style={{ width: "18px", height: '19.92px' }} />
                        </div>

                        <div className="schrotest9">
                            <img src={img3} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>180 Min</p>
                            <img src={img2} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>75 Questions</p>
                        </div>

                        <div className="schrotest10">
                            <img src={img1} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>456 Attempted</p>
                        </div>

                        <div className="schrotest11">
                            <button>Start <FaPlay /></button>
                            <button>Download <MdFileDownload /></button>
                        </div>

                    </div>
                    <div className="schrotest7">
                        <div className="schrotest8">
                            <h6>JEE Mains 2024  Full Test- 1</h6>
                            <IoShareSocial style={{ width: "18px", height: '19.92px' }} />
                        </div>

                        <div className="schrotest9">
                            <img src={img3} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>180 Min</p>
                            <img src={img2} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>75 Questions</p>
                        </div>

                        <div className="schrotest10">
                            <img src={img1} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>456 Attempted</p>
                        </div>

                        <div className="schrotest11">
                            <button>Start <FaPlay /></button>
                            <button>Download <MdFileDownload /></button>
                        </div>

                    </div>
                    <div className="schrotest7">
                        <div className="schrotest8">
                            <h6>JEE Mains 2024  Full Test- 1</h6>
                            <IoShareSocial style={{ width: "18px", height: '19.92px' }} />
                        </div>

                        <div className="schrotest9">
                            <img src={img3} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>180 Min</p>
                            <img src={img2} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>75 Questions</p>
                        </div>

                        <div className="schrotest10">
                            <img src={img1} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>456 Attempted</p>
                        </div>

                        <div className="schrotest11">
                            <button>Start <FaPlay /></button>
                            <button>Download <MdFileDownload /></button>
                        </div>

                    </div>

                </div>
                <div className="schrotest6">
                    <div className="schrotest7">
                        <div className="schrotest8">
                            <h6>JEE Mains 2024  Full Test- 1</h6>
                            <IoShareSocial style={{ width: "18px", height: '19.92px' }} />
                        </div>

                        <div className="schrotest9">
                            <img src={img3} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>180 Min</p>
                            <img src={img2} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>75 Questions</p>
                        </div>

                        <div className="schrotest10">
                            <img src={img1} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>456 Attempted</p>
                        </div>

                        <div className="schrotest11">
                            <button>Start <FaPlay /></button>
                            <button>Download <MdFileDownload /></button>
                        </div>

                    </div>
                    <div className="schrotest7">
                        <div className="schrotest8">
                            <h6>JEE Mains 2024  Full Test- 1</h6>
                            <IoShareSocial style={{ width: "18px", height: '19.92px' }} />
                        </div>

                        <div className="schrotest9">
                            <img src={img3} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>180 Min</p>
                            <img src={img2} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>75 Questions</p>
                        </div>

                        <div className="schrotest10">
                            <img src={img1} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>456 Attempted</p>
                        </div>

                        <div className="schrotest11">
                            <button>Start <FaPlay /></button>
                            <button>Download <MdFileDownload /></button>
                        </div>

                    </div>
                    <div className="schrotest7">
                        <div className="schrotest8">
                            <h6>JEE Mains 2024  Full Test- 1</h6>
                            <IoShareSocial style={{ width: "18px", height: '19.92px' }} />
                        </div>

                        <div className="schrotest9">
                            <img src={img3} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>180 Min</p>
                            <img src={img2} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>75 Questions</p>
                        </div>

                        <div className="schrotest10">
                            <img src={img1} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>456 Attempted</p>
                        </div>

                        <div className="schrotest11">
                            <button>Start <FaPlay /></button>
                            <button>Download <MdFileDownload /></button>
                        </div>

                    </div>

                </div>
                <div className="schrotest6">
                    <div className="schrotest7">
                        <div className="schrotest8">
                            <h6>JEE Mains 2024  Full Test- 1</h6>
                            <IoShareSocial style={{ width: "18px", height: '19.92px' }} />
                        </div>

                        <div className="schrotest9">
                            <img src={img3} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>180 Min</p>
                            <img src={img2} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>75 Questions</p>
                        </div>

                        <div className="schrotest10">
                            <img src={img1} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>456 Attempted</p>
                        </div>

                        <div className="schrotest11">
                            <button>Start <FaPlay /></button>
                            <button>Download <MdFileDownload /></button>
                        </div>

                    </div>
                    <div className="schrotest7">
                        <div className="schrotest8">
                            <h6>JEE Mains 2024  Full Test- 1</h6>
                            <IoShareSocial style={{ width: "18px", height: '19.92px' }} />
                        </div>

                        <div className="schrotest9">
                            <img src={img3} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>180 Min</p>
                            <img src={img2} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>75 Questions</p>
                        </div>

                        <div className="schrotest10">
                            <img src={img1} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>456 Attempted</p>
                        </div>

                        <div className="schrotest11">
                            <button>Start <FaPlay /></button>
                            <button>Download <MdFileDownload /></button>
                        </div>

                    </div>
                    <div className="schrotest7">
                        <div className="schrotest8">
                            <h6>JEE Mains 2024  Full Test- 1</h6>
                            <IoShareSocial style={{ width: "18px", height: '19.92px' }} />
                        </div>

                        <div className="schrotest9">
                            <img src={img3} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>180 Min</p>
                            <img src={img2} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>75 Questions</p>
                        </div>

                        <div className="schrotest10">
                            <img src={img1} alt="" style={{ width: '24px', height: '24px' }} />
                            <p>456 Attempted</p>
                        </div>

                        <div className="schrotest11">
                            <button>Start <FaPlay /></button>
                            <button>Download <MdFileDownload /></button>
                        </div>

                    </div>

                </div>

                <div className="schrotest12">
                    Load More...
                </div>

                <div className='helpdesk-container'>
                    <span className='helpdeskheading'>FAQ’s</span>
                    <div className='helpdeskquestion'>
                        {questionsAndAnswers.map((qa) => (
                            <div key={qa.id} className="faq-item">
                                <div
                                    className={`question ${selectedQuestion === qa.id ? 'open' : ''}`}
                                    onClick={() => handleQuestionClick(qa.id)}
                                >
                                    <span>{qa.question}</span>
                                    <div className="arrow-button">{getArrowIcon(qa.id)}</div>
                                </div>
                                {selectedQuestion === qa.id && <div className="answer">{qa.answer}</div>}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="schrotest13">
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ScholarshipTest;
