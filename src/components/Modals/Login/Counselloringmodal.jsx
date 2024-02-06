import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import './Apply.css'
import logo from '../../../Images/applylogo.png'
import { FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';





const CounsellorModal = (props) => {
    const [otp, setOtp] = useState(['', '', '', '']);

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;

        // Move focus to the next input box if a digit is entered
        if (value && index < otp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }

        setOtp(newOtp);
    };

    const navigate = useNavigate()
    return (
        <Modal
            {...props}
            size="sl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Body>
                <div className="Apply11">
                    <div className="Apply12">
                        <img src={logo} alt="" onClick={()=>navigate('/')} />
                        <h2>Register Now To Consult a Counsellor</h2>
                    </div>

                    <div className="Apply13">
                        <div className="Apply14">
                            <FaRegUser className="Apply15" />
                            <input type="text" placeholder="Full Name" />
                        </div>
                        <div className="Apply14">
                            <MdEmail className="Apply15" />
                            <input type="email" placeholder="Email" />
                        </div>
                        <div className="Apply16">
                            <div className="login6">
                                <p>+91</p>
                            </div>
                            <div className="Apply17">
                                <input
                                    type="text"
                                    placeholder="Mobile Number"
                                />
                                <div className='Apply18'>
                                    <p>Send OTP</p>
                                </div>
                            </div>
                        </div>
                        <div className="Apply14">
                            <IoLocationSharp className="Apply15" />
                            <input type="text" placeholder="City you live in" />
                        </div>
                        <div className="Apply14">
                            <FaGraduationCap className="Apply15" />
                            <input type="text" placeholder="Course" />
                        </div>
                        <div className='Apply20'>
                            <h5>By Submitting this form you accept and agree to our <span>Terms Of Use.</span></h5>
                        </div>
                        <div className="otp-container">
                            <p>Enter OTP</p>
                            <div className="otp-inputs">
                                {otp.map((digit, index) => (
                                    <input
                                        type="text"
                                        id={`otp-input-${index}`}
                                        key={index}
                                        value={digit}
                                        onChange={(e) => handleOtpChange(index, e.target.value)}
                                        maxLength="1"
                                    />
                                ))}
                            </div>

                        </div>

                        <div className="apply-button">
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default CounsellorModal;
