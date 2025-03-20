import React from 'react';
import './Footer.css';
import { TwitterOutlined, FacebookFilled, InstagramFilled, GithubFilled } from '@ant-design/icons';
import Logo from '../src/navbar/japanese-food.png';
import Egg from '../src/About/egg.png';
import Chip from '../src/About/chip.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-logo">
          <img src={Logo} alt="Logo" />
          Blistro Bliss
        </h2> <div className='footer-images'>
          <div className="image-row">
            <img src={Egg} alt="Image 1" />
            <img src={Chip} alt="Image 2" />
          </div>
        
        </div>
      </div>

      <p className="footer-description">
        In the new era of technology we look <br />
        a in the future with certainty and pride to <br />
        for our company and
      </p>

      <div className="footer-icons">
        <TwitterOutlined />
        <FacebookFilled />
        <InstagramFilled />
        <GithubFilled />
      </div>

      <div className="footer-bottom">
        {/* You can add more content here if needed */}
      </div>
    </footer>
  );
};

export default Footer;
