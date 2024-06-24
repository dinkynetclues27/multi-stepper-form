import React,{useState} from 'react';

const StepOne = ({ nextStep, handleChange, formData , errors }) => {
  const [localErrors, setLocalErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};

    if (!formData.firstname) newErrors.firstname = "First name is required";
    if (!formData.lastname) newErrors.lastname = "Last name is required";

   
    if (!formData.Email) newErrors.Email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) newErrors.Email = "Invalid email format";

    
    if (!formData.Phone) newErrors.Phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(formData.Phone)) newErrors.Phone = "Mobile number must be exactly 10 digits long and start with a digit from 6, 7, 8, or 9";

   
    if (!formData.DOB) newErrors.DOB = "Date of birth is required";
    else {
      const dob = new Date(formData.DOB);
      const today = new Date();
      if (dob > today) newErrors.DOB = "Date of birth cannot be in the future";
    }

    
    if (!formData.Address1) newErrors.Address1 = "Address is required";
    else if (formData.Address1.length < 5 || formData.Address1.length > 100) newErrors.Address1 = "Address should have at least 5 characters and not exceed 100 characters";

    if (!formData.Address2) newErrors.Address2 = "Address is required";
    else if (formData.Address2.length < 5 || formData.Address2.length > 100) newErrors.Address2 = "Address should have at least 5 characters and not exceed 100 characters";

   
    if (!formData.city) newErrors.city = "City is required";
    else if (formData.city.length < 5 || formData.city.length > 100) newErrors.city = "City should have at least 5 characters and not exceed 100 characters";

    if (!formData.state) newErrors.state = "State is required";
    else if (formData.state.length < 5 || formData.state.length > 100) newErrors.state = "State should have at least 5 characters and not exceed 100 characters";

    if (!formData.postal_code) newErrors.postal_code = "PIN code is required";
    else if (!/^\d{6}$/.test(formData.postal_code)) newErrors.postal_code = "PIN code must be a 6-digit numeric code";

    setLocalErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateFields()) {
      nextStep();
    }
  };
  return (
    <div className="container mt-4">
      <form className="border p-4">
      <h2>Step 1: Personal Information</h2>
      <br></br>
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">First Name: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="text" placeholder="First Name" onChange={handleChange('firstname')} value={formData.firstname} />
      {(localErrors.firstname || errors.firstname) && <p style={{color:"red"}} className="error-message">{localErrors.firstname || errors.firstname}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Last Name: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="text" placeholder="Last Name" onChange={handleChange('lastname')} value={formData.lastname} />
      {(localErrors.lastname || errors.lastname) && <p style={{color:"red"}} className="error-message">{localErrors.lastname || errors.lastname}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Email: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="email" placeholder="Email" onChange={handleChange('Email')} value={formData.Email} />
      {(localErrors.Email || errors.Email) && <p style={{color:"red"}} className="error-message">{localErrors.Email || errors.Email}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Phone Number: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="text" placeholder="Phone" onChange={handleChange('Phone')} value={formData.Phone} />
      {(localErrors.Phone || errors.Phone) && <p style={{color:"red"}} className="error-message">{localErrors.Phone || errors.Phone}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">DOB: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="date" placeholder="Date of Birth" onChange={handleChange('DOB')} value={formData.DOB} />
      {(localErrors.DOB || errors.DOB) && <p style={{color:"red"}} className="error-message">{localErrors.DOB || errors.DOB}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Address Line 1: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="text" placeholder="Address 1" onChange={handleChange('Address1')} value={formData.Address1} />
      {(localErrors.Address1 || errors.Address1) && <p style={{color:"red"}} className="error-message">{localErrors.Address1 || errors.Address1}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Address Line 2: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="text" placeholder="Address 2" onChange={handleChange('Address2')} value={formData.Address2} />
      {(localErrors.Address2 || errors.Address2) && <p style={{color:"red"}} className="error-message">{localErrors.Address2 || errors.Address2}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">City: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="text" placeholder="City" onChange={handleChange('city')} value={formData.city} />
      {(localErrors.city || errors.city) && <p style={{color:"red"}} className="error-message">{localErrors.city || errors.city}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">State: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="text" placeholder="State" onChange={handleChange('state')} value={formData.state} />
      {(localErrors.state || errors.state) && <p style={{color:"red"}}  className="error-message">{localErrors.state || errors.state}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Pincode: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="text" placeholder="Postal Code" onChange={handleChange('postal_code')} value={formData.postal_code} />
      {(localErrors.postal_code || errors.postal_code) && <p style={{color:"red"}} className="error-message">{localErrors.postal_code || errors.postal_code}</p>}
      </div>
      </div>
      {/* {Object.keys(localErrors).map(field => (
          <p key={field} className="error-message">{localErrors[field]}</p>
        ))}
        {Object.keys(errors).map(field => (
          <p key={field} className="error-message">{errors[field]}</p>
        ))} */}
      <button class="btn btn-primary" onClick={handleNext}>Next</button>
      </form>
    </div>
  );
};

export default StepOne;
