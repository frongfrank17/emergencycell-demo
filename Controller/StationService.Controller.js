const express = require('express');
const router = express.Router();

// model Stion service 
//const MODEL_Station_Register = require()
const MODEL_Station_Login = require('../Models/Station_login')
//const MODEL_Station_Edit = require()
//const MODEL_Station_remove = require()
//rounter path 
//router.post("/staff/register" , MODEL_Emergency_cell.usercell)
// POST : api/station/manager/v1/staff/register  
router.post("/staff/login" , MODEL_Station_Login.managerLogin)
// POST : api/station/manager/v1/staff/login
//router.post("/staff/profile/edit" , MODEL_Station_Edit)
// POST  : api/station/manager/v1/staff/profile/edit
//router.delete("/staff/admin/remove" , MODEL_Station_remove)
// delete : api/station/manager/v1/staff/admin/remove
module.exports = router