import React, {useState} from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import TopPart from "./TopPart";
import Footer from "./Footer";
import img from "../Images/c79.png";
import img2 from "../Images/c80.png";
import img3 from "../Images/c81.png";
import img4 from "../Images/c82.png";
import img5 from "../Images/c83.png";
import img7 from "../Images/c56.png";
import img8 from "../Images/c57.png";
import img9 from "../Images/c58.png";

import MobileLoanNavbar from "./MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';

const Gallery = ()=>{
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
    return(
        <>
          <div className="loan100">
          <i class="fa-solid fa-bars" onClick={handleShow}></i>
          </div>
            <Navbar />
            <Banner />
            <TopPart />
            <div className="clg14">
                <div className="clg15">
                    <div className="gal1">
                        <h4>Infrastructure Image</h4>
                        <div className="gal2">
                            <div className="gal3">
                                <img src={img} alt="" />
                            </div>
                            <div className="gal4">
                                <img src={img2} alt=""/>
                                <img src={img2} alt=""/>
                            </div>
                        </div>
                        <div className="gal5">
                            <img src={img3} alt="" />
                            <img src={img4} alt="" />
                            <img src={img5} alt="" />
                        </div>
                    </div>
                    <div className="gal1">
                        <h4>Upload Image</h4>
                        <div className="gal2">
                            <div className="gal3">
                                <img src={img} alt="" />
                            </div>
                            <div className="gal4">
                                <img src={img2} alt=""/>
                                <img src={img2} alt=""/>
                            </div>
                        </div>
                        <div className="gal5">
                            <img src={img3} alt="" />
                            <img src={img4} alt="" />
                            <img src={img5} alt="" />
                        </div>
                    </div>
                    <div className="gal1">
                        <h4>Student Upload Image</h4>
                        <div className="gal2">
                            <div className="gal3">
                                <img src={img} alt="" />
                            </div>
                            <div className="gal4">
                                <img src={img2} alt=""/>
                                <img src={img2} alt=""/>
                            </div>
                        </div>
                        <div className="gal5">
                            <img src={img3} alt="" />
                            <img src={img4} alt="" />
                            <img src={img5} alt="" />
                        </div>
                    </div>
                </div>
                <div className="clg16">
          <div className="clg30">
            <div className="clg31">
              <img src={img8} alt="" />
              <p>Are You Interested in College ?</p>
            </div>
            <div className="clg32">
              <button className="clg8">Placement Report</button>
              <button className="clg9">Apply Now</button>
            </div>
          </div>
          <div className="clg30">
            <div className="clg33">
              <h6 className="clg33h6">Featured News</h6>
              <p className="clg33p">Recent News</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
            <hr className="clg34" />
            <div className="clg35" style={{paddingBottom:"20px"}}>
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div> 
          </div>
          <div className="clg30">
            <div className="clg33">
              <h6 className="clg33h6">Trending Articles</h6>
              <p className="clg33p">Recent Articles</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div>
            <hr className="clg34" />
            <div className="clg35" style={{paddingBottom:"20px"}}>
              <img src={img9} alt="" />
              <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit</p>
            </div> 
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
    )
}

export default Gallery;