const createError = require('http-errors');
const monk = require('monk')
const jwt = require('jsonwebtoken')
const config = require('../config')
const db = config.db_production
const config_secret = config.secret
module.exports = {
    // POST : api/emergency/station/staff/:id usercell
    managerLogin : (req , res  , next ) => {

        try {
            let login = { 'username' : req.body.username , 'password' : req.body.password}
            db.get("dbManager_station").findOne(login, (err , result) => {
               if(result) {
               
                   console.log("username : "+req.body.username , "password:"+req.body.password)
                   let token = jwt.sign({username:result.username} , config_secret , {expiresIn:'24h'})
                    res.json({ 'success':true , 'message':'Authention successful!' , 'token':token })

                }else{ 
                    
                    res.send(403).json({ 'success':false , 'message': 'Incurrect username or passowrd' }) 
                
                } 

            } )
            
        } catch(error) { console.log(error) }
    }
}