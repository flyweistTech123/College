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

import refer9 from '../../Images/review30.png'
import refer10 from '../../Images/review31.png'

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

        <div className="review69">
          <div className="review71">

            <h6>January Winners</h6>

            <div>
              <img src={refer8} alt="" />
            </div>
            <div className="review25">
              <div className="review26">
                <div className="review72">
                  <div className="review73">
                    <img src={refer1} alt="" />
                  </div>
                </div>
                <p>Srujan(1st) <br /><span>₹12999/-</span></p>
              </div>
              <div className="review26">
                <img src={refer2} alt="" />
                <p>Varun(2nd) <br /><span>₹10999/-</span></p>
              </div>
              <div className="review26">
                <img src={refer3} alt="" />
                <p>Nirmal(3rd) <br /><span>₹11999/-</span></p>
              </div>
              <div className="review26">
                <img src={refer4} alt="" />
                <p>Rahul(4th) <br /><span>₹9999/-</span></p>
              </div>

              <div className="review26">
                <div className="review27">
                  <img src={refer5} alt="" />
                  <img src={refer6} alt="" />
                  <img src={refer7} alt="" />
                </div>
                <div className="review74">
                  <p>7+more</p>
                  <p> Won ₹ 1200</p>
                </div>
              </div>
            </div>

          </div>
          <div className="review70">

          </div>
          <div className="review65">
            <h6>February Contest Ends In:</h6>

            <div className="review66">
              <div className="review67">
                <h6>15</h6>
                <span>Days</span>
              </div>
              <div className="review67">
                <h6>:</h6>
              </div>
              <div className="review67">
                <h6>05</h6>
                <span>HRS</span>
              </div>
              <div className="review67">
                <h6>:</h6>
              </div>
              <div className="review67">
                <h6>17</h6>
                <span>Mins</span>
              </div>
              <div className="review67">
                <h6>:</h6>
              </div>
              <div className="review67">
                <h6>32</h6>
                <span>Secs</span>
              </div>
            </div>

            <div className="review68">
              <p>How To Earn ? <span>Learn more</span></p>
            </div>
          </div>
        </div>



        <div className="review34">
          <div className="review35">
            <h5>Monthly <span>Cash Rewards</span></h5>
          </div>
          <div className="review36">
            <div className="review37">
              <div className="review38">
                <div className="review39">
                  <p>1</p>
                </div>
                <div className="review40">
                  <p>1st prize Winner</p>
                </div>
              </div>
              <div className="review41">
                <h6>₹15,000/-</h6>
                <p>Minimum 90 referrals and 1st position on Leaderboard</p>
              </div>
            </div>
            <div className="review37">
              <div className="review38">
                <div className="review39">
                  <p>2</p>
                </div>
                <div className="review40">
                  <p>2nd prize Winner</p>
                </div>
              </div>
              <div className="review41">
                <h6>₹15,000/-</h6>
                <p>Minimum 90 referrals and 1st position on Leaderboard</p>
              </div>
            </div>
            <div className="review37">
              <div className="review38">
                <div className="review39">
                  <p>3</p>
                </div>
                <div className="review40">
                  <p>3rd prize Winner</p>
                </div>
              </div>
              <div className="review41">
                <h6>₹15,000/-</h6>
                <p>Minimum 90 referrals and 1st position on Leaderboard</p>
              </div>
            </div>
            <div className="review37">
              <div className="review38">
                <div className="review39">
                  <p>4</p>
                </div>
                <div className="review40">
                  <p>4th prize Winner</p>
                </div>
              </div>
              <div className="review41">
                <h6>₹15,000/-</h6>
                <p>Minimum 90 referrals and 1st position on Leaderboard</p>
              </div>
            </div>
          </div>
        </div>


        <div className="review42">
          <div className="review43">
            <h5>How To Win <span>Rewards ??</span></h5>
          </div>

          <div className="review44">
            <div className="review45">
              <div className="review46">
                {/* <hr /> */}
              </div>
              <div className="review49">
                <div className="review47">
                  <div className="review48"></div>
                </div>
                <div className="review47">
                  <div className="review48"></div>
                </div>
                <div className="review47">
                  <div className="review48"></div>
                </div>
              </div>
            </div>

            <div className="review50">
              <div className="review51">
                <h5>Submit Your College Review</h5>
                <p>Every review gets guaranteed Rs 200 - Rs 300 extra for selected colleges Check List</p>
              </div>
              <div className="review51">
                <h5>Collect Your Referral Code</h5>
                <p>Every approved review via referral Gets Guaranteed Rs ₹40 - ₹100. Earn ₹200 by successfully referring someone for an MBA course review.</p>
              </div>
              <div className="review51">
                <h5>Reach in Top 10 of the leaderboard</h5>
                <p>Every month top three referees get Rs 15000, Rs 12000, and Rs 7000. Next 7 Refers Get Rs 2000</p>
              </div>
            </div>
          </div>
        </div>


        <div className="review52">
          <div className="review53">
            <h5>February Month Leaderboard</h5>
            <p>From 1–15 Feb 2024</p>
          </div>

          <div className="review54">
            <div className="review55">
              <div className="review56">
                <p>#1</p>
              </div>
              <div className="review57">
                <div className="review58">
                  <img src={refer9} alt="" />
                </div>

                <div className="review60">
                  <h6>Raviraj</h6>
                  <p>Gurukula Kangri Vishwavidyalaya - [GKV]</p>
                  <div className="review59">
                    <div className="review62">
                      <div className="review63">
                        <p>4120 points</p>
                      </div>
                    </div>
                    <div className="review61"></div>
                    <div className="review61"></div>
                    <div className="review61"></div>
                  </div>
                  <p>Successful Referrals-51</p>
                </div>
              </div>
              <div className="review64">
                <img src={refer10} alt="" />
                <p>39 More Referrals Required For 1st Prize Cash Rewards ₹15000/-</p>
              </div>
            </div>
            <div className="review55">
              <div className="review56">
                <p>#2</p>
              </div>
              <div className="review57">
                <div className="review58">
                  <img src={refer9} alt="" />
                </div>

                <div className="review60">
                  <h6>Raviraj</h6>
                  <p>Gurukula Kangri Vishwavidyalaya - [GKV]</p>
                  <div className="review59">
                    <div className="review62">
                      <div className="review63">
                        <p>4120 points</p>
                      </div>
                    </div>
                    <div className="review61"></div>
                    <div className="review61"></div>
                    <div className="review61"></div>
                  </div>
                  <p>Successful Referrals-51</p>
                </div>
              </div>
              <div className="review64">
                <img src={refer10} alt="" />
                <p>39 More Referrals Required For 1st Prize Cash Rewards ₹15000/-</p>
              </div>
            </div>
            <div className="review55">
              <div className="review56">
                <p>#3</p>
              </div>
              <div className="review57">
                <div className="review58">
                  <img src={refer9} alt="" />
                </div>

                <div className="review60">
                  <h6>Raviraj</h6>
                  <p>Gurukula Kangri Vishwavidyalaya - [GKV]</p>
                  <div className="review59">
                    <div className="review62">
                      <div className="review63">
                        <p>4120 points</p>
                      </div>
                    </div>
                    <div className="review61"></div>
                    <div className="review61"></div>
                    <div className="review61"></div>
                  </div>
                  <p>Successful Referrals-51</p>
                </div>
              </div>
              <div className="review64">
                <img src={refer10} alt="" />
                <p>39 More Referrals Required For 1st Prize Cash Rewards ₹15000/-</p>
              </div>
            </div>
            <div className="review55">
              <div className="review56">
                <p>#4</p>
              </div>
              <div className="review57">
                <div className="review58">
                  <img src={refer9} alt="" />
                </div>

                <div className="review60">
                  <h6>Raviraj</h6>
                  <p>Gurukula Kangri Vishwavidyalaya - [GKV]</p>
                  <div className="review59">
                    <div className="review621">
                      <div className="review631">
                        <p>4120 points</p>
                      </div>
                    </div>
                    <div className="review611"></div>
                    <div className="review611"></div>
                    <div className="review611"></div>
                  </div>
                  <p>Successful Referrals-51</p>
                </div>
              </div>
              <div className="review64">
                <img src={refer10} alt="" />
                <p>39 More Referrals Required For 1st Prize Cash Rewards ₹15000/-</p>
              </div>
            </div>
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
