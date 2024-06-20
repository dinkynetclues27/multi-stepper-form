const express = require("express");
const multer = require("multer");
const formRoutes = express.Router();
const Formcontroller = require('../controllers/Formcontroller');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'photo') {
      cb(null, 'uploads/photos/');
    } else if (file.fieldname === 'address_proof') {
      cb(null, 'uploads/addressproofs/');
    }
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const originalName = file.originalname.split('.')[0];
    const extension = file.originalname.split('.').pop();
    const filename = `${originalName}-${timestamp}.${extension}`;
    cb(null, filename);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.fieldname === 'photo') {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Only .png and .jpg formats are allowed for photo'), false);
    }
  } else if (file.fieldname === 'address_proof') {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only .pdf format is allowed for address proof'), false);
    }
  }
};

const upload = multer({ storage, fileFilter });

formRoutes.post('/', upload.fields([
  { name: 'photo', maxCount: 1 },
  { name: 'address_proof', maxCount: 1 }
]), Formcontroller.createFormcontroller);

module.exports = formRoutes;
