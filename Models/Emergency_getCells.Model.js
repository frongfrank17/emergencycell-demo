const createError = require('http-errors');
var monk = require('monk')
const db = monk('mongodb://heroku_jbn2nzgx:9bqdhhn84o2mn2t5bu6r720pd8@ds247569.mlab.com:47569/heroku_jbn2nzgx')
//var db = monk("mongodb://localhost:27017/dbEmergency");
module.exports = {
    // GET : api/emergency/v1/station/staff/getCells 
    getCells : async (req , res ,next ) => {

        try {

            db.get("dbEmergency").find({ }, (err , result) => {
              
                res.json(result)

            } )
            
        } catch(error) { console.log(error) }

    }
}