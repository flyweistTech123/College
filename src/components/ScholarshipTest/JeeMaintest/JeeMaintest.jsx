import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiDeleteBin6Fill } from "react-icons/ri";
import MobileLoanNavbar from "../../MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import './JeeMaintest.css'
import TopNavbar from "../../TopNavbar";
import Footer from "../../Footer";
import cross from '../../../Images/cross.png';
import tick from '../../../Images/tick.png';
import otpimg from '../../../Images/otpimg.png';
import profile from '../../../Images/profile.png'
import { FaRegClock } from "react-icons/fa";
import { IoFlagOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { CgPlayPauseR } from "react-icons/cg";
import Modal from "react-bootstrap/Modal";
// Import FontAwesome and the specific icon
import { faPhotoFklm } from '@fortawesome/free-solid-svg-icons';




import logo from '../../../Images/logo.png'





const JEEMaintest = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const [step, setStep] = useState(0);
    const incCnt = () => {
        setStep((prev) => prev + 1);
    };
    const decCnt = () => {
        setStep((prev) => prev - 1);
    };
    const [faltu, setFaltu] = useState(null);

    const handleFaltu = (index) => {
        setFaltu(index);
    };


    const [otpshow, setotpshow] = useState(false);
    const [otp, setOtp] = useState(['', '', '', '', '', '']);

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;

        // Move focus to the next input box if a digit is entered
        if (value && index < otp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }

        setOtp(newOtp);
    };


    function Otp1(props) {
        console.log("Hello");
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <>
                        <div className="jeeotp">
                            <img src={otpimg} alt="" />
                            <div className="jeeotp1">
                                <h6>OTP has sent to the +91 1234567890</h6>
                                <div className="otp-inputs">
                                    {otp.map((digit, index) => (
                                        <input
                                            type="text"
                                            id={`otp-input-${index}`}
                                            key={index}
                                            value={digit}
                                            onChange={(e) => handleOtpChange(index, e.target.value)}
                                            maxLength="1"
                                        />
                                    ))}
                                </div>
                                <div className="login9">
                                    <button className={step === 2 ? "pay211" : "pay311"}
                                        onClick={() => setStep(2)}>Submit</button>
                                </div>

                            </div>

                        </div>

                    </>
                </Modal.Body>
            </Modal>
        );
    }
 
    return (
        <>
            <div className="loan100">
                <i class="fa-solid fa-bars" onClick={handleShow}></i>
            </div>
            {step === 0 ? (
                <>
                    <div className="app1">
                        <div className="schro">
                            <TopNavbar />
                        </div>
                    </div>
                    <div className="jeemain1">
                        <h1>JEE Main 2024 Full Test- 1</h1>
                        <div className="jeemain2">
                            <h2>General Instructions</h2>
                            <div className="jeemain3">
                                <h4>1: The clock will be set at the server. The countdown timer at the top right corner of screen will display the remaining time available for you to complete the examination. When the timer reaches zero, the examination will end by itself. You need not terminate the examination or submit your paper.</h4>
                            </div>
                            <div className="jeemain3">
                                <h4>2: The Question Palette displayed on the right side of screen will show the status of each question using one of the following symbols:</h4>
                                <p>You have not visited the question yet.</p>
                                <p>You have not answered the question.</p>
                                <p>You have answered the question.</p>
                                <p>You have NOT answered the question, but have marked the question for review.</p>
                                <p>You have answered the question also marked it for review.</p>
                            </div>
                            <div className="jeemain3">
                                <h4>3: To answer a question, do the following:</h4>
                                <p>A: Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly. Note that using this option does NOT save your answer to the current question.</p>
                                <p>B: Click on Next to save your answer for the current question and then go to the next question.</p>
                                <p>Note that your answer for the current question will not be saved if you navigate to another question directly by clicking on a question number without saving the answer to the previous question.</p>
                                <p>You can view all the questions by clicking on the Question Paper button.</p>
                                <p>You have answered the question also marked it for review.</p>
                            </div>
                            <h2>Answering a Question :</h2>
                            <div className="jeemain3">
                                <h4>4: Procedure for answering a multiple choice (MCQ) type question:</h4>
                                <p>A: Choose one answer from the options given below the question, click on the option to select that option.</p>
                                <p>B: To deselect your chosen answer, click on the bubble of the chosen option again.</p>
                                <p>C: To change your chosen answer, click on the bubble of another option.</p>
                                <p>D: To save your answer, you MUST click on the Next.</p>
                            </div>

                            <div className="jeemain3">
                                <h4>5: Procedure for answering a numerical answer type question :</h4>
                                <p>A: To enter a number as your answer, use the numerical keypad.</p>
                                <p>B: A fraction (e.g. -0.3 or -.3) can be entered as an answer with or without “0” before the decimal point. As many as four decimal points, e.g. 12.5435 or 0.003 or -932.6711 or 12.82 can be entered.</p>
                                <p>C: To save your answer, you MUST click on the Next.</p>
                            </div>

                            <div className="jeemain3">
                                <h4>6: To mark a question for review, click on the Star button in top right corner of the screen. If an answer is selected (for MCQ/MCAQ) or entered (for numerical answer type) for a question that is Marked for Review , that answer will be considered in the evaluation unless the status is modified by the candidate.</h4>
                            </div>

                            <div className="jeemain3">
                                <h4>7: To change your answer to a question that has already been answered, first select that question for answering and then follow the procedure for answering that type of question.</h4>
                            </div>

                            <div className="jeemain3">
                                <h4>8: Note that ONLY Questions for which answers are saved or marked for review after answering will be considered for evaluation..</h4>
                            </div>

                            <div className="jeemain3">
                                <h4>9: Sections in this question paper are displayed on the top bar of the screen. Questions in a Section can be viewed by clicking on the button in lower right corner. The Section you are currently viewing</h4>
                            </div>

                            <div className="jeemain3">
                                <h4>10: After clicking the Next button for the last question in a Section, you will automatically be taken to the first question of the next section in sequence.</h4>
                            </div>
                        </div>


                    </div>


                    <div className="loan21">
                    </div>
                    <Footer />
                    <div className="jeemain5">
                        <div className="jeemain4">
                            <button>Back to Test Series</button>
                            <button className={step === 1 ? "pay211" : "pay311"}
                                onClick={() => setStep(1)}>Next</button>
                        </div>
                        <div className="home555">
                            <p>Jamia Miliya Islamia College of Engineering Delhi : Admissions Open for  B.E | MBA | MCA 2023 </p>
                            <button>Apply Now!</button>
                        </div>
                    </div>

                </>
            ) : step === 1 ? (
                <>
                    <div className="app1">
                        <div className="schro">
                            <TopNavbar />
                        </div>
                    </div>

                    <div className="jeemain1">
                        <h1>JEE Main 2024 Full Test- 1</h1>



                        <div className="jeemain2">
                            <h2>General Instructions</h2>


                            <div className="jeemain3">
                                <h4>Instructions</h4>
                                <p>1.Test will auto submit when the Time is up.</p>
                                <p>2.The Test comprises of multiple choice questions (MCQ) with one or more correct answers.</p>
                                <p>3.The clock in the top right corner will display the remaining time available for you to complete the examination.</p>
                            </div>

                            <div className="jeemain3">
                                <h4>Navigating & Answering a Question</h4>
                                <p>1.The answer will be saved automatically upon clicking on an option amongst the given choices of answer.</p>
                                <p>2.To deselect your chosen answer, click on the clear response button.</p>
                                <p>3.The marking scheme will be displayed for each question on the top right corner of the test window.</p>
                            </div>
                        </div>


                    </div>


                    <div className="loan21">
                    </div>
                    <Footer />
                    <div className="jeemain5">
                        <div className="jeemain6">
                            <input type="radio" name="" id="" />
                            <label htmlFor="">I have read all the instructions carefully and have understood them. I agree not to chat or use unfair means in examinations. I understood that using unfair means of any sort for my own or someone else’s advantage will lead to my immediate disqualification. The decision of Collegedunia.com will be final in these matters & cannot be appealed.</label>
                        </div>
                        <div className="jeemain4">
                            <button onClick={decCnt}>Back</button>
                            <button onClick={() => setotpshow(true)}>Im ready to begin</button>
                        </div>
                    </div>

                    <Otp1 show={otpshow} onHide={() => setotpshow(false)} />
                </>
            ) : step === 2 ? (
                <>

                    <div className="jeemain7">
                        <div className="jeemain71">
                            <img src={logo} alt="" />
                            <h2>JEE Main 2024 Full Test- 1</h2>
                        </div>

                        <div className="jeemain72">
                            <CgPlayPauseR className="jeemain73" />
                            <div className="jeemain74">
                                <h3>Time 02:46:09</h3>
                                <p>JEE Main 2024 Full Exam</p>
                            </div>
                        </div>
                    </div>

                    <div className="jeemain8">
                        <div className="jeemain9">

                            <div className="jeemain14">
                                <h3>Sections</h3>
                                <div className="jeemain11">
                                    {["Mathematics", "Physics", "Chemistry"].map((bank, index) => (
                                        <div
                                            key={index}
                                            className={faltu === index ? "jeemain12" : "jeemain13"}
                                            onClick={() => handleFaltu(index)}
                                        >
                                            {bank}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="jeemain15">
                                <div className="jeemain16">
                                    <h4>Question 1</h4>
                                    <div className="jeemain17">
                                        <img src={tick} alt="" />
                                        <p>+4</p>
                                    </div>
                                    <div className="jeemain17">
                                        <img src={cross} alt="" />
                                        <p>-1</p>
                                    </div>
                                </div>

                                <div className="jeemain18">
                                    <div className="jeemain19">
                                        <FaRegClock />
                                        <p>Time 0:22</p>
                                    </div>
                                    <FaRegStar />
                                    <IoFlagOutline />
                                </div>
                            </div>

                            <div className="jeemain20">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim</p>
                            </div>

                            <div className="jeemain21">
                                <div className="jeemain22">
                                    <h2>(A)   1/2</h2>
                                    <div className="jeemain23"></div>
                                </div>
                                <div className="jeemain22">
                                    <h2>(A)   1/2</h2>
                                    <div className="jeemain23"></div>
                                </div>
                                <div className="jeemain22">
                                    <h2>(A)   1/2</h2>
                                    <div className="jeemain23"></div>
                                </div>
                                <div className="jeemain22">
                                    <h2>(A)   1/2</h2>
                                    <div className="jeemain23"></div>
                                </div>
                            </div>

                            <div className="jeemain25">
                                <div className="jeemain26">
                                    <button>Clear Response</button>
                                    <button>Mark For Review& Next</button>
                                    <button onClick={decCnt}>Previous</button>
                                    <button>Next</button>
                                </div>
                            </div>


                        </div>

                        <div className="jeemain10">

                            <div className="jeemain30">
                                <div className="jeemain31">
                                    <img src={profile} alt="" />
                                </div>
                                <h6>Sajiid</h6>
                            </div>

                            <div className="jeemain33">
                                <h1>Question Palette</h1>
                            </div>
                            <div className="jeemain34">
                                <button><BsFillGridFill /> Grid View</button>
                                <button><FaListUl /> List View</button>
                            </div>

                            <div className="jeemain35">
                                <div className="jeemain36">
                                    <div className="jeemain37"></div>
                                    <p>Attempted</p>
                                </div>
                                <div className="jeemain36">
                                    <div className="jeemain38"></div>
                                    <p>UnAttempted</p>
                                </div>
                            </div>
                            <div className="jeemain35">
                                <div className="jeemain36">
                                    <div className="jeemain39"></div>
                                    <p>Unseen</p>
                                </div>
                                <div className="jeemain36">
                                    <div className="jeemain40"></div>
                                    <p>Marked</p>
                                </div>

                            </div>

                            <div className="jeemain60">
                                <p>Mathematics</p>
                            </div>

                            <div className="jeemain48">
                                <div className="jeemain36">
                                    <div className="jeemain49"></div>
                                    <p>0</p>
                                </div>
                                <div className="jeemain36">
                                    <div className="jeemain50"></div>
                                    <p>24</p>
                                </div>
                                <div className="jeemain36">
                                    <div className="jeemain51"></div>
                                    <p>0</p>
                                </div>
                                <div className="jeemain36">
                                    <div className="jeemain52"></div>
                                    <p>1</p>
                                </div>
                            </div>


                            <div className="jeemain41">
                                <div className="jeemain42">
                                    <div className="jeemain43">
                                        <h6>01</h6>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est</p>
                                </div>
                                <div className="jeemain42">
                                    <div className="jeemain45">
                                        <h6>02</h6>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est</p>
                                </div>
                                <div className="jeemain42">
                                    <div className="jeemain45">
                                        <h6>03</h6>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                                </div>
                            </div>

                            <div className="jeemain46">
                                <button>Instructions</button>
                                <button>Questions</button>
                            </div>

                            <div className="jeemain47">
                                <button>Submit Test</button>
                            </div>


                        </div>



                    </div>
                </>
            ) : (
                ""
            )}







            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <MobileLoanNavbar />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default JEEMaintest;