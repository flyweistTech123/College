import React, { useState, useEffect } from "react";
import './Electrical_enginer.css'
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../../Footer";
import careersimg from '../../../Images/careers.png';
import TopNavbar from "../../TopNavbar";



const ElectricalEngineering = () => {
  const navigate = useNavigate();



  const [showNavbar, setShowNavbar] = useState(false);
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow2(false);
  const handleShow = () => setShow2(true);
  const [show3, setShow3] = useState(false);

  function NavMenu() {
    return (
      <>
        <div className="menu1">
          <h3>Top Universities</h3>
          <div className="menu2">
            <div className="menu3">
              <h6>Delhi</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
            <div className="menu3">
              <h6>Mumbai</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
            <div className="menu3">
              <h6>Chennai</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
            <div className="menu3">
              <h6>Bangalore</h6>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
              <p>Lorem Ipsum</p>
            </div>
            <div className="menu4"></div>
          </div>
        </div>
      </>
    );
  }

  const handleClick = () => {
    setShowNavbar((prev) => !prev);
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

      <div className="electrical1">
        <h2>How To Become An Electrical Engineer</h2>

        <div className="electrical2">
            <h3>About Electrical Engineering</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar et et ornare nunc tristique. Lectus facilisi ipsum volutpat risus laoreet adipiscing. Gravida leo adipiscing cursus scelerisque suspendisse in a eu non.</p>
            <p>Quis lorem dictumst quam placerat. Risus at amet tellus proin eu. Ultrices ridiculus vitae consectetur auctor pellentesque. Diam pellentesque rutrum vestibulum cras aliquet. Orci non nulla libero diam magna. Elit amet nisi porta ornare massa. At tellus quisque consequat tempor. Pretium ultricies sapien felis dolor pellentesque nisl dolor sit congue. Ornare sollicitudin eros ultricies tellus sagittis sed lectus viverra integer. Dolor sit gravida tellus velit. Augue dolor mi purus tincidunt iaculis pellentesque lobortis vestibulum. Vitae aliquam eget posuere bibendum. Ac sit dignissim in sodales.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar</p>
        </div>
        <div className="electrical2">
            <h3>Eligibility To Become An Electrical Engineer</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar</p>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar</p>
        </div>
        <div className="electrical2">
            <h3>Types of Job Roles  An Electrical Engineer</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar</p>
        </div>
        <div className="electrical2">
            <h3>Biomedical Engineer</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar</p>
        </div>
        <div className="electrical2">
            <h3>Aerospace Engineer</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar</p>
        </div>
        <div className="electrical2">
            <h3>Computer Hardware Engineer</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar</p>
        </div>
        <div className="electrical2">
            <h3>Engineer Managers</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar</p>
        </div>
        <div className="electrical2">
            <h3>Employment Sector  / Industry Electrical Engineer</h3>
            <p>Quis lorem dictumst quam placerat. Risus at amet tellus proin eu. Ultrices ridiculus vitae consectetur auctor pellentesque. Diam pellentesque rutrum vestibulum cras aliquet. Orci non nulla libero diam magna. Elit amet nisi porta ornare massa. At tellus quisque consequat tempor. Pretium ultricies sapien felis dolor pellentesque nisl dolor sit congue. Ornare sollicitudin eros ultricies tellus sagittis sed lectus viverra integer. Dolor sit gravida tellus velit. Augue dolor mi purus tincidunt iaculis pellentesque lobortis vestibulum. Vitae aliquam eget posuere bibendum. Ac sit dignissim in sodales.</p>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar</p> 
        </div>
        <div className="electrical2">
            <h3>Top Recruiting Companies for Electrical Engineer</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar</p> 

            <ul>
                <li>Larsen & Toubro</li>
                <li>Reliance Industries</li>
                <li>Philips</li>
                <li>Tata Steel</li>
                <li>Schneider Electric</li>
                <li>ABB</li>
                <li>Boeing</li>
            </ul>
        </div>
        <div className="electrical2">
            <h3>Pay Scale/ Salary for Electrical Engineer</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar</p> 
            <div className="acad3">
                <table>
                  <thead>
                    <tr>
                      <th>Profile</th>
                      <th>Starting Salary per Annum</th>
                      <th>MidLevel - Salary per Annum</th>
                      <th>Senior - Salary per Annum</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                      <p>Aerospace</p>
                      <p>Computer Hardware</p>
                      </td>
                      <td>
                      <p>3,13,741</p>
                      <p>3,13,741</p>
                      </td>
                      <td>
                      <p>89,13,741</p>
                      <p>89,13,741</p>
                      </td>
                      <td>
                      <p>32,13,741</p>
                      <p>32,13,741</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
        </div>
        <div className="electrical2">
            <h3>Career Path for an Electrical Engineer</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Fermentum nulla risus porta turpis blandit sed egestas gravida. Libero quis ac sagittis in in enim. Sed lectus imperdiet mi lectus. Tempor vestibulum sed sed nam sit mattis mauris proin amet. Egestas tellus nunc feugiat pellentesque arcu nibh ut libero. Ultricies euismod pharetra consequat eu dui augue diam ac ac. Eget est turpis sed adipiscing sem sed ipsum auctor. Tortor in pulvinar lacus sed cursus ut non. Curabitur orci sagittis pulvinar</p> 
        </div>
      </div>
      

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


      <Footer />
    </>
  );
};

export default ElectricalEngineering;
