import React, {useState} from "react";
import TopPart2 from "./TopPart2";
import TopPart3 from "./TopPart3";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import img6 from "../Images/c38.png";
import img7 from "../Images/c87.png";

const Test2 = () => {
    const [start, setStart] = useState(false);
    const handleClick = ()=>{
        setStart(prev => !prev);
    }
  return (
    <>
      <TopPart2 />
      <TopPart3 />
      <div className="tst1">
        <div className="tst2">
          <h4>In which Language do you wantto take the test ? </h4>
          <select>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="germany">Germany</option>
          </select>
        </div>
        <div className="tst2">
          <h4>In which Language do you wantto take the test ? </h4>
          <select>
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="germany">Germany</option>
          </select>
        </div>
      </div>
      <div className="tst3">
        <button onClick={handleClick}>Start Now</button>
      </div>
      <div className="tst4">
      {start ? (
        <>
            <div className="tst5">
                <p>B.Tech Scholarship Test</p>
                <div className="tst6">
                    <p>This Could prove to be start of something BIG</p>
                    <div className="tst7">
                        <h6>Q1.  Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ?</h6>
                        <div class="radio-inline">
                            <input type="radio" id="option1" name="radio-group"  />
                            <label for="option1">Never</label>

                            <input type="radio" id="option2" name="radio-group" />
                            <label for="option2">Sometimes</label>

                            <input type="radio" id="option3" name="radio-group" />
                            <label for="option3">Always</label>
                            </div>
                    </div>
                    <div className="tst7">
                        <h6>Q1.  Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ?</h6>
                        <div class="radio-inline">
                            <input type="radio" id="option1" name="radio-group"  />
                            <label for="option1">Never</label>

                            <input type="radio" id="option2" name="radio-group" />
                            <label for="option2">Sometimes</label>

                            <input type="radio" id="option3" name="radio-group" />
                            <label for="option3">Always</label>
                            </div>
                    </div>
                    <div className="tst7">
                        <h6>Q1.  Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ?</h6>
                        <div class="radio-inline">
                            <input type="radio" id="option1" name="radio-group"  />
                            <label for="option1">Never</label>

                            <input type="radio" id="option2" name="radio-group" />
                            <label for="option2">Sometimes</label>

                            <input type="radio" id="option3" name="radio-group" />
                            <label for="option3">Always</label>
                            </div>
                    </div>
                    <div className="tst7">
                        <h6>Q1.  Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate ?</h6>
                        <div class="radio-inline">
                            <input type="radio" id="option1" name="radio-group"  />
                            <label for="option1">Never</label>

                            <input type="radio" id="option2" name="radio-group" />
                            <label for="option2">Sometimes</label>

                            <input type="radio" id="option3" name="radio-group" />
                            <label for="option3">Always</label>
                            </div>
                    </div>
                    <div className="tst8">
                        <button>Next</button>
                    </div>
                </div>
                <div className="tst9">
                    <img src={img7} alt="" />
                    <p>Lorem Ipsum dolor ist emnud dorem jiijn loremdolor siyt kist</p>
                </div>
            </div>
        </>
      ): ""}
      </div>
      <div className="sch31">
        <img src={img6} alt="" />
      </div>
      <Footer />

    </>
  );
};

export default Test2;
