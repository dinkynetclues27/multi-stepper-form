import React,{useState} from 'react';

const StepTwo = ({ nextStep, prevStep, handleChange, formData , errors }) => {
  const [localErrors, setLocalErrors] = useState({});

  const validateFields = () => {
    const newErrors = {};

    if (!formData.company_name) newErrors.company_name = "Company Name is required";
    if (!formData.company_type) newErrors.company_type = "Company Type is required";

   
    if (!formData.industry) newErrors.industry = "Industry is required";
    
    // if (!formData.companysize) newErrors.companysize = "Company Size is required";
    // else if (!/^\d+$'/.test(formData.companysize)) newErrors.companysize = "Company size should only contains number";

    if (!formData.contact_person) newErrors.contact_person = "Contact person is required";
   
    if (!formData.contact_email) newErrors.contact_email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact_email)) newErrors.contact_email = "Invalid email format";

    if (!formData.contact_phone) newErrors.contact_phone = "Phone number is required";
    else if (!/^[6-9]\d{9}$/.test(formData.contact_phone)) newErrors.contact_phone = "Mobile number must be exactly 10 digits long and start with a digit from 6, 7, 8, or 9";

    
    if (!formData.company_address1) newErrors.company_address1 = "Address is required";
    else if (formData.company_address1.length < 5 || formData.company_address1.length > 100) newErrors.Address1 = "Address should have at least 5 characters and not exceed 100 characters";

    if (!formData.company_address2) newErrors.company_address2 = "Address is required";
    else if (formData.company_address2.length < 5 || formData.company_address2.length > 100) newErrors.Address2 = "Address should have at least 5 characters and not exceed 100 characters";

   
    if (!formData.company_city) newErrors.company_city = "City is required";
    else if (formData.company_city.length < 5 || formData.company_city.length > 100) newErrors.city = "City should have at least 5 characters and not exceed 100 characters";

    if (!formData.company_state) newErrors.company_state = "State is required";
    else if (formData.company_state.length < 5 || formData.company_state.length > 100) newErrors.state = "State should have at least 5 characters and not exceed 100 characters";

    if (!formData.company_postalcode) newErrors.company_postalcode = "PIN code is required";
    else if (!/^\d{6}$/.test(formData.company_postalcode)) newErrors.company_postalcode = "PIN code must be a 6-digit numeric code";

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
      <h2>Step 2: Company Information</h2>
      <br></br>
      
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Company Name: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Company Name" onChange={handleChange('company_name')} value={formData.company_name} />
      {(localErrors.company_name || errors.company_name) && <p style={{color:"red"}}  className="error-message">{localErrors.company_name || errors.company_name}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Company Type: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Company Type" onChange={handleChange('company_type')} value={formData.company_type} />
      {(localErrors.company_type || errors.company_type) && <p style={{color:"red"}} className="error-message">{localErrors.company_type || errors.company_type}</p>}
      </div>
      </div>
     
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Industry: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Industry" onChange={handleChange('industry')} value={formData.industry} />
      {(localErrors.industry || errors.industry) && <p style={{color:"red"}} className="error-message">{localErrors.industry || errors.industry}</p>}
      </div>
      </div>
     
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Company Size: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Company Size" onChange={handleChange('companysize')} value={formData.companysize} />
      {(localErrors.companysize || errors.companysize) && <p style={{color:"red"}} className="error-message">{localErrors.companysize || errors.companysize}</p>}
      </div>
      </div>
      
      
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Contact Person: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Contact Person" onChange={handleChange('contact_person')} value={formData.contact_person} />
      {errors && errors.contact_person && <p style={{color:"red"}} className="error-message">{errors.contact_person}</p>}
      </div>
      </div>
     
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Email: </label>
      <div class="col-sm-10">
      <input class="form-control" type="email" placeholder="Contact Email" onChange={handleChange('contact_email')} value={formData.contact_email} />
      {(localErrors.contact_email || errors.contact_email) && <p style={{color:"red"}} className="error-message">{localErrors.contact_email || errors.contact_email}</p>}
      </div>
      </div>
      
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Phone Number: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Contact Phone" onChange={handleChange('contact_phone')} value={formData.contact_phone} />
      {(localErrors.contact_phone || errors.contact_phone) && <p style={{color:"red"}} className="error-message">{localErrors.contact_phone || errors.contact_phone}</p>}
      </div>
      </div>
     
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Address Line 1: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Company Address 1" onChange={handleChange('company_address1')} value={formData.company_address1} />
      {(localErrors.company_address1 || errors.company_address1) && <p style={{color:"red"}} className="error-message">{localErrors.company_address1 || errors.company_address1}</p>}
      </div>
      </div>
      
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Address Line 2: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Company Address 2" onChange={handleChange('company_address2')} value={formData.company_address2} />
      {(localErrors.company_address2 || errors.company_address2) && <p style={{color:"red"}} className="error-message">{localErrors.company_address2 || errors.company_address2}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">City: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Company City" onChange={handleChange('company_city')} value={formData.company_city} />
      {(localErrors.company_city || errors.company_city) && <p style={{color:"red"}} className="error-message">{localErrors.company_city || errors.company_city}</p>}
       </div>
      </div>
      
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">State: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Company State" onChange={handleChange('company_state')} value={formData.company_state} />
      {(localErrors.company_state || errors.company_state) && <p style={{color:"red"}} className="error-message">{localErrors.company_state || errors.company_state}</p>}
      </div>
      </div>
     
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Pincode: </label>
      <div class="col-sm-10">
      <input class="form-control" type="text" placeholder="Company Postal Code" onChange={handleChange('company_postalcode')} value={formData.company_postalcode} />
      {(localErrors.company_postalcode || errors.company_postalcode) && <p style={{color:"red"}} className="error-message">{localErrors.company_postalcode || errors.company_postalcode}</p>}
      </div>
      </div>
     
      <button class="btn btn-primary" onClick={prevStep}>Back</button>
      <button class="btn btn-primary" onClick={handleNext}>Next</button>
      </form>
    </div>
  );
};

export default StepTwo;
