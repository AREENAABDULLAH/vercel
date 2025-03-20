
import { useNavigate, Link } from 'react-router-dom'; 

import Downloadimage from '../navbar/japanese-food.png'; 
import Header from '../navbar/Header'
import About from '../About/About'
import Service from '../service/Service'
import { useState } from "react";
import'./Navbar.css'
import Footer from '../../Footer/Footer';

const Navbar=()=>{
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
    
  const handleLoginClick = () => {
    navigate('/login');
  };
  return(
   
  
    <>
    <nav className="navbar">
    <div className="navbar-container">

<div className="logo"><img src={Downloadimage} alt="" /><h4>Bistro Bliss</h4></div>
{/* Hamburger Icon */}
<div className="hamburger" onClick={toggleNavbar}>
☰
</div>
</div>

{/* Navbar links (only visible when isOpen is true) */}
<ul className={`nav-links ${isOpen ? "open" : ""}`}>
    <li><Link to="/about" >About</Link></li>
    <li><Link to="/menu" >Menu</Link></li>
    <li><Link to="/service">Service</Link></li>
    <li><Link to="/contact" >Contact</Link></li>

   
<button className="contact-button" onClick={handleLoginClick}>
  Login
</button>
</ul>

</nav>
<Header/>
<About/>
<Service/>
<Footer/>
</>
  )
}
export default Navbar