import React, { useState } from "react";
import img from "../Images/c91.png";
import img2 from "../Images/c92.png";
import img3 from "../Images/c106.png";
import ApplyNowModal from "./Modals/Login/Apply";

const HomeTable = () => {
  const [modalShow, setModalShow] = useState(false);
  const data = [
    {
      id: 1,
      rank: "#1",
      instituteName: "India Institute of Management [ IIM ]",
      location: "Indore, Madhya Pradesh",
      rating: 8.7,
      ranking: "#7",
      ranking1:'out of 281 in india 2022',
      img: img,
      img2: img2,
      img3: img3,
      fees: "₹ 1000"
    },
    {
      id: 1,
      rank: "#2",
      instituteName: "India Institute of Management [ IIM ]",
      location: "Indore, Madhya Pradesh",
      rating: 8.7,
      ranking: "#7",
      ranking1:'out of 281 in india 2022',
      img: img,
      img2: img2,
      img3: img3,
      fees: "₹ 1000"
    },
    {
      id: 1,
      rank: "#3",
      instituteName: "India Institute of Management [ IIM ]",
      location: "Indore, Madhya Pradesh",
      rating: 8.7,
      ranking: "#7",
      ranking1:'out of 281 in india 2022',
      img: img,
      img2: img2,
      img3: img3,
      fees: "₹ 1000"
    },
    {
      id: 1,
      rank: "#4",
      instituteName: "India Institute of Management [ IIM ]",
      location: "Indore, Madhya Pradesh",
      rating: 8.7,
      ranking: "#7",
      ranking1:'out of 281 in india 2022',
      img: img,
      img2: img2,
      img3: img3,
      fees: "₹ 1000"
    },
    {
      id: 1,
      rank: "#5",
      instituteName: "India Institute of Management [ IIM ]",
      location: "Indore, Madhya Pradesh",
      rating: 8.7,
      ranking: "#7",
      ranking1:'out of 281 in india 2022',
      img: img,
      img2: img2,
      img3: img3,
      fees: "₹ 1000"
    },
    {
      id: 1,
      rank: "#6",
      instituteName: "India Institute of Management [ IIM ]",
      location: "Indore, Madhya Pradesh",
      rating: 8.7,
      ranking: "#7",
      ranking1:'out of 281 in india 2022',
      img: img,
      img2: img2,
      img3: img3,
      fees: "₹ 1000"
    },
    {
      id: 1,
      rank: "#7",
      instituteName: "India Institute of Management [ IIM ]",
      location: "Indore, Madhya Pradesh",
      rating: 8.7,
      ranking: "#7",
      ranking1:'out of 281 in india 2022',
      img: img,
      img2: img2,
      img3: img3,
      fees: "₹ 1000"
    },
    {
      id: 1,
      rank: "#8",
      instituteName: "India Institute of Management [ IIM ]",
      location: "Indore, Madhya Pradesh",
      rating: 8.7,
      ranking: "#7",
      ranking1:'out of 281 in india 2022',
      img: img,
      img2: img2,
      img3: img3,
      fees: "₹ 1000"
    },
    {
      id: 1,
      rank: "#9",
      instituteName: "India Institute of Management [ IIM ]",
      location: "Indore, Madhya Pradesh",
      rating: 8.7,
      ranking: "#7",
      ranking1:'out of 281 in india 2022',
      img: img,
      img2: img2,
      img3: img3,
      fees: "₹ 1000"
    },
    {
      id: 1,
      rank: "#10",
      instituteName: "India Institute of Management [ IIM ]",
      location: "Indore, Madhya Pradesh",
      rating: 8.7,
      ranking: "#7",
      ranking1:'out of 281 in india 2022',
      img: img,
      img2: img2,
      img3: img3,
      fees: "₹ 1000"
    },

  ];
  

  return (
    <>
      <div className="table100">
        <div className="table1">
          <table>
            <thead>
              <tr>
                <th className="table2">CH Rank</th>
                <th className="table3">College</th>
                <th className="table4">Ranking</th>
                <th className="table6">Application Date</th>
                <th className="table7">Fees</th>
                <th className="table7">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td><p className="table12">{item.rank}</p></td>
                  <td>
                    <div className="table8">
                      <div className="table9">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="table10">
                        <h6>{item.instituteName}</h6>
                        <p style={{color:'#3D3D3D', fontWeight:'400',}}>
                          {item.location} |{" "}
                          <i className="fa-solid fa-star" style={{ color: "gold" }}></i>
                          {item.rating} / 10
                        </p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="table8">
                      <div className="table9">
                        <img src={item.img2} alt="" />
                      </div>
                      <div className="table10">
                        <p>{item.ranking} <span style={{color:'#2E2E2E'}}>{item.ranking1}</span></p>
                      </div>
                    </div>
                  </td>
                  <td><img src={item.img3} alt="" className="table11" /></td>
                  <td>
                    <h6>{item.fees}</h6>
                    <p style={{color:'#3E3E3E'}}>Application Fee</p>
                  </td>
                  <td>
                    <div className="table13">
                      <button  onClick={() => setModalShow(true)}>Apply Now</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ApplyNowModal show={modalShow}
        onHide={() => setModalShow(false)}/>
    </>
  );
};

export default HomeTable;
