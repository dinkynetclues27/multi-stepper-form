import React from 'react';

const StepTwo = ({ nextStep, prevStep, handleChange, formData }) => {
  return (
    <div>
      <h2>Step 2: Company Information</h2>
      <input type="text" placeholder="Company Name" onChange={handleChange('company_name')} value={formData.company_name} />
      <input type="text" placeholder="Company Type" onChange={handleChange('company_type')} value={formData.company_type} />
      <input type="text" placeholder="Industry" onChange={handleChange('industry')} value={formData.industry} />
      <input type="text" placeholder="Company Size" onChange={handleChange('companysize')} value={formData.companysize} />
      <input type="text" placeholder="Contact Person" onChange={handleChange('contact_person')} value={formData.contact_person} />
      <input type="email" placeholder="Contact Email" onChange={handleChange('contact_email')} value={formData.contact_email} />
      <input type="text" placeholder="Contact Phone" onChange={handleChange('contact_phone')} value={formData.contact_phone} />
      <input type="text" placeholder="Company Address 1" onChange={handleChange('company_address1')} value={formData.company_address1} />
      <input type="text" placeholder="Company Address 2" onChange={handleChange('company_address2')} value={formData.company_address2} />
      <input type="text" placeholder="Company City" onChange={handleChange('company_city')} value={formData.company_city} />
      <input type="text" placeholder="Company State" onChange={handleChange('company_state')} value={formData.company_state} />
      <input type="text" placeholder="Company Postal Code" onChange={handleChange('company_postalcode')} value={formData.company_postalcode} />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default StepTwo;
