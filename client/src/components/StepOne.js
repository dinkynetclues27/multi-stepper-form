import React from 'react';

const StepOne = ({ nextStep, handleChange, formData , errors }) => {

  const handlenext =()=>{
    if (errors.firstname || errors.lastname || errors.Email || errors.Phone || errors.DOB || errors.Address1 || errors.Address2 || errors.city || errors.state || errors.postal_code) {
      return; 
    }
    nextStep();
  }

  return (
    <div className="container mt-4">
      <form className="border p-4">
      <h2>Step 1: Personal Information</h2>
      <br></br>
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">First Name: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="text" placeholder="First Name" onChange={handleChange('firstname')} value={formData.firstname} />
      {errors && errors.firstname && <p className="error-message">{errors.firstname}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Last Name: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="text" placeholder="Last Name" onChange={handleChange('lastname')} value={formData.lastname} />
      {errors && errors.lastname && <p className="error-message">{errors.lastname}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Email: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="email" placeholder="Email" onChange={handleChange('Email')} value={formData.Email} />
      {errors && errors.Email && <p className="error-message">{errors.Email}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Phone Number: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="text" placeholder="Phone" onChange={handleChange('Phone')} value={formData.Phone} />
      {errors && errors.Phone && <p className="error-message">{errors.Phone}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">DOB: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="date" placeholder="Date of Birth" onChange={handleChange('DOB')} value={formData.DOB} />
      {errors && errors.DOB && <p className="error-message">{errors.DOB}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Address Line 1: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="text" placeholder="Address 1" onChange={handleChange('Address1')} value={formData.Address1} />
      {errors && errors.Address1 && <p className="error-message">{errors.Address1}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Address Line 2: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="text" placeholder="Address 2" onChange={handleChange('Address2')} value={formData.Address2} />
      {errors && errors.Address2 && <p className="error-message">{errors.Address2}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">City: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="text" placeholder="City" onChange={handleChange('city')} value={formData.city} />
      {errors && errors.city && <p className="error-message">{errors.city}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">State: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="text" placeholder="State" onChange={handleChange('state')} value={formData.state} />
      {errors && errors.state && <p className="error-message">{errors.state}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Pincode: </label>
      <div class="col-sm-10">
      <input  class="form-control" type="text" placeholder="Postal Code" onChange={handleChange('postal_code')} value={formData.postal_code} />
      {errors && errors.postal_code && <p className="error-message">{errors.postal_code}</p>}
      </div>
      </div>
      <button class="btn btn-primary" onClick={handlenext}>Next</button>
      </form>
    </div>
  );
};

export default StepOne;
