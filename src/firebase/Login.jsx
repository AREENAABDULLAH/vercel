import React, { useState } from 'react';
import {auth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from './firebase';

import Navbar from '../navbar/Navbar';

import google from './google.png';
import './Login.css';
import logo from '../navbar/japanese-food.png';
import { useNavigate, Link } from 'react-router-dom'; // Corrected import

const Login = () => {
  const navigate = useNavigate(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      // Check if email and password are valid before attempting login
      if (!email || !password) {
        throw new Error('Email and password are required');
      }

      await signInWithEmailAndPassword(auth, email, password);
      window.alert("you are login sucessfully!")
      navigate('/'); // Navigate only after successful login
    } catch (error) {
      // Handle specific Firebase error messages
      if (error.code === 'auth/invalid-email') {
        console.error('Invalid email format');
      } else if (error.code === 'auth/user-not-found') {
        console.error('User not found');
      } else if (error.code === 'auth/wrong-password') {
        console.error('Incorrect password');
      } else {
        console.error('Error logging in with email:', error.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      navigate('/vercel/'); // Navigate only after successful login
    } catch (error) {
      console.error('Error logging in with Google', error.message);
    }
  };

  return (
    <div className='logins'>
      <div className='logos'> 
        <img src={logo} alt="" height={70}  />
        <h3>Bistro Bliss</h3>
      </div>
      <h2>Login Page</h2> <form onSubmit={handleEmailLogin}>
        <input className='email' width={30}
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> 
        <br /> <br />
        <input className='password'
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> 
        <br /> <br />
        <button className='loginBtn'  type="submit">Login with Email</button>  
    
      </form>

      <div className='img'>
        <button className='googleBtn' onClick={handleGoogleLogin}>
          <img className='img' src={google} alt="" height={17} />
          Login with Google
        </button>  
       
      </div> <br />
      <p>If you don't have an account <Link to={'/signup'}>Signup</Link></p>
    </div>
  );
};

export default Login;
