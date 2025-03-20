import React, { useState } from 'react';
import axios from 'axios';
import './Booking.css';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user_name: '',
    phone_number: '',
    email_address: '',
    booking_date: '',
    booking_time: '',
    num_people: '',
    special_requests: '',
    restaurant_id: '1', // Assume this is the restaurant ID
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backhend.vercel.app/api/book-table', formData);
      alert('Booking confirmed!');
      navigate('/');
    } catch (error) {
      alert('Error in booking: ' + error.message);
    }
  };

  return (
    <div className='table'> 
      <div className='center'>
        <h2>Book a Table</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            placeholder="Your Full Name"
            required
          /> <br /> <br />
          <input
            type="tel"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            placeholder="Your Phone Number"
            required
          /> <br /> <br />
          <input
            type="email"
            name="email_address"
            value={formData.email_address}
            onChange={handleChange}
            placeholder="Your Email Address"
            required
          /> <br /> <br />
          <input
            type="date"
            name="booking_date"
            value={formData.booking_date}
            onChange={handleChange}
            required
          /> <br /> <br />
          <input
            type="time"
            name="booking_time"
            value={formData.booking_time}
            onChange={handleChange}
            required
          /> <br /> <br />
          <input
            type="number"
            name="num_people"
            value={formData.num_people}
            onChange={handleChange}
            placeholder="Number of People"
            required
          /> <br /><br />
          <textarea className='speacial'
            name="special_requests"
            value={formData.special_requests}
            onChange={handleChange}
            placeholder="Special Requests (optional)"
          /><br /><br />
          <button type="submit" className='black-borders'>Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
