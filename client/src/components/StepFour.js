import React from 'react';

const StepFour = ({ nextStep, prevStep, formData }) => {
  return (
    <div>
      <h2>Step 4: Review Information</h2>
      <div>
        <strong>First Name:</strong> {formData.firstname}
      </div>
      <div>
        <strong>Last Name:</strong> {formData.lastname}
      </div>
      <div>
        <strong>Email:</strong> {formData.Email}
      </div>
      <div>
        <strong>Phone:</strong> {formData.Phone}
      </div>
      <div>
        <strong>Date of Birth:</strong> {formData.DOB}
      </div>
      <div>
        <strong>Address 1:</strong> {formData.Address1}
      </div>
      <div>
        <strong>Address 2:</strong> {formData.Address2}
      </div>
      <div>
        <strong>City:</strong> {formData.city}
      </div>
      <div>
        <strong>State:</strong> {formData.state}
      </div>
      <div>
        <strong>Postal Code:</strong> {formData.postal_code}
      </div>
      <div>
        <strong>Company Name:</strong> {formData.company_name}
      </div>
      <div>
        <strong>Company Type:</strong> {formData.company_type}
      </div>
      <div>
        <strong>Industry:</strong> {formData.industry}
      </div>
      <div>
        <strong>Company Size:</strong> {formData.companysize}
      </div>
      <div>
        <strong>Contact Person:</strong> {formData.contact_person}
      </div>
      <div>
        <strong>Contact Email:</strong> {formData.contact_email}
      </div>
      <div>
        <strong>Contact Phone:</strong> {formData.contact_phone}
      </div>
      <div>
        <strong>Company Address 1:</strong> {formData.company_address1}
      </div>
      <div>
        <strong>Company Address 2:</strong> {formData.company_address2}
      </div>
      <div>
        <strong>Company City:</strong> {formData.company_city}
      </div>
      <div>
        <strong>Company State:</strong> {formData.company_state}
      </div>
      <div>
        <strong>Company Postal Code:</strong> {formData.company_postalcode}
      </div>
      <div>
        <strong>Payment Amount:</strong> {formData.payment_amount}
      </div>
      <div>
        <strong>Payment Method:</strong> {formData.payment_method}
      </div>
      <div>
        <strong>Credit Card Number:</strong> {formData.credit_card_number}
      </div>
      <div>
        <strong>Expiration Date:</strong> {formData.expiration_date}
      </div>
      <div>
        <strong>CVV Code:</strong> {formData.cvv_code}
      </div>
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default StepFour;
