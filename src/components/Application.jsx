import React, { useState } from "react";
import TopNavbar from './TopNavbar'
import MobileLoanNavbar from "./MobileLoanNavabr";
import Sidebar2 from "./Sidebar2";
import Footer from "./Footer";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import location from '../Images/loaction.png'
import common2 from '../Images/common1.png'
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';


const StarRating = ({ rating }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            const isFilled = i < rating;
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    color={isFilled ? '#ffd700' : '#ccc'}
                />
            );
        }
        return stars;
    };

    return <div>{renderStars()}</div>;
};
const Application = () => {
    const navigate = useNavigate()
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow2(false);
    const handleShow = () => setShow2(true);
    return (
        <>
            <div className="schro">
                <TopNavbar />
            </div>
            <div className="home100">
                <i class="fa-solid fa-bars" onClick={handleShow}></i>
            </div>

            <div className="profile1">
                <div className="profile2">
                    <Sidebar2 />
                </div>
                <div className="profile3">
                    <div className="application123">
                        <div className='shortli6'>
                            <p>College Selected (1)</p>
                            <div className="shortli1">
                                <img src={common2} alt="" />
                                <div className='shortli9'>
                                    <div className="common3">
                                        <h1>Parul University Vaddora (PUV)</h1>
                                        <div className="shortli3"><StarRating rating={5} />
                                            <div className="shortli4">
                                                <img src={location} alt="" />
                                                <p>Vaddora</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='shortli10'>
                                        <RiDeleteBin6Fill />
                                        <FaEdit />
                                    </div>
                                </div>

                            </div>
                            <div className="shortli1">
                                <img src={common2} alt="" />
                                <div className='shortli9'>
                                    <div className="common3">
                                        <h1>Jamia Islamiyah University (JIU)</h1>
                                        <div className="shortli3"><StarRating rating={5} />
                                            <div className="shortli4">
                                                <img src={location} alt="" />
                                                <p>Vaddora</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='shortli10'>
                                        <RiDeleteBin6Fill />
                                        <FaEdit />
                                    </div>
                                </div>

                            </div>
                            <hr />
                            <div className="shortli5544">
                                <button>Add  More</button>
                                <button onClick={() => navigate("/cart")} >Next</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
            <Offcanvas show={show2} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <MobileLoanNavbar />
                    <Sidebar2 />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Application
