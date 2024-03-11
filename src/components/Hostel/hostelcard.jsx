import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import men from '../../Images/men.png'
import loaction from '../../Images/loaction2.png'
import bed from '../../Images/bad.png'
import food from '../../Images/food.png'
import star from '../../Images/star122.png'
import { useNavigate } from 'react-router-dom';


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

const CardWithSlider = ({ images }) => {
  const navigate = useNavigate()

  return (
    <div className="card21" onClick={()=>navigate('/explorehostel')}>
      <div className="slider-container12">
        <ImageSlider images={images} />
        <div className="filt22star">
          <div className="ratingstar11">
            <img src={star} alt="" />
            <h5>9.5/10</h5>
          </div>
        </div>
      </div>
      <div className="card-content12">
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
