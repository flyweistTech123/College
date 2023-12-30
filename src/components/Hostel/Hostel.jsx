import React, { useState, useEffect } from "react";
import './Hostel.css'
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../Footer";
import TopNavbar from "../TopNavbar";
import Sidebar3 from "../Sidebar3";
import host from '../../Images/hostles.png'
import image1 from '../../Images/hostel2.png'
import image2 from '../../Images/hostel3.png'
import CardWithSlider from "./hostelcard";
const Hostel = () => {
    const navigate = useNavigate();
    const [slideShow2, setSlideShow2] = useState(8);
    useEffect(() => {
        if (window.innerWidth < 800) {
            setSlideShow2(3);
        } else if (window.innerWidth > 800 && window.innerWidth < 1100) {
            setSlideShow2(3);
        } else setSlideShow2(8);
    });
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };

    const settings3 = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: slideShow2,
        slidesToScroll: 1,
        autoplay: true,
    };

    const [showNavbar, setShowNavbar] = useState(false);
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow2(false);
    const handleShow = () => setShow2(true);
    const [show3, setShow3] = useState(false);
    const images = [image1, image2, image1];

    function NavMenu() {
        return (
            <>
                <div className="menu1">
                    <h3>Top Universities</h3>
                    <div className="menu2">
                        <div className="menu3">
                            <h6>Delhi</h6>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div className="menu4"></div>
                        <div className="menu3">
                            <h6>Mumbai</h6>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div className="menu4"></div>
                        <div className="menu3">
                            <h6>Chennai</h6>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div className="menu4"></div>
                        <div className="menu3">
                            <h6>Bangalore</h6>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                            <p>Lorem Ipsum</p>
                        </div>
                        <div className="menu4"></div>
                    </div>
                </div>
            </>
        );
    }

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
                    <img src={host} />
                </div>
                <div className="schro1">
                    <div className="home100">
                        <i class="fa-solid fa-bars" onClick={handleShow}></i>
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
            <div className="schro5">
                <div className="screen2">
                    <Sidebar3 />
                </div>

                <div className="hostel29">
                    <h1>Top Hostels </h1>

                    <div className="hostel28">
                        <CardWithSlider
                            images={images}
                        />
                          <CardWithSlider
                            images={images}
                        />
                          <CardWithSlider
                            images={images}
                        />
                    </div>
                    <div className="hostel28">
                        <CardWithSlider
                            images={images}
                        />
                          <CardWithSlider
                            images={images}
                        />
                          <CardWithSlider
                            images={images}
                        />
                    </div>
                    <div className="hostel28">
                        <CardWithSlider
                            images={images}
                        />
                          <CardWithSlider
                            images={images}
                        />
                          <CardWithSlider
                            images={images}
                        />
                    </div>
                </div>
            </div>


            <div className="schro24">
            </div>
            <Footer />
        </>
    );
};

export default Hostel;
