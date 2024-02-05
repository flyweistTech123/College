import React, { useState } from 'react'
import TopNavbar from "../TopNavbar";
import Footer from "../Footer";
import Offcanvas from 'react-bootstrap/Offcanvas';
import img1 from '../../Images/campare1.png'
import img2 from '../../Images/campare2.png'
import img3 from '../../Images/camapre3.png'
import img4 from "../../Images/c56.png";
import img5 from "../../Images/c50.png";
import img6 from "../../Images/c51.png";
import img7 from "../../Images/c52.png";
import img8 from "../../Images/c53.png";
import img9 from "../../Images/c54.png";
import img10 from "../../Images/c55.png";






import MobileLoanNavbar from "../MobileLoanNavabr";

import './Community.css'





const Compare = () => {

    const [show, setShow] = useState(false);

    const [flag, setFlag] = useState(false)

    const getFlag = () => {
        setFlag(prev => !prev);
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [camapre, setcampare] = useState(false);


    return (
        <>
            <div className="loan100">
                <i class="fa-solid fa-bars" onClick={handleShow}></i>
            </div>
            <div>
                <TopNavbar />
            </div>
            <div className='campare1'>
                <div className='campare2'>
                    <h1>Compare IIT Hyderabad B.Tech. in Artificial Intelligence Vs IIIT Hyderabad Vs Asia Pacific Kochi,Kerala.</h1>
                    <p>Compare IIT Hyderabad B.Tech. in Artificial Intelligence and IIIT Hyderabad B.Tech.+ M.S. (by Research) in Computer Science and Engineering course on the basis of their Fees, Placements, Cut Off, Reviews, Seats, Courses and other details. IIIT Hyderabad B.Tech.+ M.S. (by Research) in Computer Science and Engineering course is rated 4.3 out of 5 by 7 genuine verified students. ..............</p>
                </div>

                <div className='campare3'>
                    <div className='campare4'>
                        <div className='campare5'>
                            <img src={img1} alt="" />
                            <div className='campare8'>
                                <p>vs</p>
                            </div>
                        </div>

                        <div className='campare6'>
                            <h6>Asia Pacific Institute of Management...(APIM) Kochi , Kerala.</h6>
                            <p>Kochi ,Wayanad , Kerala.</p>
                        </div>
                        <div className='campare7'>
                            <select name="" id="">
                                <option value="">Search Course</option>
                            </select>
                            <p>Please Select Course </p>
                        </div>
                    </div>
                    <div className='campare4'>
                        <div className='campare5'>
                            <img src={img2} alt="" />
                            <div className='campare8'>
                                <p>vs</p>
                            </div>
                        </div>

                        <div className='campare6'>
                            <h6>Asia Pacific Institute of Management...(APIM) Kochi , Kerala.</h6>
                            <p>Kochi ,Wayanad , Kerala.</p>
                        </div>
                        <div className='campare7'>
                            <select name="" id="">
                                <option value="">Search Course</option>
                            </select>
                            <p>Please Select Course </p>
                        </div>
                    </div>
                    <div className='campare4'>
                        <div className='campare5'>
                            <img src={img1} alt="" />
                            <div className='campare8'>
                                <p>vs</p>
                            </div>
                        </div>

                        <div className='campare6'>
                            <h6>Asia Pacific Institute of Management...(APIM) Kochi , Kerala.</h6>
                            <p>Kochi ,Wayanad , Kerala.</p>
                        </div>
                        <div className='campare7'>
                            <select name="" id="">
                                <option value="">Search Course</option>
                            </select>
                            <p>Please Select Course </p>
                        </div>
                    </div>
                    <div className='campare4'>
                        <div className='campare9'>
                            <img src={img3} alt="" />
                        </div>
                        <div className='campare10'>
                            <input type="text" placeholder='Search College' />
                            <input type="text" placeholder='Search Course' />
                        </div>
                    </div>
                </div>

                <div className='campare11'>
                    {camapre ? (
                        <button onClick={() => setcampare(false)}>Modify Selection</button>
                    ): (
                        <button onClick={() => setcampare(true)}>Compare</button>
                    )}
                </div>


                {camapre ? (
                    <div>
                        <div className='campare12'>
                            <div className='campare13'>
                                <div>
                                    <h6>Placement:</h6>
                                    <ul>
                                        <li>Asia pacific placement 2023 records the highest CTC of INR 25 LPA</li>
                                        <li>Asia pacific conducted Entrepreneurship Development Program.</li>
                                        <li>Over all 90% placements from all branches</li>
                                    </ul>
                                </div>

                                <div>
                                    <h6>Fees :</h6>
                                    <div className='campare15'>
                                        <p>B. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>4 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>MBA</p>
                                        <p>₹ 113,00</p>
                                        <p>2 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>M. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>2 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>B. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>4 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>B. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>4 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>B. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>4 Years</p>
                                    </div>
                                </div>

                                <div>
                                    <h6>Infrastructure :</h6>
                                    <ul>
                                        <li>Asia pacific placement 2023 records the highest CTC of INR 25 LPA</li>
                                        <li>Asia pacific conducted Entrepreneurship Development Program.</li>
                                        <li>Over all 90% placements from all branches</li>
                                    </ul>
                                </div>
                                <div>
                                    <h6>Courses Offered :</h6>
                                    <div className='campare16'>
                                        <p>B. Tech</p>
                                        <p>MBA</p>
                                        <p>M. Tech</p>
                                        <p>PGD</p>
                                        <p>BSC</p>
                                        <p>MSW</p>
                                    </div>
                                    <div className='campare166'>
                                        <p>BA</p>
                                        <p>MA</p>
                                        <p>Msc</p>
                                        <p>BJMC</p>
                                    </div>
                                </div>
                                <div>
                                    <h6>Accepted Entrance Exam :</h6>
                                    <div className='campare166'>
                                        <p>JEE</p>
                                        <p>JEE(A)</p>
                                        <p>EAMCET</p>
                                    </div>
                                </div>
                                <div>
                                    <h6>College Ranking :</h6>
                                    <div className='campare17'>
                                        <div>
                                            Ranking
                                        </div>
                                        <div>
                                            Publisher
                                        </div>
                                        <div>
                                            Stream
                                        </div>
                                    </div>
                                    <div className='campare18'>
                                        <img src={img4} alt="" />
                                        <p>19</p>
                                        <p>Engineering</p>
                                    </div>
                                    <div className='campare18'>
                                        <img src={img4} alt="" />
                                        <p>19</p>
                                        <p>Engineering</p>
                                    </div>
                                    <div className='campare18'>
                                        <img src={img4} alt="" />
                                        <p>19</p>
                                        <p>Engineering</p>
                                    </div>

                                </div>

                                <div>
                                    <h6>College Highlights :</h6>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img5} alt="" />
                                            <p>Institution Type</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>Private</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img6} alt="" />
                                            <p>Total Faculty</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>500</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img7} alt="" />
                                            <p>Year of Establishment</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>2003</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img8} alt="" />
                                            <p>Gender Accepted</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>CO- Ed</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img9} alt="" />
                                            <p>Student Enrollment</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>21306</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img10} alt="" />
                                            <p>Campus Area</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>1000 Acres</p>
                                        </div>
                                    </div>

                                </div>

                                <div>
                                    <h6>College Details :</h6>
                                    <ul>
                                        <li>Asia Pacific placement 2023 records the highest CTC of INR 25 LPA.</li>
                                        <li>Asia Pacific Welcomes a Team from Applied Science University for the German student exchange program.</li>
                                        <li>A Global Webinar on "E-Literature Explorations of Literary Creativity" is Hosted by Asia Pacific.</li>
                                        <li>UGC notifies AMU and Asia Pacific in writing that CUET scores are required for undergraduate admission in all central universities.</li>
                                        <li>Asia Pacific and the Taiwan Economic Culture Center team up to improve academic cooperation.</li>
                                        <li>Asia PacificIslamia conducted Entrepreneurship Development Program.</li>
                                        <li>In the upcoming session, Jamia intends to offer dual degrees, online education, and FYUP.</li>
                                        <li>The University was recognised as a central university on December 26, 1988.</li>
                                        <li>In 1962, Asia Pacific Islamia University was declared a “deemed to be university” by the University Grants Commission.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='campare14'>
                                <hr />
                            </div>
                            <div className='campare13'>
                                <div>
                                    <h6>Placement:</h6>
                                    <ul>
                                        <li>Asia pacific placement 2023 records the highest CTC of INR 25 LPA</li>
                                        <li>Asia pacific conducted Entrepreneurship Development Program.</li>
                                        <li>Over all 90% placements from all branches</li>
                                    </ul>
                                </div>

                                <div>
                                    <h6>Fees :</h6>
                                    <div className='campare15'>
                                        <p>B. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>4 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>MBA</p>
                                        <p>₹ 113,00</p>
                                        <p>2 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>M. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>2 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>B. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>4 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>B. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>4 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>B. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>4 Years</p>
                                    </div>
                                </div>

                                <div>
                                    <h6>Infrastructure :</h6>
                                    <ul>
                                        <li>Asia pacific placement 2023 records the highest CTC of INR 25 LPA</li>
                                        <li>Asia pacific conducted Entrepreneurship Development Program.</li>
                                        <li>Over all 90% placements from all branches</li>
                                    </ul>
                                </div>
                                <div>
                                    <h6>Courses Offered :</h6>
                                    <div className='campare16'>
                                        <p>B. Tech</p>
                                        <p>MBA</p>
                                        <p>M. Tech</p>
                                        <p>PGD</p>
                                        <p>BSC</p>
                                        <p>MSW</p>
                                    </div>
                                    <div className='campare166'>
                                        <p>BA</p>
                                        <p>MA</p>
                                        <p>Msc</p>
                                        <p>BJMC</p>
                                    </div>
                                </div>
                                <div>
                                    <h6>Accepted Entrance Exam :</h6>
                                    <div className='campare166'>
                                        <p>JEE</p>
                                        <p>JEE(A)</p>
                                        <p>EAMCET</p>
                                    </div>
                                </div>
                                <div>
                                    <h6>College Ranking :</h6>
                                    <div className='campare17'>
                                        <div>
                                            Ranking
                                        </div>
                                        <div>
                                            Publisher
                                        </div>
                                        <div>
                                            Stream
                                        </div>
                                    </div>
                                    <div className='campare18'>
                                        <img src={img4} alt="" />
                                        <p>19</p>
                                        <p>Engineering</p>
                                    </div>
                                    <div className='campare18'>
                                        <img src={img4} alt="" />
                                        <p>19</p>
                                        <p>Engineering</p>
                                    </div>
                                    <div className='campare18'>
                                        <img src={img4} alt="" />
                                        <p>19</p>
                                        <p>Engineering</p>
                                    </div>

                                </div>

                                <div>
                                    <h6>College Highlights :</h6>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img5} alt="" />
                                            <p>Institution Type</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>Private</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img6} alt="" />
                                            <p>Total Faculty</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>500</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img7} alt="" />
                                            <p>Year of Establishment</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>2003</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img8} alt="" />
                                            <p>Gender Accepted</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>CO- Ed</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img9} alt="" />
                                            <p>Student Enrollment</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>21306</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img10} alt="" />
                                            <p>Campus Area</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>1000 Acres</p>
                                        </div>
                                    </div>

                                </div>

                                <div>
                                    <h6>College Details :</h6>
                                    <ul>
                                        <li>Asia Pacific placement 2023 records the highest CTC of INR 25 LPA.</li>
                                        <li>Asia Pacific Welcomes a Team from Applied Science University for the German student exchange program.</li>
                                        <li>A Global Webinar on "E-Literature Explorations of Literary Creativity" is Hosted by Asia Pacific.</li>
                                        <li>UGC notifies AMU and Asia Pacific in writing that CUET scores are required for undergraduate admission in all central universities.</li>
                                        <li>Asia Pacific and the Taiwan Economic Culture Center team up to improve academic cooperation.</li>
                                        <li>Asia PacificIslamia conducted Entrepreneurship Development Program.</li>
                                        <li>In the upcoming session, Jamia intends to offer dual degrees, online education, and FYUP.</li>
                                        <li>The University was recognised as a central university on December 26, 1988.</li>
                                        <li>In 1962, Asia Pacific Islamia University was declared a “deemed to be university” by the University Grants Commission.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='campare14'>
                                <hr />
                            </div>
                            <div className='campare13'>
                                <div>
                                    <h6>Placement:</h6>
                                    <ul>
                                        <li>Asia pacific placement 2023 records the highest CTC of INR 25 LPA</li>
                                        <li>Asia pacific conducted Entrepreneurship Development Program.</li>
                                        <li>Over all 90% placements from all branches</li>
                                    </ul>
                                </div>

                                <div>
                                    <h6>Fees :</h6>
                                    <div className='campare15'>
                                        <p>B. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>4 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>MBA</p>
                                        <p>₹ 113,00</p>
                                        <p>2 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>M. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>2 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>B. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>4 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>B. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>4 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>B. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>4 Years</p>
                                    </div>
                                </div>

                                <div>
                                    <h6>Infrastructure :</h6>
                                    <ul>
                                        <li>Asia pacific placement 2023 records the highest CTC of INR 25 LPA</li>
                                        <li>Asia pacific conducted Entrepreneurship Development Program.</li>
                                        <li>Over all 90% placements from all branches</li>
                                    </ul>
                                </div>
                                <div>
                                    <h6>Courses Offered :</h6>
                                    <div className='campare16'>
                                        <p>B. Tech</p>
                                        <p>MBA</p>
                                        <p>M. Tech</p>
                                        <p>PGD</p>
                                        <p>BSC</p>
                                        <p>MSW</p>
                                    </div>
                                    <div className='campare166'>
                                        <p>BA</p>
                                        <p>MA</p>
                                        <p>Msc</p>
                                        <p>BJMC</p>
                                    </div>
                                </div>
                                <div>
                                    <h6>Accepted Entrance Exam :</h6>
                                    <div className='campare166'>
                                        <p>JEE</p>
                                        <p>JEE(A)</p>
                                        <p>EAMCET</p>
                                    </div>
                                </div>
                                <div>
                                    <h6>College Ranking :</h6>
                                    <div className='campare17'>
                                        <div>
                                            Ranking
                                        </div>
                                        <div>
                                            Publisher
                                        </div>
                                        <div>
                                            Stream
                                        </div>
                                    </div>
                                    <div className='campare18'>
                                        <img src={img4} alt="" />
                                        <p>19</p>
                                        <p>Engineering</p>
                                    </div>
                                    <div className='campare18'>
                                        <img src={img4} alt="" />
                                        <p>19</p>
                                        <p>Engineering</p>
                                    </div>
                                    <div className='campare18'>
                                        <img src={img4} alt="" />
                                        <p>19</p>
                                        <p>Engineering</p>
                                    </div>

                                </div>

                                <div>
                                    <h6>College Highlights :</h6>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img5} alt="" />
                                            <p>Institution Type</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>Private</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img6} alt="" />
                                            <p>Total Faculty</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>500</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img7} alt="" />
                                            <p>Year of Establishment</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>2003</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img8} alt="" />
                                            <p>Gender Accepted</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>CO- Ed</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img9} alt="" />
                                            <p>Student Enrollment</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>21306</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img10} alt="" />
                                            <p>Campus Area</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>1000 Acres</p>
                                        </div>
                                    </div>

                                </div>

                                <div>
                                    <h6>College Details :</h6>
                                    <ul>
                                        <li>Asia Pacific placement 2023 records the highest CTC of INR 25 LPA.</li>
                                        <li>Asia Pacific Welcomes a Team from Applied Science University for the German student exchange program.</li>
                                        <li>A Global Webinar on "E-Literature Explorations of Literary Creativity" is Hosted by Asia Pacific.</li>
                                        <li>UGC notifies AMU and Asia Pacific in writing that CUET scores are required for undergraduate admission in all central universities.</li>
                                        <li>Asia Pacific and the Taiwan Economic Culture Center team up to improve academic cooperation.</li>
                                        <li>Asia PacificIslamia conducted Entrepreneurship Development Program.</li>
                                        <li>In the upcoming session, Jamia intends to offer dual degrees, online education, and FYUP.</li>
                                        <li>The University was recognised as a central university on December 26, 1988.</li>
                                        <li>In 1962, Asia Pacific Islamia University was declared a “deemed to be university” by the University Grants Commission.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='campare14'>
                                <hr />
                            </div>
                            <div className='campare13'>
                                <div>
                                    <h6>Placement:</h6>
                                    <ul>
                                        <li>Asia pacific placement 2023 records the highest CTC of INR 25 LPA</li>
                                        <li>Asia pacific conducted Entrepreneurship Development Program.</li>
                                        <li>Over all 90% placements from all branches</li>
                                    </ul>
                                </div>

                                <div>
                                    <h6>Fees :</h6>
                                    <div className='campare15'>
                                        <p>B. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>4 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>MBA</p>
                                        <p>₹ 113,00</p>
                                        <p>2 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>M. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>2 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>B. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>4 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>B. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>4 Years</p>
                                    </div>
                                    <div className='campare15'>
                                        <p>B. Tech</p>
                                        <p>₹ 113,00</p>
                                        <p>4 Years</p>
                                    </div>
                                </div>

                                <div>
                                    <h6>Infrastructure :</h6>
                                    <ul>
                                        <li>Asia pacific placement 2023 records the highest CTC of INR 25 LPA</li>
                                        <li>Asia pacific conducted Entrepreneurship Development Program.</li>
                                        <li>Over all 90% placements from all branches</li>
                                    </ul>
                                </div>
                                <div>
                                    <h6>Courses Offered :</h6>
                                    <div className='campare16'>
                                        <p>B. Tech</p>
                                        <p>MBA</p>
                                        <p>M. Tech</p>
                                        <p>PGD</p>
                                        <p>BSC</p>
                                        <p>MSW</p>
                                    </div>
                                    <div className='campare166'>
                                        <p>BA</p>
                                        <p>MA</p>
                                        <p>Msc</p>
                                        <p>BJMC</p>
                                    </div>
                                </div>
                                <div>
                                    <h6>Accepted Entrance Exam :</h6>
                                    <div className='campare166'>
                                        <p>JEE</p>
                                        <p>JEE(A)</p>
                                        <p>EAMCET</p>
                                    </div>
                                </div>
                                <div>
                                    <h6>College Ranking :</h6>
                                    <div className='campare17'>
                                        <div>
                                            Ranking
                                        </div>
                                        <div>
                                            Publisher
                                        </div>
                                        <div>
                                            Stream
                                        </div>
                                    </div>
                                    <div className='campare18'>
                                        <img src={img4} alt="" />
                                        <p>19</p>
                                        <p>Engineering</p>
                                    </div>
                                    <div className='campare18'>
                                        <img src={img4} alt="" />
                                        <p>19</p>
                                        <p>Engineering</p>
                                    </div>
                                    <div className='campare18'>
                                        <img src={img4} alt="" />
                                        <p>19</p>
                                        <p>Engineering</p>
                                    </div>

                                </div>

                                <div>
                                    <h6>College Highlights :</h6>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img5} alt="" />
                                            <p>Institution Type</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>Private</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img6} alt="" />
                                            <p>Total Faculty</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>500</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img7} alt="" />
                                            <p>Year of Establishment</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>2003</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img8} alt="" />
                                            <p>Gender Accepted</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>CO- Ed</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img9} alt="" />
                                            <p>Student Enrollment</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>21306</p>
                                        </div>
                                    </div>

                                    <div className='campare19'>
                                        <div className='campare20'>
                                            <img src={img10} alt="" />
                                            <p>Campus Area</p>
                                        </div>
                                        <div className='campare20'>
                                            <p>1000 Acres</p>
                                        </div>
                                    </div>

                                </div>

                                <div>
                                    <h6>College Details :</h6>
                                    <ul>
                                        <li>Asia Pacific placement 2023 records the highest CTC of INR 25 LPA.</li>
                                        <li>Asia Pacific Welcomes a Team from Applied Science University for the German student exchange program.</li>
                                        <li>A Global Webinar on "E-Literature Explorations of Literary Creativity" is Hosted by Asia Pacific.</li>
                                        <li>UGC notifies AMU and Asia Pacific in writing that CUET scores are required for undergraduate admission in all central universities.</li>
                                        <li>Asia Pacific and the Taiwan Economic Culture Center team up to improve academic cooperation.</li>
                                        <li>Asia PacificIslamia conducted Entrepreneurship Development Program.</li>
                                        <li>In the upcoming session, Jamia intends to offer dual degrees, online education, and FYUP.</li>
                                        <li>The University was recognised as a central university on December 26, 1988.</li>
                                        <li>In 1962, Asia Pacific Islamia University was declared a “deemed to be university” by the University Grants Commission.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='campare21'>

                        </div>
                    </div>


                ) : (
                    ""
                )}




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

export default Compare;
