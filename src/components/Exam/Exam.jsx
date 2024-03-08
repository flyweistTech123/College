import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Exam.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
import exam from '../../Images/exam.png';
import TopNavbar from "../TopNavbar";
import img22 from '../../Images/IIT2.png'
import { FaClock } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import ApplyNowModal from "../Modals/Login/Apply";






const Exam = () => {
    const navigate = useNavigate();



    const [showNavbar, setShowNavbar] = useState(false);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow2(false);
    const handleShow = () => setShow2(true);
    const [show3, setShow3] = useState(false);
    const [faltu, setFaltu] = useState(null);
    const [modalShow, setModalShow] = useState(false);


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
                    <img src={exam} />
                </div>
                <div className="schro1">
                    <div className="home100">
                        <i class="fa-solid fa-bars" onClick={handleShow}></i>
                    </div>
                    <div className="schro2">
                        <h2>Entrance Exams In India</h2>
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
                            Search Entrance & Exams
                        </button>
                    </div>
                </div>
            </div>

            <div className="examm1">
                <h4>Exam Categories</h4>
                <div className="examm2">
                    {["Engineering", "Management", "Science", "Law", "Medical", "Pharmacy"].map((bank, index) => (
                        <div
                            key={index}
                            className={faltu === index ? "examm3" : "examm4"}
                            onClick={() => handleFaltu(index)}
                        >
                            {bank}
                        </div>
                    ))}
                </div>
                <div className="examm2">
                    {["Computer Application", "Arts", "Commerce", "Design", "Agricuture", "Dental"].map((bank, index) => (
                        <div
                            key={index}
                            className={faltu === index ? "examm3" : "examm4"}
                            onClick={() => handleFaltu(index)}
                        >
                            {bank}
                        </div>
                    ))}
                </div>
                <div className="examm2">
                    {["Class 12 Exams", "Design", "Dental", "Hostel Management", "Architecture", "Agricuture"].map((bank, index) => (
                        <div
                            key={index}
                            className={faltu === index ? "examm3" : "examm4"}
                            onClick={() => handleFaltu(index)}
                        >
                            {bank}
                        </div>
                    ))}
                </div>
            </div>


            <div className="examm5">
                <div className="examm6">
                    <div className="examm7">
                        <img src={img22} alt="" />
                        <div className="examm8">
                            <h6>JEE Advanced 2024</h6>
                            <p>Joint Entrance Exams....</p>
                            <div className="examm9">
                                Online Exam
                            </div>
                        </div>
                    </div>

                    <div className="examm10">
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Dec 05 , 2023</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>ApplicationForm</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>30Apr24-07 May 24</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Jun 18 , 2024</p>
                            </div>
                        </div>

                        <div className="examm13">
                            <p>Application Process</p>
                            <IoIosArrowForward />
                            <p>Previous Year</p>
                            <IoIosArrowForward />
                            <p>Exam pattern</p>
                            <IoIosArrowForward />
                        </div>
                        <div className="examm14">
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
                <div className="examm6">
                    <div className="examm7">
                        <img src={img22} alt="" />
                        <div className="examm8">
                            <h6>JEE Advanced 2024</h6>
                            <p>Joint Entrance Exams....</p>
                            <div className="examm9">
                                Online Exam
                            </div>
                        </div>
                    </div>

                    <div className="examm10">
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Dec 05 , 2023</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>ApplicationForm</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>30Apr24-07 May 24</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Jun 18 , 2024</p>
                            </div>
                        </div>

                        <div className="examm13">
                            <p>Application Process</p>
                            <IoIosArrowForward />
                            <p>Previous Year</p>
                            <IoIosArrowForward />
                            <p>Exam pattern</p>
                            <IoIosArrowForward />
                        </div>
                        <div className="examm14">
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
                <div className="examm6">
                    <div className="examm7">
                        <img src={img22} alt="" />
                        <div className="examm8">
                            <h6>JEE Advanced 2024</h6>
                            <p>Joint Entrance Exams....</p>
                            <div className="examm9">
                                Online Exam
                            </div>
                        </div>
                    </div>

                    <div className="examm10">
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Dec 05 , 2023</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>ApplicationForm</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>30Apr24-07 May 24</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Jun 18 , 2024</p>
                            </div>
                        </div>

                        <div className="examm13">
                            <p>Application Process</p>
                            <IoIosArrowForward />
                            <p>Previous Year</p>
                            <IoIosArrowForward />
                            <p>Exam pattern</p>
                            <IoIosArrowForward />
                        </div>
                        <div className="examm14">
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="examm5">
                <div className="examm6">
                    <div className="examm7">
                        <img src={img22} alt="" />
                        <div className="examm8">
                            <h6>JEE Advanced 2024</h6>
                            <p>Joint Entrance Exams....</p>
                            <div className="examm9">
                                Online Exam
                            </div>
                        </div>
                    </div>

                    <div className="examm10">
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Dec 05 , 2023</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>ApplicationForm</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>30Apr24-07 May 24</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Jun 18 , 2024</p>
                            </div>
                        </div>

                        <div className="examm13">
                            <p>Application Process</p>
                            <IoIosArrowForward />
                            <p>Previous Year</p>
                            <IoIosArrowForward />
                            <p>Exam pattern</p>
                            <IoIosArrowForward />
                        </div>
                        <div className="examm14">
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
                <div className="examm6">
                    <div className="examm7">
                        <img src={img22} alt="" />
                        <div className="examm8">
                            <h6>JEE Advanced 2024</h6>
                            <p>Joint Entrance Exams....</p>
                            <div className="examm9">
                                Online Exam
                            </div>
                        </div>
                    </div>

                    <div className="examm10">
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Dec 05 , 2023</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>ApplicationForm</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>30Apr24-07 May 24</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Jun 18 , 2024</p>
                            </div>
                        </div>

                        <div className="examm13">
                            <p>Application Process</p>
                            <IoIosArrowForward />
                            <p>Previous Year</p>
                            <IoIosArrowForward />
                            <p>Exam pattern</p>
                            <IoIosArrowForward />
                        </div>
                        <div className="examm14">
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
                <div className="examm6">
                    <div className="examm7">
                        <img src={img22} alt="" />
                        <div className="examm8">
                            <h6>JEE Advanced 2024</h6>
                            <p>Joint Entrance Exams....</p>
                            <div className="examm9">
                                Online Exam
                            </div>
                        </div>
                    </div>

                    <div className="examm10">
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Dec 05 , 2023</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>ApplicationForm</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>30Apr24-07 May 24</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Jun 18 , 2024</p>
                            </div>
                        </div>

                        <div className="examm13">
                            <p>Application Process</p>
                            <IoIosArrowForward />
                            <p>Previous Year</p>
                            <IoIosArrowForward />
                            <p>Exam pattern</p>
                            <IoIosArrowForward />
                        </div>
                        <div className="examm14">
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="examm5">
                <div className="examm6">
                    <div className="examm7">
                        <img src={img22} alt="" />
                        <div className="examm8">
                            <h6>JEE Advanced 2024</h6>
                            <p>Joint Entrance Exams....</p>
                            <div className="examm9">
                                Online Exam
                            </div>
                        </div>
                    </div>

                    <div className="examm10">
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Dec 05 , 2023</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>ApplicationForm</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>30Apr24-07 May 24</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Jun 18 , 2024</p>
                            </div>
                        </div>

                        <div className="examm13">
                            <p>Application Process</p>
                            <IoIosArrowForward />
                            <p>Previous Year</p>
                            <IoIosArrowForward />
                            <p>Exam pattern</p>
                            <IoIosArrowForward />
                        </div>
                        <div className="examm14">
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
                <div className="examm6">
                    <div className="examm7">
                        <img src={img22} alt="" />
                        <div className="examm8">
                            <h6>JEE Advanced 2024</h6>
                            <p>Joint Entrance Exams....</p>
                            <div className="examm9">
                                Online Exam
                            </div>
                        </div>
                    </div>

                    <div className="examm10">
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Dec 05 , 2023</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>ApplicationForm</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>30Apr24-07 May 24</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Jun 18 , 2024</p>
                            </div>
                        </div>

                        <div className="examm13">
                            <p>Application Process</p>
                            <IoIosArrowForward />
                            <p>Previous Year</p>
                            <IoIosArrowForward />
                            <p>Exam pattern</p>
                            <IoIosArrowForward />
                        </div>
                        <div className="examm14">
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
                <div className="examm6">
                    <div className="examm7">
                        <img src={img22} alt="" />
                        <div className="examm8">
                            <h6>JEE Advanced 2024</h6>
                            <p>Joint Entrance Exams....</p>
                            <div className="examm9">
                                Online Exam
                            </div>
                        </div>
                    </div>

                    <div className="examm10">
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Dec 05 , 2023</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>ApplicationForm</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>30Apr24-07 May 24</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Jun 18 , 2024</p>
                            </div>
                        </div>

                        <div className="examm13">
                            <p>Application Process</p>
                            <IoIosArrowForward />
                            <p>Previous Year</p>
                            <IoIosArrowForward />
                            <p>Exam pattern</p>
                            <IoIosArrowForward />
                        </div>
                        <div className="examm14">
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="examm5">
                <div className="examm6">
                    <div className="examm7">
                        <img src={img22} alt="" />
                        <div className="examm8">
                            <h6>JEE Advanced 2024</h6>
                            <p>Joint Entrance Exams....</p>
                            <div className="examm9">
                                Online Exam
                            </div>
                        </div>
                    </div>

                    <div className="examm10">
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Dec 05 , 2023</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>ApplicationForm</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>30Apr24-07 May 24</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Jun 18 , 2024</p>
                            </div>
                        </div>

                        <div className="examm13">
                            <p>Application Process</p>
                            <IoIosArrowForward />
                            <p>Previous Year</p>
                            <IoIosArrowForward />
                            <p>Exam pattern</p>
                            <IoIosArrowForward />
                        </div>
                        <div className="examm14">
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
                <div className="examm6">
                    <div className="examm7">
                        <img src={img22} alt="" />
                        <div className="examm8">
                            <h6>JEE Advanced 2024</h6>
                            <p>Joint Entrance Exams....</p>
                            <div className="examm9">
                                Online Exam
                            </div>
                        </div>
                    </div>

                    <div className="examm10">
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Dec 05 , 2023</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>ApplicationForm</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>30Apr24-07 May 24</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Jun 18 , 2024</p>
                            </div>
                        </div>

                        <div className="examm13">
                            <p>Application Process</p>
                            <IoIosArrowForward />
                            <p>Previous Year</p>
                            <IoIosArrowForward />
                            <p>Exam pattern</p>
                            <IoIosArrowForward />
                        </div>
                        <div className="examm14">
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
                <div className="examm6">
                    <div className="examm7">
                        <img src={img22} alt="" />
                        <div className="examm8">
                            <h6>JEE Advanced 2024</h6>
                            <p>Joint Entrance Exams....</p>
                            <div className="examm9">
                                Online Exam
                            </div>
                        </div>
                    </div>

                    <div className="examm10">
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Dec 05 , 2023</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>ApplicationForm</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>30Apr24-07 May 24</p>
                            </div>
                        </div>
                        <div className="examm11">
                            <p>Exam Date</p>
                            <div className="examm12">
                                <FaClock style={{ color: '#000000' }} />
                                <p>Jun 18 , 2024</p>
                            </div>
                        </div>

                        <div className="examm13">
                            <p>Application Process</p>
                            <IoIosArrowForward />
                            <p>Previous Year</p>
                            <IoIosArrowForward />
                            <p>Exam pattern</p>
                            <IoIosArrowForward />
                        </div>
                        <div className="examm14">
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="examm15">
                Load more
            </div>

            <div className="course17">
                <div className="home60">

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

export default Exam;
