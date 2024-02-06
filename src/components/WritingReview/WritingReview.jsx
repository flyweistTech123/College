import React, { useState } from "react";
import TopNavbar from "../TopNavbar";
import Footer from "../Footer";
import img5 from '../../Images/application.png'
import { MdUpload } from "react-icons/md";
import './WritingReview.css'
import img1 from '../../Images/starrs.png'


const WritingReview = () => {
    const [step, setStep] = useState(0);
    const incCnt = () => {
        setStep((prev) => prev + 1);
    };
    const decCnt = () => {
        setStep((prev) => prev - 1);
    };
    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <div className="app1">
                <div className="schro">
                    <TopNavbar />
                </div>
            </div>
            <div className="writereview">
                <h3>Let’s StartWriting Your Reviews.</h3>
                <p>Your College Experience could help others</p>
            </div>
            <div className="writereview1">
                <div className="writereview2">
                    <div
                        className="writereview3"
                        onClick={() => setStep(0)}
                    >
                        <p>1. Personal details</p>
                    </div>
                </div>
                <div className="writereview2">
                    <div
                        className={step === 1  ? "writereview3" : "writereview4"}
                        onClick={() => setStep(1)}
                    >
                        <p>2. Your Review</p>
                    </div>
                </div>
                <div className="writereview2">
                    <div
                        className={step === 2  ? "writereview3" : "writereview4"}
                        onClick={() => setStep(2)}
                    >
                        <p>3. More details</p>
                    </div>
                </div>
                <div className="writereview2">
                    <div
                        className={step === 3  ? "writereview3" : "writereview4"}
                        onClick={() => setStep(3)}
                    >
                        <p>4. College Life</p>
                    </div>
                </div>
            </div>
            {step === 0 ? (
                <div className="writereview5">
                    <h3>Personal Details</h3>
                    <div className="writereview6">
                        <div className="writereview7">
                            <div className="writereview8">
                                <label>Email ID*</label>
                                <input type="email" />
                            </div>
                            <div className="writereview8">
                                <label>Full Name</label>
                                <input type="text" />
                            </div>
                        </div>
                        <div className="writereview7">
                            <div className="writereview8">
                                <label>Your Gender*</label>
                                <input type="text" placeholder="Enter Rank" />
                            </div>
                            <div className="writereview8">
                                <label>Mobile Number for cash rewards *</label>
                                <select>
                                    <option value="english">General</option>
                                    <option value="hindi">Hindi</option>
                                    <option value="germany">Germany</option>
                                </select>
                            </div>
                        </div>

                        <div className="writereview7">
                            <div className="writereview8">
                                <label>Your Country  of Origin*</label>
                                <select>
                                    <option value="english">Select State</option>
                                    <option value="hindi">Uttar Pradesh</option>
                                </select>
                            </div>
                            <div className="writereview8">
                                <label>College You are reviewing *</label>
                                <select>
                                    <option value="english">Select City</option>
                                    <option value="hindi">Agra</option>
                                    <option value="germany">Jaipur</option>
                                </select>
                            </div>
                        </div>
                        <div className="writereview7">
                            <div className="writereview8">
                                <label>Mobile Number*</label>
                                <select>
                                    <option value="english">Select State</option>
                                    <option value="hindi">Uttar Pradesh</option>
                                </select>
                            </div>
                            <div className="writereview8">
                                <label>City</label>
                                <select>
                                    <option value="english">Select City</option>
                                    <option value="hindi">Agra</option>
                                    <option value="germany">Jaipur</option>
                                </select>
                            </div>
                        </div>

                        <div className="writereview10">
                            <p>Select the year when you completed the course. If you're currently studying, please enter the year when you will complete the course.</p>
                        </div>
                        <div className="writereview7">
                            <div className="writereview8">
                                <label>Year Of graduation*</label>
                                <select>
                                    <option value="english">Select Year</option>
                                    <option value="hindi">Uttar Pradesh</option>
                                </select>
                            </div>
                        </div>
                        <div className="writereview11">
                            <div class="checkbox-group">
                                <input type="checkbox" id="checkbox1" />
                                <label for="checkbox1">College Hub representatives may reach out for more information</label>
                            </div>
                        </div>

                        <div className="writereview12">
                            <hr />
                            <p>Please ensure that all the above entered values are correct, as you won't be able to edit them after clicking "Next"</p>
                        </div>
                        <dov className="writereview9">
                            <button onClick={incCnt}>Next</button>
                        </dov>
                    </div>
                </div>
            ) : step === 1 ? (
                <div className="writereview5">
                    <h3>Your Review</h3>
                    <div className="writereview13">
                        <p>Your honest & detailed review on Placements Infrastructure and Facilities will help thousands of students make an informed college decision.</p>
                        <div className="writereview14">
                            <h6>We will accept your review if:</h6>
                            <ul>
                                <li>It is descriptive and contains useful information.</li>
                                <li>You have not copied text from anywhere else.</li>
                                <li>Don’t use junk characters, SMS language, slang or abusive words in your review.</li>
                                <li>Your personal & contact details are correct and authentic.</li>
                            </ul>
                        </div>
                        <div className="writereview14">
                            <h6>Placements<span class="asterisk">*</span></h6>
                            <div className="writereview15">
                                <div className="writereview16">
                                    <img src={img1} alt="" />
                                    <p>1</p>
                                </div>
                                <div className="writereview16">
                                    <img src={img1} alt="" />
                                    <p>2</p>
                                </div>
                                <div className="writereview16">
                                    <img src={img1} alt="" />
                                    <p>3</p>
                                </div>
                                <div className="writereview16">
                                    <img src={img1} alt="" />
                                    <p>4</p>
                                </div>
                                <div className="writereview16">
                                    <img src={img1} alt="" />
                                    <p>5</p>
                                </div>
                            </div>
                        </div>
                        <div className="writereview14">
                            <h6>Provide the information about your batch and course (or of your passing out batch)</h6>
                            <ul>
                                <li>What percent of students were placed in your course?</li>
                                <li>What was the highest, lowest and the average package offered in your course?</li>
                                <li>Top Recruiting companies for your course?</li>
                                <li>What percent of students got internship from your course and in which companies?</li>
                                <li>Top Roles offered in your course?</li>
                            </ul>
                            <textarea type="text" />
                            <p>(Minimum 250 characters , At least 2-3 lines)</p>
                        </div>
                        <div className="writereview14">
                            <h6>Infrastructure for your Course & Hostel<span class="asterisk">*</span></h6>
                            <div className="writereview15">
                                <div className="writereview16">
                                    <img src={img1} alt="" />
                                    <p>1</p>
                                </div>
                                <div className="writereview16">
                                    <img src={img1} alt="" />
                                    <p>2</p>
                                </div>
                                <div className="writereview16">
                                    <img src={img1} alt="" />
                                    <p>3</p>
                                </div>
                                <div className="writereview16">
                                    <img src={img1} alt="" />
                                    <p>4</p>
                                </div>
                                <div className="writereview16">
                                    <img src={img1} alt="" />
                                    <p>5</p>
                                </div>
                            </div>

                            <ul>
                                <li>Describe the facilities and infrastructure available for your course/department (e.g. Wi-Fi, Labs, Classrooms, Library)?</li>
                                <li>What is/was the quality of the facilities in your hostel, the quality of food available in the mess and canteen, medical facilities, sports and games?</li>
                            </ul>
                            <textarea type="text" />
                            <p>(Minimum 250 characters , At least 2-3 lines)</p>
                        </div>
                        <div className="writereview14">
                            <h6>Faculty, Curriculum & Exams for your coursel<span class="asterisk">*</span></h6>
                            <div className="writereview15">
                                <div className="writereview16">
                                    <img src={img1} alt="" />
                                    <p>1</p>
                                </div>
                                <div className="writereview16">
                                    <img src={img1} alt="" />
                                    <p>2</p>
                                </div>
                                <div className="writereview16">
                                    <img src={img1} alt="" />
                                    <p>3</p>
                                </div>
                                <div className="writereview16">
                                    <img src={img1} alt="" />
                                    <p>4</p>
                                </div>
                                <div className="writereview16">
                                    <img src={img1} alt="" />
                                    <p>5</p>
                                </div>
                            </div>
                            <ul>
                                <li>Were the teachers helpful, qualified, and knowledgeable? How was the teaching quality?</li>
                                <li>Is this course curriculum relevant? Does it make the students industry ready?</li>
                                <li>How difficult are the semester exams in this college? What is the pass percentage?</li>
                            </ul>
                            <textarea type="text" />
                            <p>(Minimum 250 characters , At least 2-3 lines)</p>
                        </div>
                        <div className="writereview14">
                            <div className="writereview17">
                                <div>
                                    <h6>Value for Money<span class="asterisk">*</span></h6>
                                    <div className="writereview15">
                                        <div className="writereview16">
                                            <img src={img1} alt="" />
                                            <p>1</p>
                                        </div>
                                        <div className="writereview16">
                                            <img src={img1} alt="" />
                                            <p>2</p>
                                        </div>
                                        <div className="writereview16">
                                            <img src={img1} alt="" />
                                            <p>3</p>
                                        </div>
                                        <div className="writereview16">
                                            <img src={img1} alt="" />
                                            <p>4</p>
                                        </div>
                                        <div className="writereview16">
                                            <img src={img1} alt="" />
                                            <p>5</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h6>Value for Money<span class="asterisk">*</span></h6>
                                    <div className="writereview15">
                                        <div className="writereview16">
                                            <img src={img1} alt="" />
                                            <p>1</p>
                                        </div>
                                        <div className="writereview16">
                                            <img src={img1} alt="" />
                                            <p>2</p>
                                        </div>
                                        <div className="writereview16">
                                            <img src={img1} alt="" />
                                            <p>3</p>
                                        </div>
                                        <div className="writereview16">
                                            <img src={img1} alt="" />
                                            <p>4</p>
                                        </div>
                                        <div className="writereview16">
                                            <img src={img1} alt="" />
                                            <p>5</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="writereview14">
                            <h6>Any other information that you would like to share</h6>
                            <ul>
                                <li>Were the teachers helpful, qualified, and knowledgeable? How was the teaching quality?</li>
                                <li>Is this course curriculum relevant? Does it make the students industry ready?</li>
                                <li>How difficult are the semester exams in this college? What is the pass percentage?</li>
                            </ul>
                            <textarea type="text" />
                        </div>
                        <div className="writereview14">
                            <h6>What was/is the approximate Total Fees charged by your College for this course?<span class="asterisk">*</span></h6>
                            <p>Provide the information about your batch and course (or of your passing out batch)</p>
                            <ul>
                                <li>Please write below the Total Fees for the entire duration of the course(Including Tuition, Hostel, Library, Admission fees, Mess and any other charges)</li>
                                <li>Please enter number only (e.g. 150000)</li>
                            </ul>
                            <input type="text" placeholder="Eg : ₹ 1,50,000" />
                        </div>
                        <div className="writereview14">
                            <h6>Would you recommend others to take admission in your college?<span class="asterisk">*</span></h6>
                            <div className="writereview20">
                                <div className="writereview18">
                                    <input type="radio" class="writereview19" id="radioButton" />
                                    <label for="radioButton" class="custom-radio"></label>
                                    <p>YES</p>
                                </div>
                                <div className="writereview18">
                                    <input type="radio" class="writereview19" id="radioButton" />
                                    <label for="radioButton" class="custom-radio"></label>
                                    <p>No</p>
                                </div>
                            </div>

                        </div>
                        <div className="writereview14">
                            <h6>Would you like to share photos of your College (Photos taken by you)</h6>
                            <p>(Optional)</p>
                            <p>Students find images more helpful than text alone.</p>
                        </div>
                        <div className="writereview14">
                            <h6>Title of Review *</h6>
                            <p>Give a short headline that summarizes your college review. e.g. Absolutely dissatisfied because of faculty, good placements in 2015, really good infrastructure and facilities etc.</p>
                            <textarea type="text" name="" id="" />
                            <p>(Minimum 25 characters)</p>
                        </div>

                        <dov className="writereview9">
                            <button onClick={incCnt}>Next</button>
                        </dov>
                    </div>
                </div>
            ) : step === 2 ? (
                <>
                    <div className="writereview5">
                        <h3>More Details</h3>
                        <div className="writereview13">
                            <p>Your honest & detailed review on Placements Infrastructure and Facilities will help thousands of students make an informed college decision.</p>
                            <div className="writereview14">
                                <h6>We will accept your review if:</h6>
                                <ul>
                                    <li>It is descriptive and contains useful information.</li>
                                    <li>You have not copied text from anywhere else.</li>
                                    <li>Don’t use junk characters, SMS language, slang or abusive words in your review.</li>
                                    <li>Your personal & contact details are correct and authentic.</li>
                                </ul>
                            </div>
                            <div className="writereview14">
                                <h6>Placements<span class="asterisk">*</span></h6>
                                <div className="writereview15">
                                    <div className="writereview16">
                                        <img src={img1} alt="" />
                                        <p>1</p>
                                    </div>
                                    <div className="writereview16">
                                        <img src={img1} alt="" />
                                        <p>2</p>
                                    </div>
                                    <div className="writereview16">
                                        <img src={img1} alt="" />
                                        <p>3</p>
                                    </div>
                                    <div className="writereview16">
                                        <img src={img1} alt="" />
                                        <p>4</p>
                                    </div>
                                    <div className="writereview16">
                                        <img src={img1} alt="" />
                                        <p>5</p>
                                    </div>
                                </div>
                            </div>
                            <div className="writereview14">
                                <h6>Provide the information about your batch and course (or of your passing out batch)</h6>
                                <ul>
                                    <li>What percent of students were placed in your course?</li>
                                    <li>What was the highest, lowest and the average package offered in your course?</li>
                                    <li>Top Recruiting companies for your course?</li>
                                    <li>What percent of students got internship from your course and in which companies?</li>
                                    <li>Top Roles offered in your course?</li>
                                </ul>
                                <textarea type="text" />
                                <p>(Minimum 250 characters , At least 2-3 lines)</p>
                            </div>
                            <div className="writereview14">
                                <h6>Would you recommend others to take admission in your college?<span class="asterisk">*</span></h6>
                                <div className="writereview20">
                                    <div className="writereview18">
                                        <input type="radio" class="writereview19" id="radioButton" />
                                        <label for="radioButton" class="custom-radio"></label>
                                        <p>YES</p>
                                    </div>
                                    <div className="writereview18">
                                        <input type="radio" class="writereview19" id="radioButton" />
                                        <label for="radioButton" class="custom-radio"></label>
                                        <p>No</p>
                                    </div>
                                </div>

                            </div>


                            <dov className="writereview9">
                                <button onClick={incCnt}>Next</button>
                            </dov>
                        </div>
                    </div>
                </>
            ) : step === 3 ? (
                <>
                    <div className="writereview5">
                        <h3>College Life</h3>
                        <div className="writereview13">
                            <p>Your honest & detailed review on Placements Infrastructure and Facilities will help thousands of students make an informed college decision.</p>
                            <div className="writereview14">
                                <h6>We will accept your review if:</h6>
                                <ul>
                                    <li>It is descriptive and contains useful information.</li>
                                    <li>You have not copied text from anywhere else.</li>
                                    <li>Don’t use junk characters, SMS language, slang or abusive words in your review.</li>
                                    <li>Your personal & contact details are correct and authentic.</li>
                                </ul>
                            </div>
                            <div className="writereview14">
                                <h6>Placements<span class="asterisk">*</span></h6>
                                <div className="writereview15">
                                    <div className="writereview16">
                                        <img src={img1} alt="" />
                                        <p>1</p>
                                    </div>
                                    <div className="writereview16">
                                        <img src={img1} alt="" />
                                        <p>2</p>
                                    </div>
                                    <div className="writereview16">
                                        <img src={img1} alt="" />
                                        <p>3</p>
                                    </div>
                                    <div className="writereview16">
                                        <img src={img1} alt="" />
                                        <p>4</p>
                                    </div>
                                    <div className="writereview16">
                                        <img src={img1} alt="" />
                                        <p>5</p>
                                    </div>
                                </div>
                            </div>
                            <div className="writereview14">
                                <h6>Provide the information about your batch and course (or of your passing out batch)</h6>
                                <ul>
                                    <li>What percent of students were placed in your course?</li>
                                    <li>What was the highest, lowest and the average package offered in your course?</li>
                                    <li>Top Recruiting companies for your course?</li>
                                    <li>What percent of students got internship from your course and in which companies?</li>
                                    <li>Top Roles offered in your course?</li>
                                </ul>
                                <textarea type="text" />
                                <p>(Minimum 250 characters , At least 2-3 lines)</p>
                            </div>

                            <dov className="writereview9">
                                <button onClick={incCnt}>Next</button>
                            </dov>
                        </div>
                    </div>

                </>
            ) : (

                ""

            )}

            <div className="loan21">
            </div>
            <Footer />
        </>
    );
};

export default WritingReview;
