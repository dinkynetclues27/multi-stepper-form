// import React, { useState } from 'react';
// import StepOne from './components/StepOne';
// import StepTwo from './components/StepTwo';
// import StepThree from './components/StepThree';
// import StepFour from './components/StepFour';
// import StepFive from './components/StepFive';
// import axios from 'axios';

// function App() {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     Email: '',
//     Phone: '',
//     DOB: '',
//     Address1: '',
//     Address2: '',
//     city: '',
//     state: '',
//     postal_code: '',
//     company_name: '',
//     company_type: '',
//     industry: '',
//     companysize: '',
//     contact_person: '',
//     contact_email: '',
//     contact_phone: '',
//     company_address1: '',
//     company_address2: '',
//     company_city: '',
//     company_state: '',
//     company_postalcode: '',
//     photo: null,
//     address_proof: null,
//     payment_amount: '',
//     payment_method: '',
//     credit_card_number: '',
//     expiration_date: '',
//     cvv_code: ''
//   });

//   const nextStep = () => {
//     setStep(step + 1);
//   };

//   const prevStep = () => {
//     setStep(step - 1);
//   };

//   const handleChange = input => e => {
//     const value = input === 'photo' || input === 'address_proof' ? e.target.files[0] : e.target.value;
//     setFormData({ ...formData, [input]: value });
//   };

//   const handleSubmit = async () => {
//     const data = new FormData();
//     Object.keys(formData).forEach(key => {
//       data.append(key, formData[key]);
//     });

//     try {
//       const response = await axios.post('http://localhost:4000/api/form', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log(response.data);
//       setFormData({
//         firstname: '',
//         lastname: '',
//         Email: '',
//         Phone: '',
//         DOB: '',
//         Address1: '',
//         Address2: '',
//         city: '',
//         state: '',
//         postal_code: '',
//         company_name: '',
//         company_type: '',
//         industry: '',
//         companysize: '',
//         contact_person: '',
//         contact_email: '',
//         contact_phone: '',
//         company_address1: '',
//         company_address2: '',
//         company_city: '',
//         company_state: '',
//         company_postalcode: '',
//         photo: null,
//         address_proof: null,
//         payment_amount: '',
//         payment_method: '',
//         credit_card_number: '',
//         expiration_date: '',
//         cvv_code: ''
//       });
//       setStep(1);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   switch(step) {
//     case 1:
//       return <StepOne nextStep={nextStep} handleChange={handleChange} formData={formData} />;
//     case 2:
//       return <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
//     case 3:
//       return <StepThree nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
//     case 4:
//       return <StepFour nextStep={nextStep} prevStep={prevStep} formData={formData} />;
//     case 5:
//       return <StepFive prevStep={prevStep} handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />;
//     default:
//       return <div>Error: Invalid step</div>;
//   }
// }

// export default App;

import React, { useState } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import StepFive from './components/StepFive';
import axios from 'axios';

function App() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    Email: '',
    Phone: '',
    DOB: '',
    Address1: '',
    Address2: '',
    city: '',
    state: '',
    postal_code: '',
    company_name: '',
    company_type: '',
    industry: '',
    companysize: '',
    contact_person: '',
    contact_email: '',
    contact_phone: '',
    company_address1: '',
    company_address2: '',
    company_city: '',
    company_state: '',
    company_postalcode: '',
    photo: null,
    address_proof: null,
    payment_amount: '',
    payment_method: '',
    credit_card_number: '',
    expiration_date: '',
    cvv_code: ''
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = input => e => {
    const value = input === 'photo' || input === 'address_proof' ? e.target.files[0] : e.target.value;
    setFormData({ ...formData, [input]: value });
  };

  const handleSubmit = async () => {
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post('http://localhost:5000/forms', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      // Clear form data and show the thank you message
      setFormData({
        firstname: '',
        lastname: '',
        Email: '',
        Phone: '',
        DOB: '',
        Address1: '',
        Address2: '',
        city: '',
        state: '',
        postal_code: '',
        company_name: '',
        company_type: '',
        industry: '',
        companysize: '',
        contact_person: '',
        contact_email: '',
        contact_phone: '',
        company_address1: '',
        company_address2: '',
        company_city: '',
        company_state: '',
        company_postalcode: '',
        photo: null,
        address_proof: null,
        payment_amount: '',
        payment_method: '',
        credit_card_number: '',
        expiration_date: '',
        cvv_code: ''
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (submitted) {
    return <h2>Thank you. Your form is submitted.</h2>;
  }

  switch(step) {
    case 1:
      return <StepOne nextStep={nextStep} handleChange={handleChange} formData={formData} />;
    case 2:
      return <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 3:
      return <StepThree nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} />;
    case 4:
      return <StepFour nextStep={nextStep} prevStep={prevStep} formData={formData} />;
    case 5:
      return <StepFive prevStep={prevStep} handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />;
    default:
      return <div>Error: Invalid step</div>;
  }
}

export default App;
