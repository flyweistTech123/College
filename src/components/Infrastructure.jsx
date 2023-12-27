import React, { useState } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import TopPart from "./TopPart";
import Footer from "./Footer";

import img from "../Images/c108.png";
import img2 from "../Images/c109.png";
import img3 from "../Images/c110.png";
import img4 from "../Images/c111.png";
import img5 from "../Images/c112.png";
import img6 from "../Images/c113.png";
import img8 from "../Images/c57.png";
import img9 from "../Images/c58.png";

import MobileLoanNavbar from "./MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from "react-bootstrap/Offcanvas";

const Infrastructure = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <TopPart />
      <div className="clg14">
        <div className="clg15">
          <div className="infra1">
            <div className="infra2">
              <div className="infra3">
                <img src={img} alt="" />
                <p>Computer</p>
              </div>
              <div className="infra3">
                <img src={img2} alt="" />
                <p>Sports</p>
              </div>
              <div className="infra3">
                <img src={img3} alt="" />
                <p>Hospital</p>
              </div>
              <div className="infra3">
                <img src={img4} alt="" />
                <p>Library</p>
              </div>
              <div className="infra3">
                <img src={img5} alt="" />
                <p>GYM</p>
              </div>
              <div className="infra3">
                <img src={img6} alt="" />
                <p>Auditorium</p>
              </div>
            </div>
          </div>
            <div className="infra4">
                <h5>Library</h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
            <div className="infra4">
                <h5> DigitalLibrary</h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
            <div className="infra4">
                <h5>Network Facilities</h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
            <div className="infra4">
                <h5>Cisco Networking Academy</h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
            <div className="infra4">
                <h5>Hostels</h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
            <div className="infra4">
                <h5>Sports Facilities</h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
            <div className="infra4">
                <h5>Guest House</h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
            <div className="infra4">
                <h5>Canteen</h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
            <div className="infra4">
                <h5>Amenities Complex</h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
            <div className="infra4">
                <h5>Banks & ATM </h5>
                <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum 
                    est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin 
                    lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
                     lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
                     himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec 
                     ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. 
                     Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                </p>
            </div>
        </div>
        <div className="clg16">
          <div className="clg30">
            <div className="clg31">
              <img src={img8} alt="" />
              <p>Are You Interested in College ?</p>
            </div>
            <div className="clg32">
              <button className="clg8">Placement Report</button>
              <button className="clg9">Apply Now</button>
            </div>
          </div>
          <div className="clg30">
            <div className="clg33">
              <h6 className="clg33h6">Featured News</h6>
              <p className="clg33p">Recent News</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35" style={{ paddingBottom: "20px" }}>
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
          </div>
          <div className="clg30">
            <div className="clg33">
              <h6 className="clg33h6">Trending Articles</h6>
              <p className="clg33p">Recent Articles</p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35">
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
            <hr className="clg34" />
            <div className="clg35" style={{ paddingBottom: "20px" }}>
              <img src={img9} alt="" />
              <p>
                Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Infrastructure;
