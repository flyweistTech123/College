import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import LoanNavbar from "./LoanNavbar";
import MobileLoanNavbar from "./MobileLoanNavabr";
import "bootstrap/dist/css/bootstrap.min.css";
import Offcanvas from 'react-bootstrap/Offcanvas';

import img from "../Images/c102.png";

const Cart = ()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    return (
        <>
            <LoanNavbar />
            <div className="loan100">
                <i class="fa-solid fa-bars" onClick={handleShow}></i>
            </div>
            <div className="cart1">
                <div className="cart2">
                    <div className="cart4">
                        <h3>Your Cart (1 Colleges)</h3>
                        <table classNamr="cart5">
                            <thead>
                                <tr>
                                    <th className="cart11">College Name</th>
                                    <th className="cart11">Courses</th>
                                    <th className="cart11">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="cart11">Lorem Ipsum wezrfrgdfbhbn 3rwegdfhb qe2wfsrd</td>
                                    <td className="cart11">B. Design</td>
                                    <td className="cart11">5,000</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="cart12">
                            <button>More College</button>
                            <button>Apply Code</button>
                        </div>
                    </div>
                </div>
                <div className="cart3">
                    <div className="cart6">
                        <div className="cart7">
                            <h6>Payment Summary</h6>
                            <hr />
                            <div className="cart8">
                                <p>Forem ipsum dolor sit amet, consectetur </p>
                                <img src={img} alt="" />
                                <p>₹500</p>
                            </div>
                            <hr />
                            <h5>Payment Details</h5>
                            <div className="cart9">
                                <p>Sub Total</p>
                                <p>₹1000.00</p>
                            </div>
                            <div className="cart9">
                                <p>Discount</p>
                                <p>₹1000.00</p>
                            </div>
                            <div className="cart9">
                                <p>Total Amount</p>
                                <p>₹1000.00</p>
                            </div>
                            <hr />
                            <h5>Your Details</h5>
                            <div className="cart10">
                                Lorem Ipsum
                            </div>
                            <div className="cart10">
                                Lorem Ipsum
                            </div>
                            <hr />
                            <p>Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputat</p>
                            <button onClick={()=>navigate("/pay-now")}>Proceed to Pay</button>
                        </div>
                    </div>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <MobileLoanNavbar />
        </Offcanvas.Body>
      </Offcanvas>
        </>
    )
}

export default Cart;