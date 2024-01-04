import React, { useState } from "react";
import './Predict_Now.css'
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from "../TopNavbar";
import Sidebar4 from "../Sidebar4";
import { FaSearch } from 'react-icons/fa';
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import img from '../../Images/cardsimg.png'
import star from '../../Images/star.png'


const PredictNow = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/tests')
    }

    const [showMore, setShowMore] = useState(false);
    return (
        <>
            <div className="app1">
                <div className="schro">
                    <TopNavbar />
                </div>
            </div>


            <div className="now1">
                <div className="screen2">
                    <Sidebar4 />
                </div>




                <div>

                    <div className="now2">
                        <div className="search-container12">
                            <input
                                type="text"
                                placeholder="Search for colleges, exams, Q & A, Articles..."
                                className="search-input1"
                            />
                            <div className="search-icon11">
                                <FaSearch />
                            </div>
                        </div>

                        <div className="now3">
                            <button><FaRegQuestionCircle /> Need Counselling</button>
                        </div>
                    </div>


                    <div className="now4">
                        <h1>Top Engineering colleges Accepting JEE Mains</h1>

                        <div className="now20">
                            <div className="now5">
                                <div className="now6">
                                    <img src={img} alt="" />
                                    <div className="now8">
                                        <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                                    </div>
                                    <div className="now7">
                                        <p>Asia Pacific Institute of Management...</p>
                                        <span> <IoLocationOutline />Kochi, Kerala | MCI Accredited</span>
                                    </div>
                                </div>




                                <div className="now10">
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#7</span> out of 281 in NIRF</p>
                                    </div>
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#8</span> out of 2</p>
                                    </div>
                                </div>
                                <div className="now12">
                                    <div className="now13">
                                        <h3>BTech Computer Science Enigineering</h3>
                                        <p>Round1,General,Os,Closing Rank -1590</p>
                                    </div>

                                    <div className="now14">
                                        <h6>₹ 157,280</h6>
                                        <h5>1st Year Fee</h5>
                                    </div>
                                </div>
                                {
                                    showMore && <div className="now12">
                                        <div className="now13">
                                            <h3>BTech Computer Science Enigineering</h3>
                                            <p>Round1,General,Os,Closing Rank -1590</p>
                                        </div>

                                        <div className="now14">
                                            <h6>₹ 157,280</h6>
                                            <h5>1st Year Fee</h5>
                                        </div>
                                    </div>
                                }


                                <div className="now15">
                                    <button onClick={() => setShowMore(!showMore)}> {showMore ? 'Show Less' : 'Show More'}</button>
                                    <button>Apply Now</button>
                                </div>

                            </div>
                            <div className="now5">
                                <div className="now6">
                                    <img src={img} alt="" />
                                    <div className="now8">
                                        <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                                    </div>
                                    <div className="now7">
                                        <p>Asia Pacific Institute of Management...</p>
                                        <span> <IoLocationOutline />Kochi, Kerala | MCI Accredited</span>
                                    </div>
                                </div>



                                <div className="now10">
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#7</span> out of 281 in NIRF</p>
                                    </div>
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#8</span> out of 2</p>
                                    </div>
                                </div>
                                <div className="now12">
                                    <div className="now13">
                                        <h3>BTech Computer Science Enigineering</h3>
                                        <p>Round1,General,Os,Closing Rank -1590</p>
                                    </div>

                                    <div className="now14">
                                        <h6>₹ 157,280</h6>
                                        <h5>1st Year Fee</h5>
                                    </div>
                                </div>
                                {
                                    showMore && <div className="now12">
                                        <div className="now13">
                                            <h3>BTech Computer Science Enigineering</h3>
                                            <p>Round1,General,Os,Closing Rank -1590</p>
                                        </div>

                                        <div className="now14">
                                            <h6>₹ 157,280</h6>
                                            <h5>1st Year Fee</h5>
                                        </div>
                                    </div>
                                }


                                <div className="now15">
                                    <button onClick={() => setShowMore(!showMore)}> {showMore ? 'Show Less' : 'Show More'}</button>
                                    <button>Apply Now</button>
                                </div>

                            </div>
                            <div className="now5">
                                <div className="now6">
                                    <img src={img} alt="" />
                                    <div className="now8">
                                        <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                                    </div>
                                    <div className="now7">
                                        <p>Asia Pacific Institute of Management...</p>
                                        <span> <IoLocationOutline />Kochi, Kerala | MCI Accredited</span>
                                    </div>
                                </div>



                                <div className="now10">
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#7</span> out of 281 in NIRF</p>
                                    </div>
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#8</span> out of 2</p>
                                    </div>
                                </div>
                                <div className="now12">
                                    <div className="now13">
                                        <h3>BTech Computer Science Enigineering</h3>
                                        <p>Round1,General,Os,Closing Rank -1590</p>
                                    </div>

                                    <div className="now14">
                                        <h6>₹ 157,280</h6>
                                        <h5>1st Year Fee</h5>
                                    </div>
                                </div>
                                {
                                    showMore && <div className="now12">
                                        <div className="now13">
                                            <h3>BTech Computer Science Enigineering</h3>
                                            <p>Round1,General,Os,Closing Rank -1590</p>
                                        </div>

                                        <div className="now14">
                                            <h6>₹ 157,280</h6>
                                            <h5>1st Year Fee</h5>
                                        </div>
                                    </div>
                                }


                                <div className="now15">
                                    <button onClick={() => setShowMore(!showMore)}> {showMore ? 'Show Less' : 'Show More'}</button>
                                    <button>Apply Now</button>
                                </div>

                            </div>
                        </div>
                        <div className="now21">
                        </div>
                        <div className="now20">
                            <div className="now5">
                                <div className="now6">
                                    <img src={img} alt="" />
                                    <div className="now8">
                                        <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                                    </div>
                                    <div className="now7">
                                        <p>Asia Pacific Institute of Management...</p>
                                        <span> <IoLocationOutline />Kochi, Kerala | MCI Accredited</span>
                                    </div>
                                </div>



                                <div className="now10">
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#7</span> out of 281 in NIRF</p>
                                    </div>
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#8</span> out of 2</p>
                                    </div>
                                </div>
                                <div className="now12">
                                    <div className="now13">
                                        <h3>BTech Computer Science Enigineering</h3>
                                        <p>Round1,General,Os,Closing Rank -1590</p>
                                    </div>

                                    <div className="now14">
                                        <h6>₹ 157,280</h6>
                                        <h5>1st Year Fee</h5>
                                    </div>
                                </div>
                                {
                                    showMore && <div className="now12">
                                        <div className="now13">
                                            <h3>BTech Computer Science Enigineering</h3>
                                            <p>Round1,General,Os,Closing Rank -1590</p>
                                        </div>

                                        <div className="now14">
                                            <h6>₹ 157,280</h6>
                                            <h5>1st Year Fee</h5>
                                        </div>
                                    </div>
                                }


                                <div className="now15">
                                    <button onClick={() => setShowMore(!showMore)}> {showMore ? 'Show Less' : 'Show More'}</button>
                                    <button>Apply Now</button>
                                </div>

                            </div>
                            <div className="now5">
                                <div className="now6">
                                    <img src={img} alt="" />
                                    <div className="now8">
                                        <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                                    </div>
                                    <div className="now7">
                                        <p>Asia Pacific Institute of Management...</p>
                                        <span> <IoLocationOutline />Kochi, Kerala | MCI Accredited</span>
                                    </div>
                                </div>


                                <div className="now10">
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#7</span> out of 281 in NIRF</p>
                                    </div>
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#8</span> out of 2</p>
                                    </div>
                                </div>
                                <div className="now12">
                                    <div className="now13">
                                        <h3>BTech Computer Science Enigineering</h3>
                                        <p>Round1,General,Os,Closing Rank -1590</p>
                                    </div>

                                    <div className="now14">
                                        <h6>₹ 157,280</h6>
                                        <h5>1st Year Fee</h5>
                                    </div>
                                </div>
                                {
                                    showMore && <div className="now12">
                                        <div className="now13">
                                            <h3>BTech Computer Science Enigineering</h3>
                                            <p>Round1,General,Os,Closing Rank -1590</p>
                                        </div>

                                        <div className="now14">
                                            <h6>₹ 157,280</h6>
                                            <h5>1st Year Fee</h5>
                                        </div>
                                    </div>
                                }


                                <div className="now15">
                                    <button onClick={() => setShowMore(!showMore)}> {showMore ? 'Show Less' : 'Show More'}</button>
                                    <button>Apply Now</button>
                                </div>

                            </div>
                            <div className="now5">
                                <div className="now6">
                                    <img src={img} alt="" />
                                    <div className="now8">
                                        <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                                    </div>
                                    <div className="now7">
                                        <p>Asia Pacific Institute of Management...</p>
                                        <span> <IoLocationOutline />Kochi, Kerala | MCI Accredited</span>
                                    </div>
                                </div>


                                <div className="now10">
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#7</span> out of 281 in NIRF</p>
                                    </div>
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#8</span> out of 2</p>
                                    </div>
                                </div>
                                <div className="now12">
                                    <div className="now13">
                                        <h3>BTech Computer Science Enigineering</h3>
                                        <p>Round1,General,Os,Closing Rank -1590</p>
                                    </div>

                                    <div className="now14">
                                        <h6>₹ 157,280</h6>
                                        <h5>1st Year Fee</h5>
                                    </div>
                                </div>
                                {
                                    showMore && <div className="now12">
                                        <div className="now13">
                                            <h3>BTech Computer Science Enigineering</h3>
                                            <p>Round1,General,Os,Closing Rank -1590</p>
                                        </div>

                                        <div className="now14">
                                            <h6>₹ 157,280</h6>
                                            <h5>1st Year Fee</h5>
                                        </div>
                                    </div>
                                }


                                <div className="now15">
                                    <button onClick={() => setShowMore(!showMore)}> {showMore ? 'Show Less' : 'Show More'}</button>
                                    <button>Apply Now</button>
                                </div>

                            </div>
                        </div>
                        <div className="now20">
                            <div className="now5">
                                <div className="now6">
                                    <img src={img} alt="" />
                                    <div className="now8">
                                        <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                                    </div>
                                    <div className="now7">
                                        <p>Asia Pacific Institute of Management...</p>
                                        <span> <IoLocationOutline />Kochi, Kerala | MCI Accredited</span>
                                    </div>
                                </div>



                                <div className="now10">
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#7</span> out of 281 in NIRF</p>
                                    </div>
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#8</span> out of 2</p>
                                    </div>
                                </div>
                                <div className="now12">
                                    <div className="now13">
                                        <h3>BTech Computer Science Enigineering</h3>
                                        <p>Round1,General,Os,Closing Rank -1590</p>
                                    </div>

                                    <div className="now14">
                                        <h6>₹ 157,280</h6>
                                        <h5>1st Year Fee</h5>
                                    </div>
                                </div>
                                {
                                    showMore && <div className="now12">
                                        <div className="now13">
                                            <h3>BTech Computer Science Enigineering</h3>
                                            <p>Round1,General,Os,Closing Rank -1590</p>
                                        </div>

                                        <div className="now14">
                                            <h6>₹ 157,280</h6>
                                            <h5>1st Year Fee</h5>
                                        </div>
                                    </div>
                                }


                                <div className="now15">
                                    <button onClick={() => setShowMore(!showMore)}> {showMore ? 'Show Less' : 'Show More'}</button>
                                    <button>Apply Now</button>
                                </div>

                            </div>
                            <div className="now5">
                                <div className="now6">
                                    <img src={img} alt="" />
                                    <div className="now8">
                                        <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                                    </div>
                                    <div className="now7">
                                        <p>Asia Pacific Institute of Management...</p>
                                        <span> <IoLocationOutline />Kochi, Kerala | MCI Accredited</span>
                                    </div>
                                </div>



                                <div className="now10">
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#7</span> out of 281 in NIRF</p>
                                    </div>
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#8</span> out of 2</p>
                                    </div>
                                </div>
                                <div className="now12">
                                    <div className="now13">
                                        <h3>BTech Computer Science Enigineering</h3>
                                        <p>Round1,General,Os,Closing Rank -1590</p>
                                    </div>

                                    <div className="now14">
                                        <h6>₹ 157,280</h6>
                                        <h5>1st Year Fee</h5>
                                    </div>
                                </div>
                                {
                                    showMore && <div className="now12">
                                        <div className="now13">
                                            <h3>BTech Computer Science Enigineering</h3>
                                            <p>Round1,General,Os,Closing Rank -1590</p>
                                        </div>

                                        <div className="now14">
                                            <h6>₹ 157,280</h6>
                                            <h5>1st Year Fee</h5>
                                        </div>
                                    </div>
                                }


                                <div className="now15">
                                    <button onClick={() => setShowMore(!showMore)}> {showMore ? 'Show Less' : 'Show More'}</button>
                                    <button>Apply Now</button>
                                </div>

                            </div>
                            <div className="now5">
                                <div className="now6">
                                    <img src={img} alt="" />
                                    <div className="now8">
                                        <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                                    </div>
                                    <div className="now7">
                                        <p>Asia Pacific Institute of Management...</p>
                                        <span> <IoLocationOutline />Kochi, Kerala | MCI Accredited</span>
                                    </div>
                                </div>



                                <div className="now10">
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#7</span> out of 281 in NIRF</p>
                                    </div>
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#8</span> out of 2</p>
                                    </div>
                                </div>
                                <div className="now12">
                                    <div className="now13">
                                        <h3>BTech Computer Science Enigineering</h3>
                                        <p>Round1,General,Os,Closing Rank -1590</p>
                                    </div>

                                    <div className="now14">
                                        <h6>₹ 157,280</h6>
                                        <h5>1st Year Fee</h5>
                                    </div>
                                </div>
                                {
                                    showMore && <div className="now12">
                                        <div className="now13">
                                            <h3>BTech Computer Science Enigineering</h3>
                                            <p>Round1,General,Os,Closing Rank -1590</p>
                                        </div>

                                        <div className="now14">
                                            <h6>₹ 157,280</h6>
                                            <h5>1st Year Fee</h5>
                                        </div>
                                    </div>
                                }


                                <div className="now15">
                                    <button onClick={() => setShowMore(!showMore)}> {showMore ? 'Show Less' : 'Show More'}</button>
                                    <button>Apply Now</button>
                                </div>

                            </div>
                        </div>
                        <div className="now21">
                        </div>
                        <div className="now20">
                            <div className="now5">
                                <div className="now6">
                                    <img src={img} alt="" />
                                    <div className="now8">
                                        <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                                    </div>
                                    <div className="now7">
                                        <p>Asia Pacific Institute of Management...</p>
                                        <span> <IoLocationOutline />Kochi, Kerala | MCI Accredited</span>
                                    </div>
                                </div>



                                <div className="now10">
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#7</span> out of 281 in NIRF</p>
                                    </div>
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#8</span> out of 2</p>
                                    </div>
                                </div>
                                <div className="now12">
                                    <div className="now13">
                                        <h3>BTech Computer Science Enigineering</h3>
                                        <p>Round1,General,Os,Closing Rank -1590</p>
                                    </div>

                                    <div className="now14">
                                        <h6>₹ 157,280</h6>
                                        <h5>1st Year Fee</h5>
                                    </div>
                                </div>
                                {
                                    showMore && <div className="now12">
                                        <div className="now13">
                                            <h3>BTech Computer Science Enigineering</h3>
                                            <p>Round1,General,Os,Closing Rank -1590</p>
                                        </div>

                                        <div className="now14">
                                            <h6>₹ 157,280</h6>
                                            <h5>1st Year Fee</h5>
                                        </div>
                                    </div>
                                }


                                <div className="now15">
                                    <button onClick={() => setShowMore(!showMore)}> {showMore ? 'Show Less' : 'Show More'}</button>
                                    <button>Apply Now</button>
                                </div>

                            </div>
                            <div className="now5">
                                <div className="now6">
                                    <img src={img} alt="" />
                                    <div className="now8">
                                        <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                                    </div>
                                    <div className="now7">
                                        <p>Asia Pacific Institute of Management...</p>
                                        <span> <IoLocationOutline />Kochi, Kerala | MCI Accredited</span>
                                    </div>
                                </div>



                                <div className="now10">
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#7</span> out of 281 in NIRF</p>
                                    </div>
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#8</span> out of 2</p>
                                    </div>
                                </div>
                                <div className="now12">
                                    <div className="now13">
                                        <h3>BTech Computer Science Enigineering</h3>
                                        <p>Round1,General,Os,Closing Rank -1590</p>
                                    </div>

                                    <div className="now14">
                                        <h6>₹ 157,280</h6>
                                        <h5>1st Year Fee</h5>
                                    </div>
                                </div>
                                {
                                    showMore && <div className="now12">
                                        <div className="now13">
                                            <h3>BTech Computer Science Enigineering</h3>
                                            <p>Round1,General,Os,Closing Rank -1590</p>
                                        </div>

                                        <div className="now14">
                                            <h6>₹ 157,280</h6>
                                            <h5>1st Year Fee</h5>
                                        </div>
                                    </div>
                                }


                                <div className="now15">
                                    <button onClick={() => setShowMore(!showMore)}> {showMore ? 'Show Less' : 'Show More'}</button>
                                    <button>Apply Now</button>
                                </div>

                            </div>
                            <div className="now5">
                                <div className="now6">
                                    <img src={img} alt="" />
                                    <div className="now8">
                                        <h5><i class="fa-solid fa-star"></i> 9.5/10</h5>
                                    </div>
                                    <div className="now7">
                                        <p>Asia Pacific Institute of Management...</p>
                                        <span> <IoLocationOutline />Kochi, Kerala | MCI Accredited</span>
                                    </div>
                                </div>



                                <div className="now10">
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#7</span> out of 281 in NIRF</p>
                                    </div>
                                    <div className="now11">
                                        <img src={star} alt="" />
                                        <p><span>#8</span> out of 2</p>
                                    </div>
                                </div>
                                <div className="now12">
                                    <div className="now13">
                                        <h3>BTech Computer Science Enigineering</h3>
                                        <p>Round1,General,Os,Closing Rank -1590</p>
                                    </div>

                                    <div className="now14">
                                        <h6>₹ 157,280</h6>
                                        <h5>1st Year Fee</h5>
                                    </div>
                                </div>
                                {
                                    showMore && <div className="now12">
                                        <div className="now13">
                                            <h3>BTech Computer Science Enigineering</h3>
                                            <p>Round1,General,Os,Closing Rank -1590</p>
                                        </div>

                                        <div className="now14">
                                            <h6>₹ 157,280</h6>
                                            <h5>1st Year Fee</h5>
                                        </div>
                                    </div>
                                }


                                <div className="now15">
                                    <button onClick={() => setShowMore(!showMore)}> {showMore ? 'Show Less' : 'Show More'}</button>
                                    <button>Apply Now</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
};

export default PredictNow;
