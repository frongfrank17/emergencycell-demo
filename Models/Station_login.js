const createError = require('http-errors');
const monk = require('monk')
const jwt = require('jsonwebtoken')
const config = require('../config')
const db = config.db_production
const config_secret = config.secret
module.exports = {
    // POST : api/emergency/station/staff/:id usercell
    managerLogin : (req , res  , next ) => {
      /*  let username = req.body.username;
        let password = req.body.password;
        // For the given username fetch user from DB
        let mockedUsername = 'admin';
        let mockedPassword = 'password';*/
        try {
            let login = { 'username' : req.body.username , 'password' : req.body.password}
            db.get("dbManager_station").findOne(login, (err , result) => {
               if(result.username) {
               // if(username === mockedUsername && password === mockedPassword){
                   let token = jwt.sign({username:result.username} , config_secret , {expiresIn:'24h'})
                   // let token = jwt.sign({username:username} , config_secret , {expiresIn:'24h'})
                    res.json({ 'success':true , 'message':'Authention successful!' , 'token':token })

                }else{ 
                    
                    res.send(403).json({ 'success':false , 'message': 'Incurrect username or passowrd' }) 
                
                } 

            } )
            
        } catch(error) { console.log(error) }
    }
}