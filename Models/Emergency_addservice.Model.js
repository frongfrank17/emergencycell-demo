const createError = require('http-errors');
const monk = require('monk')
//var db = monk("mongodb://localhost:27017/dbEmergency");
const db = monk('mongodb://heroku_jbn2nzgx:9bqdhhn84o2mn2t5bu6r720pd8@ds247569.mlab.com:47569/heroku_jbn2nzgx')
module.exports = {
    // POST : api/emergency/station/staff/addservice
    addService : (req , res ) => {

            try {
                
                let add_Service  = {
                    
                    $set: { staff_service:req.body.staff_service ,status:  "Progress" } 
                }

                db.get("dbEmergency").findOneAndUpdate( {_id : req.body.id },add_Service ).then((result) => {

                        if(result !== null || result !== undefined ) {

                            res.json({"status" : true ,"message" : "Add suscess"})

                        }else {
                            res.json({"status" : false ,"message" : "Add error"})
                        }

                } )

            } catch (error) {console.log(error) }

   
        }
}