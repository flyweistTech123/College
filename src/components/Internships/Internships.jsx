import React, { useState, useEffect } from "react";
import './Internships.css'
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
import TopNavbar from "../TopNavbar";
import intern from '../../Images/Internships.png'
import { FaChevronDown } from "react-icons/fa";
import { BsFilterLeft } from "react-icons/bs";




const Internships = () => {
    const navigate = useNavigate();

    const [showNavbar, setShowNavbar] = useState(false);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow2(false);
    const handleShow = () => setShow2(true);
    const [show3, setShow3] = useState(false);


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
                    <img src={intern} />
                </div>
                <div className="schro1">
                    <div className="home100">
                        <i class="fa-solid fa-bars" onClick={handleShow}></i>
                    </div>
                    <div className="schro2">
                        <h2>Internships In India</h2>
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
                            Search Internships
                        </button>
                    </div>
                </div>
            </div>

            <div className="internships">
                <div className="internships1">
                    <div className="internships2">
                        <p>Internships</p>
                    </div>
                    <div className="internships3">
                        <p>Sort By</p>
                        <FaChevronDown color="#121212" />
                    </div>

                    <div className="internships4">
                        <BsFilterLeft color="#FFFFFF" />
                        <p>All Filters</p>
                        <FaChevronDown color="#FFFFFF" />
                    </div>
                    <div className="internships3">
                        <p>Management</p>
                        <FaChevronDown color="#121212" />
                    </div>
                    <div className="internships3">
                        <p>Type</p>
                        <FaChevronDown color="#121212" />
                    </div>
                    <div className="internships3">
                        <p>Eligibility</p>
                        <FaChevronDown color="#121212" />
                    </div>
                    <div className="internships3">
                        <p>Category</p>
                        <FaChevronDown color="#121212" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Internships;
