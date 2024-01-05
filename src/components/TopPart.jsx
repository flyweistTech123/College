import React from "react";
import img2 from "../Images/c49.png";
import {useNavigate, useLocation} from "react-router-dom";

const TopPart = ()=>{
  const navigate = useNavigate();
  const location = useLocation();
    return (
        <>
        <div className="clg10">
        <div className="clg11">
          <p className={location.pathname === "/college-info"? "clg12" : "clg13"} onClick={()=>navigate("/college-info")}>Info </p>
          <p className={location.pathname === "/college-placement"? "clg12" : "clg13"} onClick={()=>navigate("/college-placement")}>Placements</p>
          <p className={location.pathname === "/course-fee"? "clg12" : "clg13"} onClick={()=>navigate("/course-fee")}>Courses & Fee</p>
          <p className={location.pathname === "/admission"? "clg12" : "clg13"} onClick={()=>navigate("/admission")}>Admission</p>
          <p className={location.pathname === "/cut-off"? "clg12" : "clg13"} onClick={()=>navigate("/cut-off")}>Cut off</p>
          <p className={location.pathname === "/college-review"? "clg12" : "clg13"} onClick={()=>navigate("/college-review")}>Review</p>
          <p className={location.pathname === "/infrastructure"? "clg12" : "clg13"} onClick={()=>navigate("/infrastructure")}>Infrastructure</p>
          <p className={location.pathname === "/gallery"? "clg12" : "clg13"} 
            onClick={()=>navigate("/gallery")}
          >Gallery</p>
          <p className={location.pathname === "/scholarship2"? "clg12" : "clg13"} 
            onClick={()=>navigate("/scholarship2")}
          >Scholarship</p>
          <p className={location.pathname === "/scholarship2"? "clg12" : "clg13"} 
            onClick={()=>navigate("/scholarship2")}
          >Q&A</p>
        </div>
      </div>
        </>
    )
}

export default TopPart;