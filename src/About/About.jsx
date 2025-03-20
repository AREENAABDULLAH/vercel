import React from 'react';
import './About.css';
import Image from '../About/image.png'
import { useNavigate } from 'react-router-dom'; // Make sure to link the CSS

const About = () => {
  const navigate = useNavigate();
  const going =()=>{
    navigate('/')
  }
  return (
    <div className="responsive-container">
      <div className="left-side"> <br /> <br />
        <img src={Image} alt="Image" className="responsive-image" />
      </div>
      <div className="right-side">
        <h1>We provide healthy  <br /> food for your family.</h1> <br />
        <p> Our story began with a vision to create a unique dining <br /> experience that merges fine dining,  exceptional service, and a <br /> vibrant ambiance. Rooted in city's rich culinary culture, we aim to <br /> honor our local roots while infusing a global palate.</p>
      
  <p>At place, we believe that dining is not just about food, but also about the <br /> overall experience. Our staff, renowned for their warmth and dedication, <br /> strives to make every visit an unforgettable event.</p>
      <button className='white' onClick={going}>More About Us</button>
      </div>
    </div>
  );
};

export default About;
