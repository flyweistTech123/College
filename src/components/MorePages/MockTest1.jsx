import React, { useState } from "react";
import './MockTest.css'
import { useNavigate } from "react-router-dom";
import TopPart3 from "../TopPart3";
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import img6 from "../../Images/c38.png";
import img7 from "../../Images/c87.png";
import TopNavbar from "../TopNavbar";
import moke from '../../Images/moketest.png'

const MockTest1 = () => {
    const navigate = useNavigate();
    const [start, setStart] = useState(false);
    const handleClick = () => {
        setStart(prev => !prev);
    }
    return (
        <>
            <div className="app1">
                <div className="schro">
                    <TopNavbar />
                </div>
                <div className="app6">
                    <img src={moke} />
                </div>
                <div className="schro1">
                    <div className="home100">
                        <i class="fa-solid fa-bars" ></i>
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
            <TopPart3 />
            <div className="tst1">
                <div className="tst2">
                    <h4>Select the language for the test </h4>
                    <select>
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                        <option value="germany">Germany</option>
                    </select>
                </div>
                <div className="tst2">
                    <h4>Select Your Exam</h4>
                    <select>
                        <option value="english">B.tech</option>
                        <option value="hindi">B.tech</option>
                        <option value="germany">B.tech</option>
                    </select>
                </div>
            </div>

            <div className="testtt1">
                B.Tech Program Scholarship Test
            </div>
            <div className="tst4">
                <div className="tst5">
                    <div className="tst6">
                        <p>This Could prove to be start of something BIG</p>
                        <div className="tst7">
                            <h6>Q1.  Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ?</h6>
                            <div class="radio-inline">
                                <input type="radio" id="option1" name="radio-group" />
                                <label for="option1">Never</label>

                                <input type="radio" id="option2" name="radio-group" />
                                <label for="option2">Sometimes</label>

                                <input type="radio" id="option3" name="radio-group" />
                                <label for="option3">Always</label>
                            </div>
                        </div>
                        <div className="tst7">
                            <h6>Q1.  Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ?</h6>
                            <div class="radio-inline">
                                <input type="radio" id="option1" name="radio-group" />
                                <label for="option1">Never</label>

                                <input type="radio" id="option2" name="radio-group" />
                                <label for="option2">Sometimes</label>

                                <input type="radio" id="option3" name="radio-group" />
                                <label for="option3">Always</label>
                            </div>
                        </div>
                        <div className="tst7">
                            <h6>Q1.  Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ?</h6>
                            <div class="radio-inline">
                                <input type="radio" id="option1" name="radio-group" />
                                <label for="option1">Never</label>

                                <input type="radio" id="option2" name="radio-group" />
                                <label for="option2">Sometimes</label>

                                <input type="radio" id="option3" name="radio-group" />
                                <label for="option3">Always</label>
                            </div>
                        </div>
                        <div className="tst7">
                            <h6>Q1.  Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ?</h6>
                            <div class="radio-inline">
                                <input type="radio" id="option1" name="radio-group" />
                                <label for="option1">Never</label>

                                <input type="radio" id="option2" name="radio-group" />
                                <label for="option2">Sometimes</label>

                                <input type="radio" id="option3" name="radio-group" />
                                <label for="option3">Always</label>
                            </div>
                        </div>
                        <div className="tst8">
                            <button>Next</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tst3">
                <button>Restart Now</button>
            </div>
            <div className="loan21">
            </div>
            <Footer />

        </>
    );
};

export default MockTest1;
