"# emergencycell-demo" 
 websocket io 
on('emergency-cell-lists') 
on('emergency-cel-count') 

GET : https://emergencycell-demo.herokuapp.com/api/emergency/v1/station/staff/getCells view data all
POST : https://emergencycell-demo.herokuapp.com/api/emergency/v1/user/cell  insert data
ex 
 {
       
                "first_name" : "eeee" ,
                "last_name"  : "xxxx",
            	"profile_image" : "link url https" , 
            	"gender":"male",
            	"phone_number" : "xxx" ,
            	"email" : "xxxx@gmail.com" , 
            	"plate_number":"1150",
            	"plate_province":"กรุงเทพ" , 
                "latitude" : "13.565658" ,
                "longitude" : "100.515654" ,
                "car_brand" : "BMW" ,
                "car_model" : " X7"  , 
                "battery_type" : "panasonic" , 
                "battery_size" : "LR000" , 
                "connect_type1" : "Type A" , 
                "connect_type2" : "Type C" 

        }
POST : https://emergencycell-demo.herokuapp.com/api/emergency/v1/station/staff/update updata status 
body {
 id : (_id)
}
