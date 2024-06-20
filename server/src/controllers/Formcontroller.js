const {createForm} = require("../services/Formservice");

const createFormcontroller = async(req,res) =>{
    try{

        const form = await createForm(req.body);
        res.status(200).json(form);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
      }
}

module.exports =  {
    createFormcontroller
}