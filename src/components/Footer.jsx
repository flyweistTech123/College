import React from "react";
import logo from '../Images/logo.png'
const Footer = () => {
  console.log("Footer here");
  return (
    <>
      <div className="foot1">
        <div className="foot2">
          <div className="foot3">
            <img src={logo} alt="" />
          </div>
          <div className="foot3">
            <p className="foot4">Top Colleges</p>
            <p className="foot5">MBA</p>
            <p className="foot5">B.Tech/B.E</p>
            <p className="foot5">MCA</p>
            <p className="foot5">BCA</p>
            <p className="foot5">M.Tech</p>
            <p className="foot5">M.A</p>
            <p className="foot5">B.A</p>
          </div>
          <div className="foot3">
            <p className="foot4">Top Universities</p>
            <p className="foot5">Engineering</p>
            <p className="foot5">Management</p>
            <p className="foot5">Medical</p>
            <p className="foot5">LAW</p>
            <p className="foot5">Commerce</p>
            <p className="foot5">Science</p>
            <p className="foot5">Arts</p>
          </div>
          <div className="foot3">
            <p className="foot4">Top Exams</p>
            <p className="foot5">CAT</p>
            <p className="foot5">GATE</p>
            <p className="foot5">JEE-MAIN</p>
            <p className="foot5">NEET</p>
            <p className="foot5">XAT</p>
            <p className="foot5">CLAT</p>
            <p className="foot5">MAT</p>
          </div>
          <div className="foot3">
            <p className="foot4">Top Cities</p>
            <p className="foot5">Bangalore</p>
            <p className="foot5">Lucknow</p>
            <p className="foot5">Delhi</p>
            <p className="foot5">Mumbai</p>
            <p className="foot5">Kolkata</p>
            <p className="foot5">Indore</p>
          </div>
          <div className="foot3">
            <p className="foot4">Top States</p>
            <p className="foot5">Karnataka</p>
            <p className="foot5">Uttar Pradesh</p>
            <p className="foot5">Delhi</p>
            <p className="foot5">Maharashtra</p>
            <p className="foot5">West Bengal</p>
            <p className="foot5">Madhya Pradesh</p>
          </div>
        </div>
        <div className="foot8">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
        <hr className="foot6" />
        <div className="foot7">
          <h3>Terms & Conditions | Privacy Policy | 2023 College Hub Internet Co.</h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
