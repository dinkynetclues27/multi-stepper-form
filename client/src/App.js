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


//asli

// import React, { useState } from 'react';
// import StepOne from './components/StepOne';
// import StepTwo from './components/StepTwo';
// import StepThree from './components/StepThree';
// import StepFour from './components/StepFour';
// import StepFive from './components/StepFive';
// import axios from 'axios';

// function App() {
//   const [step, setStep] = useState(1);
//   const [submitted, setSubmitted] = useState(false);
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
//     // credit_card_number: '',
//     expiration_date: '',
//     cvv_code: ''
//   });

//   const [errors,seterrors] = useState({});
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
//         try {
//       const response = await axios.post('http://localhost:4000/api/form', formData, {
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
//         // credit_card_number: '',
//         expiration_date: '',
//         cvv_code: ''
//       });
//       setSubmitted(true);
//     } catch (error) {
//       if (error.response && error.response.data && error.response.data.error && error.response.data.error.details) {
  
//         const { details } = error.response.data.error;
//         const errorObject = {};
//         details.forEach(detail => {
//           errorObject[detail.context.key] = detail.message;
//         });
//         seterrors(errorObject);
//       } else {
//         console.error('Error submitting form:', error);
//       }
//     }
//   };

//   if (submitted) {
//     return <h2>Thank you. Your form is submitted.</h2>;
//   }

//   switch(step) {
//     case 1:
//       return <StepOne nextStep={nextStep} handleChange={handleChange} formData={formData} errors={errors}/>;
//     case 2:
//       return <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} errors={errors} />;
//     case 3:
//       return <StepThree nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} errors={errors} />;
//     case 4:
//       return <StepFour nextStep={nextStep} prevStep={prevStep} formData={formData} errors={errors} />;
//     case 5:
//       return <StepFive prevStep={prevStep} handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} errors={errors} />;
//     default:
//       return <div>Error: Invalid step</div>;
//   }
// }

// export default App;


import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStep, setSubmitted, setFormData, setErrors } from './components/redux/action';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import StepFive from './components/StepFive';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();
  const step = useSelector(state => state.step);
  const submitted = useSelector(state => state.submitted);
  const formData = useSelector(state => state.formData);
  const errors = useSelector(state => state.errors);

  const nextStep = () => {
    dispatch(setStep(step + 1));
  };

  const prevStep = () => {
    dispatch(setStep(step - 1));
  };

  const handleChange = input => e => {
    const value = input === 'photo' || input === 'address_proof' ? e.target.files[0] : e.target.value;
    dispatch(setFormData({ [input]: value }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/form', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      dispatch(setFormData({
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
        expiration_date: '',
        cvv_code: ''
      }));
      dispatch(setSubmitted(true));
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error && error.response.data.error.details) {
        const { details } = error.response.data.error;
        const errorObject = {};
        details.forEach(detail => {
          errorObject[detail.context.key] = detail.message;
        });
        dispatch(setErrors(errorObject));
      } else {
        console.error('Error submitting form:', error);
      }
    }
  };

  if (submitted) {
    return <h2>Thank you. Your form is submitted.</h2>;
  }

  switch(step) {
    case 1:
      return <StepOne nextStep={nextStep} handleChange={handleChange} formData={formData} errors={errors}/>;
    case 2:
      return <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} errors={errors} />;
    case 3:
      return <StepThree nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} errors={errors} />;
    case 4:
      return <StepFour nextStep={nextStep} prevStep={prevStep} formData={formData} errors={errors} />;
    case 5:
      return <StepFive prevStep={prevStep} handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} errors={errors} />;
    default:
      return <div>Error: Invalid step</div>;
  }
}

export default App;







// // actions.js
// export const SET_FORM_DATA = 'SET_FORM_DATA';
// export const SET_STEP = 'SET_STEP';
// export const SET_SUBMITTED = 'SET_SUBMITTED';
// export const SET_ERRORS = 'SET_ERRORS';

// export const setFormData = (data) => ({
//   type: SET_FORM_DATA,
//   payload: data
// });

// export const setStep = (step) => ({
//   type: SET_STEP,
//   payload: step
// });

// export const setSubmitted = (submitted) => ({
//   type: SET_SUBMITTED,
//   payload: submitted
// });

// export const setErrors = (errors) => ({
//   type: SET_ERRORS,
//   payload: errors
// });

// // reducer.js
// import { SET_FORM_DATA, SET_STEP, SET_SUBMITTED, SET_ERRORS } from './actions';

// const initialState = {
//   step: 1,
//   submitted: false,
//   formData: {
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
//     expiration_date: '',
//     cvv_code: ''
//   },
//   errors: {}
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_FORM_DATA:
//       return {
//         ...state,
//         formData: {
//           ...state.formData,
//           ...action.payload
//         }
//       };
//     case SET_STEP:
//       return {
//         ...state,
//         step: action.payload
//       };
//     case SET_SUBMITTED:
//       return {
//         ...state,
//         submitted: action.payload
//       };
//     case SET_ERRORS:
//       return {
//         ...state,
//         errors: action.payload
//       };
//     default:
//       return state;
//   }
// };

// export default rootReducer;

// // store.js
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducer';

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

// // App.js
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { setStep, setSubmitted, setFormData, setErrors } from './actions';
// import StepOne from './components/StepOne';
// import StepTwo from './components/StepTwo';
// import StepThree from './components/StepThree';
// import StepFour from './components/StepFour';
// import StepFive from './components/StepFive';
// import axios from 'axios';

// function App() {
//   const dispatch = useDispatch();
//   const { step, submitted, formData, errors } = useSelector(state => state);

//   const nextStep = () => {
//     dispatch(setStep(step + 1));
//   };

//   const prevStep = () => {
//     dispatch(setStep(step - 1));
//   };

//   const handleChange = input => e => {
//     const value = input === 'photo' || input === 'address_proof' ? e.target.files[0] : e.target.value;
//     dispatch(setFormData({ [input]: value }));
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post('http://localhost:4000/api/form', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log(response.data);
//       dispatch(setFormData({
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
//         expiration_date: '',
//         cvv_code: ''
//       }));
//       dispatch(setSubmitted(true));
//     } catch (error) {
//       if (error.response && error.response.data && error.response.data.error && error.response.data.error.details) {
//         const { details } = error.response.data.error;
//         const errorObject = {};
//         details.forEach(detail => {
//           errorObject[detail.context.key] = detail.message;
//         });
//         dispatch(setErrors(errorObject));
//       } else {
//         console.error('Error submitting form:', error);
//       }
//     }
//   };

//   if (submitted) {
//     return <h2>Thank you. Your form is submitted.</h2>;
//   }

//   switch(step) {
//     case 1:
//       return <StepOne nextStep={nextStep} handleChange={handleChange} formData={formData} errors={errors}/>;
//     case 2:
//       return <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} errors={errors} />;
//     case 3:
//       return <StepThree nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} formData={formData} errors={errors} />;
//     case 4:
//       return <StepFour nextStep={nextStep} prevStep={prevStep} formData={formData} errors={errors} />;
//     case 5:
//       return <StepFive prevStep={prevStep} handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} errors={errors} />;
//     default:
//       return <div>Error: Invalid step</div>;
//   }
// }

// export default App;

// // index.js
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import App from './App';
// import store from './store';

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
