import React, { useState } from 'react'
import TopNavbar from "../TopNavbar";
import Footer from "../Footer";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoLocationSharp } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import img26 from "../../Images/Rectangle 71.png";
import img27 from '../../Images/Rectangle 4.png'
import img28 from '../../Images/clginfo.png'
import { useNavigate, useLocation } from "react-router-dom";
import img1 from '../../Images/communityimg1.png'
import img2 from '../../Images/c107.png'
import img3 from '../../Images/rankingclg1.png'
import img4 from '../../Images/amcat.png'
import img5 from '../../Images/jeemains.png'
import img6 from '../../Images/communityimg2.png'
import img7 from '../../Images/communityimg3.png'
import { MdChat } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoDocuments } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";






import MobileLoanNavbar from "../MobileLoanNavabr";

import './Community.css'





const Community = () => {
    const navigate = useNavigate()
    const [step, setStep] = useState(0);
    const incCnt = () => {
        setStep((prev) => prev + 1);
    };
    const decCnt = () => {
        setStep((prev) => prev - 1);
    };



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
            <div>
                <div className="community1">
                    <div className="community2">
                        <img src={img26} />
                        <img src={img27} alt="" />
                    </div>
                    <div className="community3">
                        <TopNavbar color="#1A3B5A" />

                        <div className="community4">
                            <img src={img28} alt="" />
                            <h2>Jamia Millia Islamia -[JMI]: Admission 2023 (open) New Delhi - Community</h2>
                            <div className='community9'>
                                <p>Start Conversation On OfficialAdmission Community</p>
                                {step == 1 ? (
                                    <button onClick={() => decCnt()} ><FaUserGroup />Total Group</button>

                                ) : (
                                    <button onClick={() => setStep(1)}><FaUserGroup />View Group</button>
                                )}
                                <div className='community10'>
                                    <div className='community11'>SL</div>
                                    <div className='community12'>RE</div>
                                    <div className='community13'>DK</div>
                                    <div className='community14'>+12 more</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="community5">
                    <div className="community6">
                        <span> <IoLocationSharp />Old Delhi</span>
                        <span><FaShield /> Pvt.Ltd</span>
                        <span><FaStar /> 4.2/5.0 ( 295 reviews)</span>
                        <span><FaClock /> Est.1978</span>
                        <span><MdMessage /> 259 comments</span>
                    </div>

                    <div className="community7">
                        <p>The National Institutional Ranking Framework (NIRF) has been accepted by the MoE and launched by Hono</p>
                        <div className="community8">
                            <button>Apply Now</button>
                            <button>Brochure <MdDownload /></button>
                        </div>
                    </div>
                </div>
            </div>


            {step == 0 ? (
                <>
                    <div className='community15'>
                        <p>Community</p>
                        <img src={img1} alt="" />

                        <div className='community16'>
                            <div className='community17'>
                                <div className='community19'>
                                    <img src={img2} alt="" />
                                    <div className='community20'>
                                        <h6>Hello , Neha Sharma</h6>
                                        <p>Welcome to commmunity</p>
                                    </div>

                                </div>
                                <div >
                                    <hr />
                                </div>

                                <div className='community21'>
                                    <div className='community22'>
                                        <MdChat className='community23' />
                                        <h4>College Chat Groups</h4>
                                    </div>
                                    <div className='community24'>
                                        <div className='community25'>
                                            <div className='community29'>
                                                <div className='community26'>
                                                    <img src={img3} alt="" />
                                                    <h6>Jamia Islamiyah..................</h6>
                                                </div>
                                                <div className='community30'>
                                                    <div className='community11'>SL</div>
                                                    <div className='community12'>RE</div>
                                                    <div className='community13'>DK</div>
                                                    <div className='community27'><span>+12 more</span></div>
                                                </div>
                                                <div className='community28'>
                                                    <button onClick={() => setStep(1)}>Joined</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='community22'>
                                        <MdChat className='community23' />
                                        <h4>Exam Chat Groups</h4>
                                    </div>
                                    <div className='community24'>
                                        <div className='community25'>
                                            <div className='community29'>
                                                <div className='community26'>
                                                    <img src={img4} alt="" />
                                                    <h6>Amcat Exam..................</h6>
                                                </div>
                                                <div className='community30'>
                                                    <div className='community11'>SL</div>
                                                    <div className='community12'>RE</div>
                                                    <div className='community13'>DK</div>
                                                    <div className='community27'><span>+12 more</span></div>
                                                </div>
                                                <div className='community31'>
                                                    <button onClick={() => setStep(1)}>Join</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='community25'>
                                            <div className='community29'>
                                                <div className='community26'>
                                                    <img src={img5} alt="" />
                                                    <h6>JEE Mains Exam.......</h6>
                                                </div>
                                                <div className='community30'>
                                                    <div className='community11'>SL</div>
                                                    <div className='community12'>RE</div>
                                                    <div className='community13'>DK</div>
                                                    <div className='community27'><span>+12 more</span></div>
                                                </div>
                                                <div className='community31'>
                                                    <button onClick={() => setStep(1)}>Join</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='community24'>
                                        <div className='community25'>
                                            <div className='community29'>
                                                <div className='community26'>
                                                    <img src={img4} alt="" />
                                                    <h6>Amcat Exam..................</h6>
                                                </div>
                                                <div className='community30'>
                                                    <div className='community11'>SL</div>
                                                    <div className='community12'>RE</div>
                                                    <div className='community13'>DK</div>
                                                    <div className='community27'><span>+12 more</span></div>
                                                </div>
                                                <div className='community31'>
                                                    <button onClick={() => setStep(1)}>Join</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='community25'>
                                            <div className='community29'>
                                                <div className='community26'>
                                                    <img src={img5} alt="" />
                                                    <h6>JEE Mains Exam.......</h6>
                                                </div>
                                                <div className='community30'>
                                                    <div className='community11'>SL</div>
                                                    <div className='community12'>RE</div>
                                                    <div className='community13'>DK</div>
                                                    <div className='community27'><span>+12 more</span></div>
                                                </div>
                                                <div className='community31'>
                                                    <button onClick={() => setStep(1)}>Join</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='community18'>
                                <h6>Suggested Communities</h6>
                                <div>
                                    <hr />
                                </div>

                                <div className='community32'>
                                    <div className='community33'>
                                        <img src={img3} alt="" />
                                        <h6>Jamia Islamiyah..................</h6>
                                    </div>
                                    <div className='community34'>
                                        <div className='community11'>SL</div>
                                        <div className='community12'>RE</div>
                                        <div className='community13'>DK</div>
                                        <div className='community27'><span>+12 more</span></div>
                                    </div>
                                    <div className='community35'>
                                        <button onClick={() => setStep(1)}>Message</button>
                                    </div>
                                </div>
                                <div>
                                    <hr />
                                </div>
                                <div className='community32'>
                                    <div className='community33'>
                                        <img src={img3} alt="" />
                                        <h6>Jamia Islamiyah..................</h6>
                                    </div>
                                    <div className='community34'>
                                        <div className='community11'>SL</div>
                                        <div className='community12'>RE</div>
                                        <div className='community13'>DK</div>
                                        <div className='community27'><span>+12 more</span></div>
                                    </div>
                                    <div className='community35'>
                                        <button onClick={() => setStep(1)}>Join</button>
                                    </div>
                                </div>
                                <div>
                                    <hr />
                                </div>
                                <div className='community32'>
                                    <div className='community33'>
                                        <img src={img3} alt="" />
                                        <h6>Jamia Islamiyah..................</h6>
                                    </div>
                                    <div className='community34'>
                                        <div className='community11'>SL</div>
                                        <div className='community12'>RE</div>
                                        <div className='community13'>DK</div>
                                        <div className='community27'><span>+12 more</span></div>
                                    </div>
                                    <div className='community35'>
                                        <button onClick={() => setStep(1)}>Join</button>
                                    </div>
                                </div>
                                <div>
                                    <hr />
                                </div>
                                <div className='community32'>
                                    <div className='community33'>
                                        <img src={img3} alt="" />
                                        <h6>Jamia Islamiyah..................</h6>
                                    </div>
                                    <div className='community34'>
                                        <div className='community11'>SL</div>
                                        <div className='community12'>RE</div>
                                        <div className='community13'>DK</div>
                                        <div className='community27'><span>+12 more</span></div>
                                    </div>
                                    <div className='community35'>
                                        <button onClick={() => setStep(1)}>Join</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='community16'>
                            <div className='community36'>
                                <div className='community37'>
                                    <h5>Popular Comparisions</h5>

                                    <div className='community38'>
                                        <div className='community39'>
                                            <div className='community40'>
                                                <img src={img6} alt="" />
                                                <img src={img7} alt="" />
                                            </div>

                                            <div className='community41'>
                                                <div className='community42'>
                                                    <h5>jamia Islamiya</h5>
                                                    <h6>Post Graduation , Diploma</h6>
                                                </div>
                                                <div className='community43'>
                                                    <p>vs</p>
                                                </div>
                                                <div className='community42'>
                                                    <h5>NDIA</h5>
                                                    <h6>Post Graduation , Diploma</h6>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='community39'>
                                            <div className='community40'>
                                                <img src={img6} alt="" />
                                                <img src={img7} alt="" />
                                            </div>

                                            <div className='community41'>
                                                <div className='community42'>
                                                    <h5>jamia Islamiya</h5>
                                                    <h6>Post Graduation , Diploma</h6>
                                                </div>
                                                <div className='community43'>
                                                    <p>vs</p>
                                                </div>
                                                <div className='community42'>
                                                    <h5>NDIA</h5>
                                                    <h6>Post Graduation , Diploma</h6>
                                                </div>
                                            </div>

                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                    <div className='community38'>
                                        <div className='community39'>
                                            <div className='community40'>
                                                <img src={img6} alt="" />
                                                <img src={img7} alt="" />
                                            </div>

                                            <div className='community41'>
                                                <div className='community42'>
                                                    <h5>jamia Islamiya</h5>
                                                    <h6>Post Graduation , Diploma</h6>
                                                </div>
                                                <div className='community43'>
                                                    <p>vs</p>
                                                </div>
                                                <div className='community42'>
                                                    <h5>NDIA</h5>
                                                    <h6>Post Graduation , Diploma</h6>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='community39'>
                                            <div className='community40'>
                                                <img src={img6} alt="" />
                                                <img src={img7} alt="" />
                                            </div>

                                            <div className='community41'>
                                                <div className='community42'>
                                                    <h5>jamia Islamiya</h5>
                                                    <h6>Post Graduation , Diploma</h6>
                                                </div>
                                                <div className='community43'>
                                                    <p>vs</p>
                                                </div>
                                                <div className='community42'>
                                                    <h5>NDIA</h5>
                                                    <h6>Post Graduation , Diploma</h6>
                                                </div>
                                            </div>

                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                    <div className='community38'>
                                        <div className='community39'>
                                            <div className='community40'>
                                                <img src={img6} alt="" />
                                                <img src={img7} alt="" />
                                            </div>

                                            <div className='community41'>
                                                <div className='community42'>
                                                    <h5>jamia Islamiya</h5>
                                                    <h6>Post Graduation , Diploma</h6>
                                                </div>
                                                <div className='community43'>
                                                    <p>vs</p>
                                                </div>
                                                <div className='community42'>
                                                    <h5>NDIA</h5>
                                                    <h6>Post Graduation , Diploma</h6>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='community39'>
                                            <div className='community40'>
                                                <img src={img6} alt="" />
                                                <img src={img7} alt="" />
                                            </div>

                                            <div className='community41'>
                                                <div className='community42'>
                                                    <h5>jamia Islamiya</h5>
                                                    <h6>Post Graduation , Diploma</h6>
                                                </div>
                                                <div className='community43'>
                                                    <p>vs</p>
                                                </div>
                                                <div className='community42'>
                                                    <h5>NDIA</h5>
                                                    <h6>Post Graduation , Diploma</h6>
                                                </div>
                                            </div>

                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </div>
                                <div className='community44'>
                                    <hr />
                                </div>

                                <div className='community45'>
                                    <button onClick={() => navigate('/compare')}>Compare</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : step == 1 ? (
                <>
                    <div className='community15'>
                        <p>Community</p>
                        <div className='community16'>
                            <div className='community18'>
                                <h6>Chats</h6>
                                <div className="community56">
                                    <input
                                        type="text"
                                        placeholder="Search Conversations"
                                    />
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <div>
                                    <hr />
                                </div>

                                <div className='community32'>
                                    <div className='community33'>
                                        <img src={img3} alt="" />
                                        <h6>Jamia Islamiyah..................</h6>
                                    </div>
                                    <div className='community34'>
                                        <div className='community11'>SL</div>
                                        <div className='community12'>RE</div>
                                        <div className='community13'>DK</div>
                                        <div className='community27'><span>+12 more</span></div>
                                    </div>
                                    <div className='community35'>
                                        <button>Message</button>
                                    </div>
                                </div>
                                <div>
                                    <hr />
                                </div>
                                <div className='community32'>
                                    <div className='community33'>
                                        <img src={img3} alt="" />
                                        <h6>Jamia Islamiyah..................</h6>
                                    </div>
                                    <div className='community34'>
                                        <div className='community11'>SL</div>
                                        <div className='community12'>RE</div>
                                        <div className='community13'>DK</div>
                                        <div className='community27'><span>+12 more</span></div>
                                    </div>
                                    <div className='community35'>
                                        <button>Join</button>
                                    </div>
                                </div>
                                <div>
                                    <hr />
                                </div>
                                <div className='community32'>
                                    <div className='community33'>
                                        <img src={img3} alt="" />
                                        <h6>Jamia Islamiyah..................</h6>
                                    </div>
                                    <div className='community34'>
                                        <div className='community11'>SL</div>
                                        <div className='community12'>RE</div>
                                        <div className='community13'>DK</div>
                                        <div className='community27'><span>+12 more</span></div>
                                    </div>
                                    <div className='community35'>
                                        <button>Join</button>
                                    </div>
                                </div>
                                <div>
                                    <hr />
                                </div>
                                <div className='community32'>
                                    <div className='community33'>
                                        <img src={img3} alt="" />
                                        <h6>Jamia Islamiyah..................</h6>
                                    </div>
                                    <div className='community34'>
                                        <div className='community11'>SL</div>
                                        <div className='community12'>RE</div>
                                        <div className='community13'>DK</div>
                                        <div className='community27'><span>+12 more</span></div>
                                    </div>
                                    <div className='community35'>
                                        <button>Join</button>
                                    </div>
                                </div>
                            </div>
                            <div className='community17'>
                                <div className='community46'>

                                    <div className='community47'>
                                        <img src={img3} alt="" />
                                        <div className='community49'>
                                            <h6>Jamia Millia Islamia -[JMI]: Admission 2023 (open) New Delhi - Community</h6>
                                            <p>15 Members</p>
                                        </div>
                                    </div>
                                    <div className='community48'>
                                        <IoSearch />
                                        <IoShareSocialSharp />
                                        <BsThreeDotsVertical />
                                    </div>

                                </div>
                                <div>
                                    <hr />
                                </div>

                                <div className='community55'>
                                    <div>
                                        <hr />
                                    </div>

                                    <div className='community50'>
                                        <div className='community51'>
                                            <IoDocuments />
                                        </div>
                                        <div className='community52'>
                                            <hr />
                                        </div>
                                        <div className='community53'>
                                            <input type="text" placeholder='Write  A Message' />
                                        </div>
                                        <div className='community54'>
                                            <BsFillSendFill />
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </>
            ) : (
                ""
            )}


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
    );
};

export default Community;
