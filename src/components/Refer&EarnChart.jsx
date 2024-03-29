import React, { useState } from "react";
import LoanNavbar from "./LoanNavbar";
import MobileLoanNavbar from "./MobileLoanNavabr";
import Footer from "./Footer";
import Sidebar2 from "./Sidebar2";
import Offcanvas from "react-bootstrap/Offcanvas";
import TopNavbar from "./TopNavbar";

const ReferEarnChart = () => {
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow2(false);
    const handleShow = () => setShow2(true);
    return (
        <>
            <div className="schro">
                <TopNavbar />
            </div>
            <div className="home100">
                <i class="fa-solid fa-bars" onClick={handleShow}></i>
            </div>
            <div className="profile1">
                <div className="profile2">
                    <Sidebar2 />
                </div>
                <div className="profile3">
                    <div className="chartrefer">
                        <div className="chartrefer1">
                            <h5>List of Students Referred</h5>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name of Student</th>
                                    <th>Contact No</th>
                                    <th>Alternate No</th>
                                    <th>Email ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="payment85">
                        <div className="payment86">
                            <div className="payment89">
                                <h5>CH Refer & Earn Policy </h5>
                                <p>Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Offcanvas show={show2} onHide={handleClose}>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                    <MobileLoanNavbar />
                    <Sidebar2 />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default ReferEarnChart;
