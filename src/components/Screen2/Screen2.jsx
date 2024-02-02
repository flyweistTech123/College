import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Screen2.css'
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from "../TopNavbar";
import { FaSearch } from 'react-icons/fa';
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import img from '../../Images/cardsimg.png'
import Sidebar from "../Sidebar";
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

import { IoFilterOutline } from "react-icons/io5";

import clgimg from '../../Images/asinclg.png'
import scholar from '../../Images/schrolarship12.png'

import tag from '../../Images/tag.png'
import tag1 from '../../Images/tag1.png'



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

      <div className="conatiner_screen2323">
        <div className="">
          <Sidebar />
        </div>


        <div className="now1323">
          <div className="filt1">
            {["Courses", "State", "City", "Stream", "Gender"].map((bank, index) => (
              <div
                key={index}
                className={activeIndex === index ? "filt2" : "filt3"}
                onClick={() => handleFaltu(index)}
              >
                {bank} {<FaAngleDown />}
              </div>
            ))}
          </div>
          <div className="now221">
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


          <div className="now421">
            <div className="filt50">
              <h1>List of Top Colleges In India based on 2023 Ranking</h1>
              <button> <IoFilterOutline /> Popularity <IoIosArrowDown /></button>
            </div>


            <div className="filt40">
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                  <div className="filt80">
                    <img src={tag} alt="" />
                    <p>Featured</p>
                  </div>
                  <div className="filt81">
                    <img src={tag1} alt="" />
                  </div>
                  <div className="filt23">
                    <img src={clgimg} alt="" />
                    <div>
                      <h6>Asia Pacific Institute of Management...Kochi , Kerala. </h6>
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

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
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

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
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

              </div>
            </div>



            <div className="filt40">
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                  <div className="filt80">
                    <img src={tag} alt="" />
                    <p>Featured</p>
                  </div>
                  <div className="filt81">
                    <img src={tag1} alt="" />
                  </div>
                  <div className="filt23">
                    <img src={clgimg} alt="" />
                    <div>
                      <h6>Asia Pacific Institute of Management...Kochi , Kerala. </h6>
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

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
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

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
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

              </div>
            </div>


            <div className="filt40">
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                  <div className="filt80">
                    <img src={tag} alt="" />
                    <p>Featured</p>
                  </div>
                  <div className="filt81">
                    <img src={tag1} alt="" />
                  </div>
                  <div className="filt23">
                    <img src={clgimg} alt="" />
                    <div>
                      <h6>Asia Pacific Institute of Management...Kochi , Kerala. </h6>
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

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
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

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
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

              </div>




            </div>

            <div className="filt41">
              <h1>View colleges in your budget of</h1>
              <div className="filt42">
                {["< 1 Lakh (13)", "1-2 Lakhs(69)", "2-3 Lakhs(34)", "3-5 Lakhs (13)", "> 5 Lakhs(73)"].map((bank, index) => (
                  <div
                    key={index}
                    className={activeIndex === index ? "filt43" : "filt44"}
                    onClick={() => handleFaltu(index)}
                  >
                    {bank}
                  </div>
                ))}
              </div>
            </div>

            <div className="filt40">
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
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                  <div className="filt80">
                    <img src={tag} alt="" />
                    <p>Featured</p>
                  </div>
                  <div className="filt81">
                    <img src={tag1} alt="" />
                  </div>
                  <div className="filt23">
                    <img src={clgimg} alt="" />
                    <div>
                      <h6>Asia Pacific Institute of Management...Kochi , Kerala. </h6>
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                  <div className="filt80">
                    <img src={tag} alt="" />
                    <p>Featured</p>
                  </div>
                  <div className="filt81">
                    <img src={tag1} alt="" />
                  </div>
                  <div className="filt23">
                    <img src={clgimg} alt="" />
                    <div>
                      <h6>Asia Pacific Institute of Management...Kochi , Kerala. </h6>
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

              </div>




            </div>

            <div className="filt40">
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
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

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
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

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
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

              </div>
            </div>



            <div className="filt40">
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                  <div className="filt80">
                    <img src={tag} alt="" />
                    <p>Featured</p>
                  </div>
                  <div className="filt81">
                    <img src={tag1} alt="" />
                  </div>
                  <div className="filt23">
                    <img src={clgimg} alt="" />
                    <div>
                      <h6>Asia Pacific Institute of Management...Kochi , Kerala. </h6>
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

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
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

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
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

              </div>




            </div>

            <div className="filt41">
              <h1>View colleges in your budget of</h1>
              <div className="filt42">
                {["< 1 Lakh (13)", "1-2 Lakhs(69)", "2-3 Lakhs(34)", "3-5 Lakhs (13)", "> 5 Lakhs(73)"].map((bank, index) => (
                  <div
                    key={index}
                    className={activeIndex === index ? "filt43" : "filt44"}
                    onClick={() => handleFaltu(index)}
                  >
                    {bank}
                  </div>
                ))}
              </div>
            </div>

            <div className="filt40">
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                  <div className="filt80">
                    <img src={tag} alt="" />
                    <p>Featured</p>
                  </div>
                  <div className="filt81">
                    <img src={tag1} alt="" />
                  </div>
                  <div className="filt23">
                    <img src={clgimg} alt="" />
                    <div>
                      <h6>Asia Pacific Institute of Management...Kochi , Kerala. </h6>
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                  <div className="filt80">
                    <img src={tag} alt="" />
                    <p>Featured</p>
                  </div>
                  <div className="filt81">
                    <img src={tag1} alt="" />
                  </div>
                  <div className="filt23">
                    <img src={clgimg} alt="" />
                    <div>
                      <h6>Asia Pacific Institute of Management...Kochi , Kerala. </h6>
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

              </div>
              <div className="filt20">
                <div className="filt21">
                  <img src={img} alt="" />
                  <div className="filt22">
                    <h5><i className="fa-solid fa-star"></i> 9.5/10</h5>
                  </div>
                  <div className="filt80">
                    <img src={tag} alt="" />
                    <p>Featured</p>
                  </div>
                  <div className="filt81">
                    <img src={tag1} alt="" />
                  </div>
                  <div className="filt23">
                    <img src={clgimg} alt="" />
                    <div>
                      <h6>Asia Pacific Institute of Management...Kochi , Kerala. </h6>
                      <p> <IoLocation /> Kochi, Kerala | MCI Accredited</p>
                    </div>
                  </div>
                </div>
                <div className="filt30">
                  <div className="filt31">
                    <h6>₹ 13,49,000</h6>
                    <p>MBA/PGDM - 1st year fees</p>
                  </div>
                  <div className="filt31">
                    <h6>NEET,JEE, EAMCET</h6>
                    <p>EXAM Accepted</p>
                  </div>
                </div>


                <div className="filt33">
                  <div className="filt36">
                    <p><span>#7</span> out of 281 in india 2022</p>
                    <p>India Today</p>
                  </div>
                  <div className="filt36">
                    <p><span>#8</span> out of 221 in india 2022</p>
                    <p>India Today</p>
                  </div>
                </div>



                <div className="filt34">
                  <ul>
                    <li>
                      MBBS
                    </li>
                    <li>
                      Admission Open
                    </li>
                    <li>
                      M.Ch
                    </li>
                  </ul>
                </div>
                <div className="filt37">
                  <ul>
                    <li>
                      Course Fee
                    </li>
                    <li>
                      Placements
                    </li>
                  </ul>
                </div>

                <div className="filt35">
                  <div className="filt38">
                    <button>Apply Now</button>
                  </div>
                  <div className="filt39">
                    <button>Brochure</button>
                    <button>Compare</button>
                  </div>
                </div>

              </div>




            </div>

            <div className="filt45">
              <img src={scholar} alt="" />
              <div className="filt46">
                <h1>Upto 100% Scholarships <br />Available</h1>
                <button>Explore Now</button>
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
