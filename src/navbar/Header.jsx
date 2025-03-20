import bg from '../navbar/bg.png'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';



const Header =()=>{
  const navigate = useNavigate();
  const handleLoginClicks = () => {
    // Jab login button click hoga, user ko LoginPage par redirect karenge
    navigate('/booking'); }
    const Explore =()=>{
      navigate('/menu')
    }
    return(
<div className="containers">
      <div className="contents">
        <h1><em>Best food for <br />
        your taste</em></h1>
        <p>Discover delectable cuisine and unforgettable moments <br /> in our welcoming, culinary haven</p>
        <div className="button-container">
          <button className="btn black-border" onClick={handleLoginClicks}>Book A Table</button>
          <button className="btn white-border" onClick={Explore}>Explore Menu</button>
        </div>
      </div>
    
    </div>
 
    )
}
export default Header