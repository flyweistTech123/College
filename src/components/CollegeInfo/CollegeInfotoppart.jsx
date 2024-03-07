import React, { useState } from 'react'
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
import { useNavigate, useLocation } from "react-router-dom";
import Shortlist from '../Modals/Login/Shortlist';
import Brochure from '../Modals/Login/Brochure';


export const CollegeInfotoppart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);


  return (
    <>
      <div className="ingooo1">
        <div className="ingooo2">
          <img src={img26} />
          <img src={img27} alt="" />
        </div>
        <div className="ingooo3">
          <TopNavbar />
          <div className="ingooo4">
            <div className='ingooo41'>
              <img src={img28} alt="" />
              <h2>Jamia Millia Islamia -[JMI]: Admission 2023 (open), Rankings,Courses, Cutoff, Placement,Scholarship</h2>
            </div>
            <button onClick={() => navigate("/gallery")}> <IoMdPhotos /> View Gallery</button>
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
            <button onClick={() => setModalShow(true)}>Shortlist For Common Application</button>
            <button onClick={() => setModalShow2(true)}>Brochure <MdDownload /></button>
          </div>
        </div>
      </div>

      <Shortlist show={modalShow}
        onHide={() => setModalShow(false)} />
      <Brochure show={modalShow2}
        onHide={() => setModalShow2(false)} />
    </>

  )
}


export default CollegeInfotoppart;