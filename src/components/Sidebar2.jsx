import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";
import { MdOutlineSchool } from "react-icons/md";
import { PiCompass } from "react-icons/pi";
import { HiLightBulb } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdFeed } from "react-icons/md";
import { MdPayment } from "react-icons/md";
import { FaMedal } from "react-icons/fa";
import { RiHome5Fill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { FaGift } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { GrUserManager } from "react-icons/gr";

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
          <div className={location.pathname === "/profile" ? "profile11" : "profile10"} onClick={() => navigate("/profile")}>
            <i><FaRegUser /></i>
            <p>Profile</p>
          </div>
          <div className={location.pathname === "/test-perform" ? "profile11" : "profile10"}
            onClick={() => navigate("/test-perform")}
          >
            <i><GrDocumentPerformance /></i>
            <p>My Test Performances</p>
          </div>
          <div className={location.pathname === "/college" ? "profile11" : "profile10"}
            onClick={() => navigate("/college")}
          >
            <i><MdOutlineSchool /></i>
            <p>College</p>
          </div>
          <div className={location.pathname === "/career" ? "profile11" : "profile10"}
            onClick={() => navigate("/career")}
          >
            <i><PiCompass /></i>
            <p>Career Options</p>
          </div>
          <div className={location.pathname === "/application" ? "profile11" : "profile10"}
            onClick={() => navigate("/application")}
          >
            <i><HiLightBulb /></i>
            <p>Common Application</p>
          </div>
          <div className={location.pathname === "/document" ? "profile11" : "profile10"} onClick={() => navigate("/document")}>
            <i><IoDocumentTextOutline /></i>
            <p>Documents</p>
          </div>
          <div className={location.pathname === "/feed" ? "profile11" : "profile10"}
            onClick={() => navigate("/feed")}
          >
            <i><MdFeed /></i>
            <p>Feeds</p>
          </div>
          <div className={location.pathname === "/payment" ? "profile11" : "profile10"}
            onClick={() => navigate("/payment")}
          >
            <i><MdPayment /></i>
            <p>Payment</p>
          </div>
          <div className={location.pathname === "/rewards" ? "profile11" : "profile10"}
            onClick={() => navigate("/rewards")}
          >
            <i><FaMedal /></i>
            <p>Rewards</p>
          </div>
          <div className={location.pathname === "/insurance" ? "profile11" : "profile10"}
            onClick={() => navigate("/insurance")}
          >
            <i><RiHome5Fill /></i>
            <p>Insurance</p>
          </div>
          <div className={location.pathname === "/counsellor" ? "profile11" : "profile10"}
            onClick={() => navigate("/counsellor")}
          >
            <i><GrUserManager /></i>
            <p>Counsellor</p>
          </div>
          <div className={location.pathname === "/setting" ? "profile11" : "profile10"}
            onClick={() => navigate("/setting")}
          >
            <i><IoSettingsOutline /></i>
            <p>Account Setting</p>
          </div>
          <div className={location.pathname === "/referearn" ? "profile11" : "profile10"}
            onClick={() => navigate("/referearn")}
          >
            <i><FaGift /></i>
            <p>Refer &Earn</p>
          </div>
          <div className={location.pathname === "/" ? "profile11" : "profile10"}
            onClick={() => navigate("/")}
          >
            <i><IoIosLogOut /></i>
            <p>Log Out</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar2;
