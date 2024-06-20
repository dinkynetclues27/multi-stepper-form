require('dotenv').config();
const { Form } = require("../models")

const createForm = async(data) =>{
    try{
        const form = await Form.create(data);
        return form;
    }
    catch(error){
        throw new Error(error.message);
    }
}

module.exports = {createForm}