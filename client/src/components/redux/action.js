export const SET_FORM_DATA = 'SET_FORM_DATA';
export const SET_STEP = 'SET_STEP';
export const SET_SUBMITTED = 'SET_SUBMITTED';
export const SET_ERRORS = 'SET_ERRORS';

export const setFormData = (data) => ({
  type: SET_FORM_DATA,
  payload: data
});

export const setStep = (step) => ({
  type: SET_STEP,
  payload: step
});

export const setSubmitted = (submitted) => ({
  type: SET_SUBMITTED,
  payload: submitted
});

export const setErrors = (errors) => ({
  type: SET_ERRORS,
  payload: errors
});