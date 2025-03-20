import React, { useState } from "react";
import './sign.css';
import { Link, useNavigate } from "react-router-dom";
import { auth, createUserWithEmailAndPassword } from '../firebase/firebase';
import logo from '../navbar/japanese-food.png';
import'../navbar/Table/Booking.css'

const SignupPage = () => {
  const navigate = useNavigate();
  
  // State to hold the form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // State to hold error messages

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const register = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Register user using Firebase Authentication
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        window.alert("User registered successfully");
        navigate('/login'); // Navigate to login after successful registration
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage); // Display error message on UI
        console.error(errorMessage);
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <img src={logo} alt="" />
        <h3>Bistro Bliss</h3>
        <h2>Sign Up</h2>
        <form onSubmit={register}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              placeholder="Enter Name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange} // Corrected to use handleChange for updating formData
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              className="email"
              type="email"
              placeholder="Enter Email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange} // Corrected to use handleChange for updating formData
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange} // Corrected to use handleChange for updating formData
              required
            />
          </div>
          <br />
          <button type="submit" className="submit-btn">
            Sign Up
          </button>
          <p>
            Already have an account? <Link to={'/login'}>Login</Link>
          </p>
        </form>
        {/* Display error message if there's an error */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default SignupPage;
