const createError = require('http-errors');
const monk = require('monk')

const db = monk('mongodb://heroku_jbn2nzgx:9bqdhhn84o2mn2t5bu6r720pd8@ds247569.mlab.com:47569/heroku_jbn2nzgx')
const config = db.get("dbManager_station")
module.exports = {
    // POST: api/emergency/station/staff/register
    register : (req , res  , next ) => {

        try {
            config.findOne({"username":req.body.username} , (result , err ) => {
                let register = { 
                    "username" : req.body.username , "password" : req.body.password ,   
                    "email":req.body.email , "fullname":req.body.fullname      
                    }
                    if(result == undefined || !result == null ){
                        config.insert(register, (result ,err ) => {
                            if(err) throw err 
                            res.status(200).json({"status":true,"message": "complete" , "username": result.username})
                        })
                    }else  { res.json({"status" : false , "message": "username duplicate "}) }


            })

            
        } catch(error) { console.log(error) }
    }
}