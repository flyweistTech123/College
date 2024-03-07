import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="side1">
        <div className="side2">
          <p>Private Colleges/ Government Colleges</p>
        </div>
        <div className="side3">
          <h2>Filter</h2>
          <p>Found 5503 colleges</p>
          <hr />
        </div>
        <div className="side4">
          <div className="side5">
            <h5>Courses</h5>
            <div className="side50">

            </div>
          </div>
          <div className="side6">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Find Courses" />
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">MBA/PGDMA</label>
            <br />
            <input type="checkbox" id="checkbox2" />
            <label for="checkbox2">B.E/B.Tech</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">B.SC</label>
            <br />
            <input type="checkbox" id="checkbox4" />
            <label for="checkbox4">BA</label>
            <br />
            <input type="checkbox" id="checkbox5" />
            <label for="checkbox5">BBA/MBA</label>
          </div>
          <hr className="side7" />
        </div>
        <div className="side4">
          <div className="side5">
            <h5>State</h5>
            <div className="side50">

            </div>
          </div>
          <div className="side6">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Find State" />
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">Delhi NCR</label>
            <br />
            <input type="checkbox" id="checkbox2" />
            <label for="checkbox2">Maharashtra</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Uttar Pradesh</label>
            <br />
            <input type="checkbox" id="checkbox4" />
            <label for="checkbox4">Jaipur</label>
            <br />
            <input type="checkbox" id="checkbox5" />
            <label for="checkbox5">Bangalore</label>
          </div>
          <hr className="side7" />
        </div>
        <div className="side4">
          <div className="side5">
            <h5>City</h5>
            <div className="side50">

            </div>
          </div>
          <div className="side6">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Find Stream" />
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">New Delhi</label>
            <br />
            <input type="checkbox" id="checkbox2" />
            <label for="checkbox2">Chennai</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Kolkata</label>
            <br />
            <input type="checkbox" id="checkbox4" />
            <label for="checkbox4">Tamil Nadu</label>
            <br />
            <input type="checkbox" id="checkbox5" />
            <label for="checkbox5">Noida</label>
          </div>
          <hr className="side7" />
        </div>
        <div className="side4">
          <div className="side5">
            <h5>Stream</h5>
            <div className="side50">

            </div>
          </div>
          <div className="side6">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Find Program Type" />
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">Management</label>
            <br />
            <input type="checkbox" id="checkbox2" />
            <label for="checkbox2">Science</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Arts</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Computer Science</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Commerce</label>
            <br />
          </div>
          <hr className="side7" />
        </div>
        <div className="side4">
          <div className="side5">
            <h5>Program Type</h5>
            <div className="side50">

            </div>
          </div>
          <div className="side6">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Entrance Exam" />
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">Full time</label>
            <br />
            <input type="checkbox" id="checkbox2" />
            <label for="checkbox2">Part Time</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Distance</label>
            <br />
          </div>
          <hr className="side7" />
        </div>
        <div className="side4">
          <div className="side5">
            <h5>Entrance Exam
              Accepted</h5>
            <div className="side50">

            </div>
          </div>
          <div className="side6">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Find Program Type" />
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">GATE</label>
            <br />
            <input type="checkbox" id="checkbox2" />
            <label for="checkbox2">CAT</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">MAT</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">JEE MAIN</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">CMAT</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">XAT</label>
            <br />
          </div>
          <hr className="side7" />
        </div>
        <div className="side4">
          <div className="side5">
            <h5>Avg. Fee Per Year </h5>
            <div className="side50">

            </div>
          </div>
          <div className="side6">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Average Fee" />
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">0- 25k [0]</label>
            <br />
            <input type="checkbox" id="checkbox2" />
            <label for="checkbox2">25k - 50k [0]</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">50k - 75k [20]</label>
            <br />
            <input type="checkbox" id="checkbox4" />
            <label for="checkbox4">75k - 1L [15]</label>
            <br />
            <input type="checkbox" id="checkbox5" />
            <label for="checkbox5">1L - 2L [10]</label>
            <br />
            <input type="checkbox" id="checkbox5" />
            <label for="checkbox5">Above 2L [102]</label>
          </div>
          <hr className="side7" />
        </div>
        <div className="side4">
          <div className="side5">
            <h5>Course Type</h5>
            <div className="side50">

            </div>
          </div>
          <div className="side6">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Find Program Type" />
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">Diploma</label>
            <br />
            <input type="checkbox" id="checkbox2" />
            <label for="checkbox2">Degree</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Certificate</label>
            <br />
          </div>
          <hr className="side7" />
        </div>
        <div className="side4">
          <div className="side5">
            <h5>Agency</h5>
            <div className="side50">

            </div>
          </div>
          <div className="side6">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Find Agency" />
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">Lorem Ipsum</label>
            <br />
            <input type="checkbox" id="checkbox2" />
            <label for="checkbox2">Lorem Ipsum</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Lorem Ipsum</label>
            <br />
          </div>
          <hr className="side7" />
        </div>
        <div className="side4">
          <div className="side5">
            <h5>Affiliation</h5>
            <div className="side50">

            </div>
          </div>
          <div className="side6">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Find Affiliation" />
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">Lorem Ipsum</label>
            <br />
            <input type="checkbox" id="checkbox2" />
            <label for="checkbox2">Lorem Ipsum</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Lorem Ipsum</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Lorem Ipsum</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Lorem Ipsum</label>
            <br />
          </div>
          <hr className="side7" />
        </div>
        <div className="side4">
          <div className="side5">
            <h5>Course Duration </h5>
            <div className="side50">

            </div>
          </div>
          <div className="side6">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Find Affiliation" />
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">Lorem Ipsum</label>
            <br />
            <input type="checkbox" id="checkbox2" />
            <label for="checkbox2">Lorem Ipsum</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Lorem Ipsum</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Lorem Ipsum</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Lorem Ipsum</label>
            <br />
          </div>
          <hr className="side7" />
        </div>
        <div className="side4">
          <div className="side5">
            <h5>Institute Grade</h5>
            <div className="side50">

            </div>
          </div>
          <div className="side6">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Find Affiliation" />
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">Lorem Ipsum</label>
            <br />
            <input type="checkbox" id="checkbox2" />
            <label for="checkbox2">Lorem Ipsum</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Lorem Ipsum</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Lorem Ipsum</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">Lorem Ipsum</label>
            <br />
          </div>
          <hr className="side7" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
