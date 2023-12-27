import React from "react";
import LoanNavbar from "./LoanNavbar";
import Footer from "./Footer";

import img from "../Images/c115.png";

const EligibilityCheck = () => {
  return (
    <>
      <LoanNavbar />
      <div className="elg1">
        <h3>Let's Check your eligibility</h3>
        <hr />
      </div>
      <div className="elg2">
        <div className="tst7">
          <h6>
            {" "}
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate ?
          </h6>
          <div class="radio-inline">
            <input type="radio" id="option1" name="radio-group" />
            <label for="option1">Within India</label>

            <input type="radio" id="option2" name="radio-group" />
            <label for="option2">Outside India</label>
          </div>
        </div>
        <div className="tst7">
          <h6>
            {" "}
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate ?
          </h6>
          <div class="radio-inline">
            <input type="radio" id="option1" name="radio-group" />
            <label for="option1">Upto 2.5 lacs</label>
            <input type="radio" id="option2" name="radio-group" />
            <label for="option2">2.5 to 4 lacs</label>
            <input type="radio" id="option2" name="radio-group" />
            <label for="option2">4.01 to 6.0 lacs</label>
            <input type="radio" id="option2" name="radio-group" />
            <label for="option2">6.0 to 8.0 lacs</label>
          </div>
        </div>
        <div className="tst7">
          <h6>
            {" "}
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate ?
          </h6>
          <div class="radio-inline">
            <input type="radio" id="option1" name="radio-group" />
            <label for="option1">General</label>
            <input type="radio" id="option2" name="radio-group" />
            <label for="option2">OBC</label>
            <input type="radio" id="option2" name="radio-group" />
            <label for="option2">SC/ST</label>
            <input type="radio" id="option2" name="radio-group" />
            <label for="option2">Minority</label>
          </div>
        </div>
        <div className="tst7">
          <h6>
            {" "}
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate ?
          </h6>
          <div class="radio-inline">
            <input type="radio" id="option1" name="radio-group" />
            <label for="option1">Graduate</label>
            <input type="radio" id="option2" name="radio-group" />
            <label for="option2">Post-Graduate</label>
            <input type="radio" id="option2" name="radio-group" />
            <label for="option2">Doctorate</label>
            <input type="radio" id="option2" name="radio-group" />
            <label for="option2">Others</label>
          </div>
        </div>
        <div className="elg3">
          <div className="elg4">
            <label>Type in the length of your course ?</label>
            <select>
              <option value="">Years</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
          <div className="elg4">
            <label>Name of the course planning for ?</label>
            <select>
              <option value="">Years</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
            </select>
          </div>
        </div>
        <div className="tst7">
          <h6>
            {" "}
            Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate ?
          </h6>
          <div class="radio-inline">
            <input type="radio" id="option1" name="radio-group" />
            <label for="option1">Full TIme</label>
            <input type="radio" id="option2" name="radio-group" />
            <label for="option2">Part Time</label>
            <input type="radio" id="option2" name="radio-group" />
            <label for="option2">Distancing Learning</label>
            <input type="radio" id="option2" name="radio-group" />
            <label for="option2">Others</label>
          </div>
        </div>
        <div className="elg9">
          <div className="elg10">
            <p>Enter your course fees</p>
            <img src={img} alt="" />
          </div>
          <div className="elg11">
            <select>
              <option value="">100000</option>
              <option value="">200000</option>
              <option value="">300000</option>
              <option value="">400000</option>
            </select>
            <p>INR</p>
          </div>
        </div>
        <div className="elg9">
          <div className="elg10">
            <p>Enter the amount you intend to invest by yourself</p>
            <img src={img} alt="" />
          </div>
          <div className="elg11">
            <select>
              <option value="">4000000</option>
              <option value="">6000000</option>
              <option value="">8000000</option>
              <option value="">9000000</option>
            </select>
            <p>INR</p>
          </div>
        </div>
        <div className="elg5">
          <h3>Help Our Experts To Help YOU GET EDUCATION LOAN</h3>
          <p>ENTER YOUR DETAILS</p>
            <div className="elg6">
                <div className="elg7">
                    <label>YOUR FULL NAME</label>
                    <input type="text" />
                </div>
                <div className="elg7">
                    <label>YOUR EMAIL ID</label>
                    <input type="text" />
                </div>
                <div className="elg7">
                    <label>YOUR Mobile Number</label>
                    <input type="text" />
                </div>
                <div className="elg7">
                    <label>Select Course</label>
                    <input type="text" />
                </div>
                <div className="elg7">
                    <label>Select Your City</label>
                    <input type="text" />
                </div>
                <div className="elg7">
                    <label>Select A Bank</label>
                    <input type="text" />
                </div>
            
            <button className="elg8">Submit</button></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EligibilityCheck;
