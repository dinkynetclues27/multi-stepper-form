import React from 'react';

const StepOne = ({ nextStep, handleChange, formData }) => {
  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <input type="text" placeholder="First Name" onChange={handleChange('firstname')} value={formData.firstname} />
      <input type="text" placeholder="Last Name" onChange={handleChange('lastname')} value={formData.lastname} />
      <input type="email" placeholder="Email" onChange={handleChange('Email')} value={formData.Email} />
      <input type="text" placeholder="Phone" onChange={handleChange('Phone')} value={formData.Phone} />
      <input type="date" placeholder="Date of Birth" onChange={handleChange('DOB')} value={formData.DOB} />
      <input type="text" placeholder="Address 1" onChange={handleChange('Address1')} value={formData.Address1} />
      <input type="text" placeholder="Address 2" onChange={handleChange('Address2')} value={formData.Address2} />
      <input type="text" placeholder="City" onChange={handleChange('city')} value={formData.city} />
      <input type="text" placeholder="State" onChange={handleChange('state')} value={formData.state} />
      <input type="text" placeholder="Postal Code" onChange={handleChange('postal_code')} value={formData.postal_code} />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default StepOne;
