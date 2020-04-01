const createError = require('http-errors');
const monk = require('monk')
//var db = monk("mongodb://localhost:27017/dbEmergency");
const db = monk('mongodb://heroku_jbn2nzgx:9bqdhhn84o2mn2t5bu6r720pd8@ds247569.mlab.com:47569/heroku_jbn2nzgx')
module.exports = {
    // GET : api/emergency/v1/station/user/:id usercell
    detailCell : (req , res  , next ) => {

        try {

            db.get("dbEmergency").findOne({_id :req.query.id}, (err , result) => {
                
                res.json(result)

            } )
            
        } catch(error) { console.log(error) }
    }
}