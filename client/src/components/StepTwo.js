import React from 'react';

const StepTwo = ({ nextStep, prevStep, handleChange, formData , errors }) => {


  return (
    <div className="container mt-4">
      <form className="border p-4">
      <h2>Step 2: Company Information</h2>
      <br></br>
      
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Company Name: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Company Name" onChange={handleChange('company_name')} value={formData.company_name} />
      {errors && errors.company_name && <p className="error-message">{errors.company_name}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Company Type: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Company Type" onChange={handleChange('company_type')} value={formData.company_type} />
      {errors && errors.company_type && <p className="error-message">{errors.company_type}</p>}
      </div>
      </div>
     
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Industry: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Industry" onChange={handleChange('industry')} value={formData.industry} />
      {errors && errors.industry && <p className="error-message">{errors.industry}</p>}
      </div>
      </div>
     
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Company Size: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Company Size" onChange={handleChange('companysize')} value={formData.companysize} />
      {errors && errors.companysize && <p className="error-message">{errors.companysize}</p>}
      </div>
      </div>
      
      
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Contact Person: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Contact Person" onChange={handleChange('contact_person')} value={formData.contact_person} />
      {errors && errors.contact_person && <p className="error-message">{errors.contact_person}</p>}
      </div>
      </div>
     
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Email: </label>
      <div class="col-sm-10">
      <input class="form-control" type="email" placeholder="Contact Email" onChange={handleChange('contact_email')} value={formData.contact_email} />
      {errors && errors.contact_email && <p className="error-message">{errors.contact_email}</p>}
      </div>
      </div>
      
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Phone Number: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Contact Phone" onChange={handleChange('contact_phone')} value={formData.contact_phone} />
      {errors && errors.contact_phone && <p className="error-message">{errors.contact_phone}</p>}
      </div>
      </div>
     
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Address Line 1: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Company Address 1" onChange={handleChange('company_address1')} value={formData.company_address1} />
      {errors && errors.company_address1 && <p className="error-message">{errors.company_address1}</p>}
      </div>
      </div>
      
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Address Line 2: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Company Address 2" onChange={handleChange('company_address2')} value={formData.company_address2} />
      {errors && errors.company_address2 && <p className="error-message">{errors.company_address2}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">City: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Company City" onChange={handleChange('company_city')} value={formData.company_city} />
      {errors && errors.company_city && <p className="error-message">{errors.company_city}</p>}
       </div>
      </div>
      
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">State: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Company State" onChange={handleChange('company_state')} value={formData.company_state} />
      {errors && errors.company_state && <p className="error-message">{errors.company_state}</p>}
      </div>
      </div>
     
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Pincode: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Company Postal Code" onChange={handleChange('company_postalcode')} value={formData.company_postalcode} />
      {errors && errors.company_postalcode && <p className="error-message">{errors.company_postalcode}</p>}
      </div>
      </div>
     
      <button class="btn btn-primary" onClick={prevStep}>Back</button>
      <button class="btn btn-primary" onClick={nextStep}>Next</button>
      </form>
    </div>
  );
};

export default StepTwo;
