import React, {useState} from "react";
import './MockTest.css'
import { useNavigate } from "react-router-dom";
import TopPart3 from "../TopPart3";
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import img6 from "../../Images/c38.png";
import img7 from "../../Images/c87.png";
import TopNavbar from "../TopNavbar";
import moke from '../../Images/moketest.png'

const MockTest = () => {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate('/tests')
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
      <div className="tst1">
        <div className="tst2">
          <h4>Select the language for the test </h4>
          <select>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="germany">Germany</option>
          </select>
        </div>
        <div className="tst2">
          <h4>Select Your Exam</h4>
          <select>
            <option value="english">B.tech</option>
            <option value="hindi">B.tech</option>
            <option value="germany">B.tech</option>
          </select>
        </div>
      </div>


      <div className="numbered-list-container">
        <h2>General Instructions:</h2>
      <ul className="numbered-list">
      <li>1. The server will set the clock for the examination. The countdown timer at the top right corner of the screen will indicate the time remaining for you to complete the examination. When the timer reaches zero, the examination will conclude automatically. There is no need to terminate the examination or submit your paper.</li>
      <li>2. The Question Palette on the right side of the screen will display the status of each question using symbols:
        <li>Not visited yet.</li>
        <li>Not answered.</li>
        <li>Answered.</li>
        <li>Not answered but marked for review.</li>
        <li>Answered and marked for review.</li>
      </li>
      <li>3. The "Mark For Review" status simply indicates that you want to revisit that question. If a question is answered but marked for review, the answer will be considered for evaluation unless modified by the candidate.</li>
      <li>4. Navigating to a Question:
        <li>Click on the question number in the Question Palette to go directly to that numbered question. Note that this option does not save your answer to the current question.</li>
        <li>Click on "Next" to save your answer for the current question and proceed to the next one. Keep in mind that your answer for the current question will not be saved if you navigate to another question directly without saving the answer to the previous one. You can view all the questions by clicking on the "Question Paper" button.</li>
      </li>
      <li>5. Answering a Question:
        <li>Procedure for MCQ type question: A. Choose one answer from the options provided below the question. B. To deselect your chosen answer, click on the bubble of the selected option again. C. To change your chosen answer, click on the bubble of another option. D. To save your answer, click on "Next."</li>
      </li>
      <li>6. Answering a Question:</li>
      <li>7. Procedure for numerical answer type question: A. Use the numerical keypad to enter your answer. B. A fraction (e.g., -0.3 or -.3) can be entered with or without "0" before the decimal point. Up to four decimal points are allowed. C. To save your answer, click on "Next."</li>
      <li>8. To mark a question for review, click on the Star button in the top right corner. If an answer is selected or entered for a question marked for review, that answer will be considered in the evaluation unless modified by the candidate.</li>
      <li>9. To change your answer to a question that has already been answered, select that question for answering and follow the relevant procedure.</li>
      <li>10. Note that only questions for which answers are saved or marked for review after answering will be considered for evaluation.</li>
      <li>11. Sections in this question paper are displayed on the top bar of the screen. Questions in a section can be viewed by clicking on the button in the lower right corner. The section you are currently viewing.</li>
      <li>12. After clicking the "Next" button for the last question in a section, you will automatically be taken to the first question of the next section in sequence.</li>
      </ul>
    </div>
      <div className="tst3">
        <button onClick={handleClick}>Start Now</button>
      </div>
      <div className="loan21">
      </div>
      <Footer />

    </>
  );
};

export default MockTest;
