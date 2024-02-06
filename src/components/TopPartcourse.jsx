import React from "react";
import {useNavigate, useLocation} from "react-router-dom";

const TopPartcourse = ()=>{
  const navigate = useNavigate();
  const location = useLocation();
    return (
        <>
        <div className="clg10">
        <div className="course_details22">
          <p className={location.pathname === "/courses_details"? "clg12" : "clg13"} onClick={()=>navigate("/courses_details")}>Overview </p>
          <p className={location.pathname === "/course_review"? "clg12" : "clg13"} onClick={()=>navigate("/course_review")}>Q&A</p>
        </div>
      </div>
        </>
    )
}

export default TopPartcourse;