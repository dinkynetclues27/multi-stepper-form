import React from 'react';

const StepFive = ({ prevStep, handleChange, handleSubmit, formData , errors}) => {
  return (
    <div className="container mt-4">
      <form className="border p-4">
      <h2>Step 5: Payment Information</h2>
      <br></br>
        
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Payment Amount: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Payment Amount" onChange={handleChange('payment_amount')} value={formData.payment_amount} />
      {errors && errors.payment_amount && <p className="error-message">{errors.payment_amount}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Payment Method: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Payment Method" onChange={handleChange('payment_method')} value={formData.payment_method} />
      {errors && errors.payment_method && <p className="error-message">{errors.payment_method}</p>}
      
      </div>
      </div>
      
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Credit Card Number: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Credit Card Number" onChange={handleChange('credit_card_number')} value={formData.credit_card_number} />
      {errors && errors.credit_card_number && <p className="error-message">{errors.credit_card_number}</p>}
      
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Expiration Date: </label>
      <div class="col-sm-10">
       <input class="form-control" type="text" placeholder="Expiration Date" onChange={handleChange('expiration_date')} value={formData.expiration_date} />
       {errors && errors.expiration_date && <p className="error-message">{errors.expiration_date}</p>}
   
     </div>
     </div>
     
     <div class="row mb-3">
      <label class="col-sm-2 col-form-label">CVV Code: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="CVV Code" onChange={handleChange('cvv_code')} value={formData.cvv_code} />
      {errors && errors.cvv_code && <p className="error-message">{errors.cvv_code}</p>}
      
      </div>
      </div>

      <button class="btn btn-primary" onClick={prevStep}>Back</button>
      <button class="btn btn-success" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default StepFive;
