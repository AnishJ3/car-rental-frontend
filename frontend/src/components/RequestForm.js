// src/components/RequestForm.js
import React, { useContext, useState } from 'react';
import { AssistanceContext } from '../context/AssistanceContext';

function RequestForm() {
  const { setServiceRequest } = useContext(AssistanceContext);
  const [formData, setFormData] = useState({
    location: '',
    assistanceType: 'Tow Truck',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setServiceRequest(formData);  // Save request details
    alert('Assistance request sent!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Location</label>
      <input type="text" name="location" value={formData.location} onChange={handleChange} required />

      <label>Type of Assistance</label>
      <select name="assistanceType" value={formData.assistanceType} onChange={handleChange}>
        <option value="Tow Truck">Tow Truck</option>
        <option value="Battery Jump">Battery Jump</option>
        <option value="Fuel Delivery">Fuel Delivery</option>
      </select>

      <label>Phone</label>
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

      <button type="submit">Request Assistance</button>
    </form>
  );
}

export default RequestForm;
