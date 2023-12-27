import React, {useState} from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import TopPart from "./TopPart";
import Footer from "./Footer";


import img8 from "../Images/c57.png";
import img9 from "../Images/c58.png";


import MobileLoanNavbar from "./MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';

const CutOff = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
  return (
    <>
      <div className="loan100">
        <i class="fa-solid fa-bars" onClick={handleShow}></i>
      </div>
      <Navbar />
      <Banner />
      <TopPart />
      <div className="clg14">
        <div className="clg15">
          <div className="clg36">
            <h2>JMI Latest Update</h2>
            <div className="clg37">
              <ul>
                <li>
                  JMI will not follow the 10% EWS quota reservation said HC.
                </li>
                <li>
                  JMI has decided to conduct an Entrance exam under CUET for 20
                  courses.
                </li>
                <li>
                  JMI UG, PG, and Diploma Admission 2023 has begun. The
                  admission deadline is extended to April 20, 2023.
                </li>
                <li>
                  JMI Admission 2023 is open for Phd under AICTE Scheme. The
                  last date to apply is March 25, 2023.
                </li>
                <li>
                  JMI Admission 2023 is open for Phd under AICTE Scheme. The
                  last date to apply is March 25, 2023.
                </li>
                <li>
                  JMI Admission 2023 is open for Phd under AICTE Scheme. The
                  last date to apply is March 25, 2023.
                </li>
              </ul>
              <p>Jamia Millia Islamia University offers various undergraduate, postgraduate, diploma, and 
                PhD courses in a wide range of disciplines including Arts, Science, Commerce, Hospitality, 
                Technology, Management, Architecture, Education, Polytechnic and many others. Besides its Nine 
                faculties, the Jamia has a number of centres of learning and research, like AJK-Mass 
                Communication Research Centre (MCRC), Academy of International Studies etc.
From the academic year 2022, the university will offer admission on the basis of the Common University 
Entrance Test (CUET) to 10 undergraduate courses. Admission to B.Tech and B.Arch courses are offered through 
JEE Mains score. For all other courses, JMI conducts its own entrance test, along with an interview (for some courses).
JMI is Highly Ranked and well-known for its 100% placement rate in all programs and courses. 
Jamia Millia Islamia University will offer several new courses from the academic session 2022.</p>
            </div>
          </div>
        <div className="clg38">
            <h3>Table Of Content</h3>
            <hr />
            <div className="clg39">
                <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                     ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos.
                </p>
                <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                     ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos.
                </p>
                <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                     ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos.
                </p>
                <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                     ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos.
                </p>
            </div>
        </div>
        <div className="clg38">
            <h3>Jamia Millia Islamia, New Delhi Highlights</h3>
            <hr />
            <div className="clg39">
                <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                     ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos.
                </p>
                <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                     ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos.
                </p>
                <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                     ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos.
                </p>
                <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                     ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos.
                </p>
            </div>
        </div>
        <div className="clg38">
            <h3>Jamia Millia Islamia, Placement Cell</h3>
            <hr />
            <div className="clg39">
                <p>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit 
                    interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per 
                    conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum
                     lobortis. Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero 
                     et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora 
                     torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis 
                     condimentum lobortis.Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc 
                     vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu 
                     ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at 
                     turpis condimentum lobortis.Torem ipsum dolor sit amet, consectetur adipiscing elit. 
                     Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti 
                     sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus 
                     urna at turpis condimentum lobortis.Torem ipsum dolor sit amet, consectetur adipiscing 
                     elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent 
                     taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur 
                     tempus urna at turpis condimentum lobortis.Torem ipsum dolor sit amet, consectetur 
                     adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class 
                     aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
                     Curabitur tempus urna at turpis condimentum lobortis.Torem ipsum dolor sit amet, 
                     consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio
                      mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                      himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Torem ipsum dolor sit 
                      amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet 
                      odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per 
                      inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Torem ipsum 
                      dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, 
                      ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia 
                      nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                      Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit 
                      interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per 
                      conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum 
                      lobortis.</p>
            </div>
        </div>
        <div className="clg38">
            <h3>Jamia Millia Islamia Placement Process</h3>
            <hr />
            <div className="clg39">
                <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                     ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos.
                </p>
                <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                     ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos.
                </p>
                <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                     ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos.
                </p>
                <p>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum,
                     ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                      inceptos himenaeos.
                </p>
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
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35" style={{ paddingBottom: "20px" }}>
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
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
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35" style={{ paddingBottom: "20px" }}>
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
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
  );
};

export default CutOff;
