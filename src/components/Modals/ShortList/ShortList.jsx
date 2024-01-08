import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import './ShortList.css'
import location from '../../../Images/loaction.png'
import common2 from '../../../Images/common1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
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


const ShortList = (props) => {

    const navigate = useNavigate()


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>
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
                    <hr />
                    <div className="shortli5">
                        <button>Add  More</button>
                        <button  onClick={() => navigate("/cart")} >Next</button>
                    </div>
                </div>

            </Modal.Body>
        </Modal>
    );
};

export default ShortList;
