import React from "react";
import img1 from "../Images/rankingclg1.png";
import img2 from '../Images/rankingclg2.png'
import img3 from '../Images/rankingclg3.png'
import img4 from '../Images/rankingclg4.png'
import img21 from "../Images/c92.png";


const HomeTable1 = () => {
  const data = [
    {
      id: 1,
      instituteName: "Jamia Islamia University - [JMI], New Delhi",
      ranking: "#1",
      ranking1:'out of 40 in india 2023',
      stream: 'Architecture',
      img: img1,
      img2: img21,
    },
    {
      id: 1,
      rank: "#2",
      instituteName: "School Of Plannig & Architecture - [SPAV] , Vijaywada",
      ranking: "#1",
      ranking1:'out of 40 in india 2023',
      stream: 'Architecture',
      img: img3,
      img2: img21,
    },
    {
      id: 1,
      rank: "#3",
      instituteName: "IIT Roorkee - Indian Institute of Technology-[IIT],Roorkee ",
      ranking: "#1",
      ranking1:'out of 40 in india 2023',
      stream: 'Architecture',
      img: img4,
      img2: img21,
    },
    {
      id: 1,
      rank: "#4",
      instituteName: "Reva  University - [Reva], Bengaluru",
      ranking: "#1",
      ranking1:'out of 40 in india 2023',
      stream: 'Architecture',
      img: img2,
      img2: img21,
    },
    

  ];
  

  return (
    <>
      <div className="table100">
        <div className="table1">
          <table>
            <thead>
              <tr>
                <th className="table2">College</th>
                <th className="table3">Ranking</th>
                <th className="table4">Stream</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td style={{width:'45%'}}>
                  <div className="table8">
                      <div className="table9">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="table10">
                        <p>{item.instituteName}</p>
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
                  <td>
                    <h6>{item.stream}</h6>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HomeTable1;
