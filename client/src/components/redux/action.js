export const setdata = 'setdata';
export const setstep = 'setstep';
export const submit = 'submit';
export const errorset = 'errorset';

export const setFormData = (data) => ({
  type: setdata,
  payload: data
});

export const setStep = (step) => ({
  type: setstep,
  payload: step
});

export const setSubmitted = (submitted) => ({
  type: submit,
  payload: submitted
});

export const setErrors = (errors) => ({
  type: errorset,
  payload: errors
});