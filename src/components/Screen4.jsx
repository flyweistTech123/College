import React, {useState} from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import img from "../Images/c31.png";
import img2 from "../Images/c32.png";
import img3 from "../Images/c24.png";
import Offcanvas from 'react-bootstrap/Offcanvas';

const Screen4 = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar />
      <div className="screen1">
        <div className="screen20">
          <i class="fa-solid fa-bars" onClick={handleShow}></i>
        </div>
        <div className="screen2">
          <Sidebar />
        </div>
        <div className="screenmid">
          <hr />
        </div>
        <div className="screen3">
          <div className="screen4">
            <h1>List of Top Colleges in Management</h1>
            <div className="screen5">
              <i class="fa-solid fa-bars fab1"></i>
              <p>Popularity</p>
              <i class="fa-solid fa-angle-down fab2"></i>
            </div>
          </div>
          <div className="screen6">
            <div className="screen7">
              <img src={img} alt="" />
              <div className="screen8">
                <h6>St. Thomas College of Arts & Science</h6>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Kochi, Kerala | MCI
                  Accredited
                </p>
              </div>
              <div className="screen9">
                <ul className="screen10">
                  <li>Course Fee</li>
                  <li>Admission</li>
                  <li>MBBS</li>
                  <li>M.Ch</li>
                </ul>
                <div className="screen11">
                  <p>100 yearly</p>
                  <p>Open</p>
                </div>
              </div>
              <div className="screen12">
                <button className="screen13">Apply Now</button>
                <button className="screen14">Brochure</button>
              </div>
            </div>
            <div className="screen7">
              <img src={img2} alt="" />
              <div className="screen8">
                <h6>Loyola College of Chennai</h6>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Kochi, Kerala | MCI
                  Accredited
                </p>
              </div>
              <div className="screen9">
                <ul className="screen10">
                  <li>Course Fee</li>
                  <li>Admission</li>
                  <li>MBBS</li>
                  <li>M.Ch</li>
                </ul>
                <div className="screen11">
                  <p>100 yearly</p>
                  <p>Open</p>
                </div>
              </div>
              <div className="screen12">
                <button className="screen13">Apply Now</button>
                <button className="screen14">Brochure</button>
              </div>
            </div>
            <div className="screen7">
              <img src={img3} alt="" />
              <div className="screen8">
                <h6>Amrita School of Medicine</h6>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Kochi, Kerala | MCI
                  Accredited
                </p>
              </div>
              <div className="screen9">
                <ul className="screen10">
                  <li>Course Fee</li>
                  <li>Admission</li>
                  <li>MBBS</li>
                  <li>M.Ch</li>
                </ul>
                <div className="screen11">
                  <p>100 yearly</p>
                  <p>Open</p>
                </div>
              </div>
              <div className="screen12">
                <button className="screen13">Apply Now</button>
                <button className="screen14">Brochure</button>
              </div>
            </div>
            <div className="screen7">
              <img src={img} alt="" />
              <div className="screen8">
                <h6>Amrita School of Medicine</h6>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Kochi, Kerala | MCI
                  Accredited
                </p>
              </div>
              <div className="screen9">
                <ul className="screen10">
                  <li>Course Fee</li>
                  <li>Admission</li>
                  <li>MBBS</li>
                  <li>M.Ch</li>
                </ul>
                <div className="screen11">
                  <p>100 yearly</p>
                  <p>Open</p>
                </div>
              </div>
              <div className="screen12">
                <button className="screen13">Apply Now</button>
                <button className="screen14">Brochure</button>
              </div>
            </div>
            <div className="screen7">
              <img src={img} alt="" />
              <div className="screen8">
                <h6>Amrita School of Medicine</h6>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Kochi, Kerala | MCI
                  Accredited
                </p>
              </div>
              <div className="screen9">
                <ul className="screen10">
                  <li>Course Fee</li>
                  <li>Admission</li>
                  <li>MBBS</li>
                  <li>M.Ch</li>
                </ul>
                <div className="screen11">
                  <p>100 yearly</p>
                  <p>Open</p>
                </div>
              </div>
              <div className="screen12">
                <button className="screen13">Apply Now</button>
                <button className="screen14">Brochure</button>
              </div>
            </div>
            <div className="screen7">
              <img src={img} alt="" />
              <div className="screen8">
                <h6>Amrita School of Medicine</h6>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Kochi, Kerala | MCI
                  Accredited
                </p>
              </div>
              <div className="screen9">
                <ul className="screen10">
                  <li>Course Fee</li>
                  <li>Admission</li>
                  <li>MBBS</li>
                  <li>M.Ch</li>
                </ul>
                <div className="screen11">
                  <p>100 yearly</p>
                  <p>Open</p>
                </div>
              </div>
              <div className="screen12">
                <button className="screen13">Apply Now</button>
                <button className="screen14">Brochure</button>
              </div>
            </div>
            <div className="screen7">
              <img src={img} alt="" />
              <div className="screen8">
                <h6>Amrita School of Medicine</h6>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Kochi, Kerala | MCI
                  Accredited
                </p>
              </div>
              <div className="screen9">
                <ul className="screen10">
                  <li>Course Fee</li>
                  <li>Admission</li>
                  <li>MBBS</li>
                  <li>M.Ch</li>
                </ul>
                <div className="screen11">
                  <p>100 yearly</p>
                  <p>Open</p>
                </div>
              </div>
              <div className="screen12">
                <button className="screen13">Apply Now</button>
                <button className="screen14">Brochure</button>
              </div>
            </div>
            <div className="screen7">
              <img src={img} alt="" />
              <div className="screen8">
                <h6>Amrita School of Medicine</h6>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Kochi, Kerala | MCI
                  Accredited
                </p>
              </div>
              <div className="screen9">
                <ul className="screen10">
                  <li>Course Fee</li>
                  <li>Admission</li>
                  <li>MBBS</li>
                  <li>M.Ch</li>
                </ul>
                <div className="screen11">
                  <p>100 yearly</p>
                  <p>Open</p>
                </div>
              </div>
              <div className="screen12">
                <button className="screen13">Apply Now</button>
                <button className="screen14">Brochure</button>
              </div>
            </div>
            <div className="screen7">
              <img src={img} alt="" />
              <div className="screen8">
                <h6>Amrita School of Medicine</h6>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Kochi, Kerala | MCI
                  Accredited
                </p>
              </div>
              <div className="screen9">
                <ul className="screen10">
                  <li>Course Fee</li>
                  <li>Admission</li>
                  <li>MBBS</li>
                  <li>M.Ch</li>
                </ul>
                <div className="screen11">
                  <p>100 yearly</p>
                  <p>Open</p>
                </div>
              </div>
              <div className="screen12">
                <button className="screen13">Apply Now</button>
                <button className="screen14">Brochure</button>
              </div>
            </div>
            <div className="screen7">
              <img src={img} alt="" />
              <div className="screen8">
                <h6>Amrita School of Medicine</h6>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Kochi, Kerala | MCI
                  Accredited
                </p>
              </div>
              <div className="screen9">
                <ul className="screen10">
                  <li>Course Fee</li>
                  <li>Admission</li>
                  <li>MBBS</li>
                  <li>M.Ch</li>
                </ul>
                <div className="screen11">
                  <p>100 yearly</p>
                  <p>Open</p>
                </div>
              </div>
              <div className="screen12">
                <button className="screen13">Apply Now</button>
                <button className="screen14">Brochure</button>
              </div>
            </div>
            <div className="screen7">
              <img src={img} alt="" />
              <div className="screen8">
                <h6>Amrita School of Medicine</h6>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Kochi, Kerala | MCI
                  Accredited
                </p>
              </div>
              <div className="screen9">
                <ul className="screen10">
                  <li>Course Fee</li>
                  <li>Admission</li>
                  <li>MBBS</li>
                  <li>M.Ch</li>
                </ul>
                <div className="screen11">
                  <p>100 yearly</p>
                  <p>Open</p>
                </div>
              </div>
              <div className="screen12">
                <button className="screen13">Apply Now</button>
                <button className="screen14">Brochure</button>
              </div>
            </div>
            <div className="screen7">
              <img src={img} alt="" />
              <div className="screen8">
                <h6>Amrita School of Medicine</h6>
                <p>
                  <i class="fa-solid fa-location-dot"></i> Kochi, Kerala | MCI
                  Accredited
                </p>
              </div>
              <div className="screen9">
                <ul className="screen10">
                  <li>Course Fee</li>
                  <li>Admission</li>
                  <li>MBBS</li>
                  <li>M.Ch</li>
                </ul>
                <div className="screen11">
                  <p>100 yearly</p>
                  <p>Open</p>
                </div>
              </div>
              <div className="screen12">
                <button className="screen13">Apply Now</button>
                <button className="screen14">Brochure</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>

        </Offcanvas.Header>
        <Offcanvas.Body>
          <Sidebar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Screen4;
