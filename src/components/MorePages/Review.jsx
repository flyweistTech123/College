import React, { useState } from "react";
import './Review.css'
import { useNavigate } from "react-router-dom";
import TopPart3 from "../TopPart3";
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from "../TopNavbar";
import moke from '../../Images/review.png'


const Review = () => {
  const navigate = useNavigate();
  const handleClick = () => {
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
            <h2>Let’s StartWriting Your Reviews.</h2>
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
            Start Writing Your Review
            </button>
          </div>
        </div>
      </div>

      <div className="review21">
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
