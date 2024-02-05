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
                        className={step === 0 ? "writereview3" : "writereview4"}
                        onClick={() => setStep(0)}
                    >
                        <p>1. Personal details</p>
                    </div>
                </div>
                <div className="writereview2">
                    <div
                        className={step === 1 ? "writereview3" : "writereview4"}
                        onClick={() => setStep(1)}
                    >
                        <p>2. Your Review</p>
                    </div>
                </div>
                <div className="writereview2">
                    <div
                        className={step === 2 ? "writereview3" : "writereview4"}
                        onClick={() => setStep(2)}
                    >
                        <p>3. More details</p>
                    </div>
                </div>
                <div className="writereview2">
                    <div
                        className={step === 3 ? "writereview3" : "writereview4"}
                        onClick={() => setStep(3)}
                    >
                        <p>4. College Life</p>
                    </div>
                </div>
            </div>
            {step === 0 ? (
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
            ) : step === 1 ? (
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
                <>
                    <div className="acad1">
                        <h3>Academic Details</h3>
                        <div className="acad2">
                            <h6>10th Details</h6>
                            <div className="acad3">
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>10th School/institute Name</th>
                                            <th>10th Board</th>
                                            <th>10th year of passing</th>
                                            <th>10th Marking Scheme</th>
                                            <th>10th Obtained Percentage CGPA</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>10</td>
                                            <td>
                                                <input type="text" />
                                            </td>
                                            <td>
                                                <select>
                                                    <option value="">Select Board</option>
                                                    <option value="">CBSE</option>
                                                    <option value="">ICSE</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select>
                                                    <option value="">YYYY</option>
                                                    <option value="">CBSE</option>
                                                    <option value="">ICSE</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select>
                                                    <option value="">Select </option>
                                                    <option value="">CBSE</option>
                                                    <option value="">ICSE</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h6>After 10TH QUALIFICATION</h6>
                            <div className="acad11">
                                <input type="radio" name="" id="" />
                                <label htmlFor="">12th</label>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Diploma</label>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Both</label>
                            </div>
                            <h6>12th Details</h6>
                            <div className="acad3">
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>12th School/institute Name</th>
                                            <th>12th Board</th>
                                            <th>12th Stream</th>
                                            <th>12th year of passing</th>
                                            <th>Result status</th>
                                            <th>12th marking scheme</th>
                                            <th>12th obtained Percentage CGPA</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>12</td>
                                            <td>
                                                <input type="text" />
                                            </td>
                                            <td>
                                                <select>
                                                    <option value="">Select</option>
                                                    <option value="">CBSE</option>
                                                    <option value="">ICSE</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select>
                                                    <option value="">Select</option>
                                                    <option value="">CBSE</option>
                                                    <option value="">ICSE</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select>
                                                    <option value="">YYYY </option>
                                                    <option value="">CBSE</option>
                                                    <option value="">ICSE</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select>
                                                    <option value="">Select</option>
                                                    <option value="">CBSE</option>
                                                    <option value="">ICSE</option>
                                                </select>
                                            </td>
                                            <td>

                                            </td>
                                            <td>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <h6>Graduation Details</h6>
                            <div className="acad3">
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Graduation institute Name</th>
                                            <th>Graduation Stream</th>
                                            <th>Graduation Percentile</th>
                                            <th>Graduation Year of Passing</th>
                                            <th>Graduation Result status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>UG</td>
                                            <td>
                                                <input type="text" />
                                            </td>
                                            <td>
                                                <select>
                                                    <option value="">Select Board</option>
                                                    <option value="">CBSE</option>
                                                    <option value="">ICSE</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select>
                                                    <option value="">YYYY</option>
                                                    <option value="">CBSE</option>
                                                    <option value="">ICSE</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select>
                                                    <option value="">Select </option>
                                                    <option value="">CBSE</option>
                                                    <option value="">ICSE</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="acad33">
                                <div className="acad32">
                                    <label htmlFor="">Graduation State</label>
                                    <input type="text" />
                                </div>
                                <div className="acad32">
                                    <label htmlFor="">Graduation Degree</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <h6>Do you have any other qualifiaction</h6>
                            <div className="acad11">
                                <input type="radio" name="" id="" />
                                <label htmlFor="">Yes</label>
                                <input type="radio" name="" id="" />
                                <label htmlFor="">No</label>
                            </div>

                            <h6>Document Uploads</h6>
                            <div className="acad3">
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>10th class Marksheet</th>
                                            <th>12th class Marksheet</th>
                                            <th>Graduation final year Marksheet</th>
                                            <th>Rank Acheived</th>
                                            <th>Aadhar Card Upload</th>
                                            <th>Photo Upload</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>UG</td>
                                            <td>
                                                <input type="text" />
                                            </td>
                                            <td>
                                                <select>
                                                    <option value="">Select Board</option>
                                                    <option value="">CBSE</option>
                                                    <option value="">ICSE</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select>
                                                    <option value="">YYYY</option>
                                                    <option value="">CBSE</option>
                                                    <option value="">ICSE</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select>
                                                    <option value="">Select </option>
                                                    <option value="">CBSE</option>
                                                    <option value="">ICSE</option>
                                                </select>
                                            </td>
                                            <td>
                                                <input type="text" />
                                            </td>
                                            <td>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h6>Upload Applicant Image</h6>
                            <div className="acad34">
                                <div className="acad35">
                                    <MdUpload className="acad36" />
                                </div>
                                <p>Upload Image from Filemanager,Gallery</p>
                            </div>
                            <div className="recp3">
                                <button onClick={decCnt}>Back</button>
                                <button>Save & Exit</button>
                                <button onClick={incCnt}>Next</button>
                            </div>
                        </div>
                    </div>
                </>
            ) : step === 2 ? (
                <>
                    <div className="dec11">
                        <h3>Declaration</h3>
                        <div className="dec1">
                            <h6>Declaration</h6>
                            <hr />
                            <div className="dec2">
                                <p>
                                    Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                    vulputate libero et velit interdum, ac aliquet odio mattis.
                                    Class aptent taciti sociosqu ad litora torquent per conubia
                                    nostra, per inceptos himenaeos.
                                </p>
                                <p>
                                    Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                    vulputate libero et velit interdum, ac aliquet odio mattis.
                                    Class aptent taciti sociosqu ad litora torquent per conubia
                                    nostra, per inceptos himenaeos.
                                </p>
                                <p>
                                    Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                    vulputate libero et velit interdum, ac aliquet odio mattis.
                                    Class aptent taciti sociosqu ad litora torquent per conubia
                                    nostra, per inceptos himenaeos.
                                </p>
                            </div>

                        </div>
                        <div className="acad11">
                            <input type="radio" name="" id="" />
                            <label htmlFor="">I Agree terms and Conditions of these declartion</label>
                        </div>
                        <div className="recp3">
                            <button onClick={decCnt}>Back</button>
                            <button>Save & Exit</button>
                            <button onClick={incCnt}>Next</button>
                        </div>
                    </div>

                </>
            ) : step === 4 ? (
                <>
                    <div className="Acknow1">
                        <div className="Acknow2">
                            <div className="Acknow3">
                                <div className="Acknow4">
                                    <h1>XYZ UNIVERSITY</h1>
                                    <h6>BBA-BACHELOR OF BUSINESS ADMINISTRATION (7 SPECIALIZATIONS)2023</h6>
                                    <p>APPICATION NO: X0001254845754564</p>
                                </div>
                                <div className="Acknow5">
                                    <img src={img5} alt="" />
                                </div>
                            </div>

                            <div className="Acknow6">
                                <h3>Personal Details</h3>
                                <div className="Acknow7">
                                    <input type="text" placeholder="Ashish sharma" />
                                    <input type="text" placeholder="Email ID" />
                                    <input type="text" placeholder="Date of Birth" />
                                </div>
                                <div className="Acknow7">
                                    <input type="text" placeholder="Gender" />
                                    <input type="text" placeholder="Mobile No." />
                                    <input type="text" placeholder="Nationality" />
                                </div>
                                <div className="Acknow7">
                                    <input type="text" placeholder="Category" />
                                    <input type="text" placeholder="Additional Category" />
                                    <input type="text" placeholder="NR/International Applicant Category" className="innn1" />
                                    <input type="text" placeholder="Specialization" />
                                </div>
                                <h3>Referral Details</h3>
                                <div className="Acknow77">
                                    <input type="text" placeholder="Name of the person who refers you" />
                                    <input type="text" placeholder="Enrolment Number  of the student who referred you" />
                                </div>

                                <h3>Education Details</h3>
                                <h3>Class X</h3>
                                <div className="Acknow7">
                                    <input type="text" placeholder="Board" />
                                    <input type="text" placeholder="School" />
                                    <input type="text" placeholder="Passing Year" />
                                </div>
                                <div className="Acknow7">
                                    <input type="text" placeholder="Mark type" />
                                    <input type="text" placeholder="Percentage / CGPA" />
                                </div>
                                <h3>Class XII</h3>
                                <div className="Acknow7">
                                    <input type="text" placeholder="Board" />
                                    <input type="text" placeholder="Passing Year" />
                                    <input type="text" placeholder="Passing Year" />
                                </div>
                                <div className="Acknow7">
                                    <input type="text" placeholder="Stream" />
                                    <input type="text" placeholder="Mark type" />
                                    <input type="text" placeholder="Percentage / CGPA" />
                                </div>
                                <h3>Graduation</h3>
                                <div className="Acknow7">
                                    <input type="text" placeholder="College" />
                                    <input type="text" placeholder="Passing Year" />
                                    <input type="text" placeholder="Degree" />
                                </div>
                                <div className="Acknow7">
                                    <input type="text" placeholder="Mark type" />
                                    <input type="text" placeholder="Percentage / CGPA" />
                                </div>
                                <h3>Preferences</h3>
                                <div className="Acknow7">
                                    <input type="text" placeholder="Stream" />
                                    <input type="text" placeholder="Level" />
                                    <input type="text" placeholder="Specialization" />
                                </div>
                                <div className="Acknow7">
                                    <input type="text" placeholder="Location" />
                                    <input type="text" placeholder="College type" />
                                    <input type="text" placeholder="Fee Range" />
                                </div>
                                <div className="Acknow7">
                                    <input type="text" placeholder="College" />
                                    <input type="text" placeholder="No PreferencesInterested in studying abroad?" />
                                    <input type="text" placeholder="Fee Range" />
                                </div>
                                <div className="Acknow7">
                                    <input type="text" placeholder="Need Loan ?" />
                                </div>
                                <h3>Payment Details</h3>
                                <div className="Acknow7">
                                    <input type="text" placeholder="Transaction ID" />
                                    <input type="text" placeholder="Payment Date" />
                                    <input type="text" placeholder="Mode of Payment" />
                                </div>
                                <div className="Acknow7">
                                    <input type="text" placeholder="Colleges Applied" />
                                </div>
                                <h3>Declaration</h3>
                                <div className="Acknow8">
                                    <p>I, declare that all statements made in this application for admission are correct and complete. I also understand that plagiarism, submission of
                                        false information, or omission of relevant information or credentials may result in my application being withdrawn, my admission being denied,
                                        or my admission being revoked.
                                        I, also understand that I have read the admission procedure document and the submission of application does not automatically qualify me for
                                        interview/further selection process. The Application Fee is non-refundable under any circumstances
                                        Further, I understand that Ragging is banned in the University. If I am found indulging in ragging, at any stage of my study period, I shall be
                                        liable for disciplinary action; including expulsion from the University.</p>

                                    <h4>Application Name:</h4>
                                    <h4>Parent Name:</h4>
                                    <h4>Date:</h4>
                                </div>
                                <div className="Acknow9">
                                    <button onClick={decCnt}>Back</button>
                                    <button onClick={handlePrint}>Print</button>
                                </div>
                            </div>
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
