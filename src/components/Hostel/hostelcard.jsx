import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import men from '../../Images/men.png'
import loaction from '../../Images/loaction2.png'
import bed from '../../Images/bad.png'
import food from '../../Images/food.png'
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline  } from "react-icons/io5";


const ImageSlider = ({ images }) => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      }
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }
    
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    
  };

  return (
    <Slider {...sliderSettings}>
      {images.map((image, index) => (
        <div key={index} className='hostel26'>
          <img src={image} alt={`slide ${index}`} />
        </div>
      ))}
    </Slider>
  );
};

const CardWithSlider = ({  images }) => {
  return (
    <div className="card">
      <div className="slider-container">
        <ImageSlider images={images} />
      </div>
      <div className="card-content">
        <div className='hostel20'>
        <h5>Jamia millia islamia</h5>
        <div className='hostel21'>
            <img src={men} alt="" />
            <p>Male</p>
        </div>
        </div>
        <div className='hostel22'>
        <h5>₹ 11,700/mo*</h5>
        <div className='hostel23'>
            <img src={loaction} alt="" />
            <p>View Location</p>
        </div>
        </div>

        <div className='hostel24'>
            <img src={bed} alt="" />
            <p>Double, Triple</p>
        </div>
        <div className='hostel24'>
            <img src={food} alt="" />
            <p>Hot and Delicious Meals, High-Speed WIFI an</p>
        </div>
        <div>
            <hr />
        </div>

        <div className='hostel25'>
            <button>Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default CardWithSlider;
