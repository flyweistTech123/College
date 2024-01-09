import React, { useState } from "react";
import img from "../Images/c102.png";
import img2 from "../Images/c103.png";
import img3 from "../Images/c104.png";
import img4 from "../Images/c105.png";
import TopNavbar from "./TopNavbar";
import Footer from "./Footer";
import img5 from '../Images/application.png'
import { MdUpload } from "react-icons/md";


const PayNow = () => {
  const [step, setStep] = useState(0);
  const incCnt = () => {
    setStep((prev) => prev + 1);
  };
  const decCnt = () => {
    setStep((prev) => prev - 1);
  };
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="app1">
        <div className="schro">
          <TopNavbar />
        </div>
      </div>
      <div className="pay1">
        <div className="pay10">
          <div
            className={step === 0 ? "pay2" : "pay3"}
            onClick={() => setStep(0)}
          >
            <img src={img} alt="" />
          </div>
          <p>Basic Details</p>
        </div>
        <div className="pay10">
          <div
            className={step === 1 ? "pay2" : "pay3"}
            onClick={() => setStep(1)}
          >
            <img src={img3} alt="" />
          </div>
          <p>Academic Details and documents Upload</p>
        </div>
        <div className="pay10">
          <div
            className={step === 2 ? "pay2" : "pay3"}
            onClick={() => setStep(2)}
          >
            <img src={img4} alt="" />
          </div>
          <p>Declaration</p>
        </div>
        <div className="pay10">
          <div
            className={step === 3 ? "pay2" : "pay3"}
            onClick={() => setStep(3)}
          >
            <img src={img2} alt="" />
          </div>
          <p>Payment Receipt</p>
        </div>
        <div className="pay10">
          <div
            className={step === 4 ? "pay2" : "pay3"}
            onClick={() => setStep(4)}
          >
            <img src={img4} alt="" />
          </div>
          <p>Application Acknowledgement</p>
        </div>
      </div>
      {step === 0 ? (
        <div className="basic1">
          <h3>Personal Details</h3>
          <div className="basic2">
            <div className="basic3">
              <div className="basic4">
                <label>Title</label>
                <select>
                  <option value="english">Select Course</option>
                  <option value="hindi">Hindi</option>
                  <option value="germany">Germany</option>
                </select>
              </div>
              <div className="basic4">
                <label>First Name*</label>
                <input type="text" />
              </div>
              <div className="basic4">
                <label>Middle Name</label>
                <input type="text" />
              </div>
              <div className="basic4">
                <label>Last Name*</label>
                <input type="text" />
              </div>
              <div className="basic4">
                <label>Gender*</label>
                <input type="text" />
              </div>
              <div className="basic4">
                <label>Category*</label>
                <input type="text" />
              </div>
              <div className="basic4">
                <label>Nationality*</label>
                <input type="text" />
              </div>
              <div className="basic4">
                <label>Date of Birth*</label>
                <input type="date" />
              </div>
              <div className="basic4">
                <label>MOBILE NUMBER*</label>
                <input type="text" placeholder="+91" />
              </div>
              <div className="basic4">
                <label>Alternative Mobile Number</label>
                <input type="text" placeholder="+91" />
              </div>
              <div className="basic4">
                <label>MOBILE NUMBER*</label>
                <input type="text" />
              </div>
              <div className="basic4">
                <label>ALTERNATE EMAIL ADDRESS</label>
                <input type="text" />
              </div>
            </div>
            <dov className="basic5">
              <button>Save & Exit</button>
              <button onClick={incCnt}>Next</button>
            </dov>
          </div>
        </div>
      ) : step === 3 ? (
        <div className="recp1">
          <h4>Electronic Reciept</h4>
          <p>Application Number : BU22BAN30128512</p>
          <div className="recp2">
            <p>To : Aman Anmol</p>
            <p>Online Form submission successful</p>
            <p>
              Towards the Application Fee BBA - Bachelor of Business
              Adminstration ( 7 Specialization) 2023
            </p>
            <p>Date of Receipt : 09 May 2022</p>
            <p>Online Transaction Mode : qr-pg,qr,upiqr</p>
            <p>Transaction ID: 15142251526</p>
            <p>Amount Received : 750</p>
          </div>
          <div className="recp22">
            <input type="radio" name="" id="" />
            <h5 className="repc222">I accept that fees paid is non refundable</h5>
          </div>
          <p>This is system generated reciept and does not requrie signature</p>
          <div className="recp3">
            <button onClick={decCnt}>Back</button>
            <button onClick={handlePrint}>Print</button>
            <button onClick={incCnt}>Next</button>
          </div>
        </div>
      ) : step === 1 ? (
        <>
          <div className="acad1">
            <h3>Academic Details</h3>
            <div className="acad2">
              <h6>10th Details</h6>
              <div className="acad3">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>10th School/institute Name</th>
                      <th>10th Board</th>
                      <th>10th year of passing</th>
                      <th>10th Marking Scheme</th>
                      <th>10th Obtained Percentage CGPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>10</td>
                      <td>
                        <input type="text" />
                      </td>
                      <td>
                        <select>
                          <option value="">Select Board</option>
                          <option value="">CBSE</option>
                          <option value="">ICSE</option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="">YYYY</option>
                          <option value="">CBSE</option>
                          <option value="">ICSE</option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="">Select </option>
                          <option value="">CBSE</option>
                          <option value="">ICSE</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h6>After 10TH QUALIFICATION</h6>
              <div className="acad11">
                <input type="radio" name="" id="" />
                <label htmlFor="">12th</label>
                <input type="radio" name="" id="" />
                <label htmlFor="">Diploma</label>
                <input type="radio" name="" id="" />
                <label htmlFor="">Both</label>
              </div>
              <h6>12th Details</h6>
              <div className="acad3">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>12th School/institute Name</th>
                      <th>12th Board</th>
                      <th>12th Stream</th>
                      <th>12th year of passing</th>
                      <th>Result status</th>
                      <th>12th marking scheme</th>
                      <th>12th obtained Percentage CGPA</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>12</td>
                      <td>
                        <input type="text" />
                      </td>
                      <td>
                        <select>
                          <option value="">Select</option>
                          <option value="">CBSE</option>
                          <option value="">ICSE</option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="">Select</option>
                          <option value="">CBSE</option>
                          <option value="">ICSE</option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="">YYYY </option>
                          <option value="">CBSE</option>
                          <option value="">ICSE</option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="">Select</option>
                          <option value="">CBSE</option>
                          <option value="">ICSE</option>
                        </select>
                      </td>
                      <td>

                      </td>
                      <td>

                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h6>Graduation Details</h6>
              <div className="acad3">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Graduation institute Name</th>
                      <th>Graduation Stream</th>
                      <th>Graduation Percentile</th>
                      <th>Graduation Year of Passing</th>
                      <th>Graduation Result status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>UG</td>
                      <td>
                        <input type="text" />
                      </td>
                      <td>
                        <select>
                          <option value="">Select Board</option>
                          <option value="">CBSE</option>
                          <option value="">ICSE</option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="">YYYY</option>
                          <option value="">CBSE</option>
                          <option value="">ICSE</option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="">Select </option>
                          <option value="">CBSE</option>
                          <option value="">ICSE</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="acad33">
                <div className="acad32">
                  <label htmlFor="">Graduation State</label>
                  <input type="text" />
                </div>
                <div className="acad32">
                  <label htmlFor="">Graduation Degree</label>
                  <input type="text" />
                </div>
              </div>
              <h6>Do you have any other qualifiaction</h6>
              <div className="acad11">
                <input type="radio" name="" id="" />
                <label htmlFor="">Yes</label>
                <input type="radio" name="" id="" />
                <label htmlFor="">No</label>
              </div>

              <h6>Document Uploads</h6>
              <div className="acad3">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>10th class Marksheet</th>
                      <th>12th class Marksheet</th>
                      <th>Graduation final year Marksheet</th>
                      <th>Rank Acheived</th>
                      <th>Aadhar Card Upload</th>
                      <th>Photo Upload</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>UG</td>
                      <td>
                        <input type="text" />
                      </td>
                      <td>
                        <select>
                          <option value="">Select Board</option>
                          <option value="">CBSE</option>
                          <option value="">ICSE</option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="">YYYY</option>
                          <option value="">CBSE</option>
                          <option value="">ICSE</option>
                        </select>
                      </td>
                      <td>
                        <select>
                          <option value="">Select </option>
                          <option value="">CBSE</option>
                          <option value="">ICSE</option>
                        </select>
                      </td>
                      <td>
                        <input type="text" />
                      </td>
                      <td>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h6>Upload Applicant Image</h6>
              <div className="acad34">
                <div className="acad35">
                  <MdUpload className="acad36" />
                </div>
                <p>Upload Image from Filemanager,Gallery</p>
              </div>
              <div className="recp3">
                <button onClick={decCnt}>Back</button>
                <button>Save & Exit</button>
                <button onClick={incCnt}>Next</button>
              </div>
            </div>
          </div>
        </>
      ) : step === 2 ? (
        <>
          <div className="dec11">
            <h3>Declaration</h3>
            <div className="dec1">
              <h6>Declaration</h6>
              <hr />
              <div className="dec2">
                <p>
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <p>
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
                <p>
                  Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos.
                </p>
              </div>

            </div>
            <div className="acad11">
              <input type="radio" name="" id="" />
              <label htmlFor="">I Agree terms and Conditions of these declartion</label>
            </div>
            <div className="recp3">
              <button onClick={decCnt}>Back</button>
              <button>Save & Exit</button>
              <button onClick={incCnt}>Next</button>
            </div>
          </div>

        </>
      ) : step === 4 ? (
        <>
          <div className="Acknow1">
            <div className="Acknow2">
              <div className="Acknow3">
                <div className="Acknow4">
                  <h1>XYZ UNIVERSITY</h1>
                  <h6>BBA-BACHELOR OF BUSINESS ADMINISTRATION (7 SPECIALIZATIONS)2023</h6>
                  <p>APPICATION NO: X0001254845754564</p>
                </div>
                <div className="Acknow5">
                  <img src={img5} alt="" />
                </div>
              </div>

              <div className="Acknow6">
                <h3>Personal Details</h3>
                <div className="Acknow7">
                  <input type="text" placeholder="Ashish sharma" />
                  <input type="text" placeholder="Email ID" />
                  <input type="text" placeholder="Date of Birth" />
                </div>
                <div className="Acknow7">
                  <input type="text" placeholder="Gender" />
                  <input type="text" placeholder="Mobile No." />
                  <input type="text" placeholder="Nationality" />
                </div>
                <div className="Acknow7">
                  <input type="text" placeholder="Category" />
                  <input type="text" placeholder="Additional Category" />
                  <input type="text" placeholder="NR/International Applicant Category" className="innn1" />
                  <input type="text" placeholder="Specialization" />
                </div>
                <h3>Referral Details</h3>
                <div className="Acknow77">
                  <input type="text" placeholder="Name of the person who refers you" />
                  <input type="text" placeholder="Enrolment Number  of the student who referred you" />
                </div>

                <h3>Education Details</h3>
                <h3>Class X</h3>
                <div className="Acknow7">
                  <input type="text" placeholder="Board" />
                  <input type="text" placeholder="School" />
                  <input type="text" placeholder="Passing Year" />
                </div>
                <div className="Acknow7">
                  <input type="text" placeholder="Mark type" />
                  <input type="text" placeholder="Percentage / CGPA" />
                </div>
                <h3>Class XII</h3>
                <div className="Acknow7">
                  <input type="text" placeholder="Board" />
                  <input type="text" placeholder="Passing Year" />
                  <input type="text" placeholder="Passing Year" />
                </div>
                <div className="Acknow7">
                  <input type="text" placeholder="Stream" />
                  <input type="text" placeholder="Mark type" />
                  <input type="text" placeholder="Percentage / CGPA" />
                </div>
                <h3>Graduation</h3>
                <div className="Acknow7">
                  <input type="text" placeholder="College" />
                  <input type="text" placeholder="Passing Year" />
                  <input type="text" placeholder="Degree" />
                </div>
                <div className="Acknow7">
                  <input type="text" placeholder="Mark type" />
                  <input type="text" placeholder="Percentage / CGPA" />
                </div>
                <h3>Preferences</h3>
                <div className="Acknow7">
                  <input type="text" placeholder="Stream" />
                  <input type="text" placeholder="Level" />
                  <input type="text" placeholder="Specialization" />
                </div>
                <div className="Acknow7">
                  <input type="text" placeholder="Location" />
                  <input type="text" placeholder="College type" />
                  <input type="text" placeholder="Fee Range" />
                </div>
                <div className="Acknow7">
                  <input type="text" placeholder="College" />
                  <input type="text" placeholder="No PreferencesInterested in studying abroad?" />
                  <input type="text" placeholder="Fee Range" />
                </div>
                <div className="Acknow7">
                  <input type="text" placeholder="Need Loan ?" />
                </div>
                <h3>Payment Details</h3>
                <div className="Acknow7">
                  <input type="text" placeholder="Transaction ID" />
                  <input type="text" placeholder="Payment Date" />
                  <input type="text" placeholder="Mode of Payment" />
                </div>
                <div className="Acknow7">
                  <input type="text" placeholder="Colleges Applied" />
                </div>
                <h3>Declaration</h3>
                <div className="Acknow8">
                  <p>I, declare that all statements made in this application for admission are correct and complete. I also understand that plagiarism, submission of
                    false information, or omission of relevant information or credentials may result in my application being withdrawn, my admission being denied,
                    or my admission being revoked.
                    I, also understand that I have read the admission procedure document and the submission of application does not automatically qualify me for
                    interview/further selection process. The Application Fee is non-refundable under any circumstances
                    Further, I understand that Ragging is banned in the University. If I am found indulging in ragging, at any stage of my study period, I shall be
                    liable for disciplinary action; including expulsion from the University.</p>

                  <h4>Application Name:</h4>
                  <h4>Parent Name:</h4>
                  <h4>Date:</h4>
                </div>
                <div className="Acknow9">
                  <button onClick={decCnt}>Back</button>
                  <button onClick={handlePrint}>Print</button>
                </div>
              </div>
            </div>
          </div>

        </>

      ) : (

        ""
      )}

      <div className="loan21">
      </div>
      <Footer />
    </>
  );
};

export default PayNow;
