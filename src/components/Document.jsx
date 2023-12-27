import React from "react";
import LoanNavbar from "./LoanNavbar";
import MobileLoanNavbar from "./MobileLoanNavabr";
import Sidebar2 from "./Sidebar2";
import Footer from "./Footer";


import img from "../Images/c116.png";
import img2 from "../Images/c117.png";
import Offcanvas from "react-bootstrap/Offcanvas";

const Document = () => {
  return (
    <>
      <LoanNavbar />
      <div className="profile1">
        <div className="profile2">
          <Sidebar2 />
        </div>
        <div className="profile3">
          <div className="doc1">
            <div className="doc2">
              <h5>Securely access your documents anywhere, anytime.</h5>
              <p>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et </p>
            </div>
            <div className="doc3">
                <img src={img} alt="" />
            </div>
          </div>
          <div className="doc4">
            <h6>Document</h6>
            <div className="doc5">
              <div className="doc6">
                <div className="doc7">
                  <img src={img2} alt="" />
                  <p>Upload</p>
                </div>
                <h5>10th Certificate</h5>
              </div>
              <div className="doc6">
                <div className="doc7">
                  <img src={img2} alt="" />
                  <p>Upload</p>
                </div>
                <h5>10th Certificate</h5>
              </div>
              <div className="doc6">
                <div className="doc7">
                  <img src={img2} alt="" />
                  <p>Upload</p>
                </div>
                <h5>10th Certificate</h5>
              </div>
              <div className="doc6">
                <div className="doc7">
                  <img src={img2} alt="" />
                  <p>Upload</p>
                </div>
                <h5>10th Certificate</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Document;
