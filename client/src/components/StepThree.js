import React from 'react';

const StepThree = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <div>
      <h2>Step 3: Upload Files</h2>
      <input type="file" onChange={handleChange('photo')} accept="image/jpeg,image/png" />
      <input type="file" onChange={handleChange('address_proof')} accept="application/pdf" />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default StepThree;
