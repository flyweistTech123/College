import React from "react";

const Sidebar4 = () => {
  return (
    <>
      <div className="side1">
        <div className="side3">
          <h2>Filter</h2>
          <p>Found 550 Hostels</p>
          <hr />
        </div>
        <div className="side4">
          <div className="side5">
            <h5>City</h5>
            <div className="side50">

            </div>
          </div>
          <div className="side6">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Find City" />
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
            <h5>Locality</h5>
            <div className="side50">

            </div>
          </div>
          <div className="side6">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Locality" />
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">Electronic City</label>
            <br />
            <input type="checkbox" id="checkbox2" />
            <label for="checkbox2">Kormangala</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">BTM</label>
            <br />
            <input type="checkbox" id="checkbox4" />
            <label for="checkbox4">Sharjapur Road</label>
            <br />
            <input type="checkbox" id="checkbox5" />
            <label for="checkbox5">MG Road</label>
          </div>
          <hr className="side7" />
        </div>
        <div className="side4">
          <div className="side5">
            <h5>Rents</h5>
            <div className="side50">

            </div>
          </div>
          <div className="side6">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Find rents" />
          </div>
          <div class="checkbox-group">
            <input type="checkbox" id="checkbox1" />
            <label for="checkbox1">5k-10k</label>
            <br />
            <input type="checkbox" id="checkbox2" />
            <label for="checkbox2">10k-20k</label>
            <br />
            <input type="checkbox" id="checkbox3" />
            <label for="checkbox3">20k-30k</label>
            <br />
            <input type="checkbox" id="checkbox4" />
            <label for="checkbox4">30k-40k</label>
            <br />
            <input type="checkbox" id="checkbox5" />
            <label for="checkbox5">40k-50k</label>
          </div>
          <hr className="side7" />
        </div>
      </div>
    </>
  );
};

export default Sidebar4;
