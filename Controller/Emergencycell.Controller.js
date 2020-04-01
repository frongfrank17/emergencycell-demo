const express = require('express');
const router = express.Router();

// model emegency cell 
const MODEL_Emergency_cell = require('../Models/Emergency_usercell.Model');
const MODEL_Emergency_getCells = require('../Models/Emergency_getCells.Model');
const MODEL_Emergency_detailCell = require('../Models/Emergency_detail.Model')
const MODEL_Emergency_addserivce = require('../Models/Emergency_addservice.Model')
const MODEL_Emergency_update = require('../Models/Emergency_complete.Model')
//rounter path 
router.post("/user/cell" , MODEL_Emergency_cell.usercell)
// POST : api/emergency/v1/user/cell  
router.get("/station/staff/getCells", MODEL_Emergency_getCells.getCells)
// GET : api/emergency/v1/station/staff/getCells 
router.get("/station/staff/detailCell" , MODEL_Emergency_detailCell.detailCell)
// GET : api/emergency/v1/station/staff/detailCell:id usercell
router.post("/station/staff/addservice", MODEL_Emergency_addserivce.addService)
// POST : api/emergency/station/staff/addservice
router.post("/station/staff/update", MODEL_Emergency_update.updateComplete)
// POST : api/emergency/v1/station/staff/update
module.exports = router