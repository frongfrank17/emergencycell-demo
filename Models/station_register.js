const createError = require('http-errors');
const monk = require('monk')
const config = require('../config')
const db = config.db_production
const config_db = db.get("dbManager_station")
module.exports = {
    // POST: api/emergency/station/staff/register
    register : (req , res  , next ) => {

        try {
            config_db.findOne({"username":req.body.username} , (result , err ) => {
                let register = { 
                    "username" : req.body.username , "password" : req.body.password ,   
                    "email":req.body.email , "fullname":req.body.fullname      
                    }
                    if(result == undefined || !result == null ){
                        config_db.insert(register, ( response , err ) => {
                            res.json({"status" : true , "message": "username duplicate "})
                        })
                    }else  { res.json({"status" : false , "message": "username duplicate "}) }


            })

            
        } catch(error) { console.log(error) }
    }
}