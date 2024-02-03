import React, { useState } from 'react'
import TopNavbar from "../TopNavbar";
import Footer from "../Footer";
import Offcanvas from 'react-bootstrap/Offcanvas';
import img1 from '../../Images/campare1.png'
import img3 from '../../Images/rankingclg1.png'
import img2 from '../../Images/campare2.png'
import img4 from '../../Images/camapre3.png'
import { IoSearch } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoDocuments } from "react-icons/io5";
import { BsFillSendFill } from "react-icons/bs";






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
                            <img src={img4} alt="" />
                        </div>
                        <div className='campare10'>
                            <input type="text" placeholder='Search College' />
                            <input type="text" placeholder='Search Course' />
                        </div>
                    </div>
                </div>

                <div className='campare11'>
                    <button>Compare</button>
                </div>

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



                    </div>

                    <div className='campare14'>
                        <hr />
                    </div>
                    <div className='campare13'>
                        <h6>Placement:</h6>
                        <ul>
                            <li>Asia pacific placement 2023 records the highest CTC of INR 25 LPA</li>
                            <li>Asia pacific conducted Entrepreneurship Development Program.</li>
                            <li>Over all 90% placements from all branches</li>
                        </ul>
                    </div>
                    <div className='campare14'>
                        <hr />
                    </div>
                    <div className='campare13'>
                        <h6>Placement:</h6>
                        <ul>
                            <li>Asia pacific placement 2023 records the highest CTC of INR 25 LPA</li>
                            <li>Asia pacific conducted Entrepreneurship Development Program.</li>
                            <li>Over all 90% placements from all branches</li>
                        </ul>
                    </div>
                    <div className='campare14'>
                        <hr />
                    </div>
                    <div className='campare13'>
                        <h6>Placement:</h6>
                        <ul>
                            <li>Asia pacific placement 2023 records the highest CTC of INR 25 LPA</li>
                            <li>Asia pacific conducted Entrepreneurship Development Program.</li>
                            <li>Over all 90% placements from all branches</li>
                        </ul>
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

export default Compare;
