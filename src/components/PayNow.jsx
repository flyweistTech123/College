import React, { useState } from "react";
import img from "../Images/c102.png";
import img2 from "../Images/c103.png";
import img3 from "../Images/c104.png";
import img4 from "../Images/c105.png";

const PayNow = () => {
  const [step, setStep] = useState(0);
  const incCnt = () => {
    setStep((prev) => prev + 1);
  };
  const decCnt = () => {
    setStep((prev) => prev - 1);
  };
  return (
    <>
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
            <img src={img2} alt="" />
          </div>
          <p>Payment</p>
        </div>
        <div className="pay10">
          <div
            className={step === 2 ? "pay2" : "pay3"}
            onClick={() => setStep(2)}
          >
            <img src={img3} alt="" />
          </div>
          <p>Academic Details and documents Upload</p>
        </div>
        <div className="pay10">
          <div
            className={step === 3 ? "pay2" : "pay3"}
            onClick={() => setStep(3)}
          >
            <img src={img4} alt="" />
          </div>
          <p>Declaration</p>
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
                <input type="text" />
              </div>
              <div className="basic4">
                <label>First Name</label>
                <input type="text" />
              </div>
              <div className="basic4">
                <label>Middle Name</label>
                <input type="text" />
              </div>
              <div className="basic4">
                <label>Last Name</label>
                <input type="text" />
              </div>
              <div className="basic4">
                <label>Gender </label>
                <input type="text" />
              </div>
              <div className="basic4">
                <label>Category</label>
                <input type="text" />
              </div>
              <div className="basic4">
                <label>Nationality</label>
                <input type="text" />
              </div>
              <div className="basic4">
                <label>Mobile Number</label>
                <input type="text" placeholder="+91" />
              </div>
              <div className="basic4">
                <label>Email Address</label>
                <input type="text" />
              </div>
              <div className="basic4">
                <label>Alternative Mobile Number</label>
                <input type="text" placeholder="+91" />
              </div>
              <div className="basic4">
                <label>Alternative Email Address</label>
                <input type="text" />
              </div>
            </div>
            <dov className="basic5">
              <button>Save & Exit</button>
              <button onClick={incCnt}>Next</button>
            </dov>
          </div>
        </div>
      ) : step === 1 ? (
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
          <h4>I accept that fees paid is non refundable</h4>
          <p>This is system generated reciept and does not requrie signature</p>
          <div className="recp3">
            <button onClick={decCnt}>Back</button>
            <button>Save & Exit</button>
            <button onClick={incCnt}>Next</button>
          </div>
        </div>
      ) : step === 2 ? (
        <>
          <div className="acad1">
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
              <h6>12th Details</h6>
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
                      <td>12</td>
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
              <h6>Graduation Details</h6>
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
              <h6>Document Uploads</h6>
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
            </div>
            <div className="recp3">
                <button onClick={decCnt}>Back</button>
                <button>Save & Exit</button>
                <button onClick={incCnt}>Next</button>
            </div>
          </div>
        </>
      ) : step === 3 ? (
        <>
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
            <div className="recp3">
              <button onClick={decCnt}>Back</button>
              <button>Save & Exit</button>
              <button onClick={incCnt}>Next</button>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default PayNow;
