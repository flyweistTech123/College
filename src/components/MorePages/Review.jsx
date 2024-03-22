import React, { useState } from "react";
import './Review.css'
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from "../TopNavbar";
import moke from '../../Images/review.png'
import refercode from '../../Images/refercode.png'
import refer1 from '../../Images/refer12.png'
import refer2 from '../../Images/refer13.png'
import refer3 from '../../Images/refer14.png'
import refer4 from '../../Images/refer15.png'
import refer5 from '../../Images/review16.png'
import refer6 from '../../Images/review17.png'
import refer7 from '../../Images/review18.png'
import refer8 from '../../Images/crown.png'

const Review = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/tests')
  }
  return (
    <>
      <div className="app1">
        <div className="review28">
          <TopNavbar />
        </div>
        <div className="app6">
          <img src={moke} />
        </div>
        <div className="review29">
          <div className="home100">
            <i class="fa-solid fa-bars" ></i>
          </div>
          <div className="review30">
            <h2>Write a Review and Win Monthly Prizes Upto</h2>
            <h5>₹30000*</h5>
          </div>
          <div className="review31">
            <p>Every Review Will Bring Upto ₹500 & ₹30000 monthly via Referrals, <span>“ Extra Cash for Selected Colleges “</span></p>
          </div>
          <div className="review33">
            <input
              type="text"
              placeholder="Search for colleges, exams, Q & A, Articles..."
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="review32">
            <button onClick={() => navigate("/writereview")}>
              Start Writing Your Review
            </button>
          </div>
        </div>
      </div>




      <div className="review21">

        <div className="review23">
          <h6>Unlock Your Referral Code to Start Earning</h6>
          <div className="review24" >
            <img src={refercode} alt="" />
            <p>Unlock Code CCOO980 </p>
          </div>
        </div>

        <div className="review25">
          <div className="review26">
            <img src={refer1} alt="" />
            <p>Srujan(1st) <br /><span>₹12999/-</span></p>
          </div>
          <div className="review26">
            <img src={refer2} alt="" />
            <p>Varun 2st Winner</p>
          </div>
          <div className="review26">
            <img src={refer3} alt="" />
            <p>Nirmal 3rd Winner</p>
          </div>
          <div className="review26">
            <img src={refer4} alt="" />
            <p>Rahul 4th Winner</p>
          </div>

          <div className="review26">
            <div className="review27">
              <img src={refer5} alt="" />
              <img src={refer6} alt="" />
              <img src={refer7} alt="" />
            </div>

            <p>7+more Winners</p>
          </div>
        </div>
        <div className="review22">
          <h1>Do's & Dont's - Points to Consider While Writing a Review</h1>
          <ul>
            <li>Be Factual - Read the instructions provided along with the questions carefully, and try to include mentioned facts to the best of your knowledge</li>
            <li>Be Decent - Talking about your alma mater should always have decency, even when criticizing it. No Rash Words Should be Used in the content, it will be edited during the moderation process.</li>
            <li>Be Original - Don't Copy and write your own experience. Most elaborate reviews might bring extra rewards. Write your review on your own, don't let anyone else use your identity.</li>
            <li>Be Patient - The review has 8 steps, each step covering one aspect of your college life, so answer them with patience so they add value to the user. You can always complete the review form in phases.</li>
            <li>Be Social - Once you are done with your review, share the review form with as many students from your college as possible. More the review more the rewards. Reviews for the courses with lesser reviews on collegedunia have extra rewards added to them</li>
          </ul>
        </div>
        <div className="review22" >
          <h1>Rules</h1>
          <ul>
            <li>Be Factual - Read the instructions provided along with the questions carefully, and try to include mentioned facts to the best of your knowledge</li>
            <li>Be Decent - Talking about your alma mater should always have decency, even when criticizing it. No Rash Words Should be Used in the content, it will be edited during the moderation process.</li>
            <li>Be Original - Don't Copy and write your own experience. Most elaborate reviews might bring extra rewards. Write your review on your own, don't let anyone else use your identity.</li>
            <li>Be Patient - The review has 8 steps, each step covering one aspect of your college life, so answer them with patience so they add value to the user. You can always complete the review form in phases.</li>
            <li>Be Social - Once you are done with your review, share the review form with as many students from your college as possible. More the review more the rewards. Reviews for the courses with lesser reviews on collegedunia have extra rewards added to them</li>
          </ul>
        </div>
        <div className="review22">
          <h1>FAQ’S</h1>
          <ul>
            <li>Why fill out the College Review Form on Collegedunia?</li>
            <li>How to fill out the review form on Collegedunia?</li>
            <li>My college and course is not listed in the review form?</li>
            <li>How long does it take to get the review approved?</li>
            <li>How to write an anonymous review?</li>
            <li>How will I get the reward?</li>
            <li>I have filled out the review form but didn’t receive the reward yet?</li>
            <li>How to edit an approved review?</li>
            <li>What happens once I fill the review form?</li>
            <li>How to report a Bad or Incorrect review?</li>
            <li>Reward Transaction Failed - What are the alternatives?</li>
            <li>Someone else used my details to fill the review?</li>
            <li>Is my data secure with Collegedunia?</li>
            <li>How to get my referral code?</li>
            <li>I didn’t get my referral reward yet?</li>
            <li>How to edit a disapproved review?</li>
          </ul>
        </div>
      </div>
      <Footer />

    </>
  );
};

export default Review;
