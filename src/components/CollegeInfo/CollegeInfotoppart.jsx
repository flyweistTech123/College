import React from 'react'
import TopNavbar from "../TopNavbar";
import { IoLocationSharp } from "react-icons/io5";
import { MdMessage } from "react-icons/md";
import { FaClock } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import img26 from "../../Images/Rectangle 71.png";
import img27 from '../../Images/Rectangle 4.png'
import img28 from '../../Images/clginfo.png'
import {useNavigate, useLocation} from "react-router-dom";


export const CollegeInfotoppart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="ingooo1">
        <div className="ingooo2">
          <img src={img26} />
          <img src={img27} alt="" />
        </div>
        <div className="ingooo3">
          <TopNavbar color="#1A3B5A" />

          <div className="ingooo4">
            <img src={img28} alt="" />
            <h2>Jamia Millia Islamia -[JMI]: Admission 2023 (open), Rankings,Courses, Cutoff, Placement,Scholarship</h2>
            <button onClick={()=>navigate("/gallery")}> <IoMdPhotos /> View Gallery</button>
          </div>
        </div>
      </div>

      <div className="ingooo5">
        <div className="ingooo6">
          <span> <IoLocationSharp /> Old Delhi</span>
          <span><FaShield /> Pvt.Ltd</span>
          <span><FaStar /> 4.2/5.0 ( 295 reviews)</span>
          <span><FaClock /> Est.1978</span>
          <span><MdMessage /> 259 comments</span>
        </div>

        <div className="ingooo7">
          <p>The National Institutional Ranking Framework (NIRF) has been accepted by the MoE and launched by Hono</p>
          <div className="ingooo8">
            <button>Shortlist For Common Application</button>
            <button>Brochure <MdDownload /></button>
          </div>
        </div>
      </div>
    </>

  )
}


export default CollegeInfotoppart;