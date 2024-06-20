import React from 'react';

const StepFive = ({ prevStep, handleChange, handleSubmit, formData }) => {
  return (
    <div>
      <h2>Step 5: Payment Information</h2>
      <input type="text" placeholder="Payment Amount" onChange={handleChange('payment_amount')} value={formData.payment_amount} />
      <input type="text" placeholder="Payment Method" onChange={handleChange('payment_method')} value={formData.payment_method} />
      <input type="text" placeholder="Credit Card Number" onChange={handleChange('credit_card_number')} value={formData.credit_card_number} />
      <input type="date" placeholder="Expiration Date" onChange={handleChange('expiration_date')} value={formData.expiration_date} />
      <input type="text" placeholder="CVV Code" onChange={handleChange('cvv_code')} value={formData.cvv_code} />
      <button onClick={prevStep}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StepFive;
