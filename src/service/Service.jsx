 import { useNavigate ,Link} from "react-router-dom"
 import './Service.css'
 
 import chef from '../service/chef.png'
 
 import icon4 from '../service/icon (4).png'
 import icon5 from '../service/icon (5).png'
 import icon6 from '../service/icon (6).png'
 const Service=()=>{
    return(
      
        
        
            <div className="containerss">
              <div className="lefts">
                <img src={chef}alt="Large" className="large-image" />
                <div className="small-images">
           
                </div>
              </div>
              <div className="rights">
                <p className="text">
                 
                 <h1>Fastest Food <br /> Delivery in City</h1>
                 <p>Our visual designer lets you quickly and of drag a down <br /> your way to customapps for both keep desktop. </p>
                </p>
                <div className="icons"><p> <img src={icon4} alt="" /> Delivery Within 30 minute</p>
                <p> <img src={icon6} alt="" />Best offer / Prize</p>
                <p> <img src={icon5} alt="" />Online Service Available</p></div>
              </div>
            </div>
      

    )
 }
 export default Service