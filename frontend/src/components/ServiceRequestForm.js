import React, { useState } from 'react';
import './ServiceRequestForm.css';

const ServiceRequestForm = () => {
  const [formData, setFormData] = useState({
    location: '',
    mobileNumber: '',
    vehicleRegNo: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form data:', formData);
  };

  return (
    <div className="service-request-section">
      <h3>Request a Service</h3>
      <div className="service-request-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="location">Location*</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile No.*</label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="vehicleRegNo">Vehicle Reg No.*</label>
            <input
              type="text"
              id="vehicleRegNo"
              name="vehicleRegNo"
              value={formData.vehicleRegNo}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">SUBMIT</button>
        </form>
      </div>

    </div>
  );
};

export default ServiceRequestForm;