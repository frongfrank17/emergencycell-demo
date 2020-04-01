const createError = require('http-errors');
const monk = require('monk')

const db = monk('mongodb://heroku_jbn2nzgx:9bqdhhn84o2mn2t5bu6r720pd8@ds247569.mlab.com:47569/heroku_jbn2nzgx')
module.exports = {
    // GET : api/emergency/station/staff/:id usercell
    managerLogin : (req , res  , next ) => {

        try {

            db.get("dbManager_station").findOne({_id :req.query.id}, (err , result) => {
                
                res.json(result)

            } )
            
        } catch(error) { console.log(error) }
    }
}