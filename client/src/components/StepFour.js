import React from 'react';

const StepFour = ({ nextStep, prevStep, formData }) => {
  return (
    <div className="container mt-4">
      <form className="border p-4">
      <h2>Step 4: Review Information</h2>
      <br></br>
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">First Name: </label>
      <div class="col-sm-10">
        {formData.firstname}
        </div>
      </div>


      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Last Name: </label>
      <div class="col-sm-10">
        {formData.lastname}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Email: </label>
      <div class="col-sm-10">
         {formData.Email}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Phone: </label>
      <div class="col-sm-10">
        {formData.Phone}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Date of Birth: </label>
      <div class="col-sm-10">
        {formData.DOB}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Address Line 1: </label>
      <div class="col-sm-10">
        {formData.Address1}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Address Line 2: </label>
      <div class="col-sm-10">
        {formData.Address2}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">City: </label>
      <div class="col-sm-10">
         {formData.city}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">State: </label>
      <div class="col-sm-10">
        {formData.state}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Pincode: </label>
      <div class="col-sm-10">
        {formData.postal_code}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Company Name: </label>
      <div class="col-sm-10">
         {formData.company_name}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Company Type: </label>
      <div class="col-sm-10">
         {formData.company_type}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Industry: </label>
      <div class="col-sm-10"> 
        {formData.industry}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Company Size: </label>
      <div class="col-sm-10"> 
        {formData.companysize}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Contact Person: </label>
      <div class="col-sm-10">
        {formData.contact_person}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Contact Email: </label>
      <div class="col-sm-10">
          {formData.contact_email}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Contact Phone Number: </label>
      <div class="col-sm-10"> 
        {formData.contact_phone}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Company Address Line 1: </label>
      <div class="col-sm-10">{formData.company_address1}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Company Address Line 2: </label>
      <div class="col-sm-10"> 
        {formData.company_address2}
      </div>
      </div>
      
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Company City: </label>
      <div class="col-sm-10"> 
        {formData.company_city}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Company State: </label>
      <div class="col-sm-10">
        {formData.company_state}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Company Postal Code: </label>
      <div class="col-sm-10">
         {formData.company_postalcode}
      </div>
      </div>


      <button type="button" class="btn btn-primary" onClick={prevStep}>Back</button>
      <button type="button" class="btn btn-primary" onClick={nextStep}>Next</button>
      </form>
    </div>
  );
};

export default StepFour;
