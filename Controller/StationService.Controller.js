const express = require('express');
const router = express.Router();

// model Stion service 
const MODEL_Station_Register = require('../Models/station_register')
const MODEL_Station_Login = require('../Models/Station_login')
const  Auth = require('../Models/authencation')

//rounter path 
router.post("/staff/register" , MODEL_Station_Register.register)
// POST : api/station/manager/v1/staff/register  
router.post("/staff/login" , MODEL_Station_Login.managerLogin)

router.get('/authen' , Auth.Auth , (req ,res) => {
    res.json({
        success: true,
        message: 'hello word',
      });
} )
module.exports = router