import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Screen2.css'
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from "../TopNavbar";
import { FaSearch } from 'react-icons/fa';
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import img from '../../Images/cardsimg.png'
import star from '../../Images/star.png'
import Sidebar from "../Sidebar";
import { FaAngleDown } from "react-icons/fa";

import clgimg from '../../Images/asinclg.png'



const Screen2 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/tests')
  }

  const [showMore, setShowMore] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleFaltu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <div className="app1">
        <div className="schro">
          <TopNavbar />
        </div>
      </div>




      <div className="now1">
        <div className="screen2">
          <Sidebar />
        </div>



        <div>

          <div className="filt5">
            <div className="filt6">
              <h1>Filters</h1>
              <div className="filt7">

              </div>
            </div>
            <div className="filt1">
              {["Courses", "City", "Stream", "Prototype"].map((bank, index) => (
                <div
                  key={index}
                  className={activeIndex === index ? "filt2" : "filt3"}
                  onClick={() => handleFaltu(index)}
                >
                  {bank} {<FaAngleDown />}
                </div>
              ))}
            </div>
          </div>
          <div className="filt9">
            <div className="filt1">
              {["Type", "State", "Avg Fee", "Affiliation", 'Type'].map((bank, index) => (
                <div
                  key={index}
                  className={activeIndex === index ? "filt2" : "filt3"}
                  onClick={() => handleFaltu(index)}
                >
                  {bank} {<FaAngleDown />}
                </div>
              ))}
            </div>
          </div>


          <div className="now2">
            <div className="search-container12">
              <input
                type="text"
                placeholder="Search for colleges, exams, Q & A, Articles..."
                className="search-input1"
              />
              <div className="search-icon11">
                <FaSearch />
              </div>
            </div>

            <div className="now3">
              <button><FaRegQuestionCircle /> Need Counselling</button>
            </div>
          </div>


          <div className="now4">
            <h1>List of Top Colleges In India based on 2023 Ranking</h1>

            <div className="now20">
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                  <div className="filt23">
                    <img src={clgimg} alt="" />
                    <div>
                      <h6>Asia Pacific Institute of Management...Kochi , Kerala. </h6>
                      <p>Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>

                {/* Other content within the card */}
              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                  <div className="filt23">
                    <img src={clgimg} alt="" />
                    <div>
                      <h6>Asia Pacific Institute of Management...Kochi , Kerala. </h6>
                      <p>Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>

                {/* Other content within the card */}
              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                  <div className="filt23">
                    <img src={clgimg} alt="" />
                    <div>
                      <h6>Asia Pacific Institute of Management...Kochi , Kerala. </h6>
                      <p>Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>

                {/* Other content within the card */}
              </div>

            </div>
            <div className="now20">
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                  <div className="filt23">
                    <img src={clgimg} alt="" />
                    <div>
                      <h6>Asia Pacific Institute of Management...Kochi , Kerala. </h6>
                      <p>Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>

                {/* Other content within the card */}
              </div>

            </div><div className="now20">
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                  <div className="filt23">
                    <img src={clgimg} alt="" />
                    <div>
                      <h6>Asia Pacific Institute of Management...Kochi , Kerala. </h6>
                      <p>Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>

                {/* Other content within the card */}
              </div>

            </div>

          </div>
        </div>
      </div>
      <Footer />

    </>
  );
};

export default Screen2;
