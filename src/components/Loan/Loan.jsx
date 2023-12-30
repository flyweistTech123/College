import React, { useState } from "react";
import './Loan.css'
import LoanNavbar from "../LoanNavbar";
import ReactApexChart from 'react-apexcharts';
import MobileLoanNavbar from "../MobileLoanNavabr";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import Loanimg from '../../Images/Loan.png'
import img2 from "../../Images/c64.png";
import img3 from "../../Images/c65.png";
import img4 from "../../Images/c66.png";
import img5 from "../../Images/c67.png";
import img6 from "../../Images/c68.png";
import img7 from "../../Images/c69.png";
import img8 from "../../Images/c70.png";
import img9 from "../../Images/c71.png";
import img10 from "../../Images/c72.png";
import img11 from "../../Images/c73.png";
import img12 from "../../Images/c74.png";
import img13 from "../../Images/c75.png";
import img14 from "../../Images/c76.png";
import img15 from "../../Images/c77.png";
import img16 from "../../Images/c78.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';
import TopNavbar from "../TopNavbar";
import TopPart3 from "../TopPart3";

const Loan = () => {

  const [chartData, setChartData] = useState({
    series: [85, 15,],
    options: {
      chart: {
        width: 354.5,
        type: 'pie',
      },
      labels: ['Total Interest', 'Principal loan amount'],
      colors: ['#001848', '#F4BC1C'], // Custom colors
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  });
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  const [faltu, setFaltu] = useState(null);

  const handleFaltu = (index) => {
    setFaltu(index);
  };


  return (
    <>
      <div className="app1">
        <div className="schro">
          <TopNavbar />
        </div>
        <div className="app6">
          <img src={Loanimg} />
        </div>

        <div className="loan31">
          <div className="loan30">
            <img src={img2} alt="" />
            <h5>Calculate <span>EMI</span></h5>
            <p>Corem ipsum dolor sit amet, consectetur adipiscing </p>
          </div>
          <div className="loan30">
            <img src={img3} alt="" />
            <h5><span>KYE:</span> know your Eligibilty</h5>
            <p>Corem ipsum dolor sit amet, </p>
          </div>
        </div>
        <TopPart3 />
      </div>
      <div className="loan10">
        <div className="loan11">
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
          <img src={img7} alt="" />
          <img src={img4} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
          <img src={img10} alt="" />
          <img src={img11} alt="" />
          <img src={img12} alt="" />
        </div>
      </div>
      <div className="loan35">
      {["All Banks", "Govt Banks", "Private Banks", "Cooperative", "NBFCs"].map((bank, index) => (
        <div
          key={index}
          className={faltu === index ? "loan36" : "loan37"}
          onClick={() => handleFaltu(index)}
        >
          {bank}
        </div>
      ))}
    </div>
      <div className="loan12">
        <div className="loan13">
          <p>Bank Name</p>
          <p>Interest Rate</p>
          <p>Max Type</p>
          <p>Loan Type</p>
          <p>Scheme</p>
          <p>Compare</p>
        </div>
        <div className="loan14">
          <div className="loan15">
            <div className="loan16">
              <p>100 % Paperless Approved</p>
            </div>
            <img src={img4} alt="" />
            <p className="loan17">Historical Interest rates</p>
            <button>Details</button>
          </div>
          <div className="loan18">
            <p>UP to INR 7.50 lacs
              10.55%
              above INR 7.50 Lacs
              10.80%</p>
          </div>
          <div className="loan18">
            <p>15 Years</p>
          </div>
          <div className="loan18">
            <p>Student</p>
          </div>
          <div className="loan18">
            <p>Padho Pradesh CSIS Skill Loan Scheme</p>
          </div>
          <div className="loan18">
            <div className="ext1">
              <button className="ext3">Apply Now</button>
              <button className="ext2" onClick={() => navigate("/eligibility-check")}>Eligibility Check</button>
            </div>
          </div>
        </div>
        <div className="loan14">
          <div className="loan15">
            <div className="loan16">
              <p>100%percent Paperless Approved</p>
            </div>
            <img src={img4} alt="" />
            <p className="loan17">Historical Interest rates</p>
            <button>Details</button>
          </div>
          <div className="loan18">
            <p>UP to INR 7.50 lacs 10.55% above INR 7.50 Lacs 10.80%</p>
          </div>
          <div className="loan18">
            <p>15 Years</p>
          </div>
          <div className="loan18">
            <p>Student</p>
          </div>
          <div className="loan18">
            <p>Padho Pradesh CSIS Skill Loan Scheme</p>
          </div>
          <div className="loan18">
            <div className="ext1">
              <button className="ext3">Apply Now</button>
              <button className="ext2" onClick={() => navigate("/eligibility-check")}>Eligibility Check</button>
            </div>
          </div>
        </div>
        <div className="loan14">
          <div className="loan15">
            <div className="loan16">
              <p>100%percent Paperless Approved</p>
            </div>
            <img src={img4} alt="" />
            <p className="loan17">Historical Interest rates</p>
            <button>Details</button>
          </div>
          <div className="loan18">
            <p>UP to INR 7.50 lacs 10.55% above INR 7.50 Lacs 10.80%</p>
          </div>
          <div className="loan18">
            <p>15 Years</p>
          </div>
          <div className="loan18">
            <p>Student</p>
          </div>
          <div className="loan18">
            <p>Padho Pradesh CSIS Skill Loan Scheme</p>
          </div>
          <div className="loan18">
            <div className="ext1">
              <button className="ext3">Apply Now</button>
              <button className="ext2" onClick={() => navigate("/eligibility-check")}>Eligibility Check</button>
            </div>
          </div>
        </div>
        <div className="loan14">
          <div className="loan15">
            <div className="loan16">
              <p>100%percent Paperless Approved</p>
            </div>
            <img src={img4} alt="" />
            <p className="loan17">Historical Interest rates</p>
            <button>Details</button>
          </div>
          <div className="loan18">
            <p>UP to INR 7.50 lacs 10.55% above INR 7.50 Lacs 10.80%</p>
          </div>
          <div className="loan18">
            <p>15 Years</p>
          </div>
          <div className="loan18">
            <p>Student</p>
          </div>
          <div className="loan18">
            <p>Padho Pradesh CSIS Skill Loan Scheme</p>
          </div>
          <div className="loan18">
            <div className="ext1">
              <button className="ext3">Apply Now</button>
              <button className="ext2" onClick={() => navigate("/eligibility-check")}>Eligibility Check</button>
            </div>
          </div>
        </div>
      </div>
      <div className="loan19">
        <p>Show More</p>
      </div>
      <div className="loan20">
        <h5>loan calculator</h5>
        <p>Education loans are crafted to provide financial support to students with aspirations of pursuing higher education in esteemed colleges within India.</p>
      </div>
      <div className="loan21">
      </div>

      <div className="loan24">
        <div className="loan22">
          <h5>EMI Calculator</h5>
          <div className="loan23">
            <label htmlFor="">Loan Amount</label>
            <input type="text" name="" id="" placeholder="₹25,17,310" />
          </div>
          <div className="loan23">
            <label htmlFor="">Interest Rate</label>
            <input type="text" name="" id="" placeholder="7%" />
          </div>
          <div className="loan23">
            <label htmlFor="">Tenure (Months)</label>
            <input type="text" name="" id="" placeholder="147" />
          </div>
          <div className="loan23">
            <label htmlFor="">EMI (Monthly)</label>
            <input type="text" name="" id="" placeholder="₹₹25,550" />
          </div>
          <div className="loan23">
            <label htmlFor="">Total Interest</label>
            <input type="text" name="" id="" placeholder="₹12,38,574" />
          </div>
          <div className="loan25">
            <hr />
          </div>
          <div className="loan23">
            <label htmlFor="">Total Payment</label>
            <input type="text" name="" id="" placeholder="₹37,55,850" />
          </div>

          <div className="loan26">
            <button>Submit</button>
          </div>
        </div>

        <div className="loan27">
          <h6>Emi Payable</h6>
          <p>188 Month</p>
          <h6>Total Interest</h6>
          <p>1,280</p>
          <h6>Payable Amount</h6>
          <p>11,280</p>

          <div className="loan28">
            <ReactApexChart options={chartData.options} series={chartData.series} type="pie" width={380} />
          </div>
        </div>
      </div>
      <div className="loan21">
      </div>
      <Footer />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MobileLoanNavbar />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Loan;
