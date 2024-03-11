import React, { useState, useEffect } from "react";
import './Electrical_enginer.css'
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../Footer";
import careersimg from '../../../Images/careers.png';
import img from '../../../Images/electrical.png'
import TopNavbar from "../../TopNavbar";
import { FaAngleDown } from "react-icons/fa";



const ElectricalEngineering = () => {
  const navigate = useNavigate();
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index); // Update activeIndex state
  };



  return (
    <>
      <div className="app1">
        <div className="schro">
          <TopNavbar />
        </div>
        <div className="app6">
          <img src={careersimg} />
        </div>
        <div className="caree1">
          <div className="home100">
            <i class="fa-solid fa-bars" onClick={handleShow}></i>
          </div>
          <div className="caree2">
            <h2>Start Your Dream Career</h2>
          </div>
          <div className="caree3">
            <button onClick={() => navigate("/screen2")}>
              Explore College & University
            </button>
          </div>
        </div>
      </div>

      <div className="electricalengi">
        <div className="electricalengi1">
          <div className="electricalengi9">
            <img src={img} alt="" />
            <h6>Electronic Engineer</h6>
          </div>

          <div className="electricalengi6">
            {["About", "Eligibility", "Job Roles", "Salary", "Prep-Books", "Pros"].map((bank, index) => (
              <div
                key={index}
                className={activeIndex === index ? "electricalengi7" : "electricalengi8"}
                onClick={() => handleItemClick(index)}
              >
                {bank}
              </div>
            ))}
          </div>
        </div>
        <div className="electricalengi2">
          <div className="electricalengi3" >
            <h2>How To Become An Electrical Engineer</h2>
          </div>
          <div className="electricalengi4">
            {activeIndex === 0 && <h5>About Electrical Engineering</h5>}
            {activeIndex === 1 && <h5>Eligibility To Become An Electrical Engineer</h5>}
            {activeIndex === 2 && <h5>Types of Job Roles  An Electrical Engineer</h5>}
            {activeIndex === 3 && <h5>Pay Scale/ Salary for Electrical Engineer </h5>}
            {activeIndex === 4 && <h5>Career Path for an Electrical Engineer</h5>}
            {activeIndex === 5 && <h5>Career Path for an Electrical Engineer</h5>}
          </div>
          <div className="electricalengi5">
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar et et ornare nunc tristique. Lectus facilisi ipsum volutpat risus laoreet adipiscing. Gravida leo adipiscing cursus scelerisque suspendisse in a eu non.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar et et ornare nunc tristique. Lectus facilisi ipsum volutpat risus laoreet adipiscing. Gravida leo adipiscing cursus scelerisque suspendisse in a eu non.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar et et ornare nunc tristique. Lectus facilisi ipsum volutpat risus laoreet adipiscing. Gravida leo adipiscing cursus scelerisque suspendisse in a eu non.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar et et ornare nunc tristique. Lectus facilisi ipsum volutpat risus laoreet adipiscing. Gravida leo adipiscing cursus scelerisque suspendisse in a eu non.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar et et ornare nunc tristique. Lectus facilisi ipsum volutpat risus laoreet adipiscing. Gravida leo adipiscing cursus scelerisque suspendisse in a eu non.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar et et ornare nunc tristique. Lectus facilisi ipsum volutpat risus laoreet adipiscing. Gravida leo adipiscing cursus scelerisque suspendisse in a eu non.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar et et ornare nunc tristique. Lectus facilisi ipsum volutpat risus laoreet adipiscing. Gravida leo adipiscing cursus scelerisque suspendisse in a eu non.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar et et ornare nunc tristique. Lectus facilisi ipsum volutpat risus laoreet adipiscing. Gravida leo adipiscing cursus scelerisque suspendisse in a eu non.</p>
          </div>
        </div>
      </div>

      <div className="home60">
        <div className="home61">
          <h1>Subscribe To Our NewsLetter</h1>
          <div className="home62">
            <input type="text" name="" id="" placeholder="Name" />
            <input type="text" name="" id="" placeholder="Mobile" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="text" name="" id="" placeholder="Your Stream" />
          </div>
          <div className="home63">
            <button>Submit</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ElectricalEngineering;
