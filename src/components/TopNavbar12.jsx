import React, {  useRef } from "react";
const TopNavbar12 = (props) => {
  const dropdownRef = useRef(null);



  
 

  const data1 = [
    "Management", "Engineering", "Law", "Science", "Commerce", "Arts", "Paramedical", "Pharmacy"
  ]

  return (
    <>
    


      <div className="nav-course">
        <div className="newNav2">
          <div className="drop4">
            {data1.map((i, index) => (
              <div ref={dropdownRef}>
                <p style={{ color: props.color }}> {i} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNavbar12;
