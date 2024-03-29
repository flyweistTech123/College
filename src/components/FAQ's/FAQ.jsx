import React, { useState } from 'react';
import './FAQ.css';
import TopNavbar from '../TopNavbar';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Footer from '../Footer';

const faqData = [
    {
        id: 1,
        question: "1. I have lost my internet connection while taking an online test. Can I resume the online test series once the connection is back?",
        answer: "Ans. I have lost my internet connection while taking an online test. Can I resume the online test series once the connection is back?"
    },
    {
        id: 2,
        question: "1. I have lost my internet connection while taking an online test. Can I resume the online test series once the connection is back?",
        answer: "Ans. I have lost my internet connection while taking an online test. Can I resume the online test series once the connection is back?"
    },
    {
        id: 3,
        question: "1. I have lost my internet connection while taking an online test. Can I resume the online test series once the connection is back?",
        answer: "Ans. I have lost my internet connection while taking an online test. Can I resume the online test series once the connection is back?"
    },
    {
        id: 4,
        question: "1. I have lost my internet connection while taking an online test. Can I resume the online test series once the connection is back?",
        answer: "Ans. I have lost my internet connection while taking an online test. Can I resume the online test series once the connection is back?"
    },
    {
        id: 5,
        question: "1. I have lost my internet connection while taking an online test. Can I resume the online test series once the connection is back?",
        answer: "Ans. I have lost my internet connection while taking an online test. Can I resume the online test series once the connection is back?"
    },
    {
        id: 6,
        question: "1. I have lost my internet connection while taking an online test. Can I resume the online test series once the connection is back?",
        answer: "Ans. I have lost my internet connection while taking an online test. Can I resume the online test series once the connection is back?"
    },
];

const FAQ = () => {
    const [step, setStep] = useState(0);

    return (
        <>
            <div className="review28">
                <TopNavbar />
            </div>

            <div className='faq8'>
                <hr />
            </div>

            <div className='faq'>
                <div className='faq1'>
                    <h2>Frequently Asked Questions</h2>
                    <div className="faq4">
                        <div
                            className={step === 0 ? "faq5" : "faq6"}
                            onClick={() => setStep(0)}
                        >
                            <p>For Students</p>
                        </div>
                        <div
                            className={step === 1 ? "faq5" : "faq6"}
                            onClick={() => setStep(1)}
                        >
                            <p>For Colleges</p>
                        </div>
                    </div>
                    {step === 0 ? (
                        <div className='faq2'>
                            {faqData.map((faq) => (
                                <FaqItem key={faq.id} faq={faq} />
                            ))}
                        </div>
                    ) : step === 1 ? (
                        <div className='faq2'>
                            {faqData.map((faq) => (
                                <FaqItem key={faq.id} faq={faq} />
                            ))}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

const FaqItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='faq3'>
            <p className="question" onClick={toggleAnswer}>
                {faq.question}
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </p>
            {isOpen && <div className="answer">{faq.answer}</div>}
        </div>
    );
}

export default FAQ;
