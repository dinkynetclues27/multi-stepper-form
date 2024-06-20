const { createForm } = require("../services/Formservice");

const createFormcontroller = async (req, res) => {
  try {
    const form = await createForm({
      ...req.body,
      photo: req.files.photo ? req.files.photo[0].filename : null,
      address_proof: req.files.address_proof ? req.files.address_proof[0].filename : null
    });
    res.status(200).json(form);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createFormcontroller
}
