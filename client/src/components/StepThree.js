import React from 'react';

const StepThree = ({ nextStep, prevStep, handleChange, formData , errors }) => {


  return (
    <div className="container mt-4">
      <form className="border p-4">
      <h2>Step 3: Upload Files</h2>
      <br></br>
      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Upload Photo: </label>
      <div class="col-sm-10">
      <input class="form-control" type="file" onChange={handleChange('photo')} accept="image/jpeg,image/png" />
      {errors && errors.photo && <p className="error-message">{errors.photo}</p>}
      </div>
      </div>

      <div class="row mb-3">
      <label class="col-sm-2 col-form-label">Upload Address Proof: </label>
      <div class="col-sm-10">
      <input class="form-control" type="file" onChange={handleChange('address_proof')} accept="application/pdf" />
      {errors && errors.address_proof && <p className="error-message">{errors.address_proof}</p>}

      </div>
      </div>

      
        <button type="button" className="btn btn-primary" onClick={prevStep}>Back</button>
        <button type="button" className="btn btn-primary" onClick={nextStep}>Next</button>
      </form>
    </div>
  );
};

export default StepThree;
