const createError = require('http-errors');
const monk = require('monk')
const db = monk('mongodb://heroku_jbn2nzgx:9bqdhhn84o2mn2t5bu6r720pd8@ds247569.mlab.com:47569/heroku_jbn2nzgx')
//var db = monk("mongodb://localhost:27017/dbEmergency");
module.exports = {
  // POST : api/emergency/user/cell  
    usercell : (req , res ) => {
        let user_cell = {
          "User_" :
                  {
                    "Profile":
                        {
                            "first_name":req.body.first_name , 
                            "last_name":req.body.last_name , 
                            "gender": req.body.gender ,
                            "profile_image" : req.body.img         
                        },
                    "Contact" : 
                        {
                            "email" :  req.body.email ,
                            "phone_number": req.body.phone_number
                        }
                  } ,
                  "User_car" : 
                  {
                      "Lisence_plate": { "plate_number":req.body.plate_number,"plate_province":req.body.plate_province } , 
                      "detail_Car": 
                      {
                          "car_brand" : req.body.car_brand ,
                          "car_model" : req.body.car_model ,
                          "battery_type" : req.body.battery_type, 
                          "battery_size" : req.body.battery_size,
                          "connect_type" : [ req.body.connect_type1, req.body.connect_type2 ]
                      }
                  },
                  "Location" : { "latitude": req.body.latitude , "longitude": req.body.longitude } , 
                  "staff_service": "",
                  "status": "SOS"
      }
        
       try {
         
          db.get("dbEmergency").insert(user_cell , ( err , result ) => {
           
            if(!err || result!=null) {
              res.json ({
                  "status" : true , 
                  "message" : " Cell suscess"
              })
            }else{
              res.json ( {
                  "status" : false , 
                  "message" : "Error Report"
              })
            }
            
          })

       } catch (error) {
       
          console.log(error)
       
      }

    }
}