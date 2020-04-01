const createError = require('http-errors');
const monk = require('monk')
const db = monk('mongodb://heroku_jbn2nzgx:9bqdhhn84o2mn2t5bu6r720pd8@ds247569.mlab.com:47569/heroku_jbn2nzgx')
//var db = monk("mongodb://localhost:27017/dbEmergency");
module.exports = {
    // POST : api/emergency/v1/station/staff/updateservice
    updateComplete : async (req , res ) => {

            try {
                
                let Id = { "_id":req.body.id }
                let update = { $set : {"status":"Complete"} }
                

               db.get("dbEmergency").findOneAndUpdate(Id,update).then((updatedDoc) => {
                    if(updatedDoc.status ==="Complete")
                    { res.json({"status":true ,"message":"updated Susscess"})}
                    else{ res.json({"status":false , "message":"updated error"})}
               })

            } catch (error) {console.log(error) }

   
        }
}