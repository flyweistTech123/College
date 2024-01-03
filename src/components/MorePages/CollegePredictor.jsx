import React, { useState } from "react";
import './CollegePredictor.css'
import { useNavigate } from "react-router-dom";
import TopPart3 from "../TopPart3";
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from "../TopNavbar";
import moke from '../../Images/predictor.png'
import clg from '../../Images/IIT.png'
import clg1 from '../../Images/IIT2.png'

const Predictor = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/predict_now')
  }

  return (
    <>
      <div className="app1">
        <div className="schro">
          <TopNavbar />
        </div>
        <div className="app6">
          <img src={moke} />
        </div>
        <div className="schro1">
          <div className="home100">
            <i class="fa-solid fa-bars" ></i>
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
      <TopPart3 />

      <div className="predictor1">
        <h1>
          College Predictor 2024 for jee main , neet ,du and other
          Top universities and exams
        </h1>

        <div className="predictor2">
          <div className="predictor3">
            <label htmlFor="">Your Entrance Exam</label>
            <select>
              <option value="english">Select Course</option>
              <option value="hindi">Hindi</option>
              <option value="germany">Germany</option>
            </select>
          </div>
          <div className="predictor3">
            <label htmlFor="">Your Score</label>
            <input type="text" name="" id="" placeholder="Enter Score" />
          </div>
          <div className="predictor3">
            <label htmlFor="">Year of Exam</label>
            <select>
              <option value="english">Select Exam / University</option>
              <option value="hindi">Hindi</option>
              <option value="germany">Germany</option>
            </select>
          </div>
        </div>
        <div className="tst3">
          <button>Find College</button>
        </div>
      </div>

      <div className="predictor4">
        <div className="predictor5">
          <div className="predictor6">
            <img src={clg} alt="" />
            <h5>JEE Advance 2024 College Predictor</h5>
          </div>
          <div className="predictor7">
            <div className="predictor8">
              <div>
                <p>Colleges Participating</p>
                <span>220</span>
              </div>
              <div className='predictor9'>
                <hr className='vertical-line' />
              </div>

            </div>

            <div className="predictor8">
              <div>
              <p>Exam Date</p>
              <span>Dec 05,2023</span>
              </div>
              <div className='predictor9'>
                <hr className='vertical-line' />
              </div>
            </div>
            <div className="predictor8">
              <div>
              <p>Exam Level</p>
              <span>National</span>
              </div>             
            </div>
          </div>

          <div>
            <hr />
          </div>

          <div className="predictor7">
            <div className="predictor8">
              <p>Exam Info</p>
            </div>
            <div className="predictor8">
              <p>Cutoff</p>
            </div>
            <div className="predictor8">
              <p>Practice Tests</p>
            </div>
            <div className="predictor8">
              <span onClick={handleClick}>Predict Now</span>
            </div>
          </div>
        </div>
        <div className="predictor5">
          <div className="predictor6">
            <img src={clg1} alt="" />
            <h5>JEE Advance 2024 College Predictor</h5>
          </div>
          <div className="predictor7">
            <div className="predictor8">
              <div>
                <p>Colleges Participating</p>
                <span>220</span>
              </div>
              <div className='predictor9'>
                <hr className='vertical-line' />
              </div>

            </div>

            <div className="predictor8">
              <div>
              <p>Exam Date</p>
              <span>Dec 05,2023</span>
              </div>
              <div className='predictor9'>
                <hr className='vertical-line' />
              </div>
            </div>
            <div className="predictor8">
              <div>
              <p>Exam Level</p>
              <span>National</span>
              </div>             
            </div>
          </div>

          <div>
            <hr />
          </div>

          <div className="predictor7">
            <div className="predictor8">
              <p>Exam Info</p>
            </div>
            <div className="predictor8">
              <p>Cutoff</p>
            </div>
            <div className="predictor8">
              <p>Practice Tests</p>
            </div>
            <div className="predictor8">
              <span>Predict Now</span>
            </div>
          </div>
        </div>
        <div className="predictor5">
          <div className="predictor6">
            <img src={clg} alt="" />
            <h5>JEE Advance 2024 College Predictor</h5>
          </div>
          <div className="predictor7">
            <div className="predictor8">
              <div>
                <p>Colleges Participating</p>
                <span>220</span>
              </div>
              <div className='predictor9'>
                <hr className='vertical-line' />
              </div>

            </div>

            <div className="predictor8">
              <div>
              <p>Exam Date</p>
              <span>Dec 05,2023</span>
              </div>
              <div className='predictor9'>
                <hr className='vertical-line' />
              </div>
            </div>
            <div className="predictor8">
              <div>
              <p>Exam Level</p>
              <span>National</span>
              </div>             
            </div>
          </div>

          <div>
            <hr />
          </div>

          <div className="predictor7">
            <div className="predictor8">
              <p>Exam Info</p>
            </div>
            <div className="predictor8">
              <p>Cutoff</p>
            </div>
            <div className="predictor8">
              <p>Practice Tests</p>
            </div>
            <div className="predictor8">
              <span  onClick={handleClick}>Predict Now</span>
            </div>
          </div>
        </div>
      </div>
      <div className="predictor4">
        <div className="predictor5">
          <div className="predictor6">
            <img src={clg} alt="" />
            <h5>JEE Advance 2024 College Predictor</h5>
          </div>
          <div className="predictor7">
            <div className="predictor8">
              <div>
                <p>Colleges Participating</p>
                <span>220</span>
              </div>
              <div className='predictor9'>
                <hr className='vertical-line' />
              </div>

            </div>

            <div className="predictor8">
              <div>
              <p>Exam Date</p>
              <span>Dec 05,2023</span>
              </div>
              <div className='predictor9'>
                <hr className='vertical-line' />
              </div>
            </div>
            <div className="predictor8">
              <div>
              <p>Exam Level</p>
              <span>National</span>
              </div>             
            </div>
          </div>

          <div>
            <hr />
          </div>

          <div className="predictor7">
            <div className="predictor8">
              <p>Exam Info</p>
            </div>
            <div className="predictor8">
              <p>Cutoff</p>
            </div>
            <div className="predictor8">
              <p>Practice Tests</p>
            </div>
            <div className="predictor8">
              <span  onClick={handleClick}>Predict Now</span>
            </div>
          </div>
        </div>
        <div className="predictor5">
          <div className="predictor6">
            <img src={clg1} alt="" />
            <h5>JEE Advance 2024 College Predictor</h5>
          </div>
          <div className="predictor7">
            <div className="predictor8">
              <div>
                <p>Colleges Participating</p>
                <span>220</span>
              </div>
              <div className='predictor9'>
                <hr className='vertical-line' />
              </div>

            </div>

            <div className="predictor8">
              <div>
              <p>Exam Date</p>
              <span>Dec 05,2023</span>
              </div>
              <div className='predictor9'>
                <hr className='vertical-line' />
              </div>
            </div>
            <div className="predictor8">
              <div>
              <p>Exam Level</p>
              <span>National</span>
              </div>             
            </div>
          </div>

          <div>
            <hr />
          </div>

          <div className="predictor7">
            <div className="predictor8">
              <p>Exam Info</p>
            </div>
            <div className="predictor8">
              <p>Cutoff</p>
            </div>
            <div className="predictor8">
              <p>Practice Tests</p>
            </div>
            <div className="predictor8">
              <span  onClick={handleClick}>Predict Now</span>
            </div>
          </div>
        </div>
        <div className="predictor5">
          <div className="predictor6">
            <img src={clg} alt="" />
            <h5>JEE Advance 2024 College Predictor</h5>
          </div>
          <div className="predictor7">
            <div className="predictor8">
              <div>
                <p>Colleges Participating</p>
                <span>220</span>
              </div>
              <div className='predictor9'>
                <hr className='vertical-line' />
              </div>

            </div>

            <div className="predictor8">
              <div>
              <p>Exam Date</p>
              <span>Dec 05,2023</span>
              </div>
              <div className='predictor9'>
                <hr className='vertical-line' />
              </div>
            </div>
            <div className="predictor8">
              <div>
              <p>Exam Level</p>
              <span>National</span>
              </div>             
            </div>
          </div>

          <div>
            <hr />
          </div>

          <div className="predictor7">
            <div className="predictor8">
              <p>Exam Info</p>
            </div>
            <div className="predictor8">
              <p>Cutoff</p>
            </div>
            <div className="predictor8">
              <p>Practice Tests</p>
            </div>
            <div className="predictor8">
              <span  onClick={handleClick}>Predict Now</span>
            </div>
          </div>
        </div>
      </div>

      <div className="loan21">
      </div>
      <div className="predictor4">
        <div className="predictor5">
          <div className="predictor6">
            <img src={clg} alt="" />
            <h5>JEE Advance 2024 College Predictor</h5>
          </div>
          <div className="predictor7">
            <div className="predictor8">
              <div>
                <p>Colleges Participating</p>
                <span>220</span>
              </div>
              <div className='predictor9'>
                <hr className='vertical-line' />
              </div>

            </div>

            <div className="predictor8">
              <div>
              <p>Exam Date</p>
              <span>Dec 05,2023</span>
              </div>
              <div className='predictor9'>
                <hr className='vertical-line' />
              </div>
            </div>
            <div className="predictor8">
              <div>
              <p>Exam Level</p>
              <span>National</span>
              </div>             
            </div>
          </div>

          <div>
            <hr />
          </div>

          <div className="predictor7">
            <div className="predictor8">
              <p>Exam Info</p>
            </div>
            <div className="predictor8">
              <p>Cutoff</p>
            </div>
            <div className="predictor8">
              <p>Practice Tests</p>
            </div>
            <div className="predictor8">
              <span  onClick={handleClick}>Predict Now</span>
            </div>
          </div>
        </div>
        <div className="predictor5">
          <div className="predictor6">
            <img src={clg1} alt="" />
            <h5>JEE Advance 2024 College Predictor</h5>
          </div>
          <div className="predictor7">
            <div className="predictor8">
              <div>
                <p>Colleges Participating</p>
                <span>220</span>
              </div>
              <div className='predictor9'>
                <hr className='vertical-line' />
              </div>

            </div>

            <div className="predictor8">
              <div>
              <p>Exam Date</p>
              <span>Dec 05,2023</span>
              </div>
              <div className='predictor9'>
                <hr className='vertical-line' />
              </div>
            </div>
            <div className="predictor8">
              <div>
              <p>Exam Level</p>
              <span>National</span>
              </div>             
            </div>
          </div>

          <div>
            <hr />
          </div>

          <div className="predictor7">
            <div className="predictor8">
              <p>Exam Info</p>
            </div>
            <div className="predictor8">
              <p>Cutoff</p>
            </div>
            <div className="predictor8">
              <p>Practice Tests</p>
            </div>
            <div className="predictor8">
              <span  onClick={handleClick}>Predict Now</span>
            </div>
          </div>
        </div>
        <div className="predictor5">
          <div className="predictor6">
            <img src={clg} alt="" />
            <h5>JEE Advance 2024 College Predictor</h5>
          </div>
          <div className="predictor7">
            <div className="predictor8">
              <div>
                <p>Colleges Participating</p>
                <span>220</span>
              </div>
              <div className='predictor9'>
                <hr className='vertical-line' />
              </div>

            </div>

            <div className="predictor8">
              <div>
              <p>Exam Date</p>
              <span>Dec 05,2023</span>
              </div>
              <div className='predictor9'>
                <hr className='vertical-line' />
              </div>
            </div>
            <div className="predictor8">
              <div>
              <p>Exam Level</p>
              <span>National</span>
              </div>             
            </div>
          </div>

          <div>
            <hr />
          </div>

          <div className="predictor7">
            <div className="predictor8">
              <p>Exam Info</p>
            </div>
            <div className="predictor8">
              <p>Cutoff</p>
            </div>
            <div className="predictor8">
              <p>Practice Tests</p>
            </div>
            <div className="predictor8">
              <span  onClick={handleClick}>Predict Now</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
};

export default Predictor;
