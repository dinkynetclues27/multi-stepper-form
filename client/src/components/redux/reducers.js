import { SET_FORM_DATA, SET_STEP, SET_SUBMITTED, SET_ERRORS } from './action';

const initialState = {
  step: 1,
  submitted: false,
  formData: {
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
  },
  errors: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload
        }
      };
    case SET_STEP:
      return {
        ...state,
        step: action.payload
      };
    case SET_SUBMITTED:
      return {
        ...state,
        submitted: action.payload
      };
    case SET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
