import React,{useState} from 'react';

const StepFive = ({ prevStep, handleChange, handleSubmit, formData , errors}) => {
  const [localErrors, setLocalErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};

    if (!formData.payment_method) newErrors.payment_method = "Payment Method is required";
    
    if (!formData.payment_amount) newErrors.payment_amount = "Payment amount is required";
    // else if (!/^\d{5}$'/.test(formData.payment_amount)) newErrors.payment_amount = "Payment amount should only contains number";

    // if (!formData.credit_card_number) newErrors.credit_card_number = "Credit card number is required";
    // else if (!/^\\d{12}$'/.test(formData.credit_card_number)) newErrors.credit_card_number = "Credit card number should only contains number";

    if(!formData.expiration_date) newErrors.expiration_date = "Expiration Date is required";
    else if(!/^(0[1-9]|1[0-2])\/\d{4}$/.test(formData.expiration_date)) newErrors.expiration_date = "Expiration Date should only contains month and year"

    if(!formData.cvv_code) newErrors.cvv_code = "CVV code is required";
    else if(!/^\d{3,4}$/.test(formData.cvv_code)) newErrors.cvv_code = "CVV code should only contains number"

    setLocalErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // const handleNext = (e) => {
  //   e.preventDefault();
  //   if (validateFields()) {
  //     handleSubmit();
  //   }
  // };


  const handleNext = (e) => {
    e.preventDefault();
    if (validateFields()) {
      handleSubmit();
    }
  };
  return (
    <div className="container mt-4">
      <form className="border p-4">
      <h2>Step 5: Payment Information</h2>
      <br></br>
        
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Payment Amount: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Payment Amount" onChange={handleChange('payment_amount')} value={formData.payment_amount} />
      {(localErrors.payment_amount || errors.payment_amount) && <p style={{color:"red"}} className="error-message">{localErrors.payment_amount || errors.payment_amount}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Payment Method: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Payment Method" onChange={handleChange('payment_method')} value={formData.payment_method} />
      {(localErrors.payment_method || errors.payment_method) && <p style={{color:"red"}}  className="error-message">{localErrors.payment_method || errors.payment_method}</p>}
      
      </div>
      </div>
      
      {/* <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Credit Card Number: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Credit Card Number" onChange={handleChange('credit_card_number')} value={formData.credit_card_number} />
      {/* {(localErrors.credit_card_number || errors.credit_card_number) && <p className="error-message">{localErrors.credit_card_number || errors.credit_card_number}</p>} */}
      
      {/* </div>
      </div>  */}

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Expiration Date: </label>
      <div class="col-sm-10">
       <input class="form-control" type="text" placeholder="Expiration Date" onChange={handleChange('expiration_date')} value={formData.expiration_date} />
       {(localErrors.expiration_date || errors.expiration_date) && <p style={{color:"red"}}  className="error-message">{localErrors.expiration_date || errors.expiration_date}</p>}
   
     </div>
     </div>
     
     <div class="row mb-3">
      <label class="col-sm-2 col-form-label">CVV Code: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="CVV Code" onChange={handleChange('cvv_code')} value={formData.cvv_code} />
      {(localErrors.cvv_code || errors.cvv_code) && <p style={{color:"red"}} className="error-message">{localErrors.cvv_code || errors.cvv_code}</p>}
      
      </div>
      </div>

      <button type="button" class="btn btn-primary" onClick={prevStep}>Back</button>
      <button type="button" class="btn btn-success" onClick={handleNext}>Submit</button>
      </form>
    </div>
  );
};

export default StepFive;
