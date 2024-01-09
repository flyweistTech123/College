import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";






const OTPModal = (props) => {
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
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <>
            <div className="otp11">
              <div className="otp-container">
                <h2>Enter OTP</h2>
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
              <div className="login9">
                <button>Submit</button>
              </div>
            </div>
          </>
        </Modal.Body>
      </Modal>
    );
};

export default OTPModal;
