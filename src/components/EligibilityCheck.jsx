import React, { useState } from "react";
import LoanNavbar from "./LoanNavbar";
import Footer from "./Footer";
import Loanimg from '../Images/Loan.png'
import img from "../Images/c115.png";
import img2 from "../Images/c64.png";
import img3 from "../Images/c65.png";
import TopNavbar from "./TopNavbar";
import TopPart3 from "./TopPart3";
import { FaCircleQuestion } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const EligibilityCheck = () => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <div className="app1">
        <div className="schro">
          <TopNavbar />
        </div>
        <div className="app6">
          <img src={Loanimg} />
        </div>

        <div className="loan31">
          <div className="loan30">
            <img src={img2} alt="" />
            <h5>Calculate <span>EMI</span></h5>
            <p>Corem ipsum dolor sit amet, consectetur adipiscing </p>
          </div>
          <div className="loan30">
            <img src={img3} alt="" />
            <h5><span>KYE:</span> know your Eligibilty</h5>
            <p>Corem ipsum dolor sit amet, </p>
          </div>
        </div>
        <TopPart3 />
      </div>


      {step === 0 ? (

        <>
          <div className="loan40">
            <div className="loan41">
              <div className="loan42">
                <label htmlFor="">Select the location you want to study.  <FaCircleQuestion color="#797979" /></label>
                <div className="loan43">
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Within India</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Within India</label>
                  </div>
                </div>
              </div>
              <div className="loan42">
                <label htmlFor="">Enter your Gross family annual Income.  <FaCircleQuestion color="#797979" /></label>
                <div className="loan43">
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Up to ₹ 2.5 Lacs</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">₹ 2.51 Lacs to 4 lacs</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">₹ 4.01 Lacs to 6 lacs</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">₹ 6.01 Lacs to 8 lacs</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">More Than ₹8 lacs</label>
                  </div>
                </div>
              </div>
              <div className="loan42">
                <label htmlFor="">Select your social category that help us lead a better scheme for you.  <FaCircleQuestion color="#797979" /></label>
                <div className="loan43">
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">General</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">OBC</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">SC / ST</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Miniority</label>
                  </div>
                </div>
              </div>
              <div className="loan42">
                <label htmlFor="">Select the course you wish to attend.  <FaCircleQuestion color="#797979" /></label>
                <div className="loan43">
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Graduate</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Post - Graduate</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Doctorate</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Others</label>
                  </div>
                </div>
              </div>
              <div className="loan47">
                <div className="loan42">
                  <label htmlFor="">Type in the length of your course  <FaCircleQuestion color="#797979" /></label>
                  <div className="loan45">
                    <input type="text" />
                    <div className="loan46">
                      <IoIosArrowDown color="#000000" size={20} />
                      <p>Years</p>
                    </div>
                  </div>
                </div>
                <div className="loan42">
                  <label htmlFor="">Name of the Course your are planning for</label>
                  <div className="loan45">
                    <input type="text" />
                  </div>
                </div>
              </div>

              <div className="loan42">
                <label htmlFor="">Choose the type of course you are interested in pursuing.  <FaCircleQuestion color="#797979" /></label>
                <div className="loan43">
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Full Time</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Part time</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Distance Learning</label>
                  </div>
                  <div className="loan44">
                    <input type="radio" name="name" id="" />
                    <label htmlFor="">Others</label>
                  </div>
                </div>
              </div>

              <div className="loan42">
                <label htmlFor="">Enter your course fees  <FaCircleQuestion color="#797979" /></label>
                <div className="loan45">
                  <input type="text" />
                  <div className="loan46">
                    {/* <IoIosArrowDown color="#000000" size={20} /> */}
                    <p>INR</p>
                  </div>
                </div>
              </div>

              <div className="loan42">
                <label htmlFor="">Enter the amount you intend to invest by yourself  <FaCircleQuestion color="#797979" /></label>
                <div className="loan45">
                  <input type="text" />
                  <div className="loan46">
                    <p>INR</p>
                  </div>
                </div>
              </div>


              <div className="loan48">
                <p>Required Loan Amount : 3,00,000</p>
              </div>

              <div className="loan49">
                <button onClick={() => setStep(1)}>Calculate Eligibility</button>
              </div>

            </div>
          </div>
        </>
      ) : step === 1 ? (
        <>
          <div className="loan40">
            <div className="loan51">
              <div className="loan52">
                <h5>HELP OUR EXPERTS TO HELP YOU GET EDUCATION LOAN</h5>
                <p>ENTER YOUR DETAILS</p>
              </div>
              <div>
                <div className="loan53">
                  <div className="loan54">
                    <label htmlFor="">YOUR FULL NAME</label>
                    <input type="text" />
                  </div>
                  <div className="loan54">
                    <label htmlFor="">YOUR EMAIL ID</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="loan53">
                  <div className="loan54">
                    <label htmlFor="">YOUR MOBILE NUMBER</label>
                    <input type="text" />
                  </div>
                  <div className="loan54">
                    <label htmlFor="">SELECT A COURSE</label>
                    <div className="loan55">
                      <IoIosArrowDown color="#000000" size={20} />
                    </div>
                  </div>
                </div>
                <div className="loan53">
                  <div className="loan54">
                    <label htmlFor="">SELECT YOUR CITY</label>
                    <div className="loan55">
                      <IoIosArrowDown color="#000000" size={20} />
                    </div>
                  </div>
                  <div className="loan54">
                    <label htmlFor="">SELECT A BANK</label>
                    <div className="loan55">
                      <IoIosArrowDown color="#000000" size={20} />
                    </div>
                  </div>
                </div>
              </div>


              <div className="loan56">
                <p>Any loan availed so far</p>
                <div className="loan57">
                  <button>Yes</button>
                  <button>No</button>
                </div>
              </div>

              <div className="loan58">
                <h6>We may take upto 24 Hrs to get back <span>if delayed reach us at : 885203201250</span></h6>
              </div>

              <div className="loan60">
                <button onClick={()=>navigate('/loan')}>Submit</button>
              </div>
            </div>
          </div>
        </>


      ) : (

        " "
      )}



      <div className="loan50">

      </div>
      <Footer />
    </>
  );
};

export default EligibilityCheck;
