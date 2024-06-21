require('dotenv').config();
const { Form } = require("../models")
const Joi = require("joi")

const createFormschema =Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    Email: Joi.string().email().required(),
    Phone: Joi.string()
    .pattern(new RegExp('^[6-9]\\d{9}$'))
    .required()
    .messages({
      'string.pattern.base': 'Mobile number must be exactly 10 digits long and start with a digit from 6, 7, 8, or 9',
    }),
    DOB: Joi.string()
    .isoDate()
    .required()
    .messages({
      'string.base': 'Date of birth must be a string',
      'string.isoDate': 'Date of birth must be in ISO 8601 date format (YYYY-MM-DD)',
      'any.required': 'Date of birth is required',
      'date.max': 'Date of birth cannot be in the future',
    }),
    Address1: Joi.string()
    .trim()
    .min(5)
    .max(100)
    .required()
    .messages({
      'string.base': 'Address must be a string',
      'string.empty': 'Address cannot be empty',
      'string.min': 'Address should have at least {#limit} characters',
      'string.max': 'Address should not exceed {#limit} characters',
      'any.required': 'Address is required',
    }),
  
    Address2: Joi.string()
    .trim()
    .min(5)
    .max(100)
    .required()
    .messages({
      'string.base': 'Address must be a string',
      'string.empty': 'Address cannot be empty',
      'string.min': 'Address should have at least {#limit} characters',
      'string.max': 'Address should not exceed {#limit} characters',
      'any.required': 'Address is required',
    }),
    city: Joi.string()
    .trim()
    .min(5)
    .max(100)
    .required()
    .messages({
      'string.base': 'City must be a string',
      'string.empty': 'City cannot be empty',
      'string.min': 'City should have at least {#limit} characters',
      'string.max': 'City should not exceed {#limit} characters',
      'any.required': 'City is required',
    }),
    state: Joi.string()
    .trim()
    .min(5)
    .max(100)
    .required()
    .messages({
      'string.base': 'State must be a string',
      'string.empty': 'State cannot be empty',
      'string.min': 'State should have at least {#limit} characters',
      'string.max': 'State should not exceed {#limit} characters',
      'any.required': 'State is required',
    }),
    postal_code: Joi.string()
    .trim()
    .regex(/^\d{6}$/)
    .required()
    .messages({
      'string.base': 'PIN code must be a string',
      'string.empty': 'PIN code cannot be empty',
      'string.pattern.base': 'PIN code must be a 6-digit numeric code',
      'any.required': 'PIN code is required',
    }),
    company_name: Joi.string().required(),
    company_type: Joi.string().required(),
    industry: Joi.string().required(),
    companysize: Joi.number()
    .integer()
    .min(1)
    .max(1000000) 
    .required()
    .messages({
      'number.base': 'Company size must be a number',
      'number.integer': 'Company size must be an integer',
      'number.min': 'Company size must be at least {#limit}',
      'number.max': 'Company size cannot exceed {#limit}',
      'any.required': 'Company size is required',
    }),
    contact_person: Joi.string().required(),
    contact_email: Joi.string().email().required(),
    contact_phone: Joi.string()
    .pattern(new RegExp('^[6-9]\\d{9}$'))
    .required()
    .messages({
      'string.pattern.base': 'Mobile number must be exactly 10 digits long and start with a digit from 6, 7, 8, or 9',
    }),
    company_address1: Joi.string()
    .trim()
    .min(5)
    .max(100)
    .required()
    .messages({
      'string.base': 'Address must be a string',
      'string.empty': 'Address cannot be empty',
      'string.min': 'Address should have at least {#limit} characters',
      'string.max': 'Address should not exceed {#limit} characters',
      'any.required': 'Address is required',
    }),
    company_address2: Joi.string()
    .trim()
    .min(5)
    .max(100)
    .required()
    .messages({
      'string.base': 'Address must be a string',
      'string.empty': 'Address cannot be empty',
      'string.min': 'Address should have at least {#limit} characters',
      'string.max': 'Address should not exceed {#limit} characters',
      'any.required': 'Address is required',
    }),
    company_city: Joi.string()
    .trim()
    .min(5)
    .max(100)
    .required()
    .messages({
      'string.base': 'City must be a string',
      'string.empty': 'City cannot be empty',
      'string.min': 'City should have at least {#limit} characters',
      'string.max': 'City should not exceed {#limit} characters',
      'any.required': 'City is required',
    }),
    company_state: Joi.string()
    .trim()
    .min(5)
    .max(100)
    .required()
    .messages({
      'string.base': 'State must be a string',
      'string.empty': 'State cannot be empty',
      'string.min': 'State should have at least {#limit} characters',
      'string.max': 'State should not exceed {#limit} characters',
      'any.required': 'State is required',
    }),
    company_postalcode: Joi.string()
    .trim()
    .regex(/^\d{6}$/)
    .required()
    .messages({
      'string.base': 'PIN code must be a string',
      'string.empty': 'PIN code cannot be empty',
      'string.pattern.base': 'PIN code must be a 6-digit numeric code',
      'any.required': 'PIN code is required',
    }),
    photo: Joi.string()
    .trim()
    .regex(/^[a-zA-Z0-9-_]+\.(jpg|jpeg|png)$/i) 
    .required()
    .messages({
      'string.base': 'File name must be a string',
      'string.empty': 'File name cannot be empty',
      'string.pattern.base': 'File name must have a valid JPG or PNG extension (.jpg, .jpeg, .png)',
      'any.required': 'File name is required',
    }),
    address_proof: Joi.string()
    .trim()
    .regex(/\.pdf$/i) 
    .required()
    .messages({
      'string.base': 'File name must be a string',
      'string.empty': 'File name cannot be empty',
      'string.pattern.base': 'File name must end with .pdf',
      'any.required': 'File name is required',
    }),
    payment_amount: Joi.number()
    .min(0)  
    .max(1000000) 
    .required()
    .messages({
      'number.base': 'Payment amount must be a number',
      'number.empty': 'Payment amount cannot be empty',
      'number.min': 'Payment amount must be at least {#limit}',
      'number.max': 'Payment amount cannot exceed {#limit}',
      'any.required': 'Payment amount is required',
    }),
    payment_method: Joi.string().required(),
    credit_card_number: Joi.number()
    .integer()
    .min(1)
    .max(12) 
    .required()
    .messages({
      'number.base': 'Credit card number must be a number',
      'number.integer': 'Credit card number must be an integer',
      'number.min': 'Credit card number must be at least {#limit}',
      'number.max': 'Credit card number cannot exceed {#limit}',
      'any.required': 'Credit card number is required',
    }),
    expiration_date: Joi.string()
    .trim()
    .regex(/^(0[1-9]|1[0-2])\/\d{4}$/) 
    .required()
    .messages({
      'string.base': 'Card expiration date must be a string',
      'string.empty': 'Card expiration date cannot be empty',
      'string.pattern.base': 'Card expiration date must be in MM/YYYY format',
      'any.required': 'Card expiration date is required',
    }),
    cvv_code: Joi.string()
    .trim()
    .pattern(/^\d{3,4}$/) 
    .required()
    .messages({
      'string.base': 'CVV must be a string',
      'string.empty': 'CVV cannot be empty',
      'string.pattern.base': 'CVV must be a numeric string with 3 or 4 digits',
      'any.required': 'CVV is required',
    })
});

const createForm = async(data) =>{
    try{
        const {error,value} = createFormschema.validate(data);
        if(error){
            throw new Error(error.details[0].message);
        }
        const form = await Form.create(value);
        return form;
    }
    catch(error){
        throw new Error(error.message);
    }
}

module.exports = {createForm}