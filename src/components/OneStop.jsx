import React, { useState, useEffect } from "react";
import TopPart3 from "./TopPart3";
import Footer from "./Footer";
import Slider from "react-slick";
import TopNavbar from "./TopNavbar";
import { useNavigate } from "react-router-dom";
import img from '../Images/onestopsolution.png'

const OneStop = () => {
  const [step, setStep] = useState(0);
  const incCnt = () => {
    setStep((prev) => prev + 1);
  };
  const decCnt = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <>
      <div className="app1">
        <div className="schro">
          <TopNavbar />
        </div>
        <div className="app6">
          <img src={img} />
        </div>
        <div className="onesolution1">
          <div className="home100">
            <i class="fa-solid fa-bars" ></i>
          </div>
          <div className="onesolution2">
            <h2>One Stop Application | pay Fees | apply loan | apply scholarships and more...</h2>
            <p>We Aim to enhance your experience by making the process more convenient.</p>
          </div>
          <div className="home4">
            <input
              type="text"
              placeholder="Search for colleges, exams, Q & A, Articles..."
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
      <TopPart3 />

      <div className="onesolution3">
        <div className="onesolution4">
          <h1>One Stop Application | pay Fees | apply loan | apply scholarships and more...</h1>
          <p>We Aim to enhance your experience by making the process more convenient.</p>
        </div>


        <h2>Make a Selection: Choose Your Option</h2>

        <div className="onesolution5">
          <div className={step === 0 ? "onesolution6" : "onesolution7"}
            onClick={() => setStep(0)}>
            <p>College Application</p>
          </div>
          <div className={step === 1 ? "onesolution6" : "onesolution7"}
            onClick={() => setStep(1)}>
            <p>Pay Offer Acceptance</p>
          </div>
          <div className={step === 2 ? "onesolution6" : "onesolution7"}
            onClick={() => setStep(2)}>
            <p>Pay Application Fee</p>
          </div>
          <div className={step === 3 ? "onesolution6" : "onesolution7"}
            onClick={() => setStep(3)}>
            <p>Lucky Draw</p>
          </div>
          <div className={step === 4 ? "onesolution6" : "onesolution7"}
            onClick={() => setStep(4)}>
            <p>Apply Scholarship</p>
          </div>
          <div className={step === 5 ? "onesolution6" : "onesolution7"}
            onClick={() => setStep(5)}>
            <p>Apply Education Loan</p>
          </div>
          <div className={step === 8 ? "onesolution6" : "onesolution7"}
            onClick={() => setStep(8)}>
            <p>Book Campus Tour</p>
          </div>
        </div>

        <div className="onecontainer">
          <h6>Personal Details</h6>
          <div className="one1">
            <div className="one2">
              <div className="one3">
                <label>TITLE</label>
                <select>
                  <option value="">Select</option>
                  <option value="">1</option>
                  <option value="">1</option>
                </select>
              </div>
              <div className="one3">
                <label>First Name</label>
                <input type="text" />
              </div>
              <div className="one3">
                <label>Last Name</label>
                <input type="text" />
              </div>
              <div className="one3">
                <label>Gender</label>
                <select>
                  <option value="">Select</option>
                  <option value="">1</option>
                  <option value="">2</option>
                </select>
              </div>
            </div>
            <div className="one2">
              <div className="one3">
                <label>Father's Name</label>
                <input type="text" />
              </div>
              <div className="one3">
                <label>Mother's Name</label>
                <input type="text" />
              </div>
              <div className="one3">
                <label>Category</label>
                <select>
                  <option value="">Select</option>
                  <option value="">1</option>
                  <option value="">2</option>
                </select>
              </div>
              <div className="one3">
                <label>Date of Birth</label>
                <input type="date" />
              </div>
            </div>
            <div className="one2">
              <div className="one3">
                <label>Nationality</label>
                <select>
                  <option value="">Select</option>
                  <option value="">1</option>
                  <option value="">2</option>
                </select>
              </div>
              <div className="one3">
                <label>Contact No</label>
                <input type="text" />
              </div>
              <div className="one3">
                <label>Alternate Contact Number</label>
                <input type="text" />
              </div>
              <div className="one3">
                <label>Email</label>
                <input type="text" />
              </div>
            </div>
            <div className="one2">
              <div className="one3">
                <label>Aadhar No</label>
                <input type="text" />
              </div>
              <div className="one3">
                <label>Address</label>
                <input type="text" />
              </div>
              <div className="one3">
                <label>City</label>
                <input type="text" />
              </div>
            </div>
            <div className="one2">
              <div className="one3">
                <label>State</label>
                <input type="text" />
              </div>
              <div className="one3">
                <label>Pin Code</label>
                <input type="text" />
              </div>
              <div className="one3">
                <label>Country</label>
                <input type="text" />
              </div>
            </div>
            <div className="one2">
              <div className="one3">
                <label>Highest Qualification</label>
                <select>
                  <option value="">Select</option>
                  <option value="">1</option>
                  <option value="">2</option>
                </select>
              </div>
              <div className="one3">
                <label>Passing Year</label>
                <select>
                  <option value="">Select</option>
                  <option value="">1</option>
                  <option value="">2</option>
                </select>
              </div>
            </div>
            <button className="one5">Submit</button>
          </div>
        </div>

        {step === 0 ? (
          <div className="onecontainer111">
            <h6>College Application</h6>
            <div className="one1">
              <div className="one2">
                <div className="one3">
                  <label>Location of College</label>
                  <select>
                    <option value="">Select City</option>
                    <option value="">1</option>
                    <option value="">1</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Choose Your College</label>
                  <select>
                    <option value="">Select College</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Course</label>
                  <select>
                    <option value="">Select Course</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Year of Intake</label>
                  <select>
                    <option value="">Year of Intake</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
              </div>

              <div className="onecontainer12">
                <button>Add More</button>
              </div>
            </div>


          </div>
        ) : step === 1 ? (

          <div className="onecontainer111">
            <h6>Pay  Offer Acceptance</h6>
            <div className="one1">
              <div className="one2">
                <div className="one3">
                  <label>Location of College</label>
                  <select>
                    <option value="">Select City</option>
                    <option value="">1</option>
                    <option value="">1</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Choose Your College</label>
                  <select>
                    <option value="">Select College</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Course</label>
                  <select>
                    <option value="">Select Course</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Year of Intake</label>
                  <select>
                    <option value="">Year of Intake</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
              </div>
              <div className="one2">
                <div className="one3">
                  <label>Offer Acceptance Amount</label>
                  <input type="text" placeholder="Enter Amount" />
                </div>
              </div>
            </div>


          </div>

        ) : step === 2 ? (
          <div className="onecontainer111">
            <h6>Pay  Application Fees</h6>
            <div className="one1">
              <div className="one2">
                <div className="one3">
                  <label>Location of College</label>
                  <select>
                    <option value="">Select City</option>
                    <option value="">1</option>
                    <option value="">1</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Choose Your College</label>
                  <select>
                    <option value="">Select College</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Course</label>
                  <select>
                    <option value="">Select Course</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Year of Intake</label>
                  <select>
                    <option value="">Year of Intake</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
              </div>

              <div className="one2">
                <div className="one3">
                  <label>Collage Application Fee</label>
                  <input type="text" placeholder="Enter Amount" />
                </div>
              </div>
            </div>


          </div>
        ) : step === 3 ? (
          <div className="onecontainer111">
            <h6>Lucky Draw Participation Details</h6>
            <div className="one1">
              <div className="one2">
                <div className="one3">
                  <label>Location of College</label>
                  <select>
                    <option value="">Select City</option>
                    <option value="">1</option>
                    <option value="">1</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Choose Your College</label>
                  <select>
                    <option value="">Select College</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Course</label>
                  <select>
                    <option value="">Select Course</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Year of Intake</label>
                  <select>
                    <option value="">Year of Intake</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
              </div>

              <div className="onecontainer12">
                <button>Add More</button>
              </div>
            </div>


          </div>
        ) : step === 4 ? (
          <div className="onecontainer111">
            <h6>Scholarship Application Details</h6>
            <div className="one1">
              <div className="one2">
                <div className="one3">
                  <label>Location of College</label>
                  <select>
                    <option value="">Select City</option>
                    <option value="">1</option>
                    <option value="">1</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Choose Your College</label>
                  <select>
                    <option value="">Select College</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Course</label>
                  <select>
                    <option value="">Select Course</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Year of Intake</label>
                  <select>
                    <option value="">Year of Intake</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
              </div>

              <div className="one2">
                <div className="one3">
                  <label>Scholarship Type</label>
                  <select>
                    <option value="">Select Scholarship Type</option>
                    <option value="">1</option>
                    <option value="">1</option>
                  </select>
                </div>
              </div>
            </div>


          </div>

        ) : step === 5 ? (
          <div className="onecontainer111">
            <h6>Education Loan Application Details</h6>
            <div className="one1">
              <div className="one2">
                <div className="one3">
                  <label>Location of College</label>
                  <select>
                    <option value="">Select City</option>
                    <option value="">1</option>
                    <option value="">1</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Choose Your College</label>
                  <select>
                    <option value="">Select College</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Course</label>
                  <select>
                    <option value="">Select Course</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Year of Intake</label>
                  <select>
                    <option value="">Year of Intake</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
              </div>

              <div className="one2">
                <div className="one3">
                  <label>Course Duration</label>
                  <select>
                    <option value="">Select Course Duration</option>
                    <option value="">1</option>
                    <option value="">1</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Loan Amount Required</label>
                  <input type="text" placeholder="Enter Amount" />
                </div>
              </div>
              <div className="onecontainer12">
                <button>Add More</button>
              </div>
            </div>


          </div>
        ) : step === 8 ? (
          <div className="onecontainer111">
            <h6>Details of Campus Tour</h6>
            <div className="one1">
              <div className="one2">
                <div className="one3">
                  <label>Location of College</label>
                  <select>
                    <option value="">Select City</option>
                    <option value="">1</option>
                    <option value="">1</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Choose Your College</label>
                  <select>
                    <option value="">Select College</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Course</label>
                  <select>
                    <option value="">Select Course</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
                <div className="one3">
                  <label>Current City</label>
                  <select>
                    <option value="">Select City</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
              </div>

              <div className="one2">
                <div className="one3">
                  <label>Date of Visit</label>
                  <input type="date" placeholder="Choose Date" />
                </div>
                <div className="one3">
                  <label>Select Mode of Travel</label>
                  <select>
                    <option value="">Select City</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>
                </div>
              </div>
              <div className="onecontainer12">
                <button>Add More</button>
              </div>
            </div>


          </div>
        ) : (
          ""
        )}
        <div className="one1">
          <h5>Document Uploads</h5>
          <div className="document-table1">
            <table>
              <thead>
                <tr>
                  <th>10th Class Marksheet</th>
                  <th>12th Class Marksheet</th>
                  <th>Graduation Documents</th>
                  <th>Aadhar Card</th>
                  <th>Upload Photo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><input type="file" accept=".pdf, .jpg, .png" /></td>
                  <td><input type="file" accept=".pdf, .jpg, .png" /></td>
                  <td><input type="file" accept=".pdf, .jpg, .png" /></td>
                  <td><input type="file" accept=".pdf, .jpg, .png" /></td>
                  <td><input type="file" accept=".jpg, .png" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="one1">
          <div className="onesolution10">
            <h5>Declaration</h5>
            <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
          </div>
        </div>

        <div className="onesolution11">
          <input type="checkbox" name="" id="" />
          <label htmlFor="">I Agree</label>
        </div>

        <button className="one5">Submit & Pay</button>

      </div>


      <Footer />
    </>
  );
};

export default OneStop;
