import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import MyVerticallyCenteredModal from "./CouncilModal";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import img from "../Images/c1.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <>
      <MyVerticallyCenteredModal
        show={show}
        onHide={() => setShow(false)}
      />
      <div className="nav1">
        <div className="nav2">
          <img src={img} alt="" onClick={()=>navigate("/")} />
          <div className="nav3">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search for colleges, exams, ...." />
          </div>
          <div className="nav4"  onClick={() => setShow(true)}>
            <i class="fa-regular fa-circle-question "></i>
            <p >Need Counnselling</p>
          </div>
        </div>
      </div>
      <hr className="nav5" />
    </>
  );
};

export default Navbar;
