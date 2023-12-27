import React from "react";
import {useNavigate, useLocation} from "react-router-dom";

import img from "../Images/c93.png";

const Sidebar2 = () => {
    const navigate = useNavigate();
    const location = useLocation();
  return (
    <>
      <div className="profile7">
        <div className="profile8">
          <img src={img} alt="" />
          <h6>Profile</h6>
          <button>Edit</button>
        </div>
        <div className="profile9" >
          <div className={location.pathname === "/profile"?"profile11" : "profile10"} onClick={()=>navigate("/profile")}>
            <i class="fa-solid fa-user"></i>
            <p>Profile</p>
          </div>
          <div  className={location.pathname === "/test-perform"?"profile11" : "profile10"}
            onClick={()=>navigate("/test-perform")}
          >
            <i class="fa-solid fa-square-poll-vertical"></i>
            <p>My Test Performances</p>
          </div>
          <div  className={location.pathname === "/college"?"profile11" : "profile10"}
            onClick={()=>navigate("/college")}
          >
            <i class="fa-solid fa-graduation-cap"></i>
            <p>College</p>
          </div>
          <div  className={location.pathname === "/career"?"profile11" : "profile10"}
            onClick={()=>navigate("/career")}
          >
            <i class="fa-solid fa-graduation-cap"></i>
            <p>Career Options</p>
          </div>
          <div className={location.pathname === "/document"?"profile11" : "profile10"} onClick={()=>navigate("/document")}>
            <i class="fa-solid fa-file"></i>
            <p>Documents</p>
          </div>
          <div className={location.pathname === "/feed"?"profile11" : "profile10"}
            onClick={()=>navigate("/feed")}
          >
            <i class="fa-sharp fa-solid fa-envelope"></i>
            <p>Feeds</p>
          </div>
          <div className={location.pathname === "/payment"?"profile11" : "profile10"}
            onClick={()=>navigate("/payment")}
          >
            <i class="fa-sharp fa-regular fa-money-bill"></i>
            <p>Payment</p>
          </div>
          <div className={location.pathname === "/rewards" ? "profile11" : "profile10"}
            onClick={()=>navigate("/rewards")}
          >
            <i class="fa-solid fa-gift"></i>
            <p>Rewards</p>
          </div>
          <div className={location.pathname === "/insurance"?"profile11" : "profile10"}
            onClick={()=>navigate("/insurance")}
          >
            <i class="fa-solid fa-graduation-cap"></i>
            <p>Insurance</p>
          </div>
          <div className={location.pathname === "/counsellor"?"profile11" : "profile10"}
            onClick={()=>navigate("/counsellor")}
          >
            <i class="fa-solid fa-people-arrows"></i>
            <p>Counsellor</p>
          </div>
          <div className={location.pathname === "/setting" ? "profile11" : "profile10"}
            onClick={()=>navigate("/setting")}
          >
            <i class="fa-solid fa-gear"></i>
            <p>Account Setting</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar2;
