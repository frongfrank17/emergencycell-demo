"# emergencycell-demo" 
 websocket io 
    on('emergency-cell-lists')
    on('emergency-cel-count') 
---------------
User -----------------------------------------------------------------
POST :: https://emergencycell-demo.herokuapp.com/api/emergency/v1/user/cell
body {  
                "first_name" : "Montreefffff" ,
                "last_name"  : "Prongjunffffff",
            	"profile_image" : "https://i.pinimg.com/originals/cd/71/1f/cd711fca60134229d08e3f8e6604674b.jpg" , 
            	"gender":"male",
            	"phone_number" : "0925103180" ,
            	"email" : "ffmtfrofdsfng@gmail.com" , 
            	"plate_number":"1150",
            	"plate_province":"กรุงเทพ" , 
                "latitude" : "13.8410403" ,
                "longitude" : "100.5597223" ,
                "car_brand" : "BMW" ,
                "car_model" : " X7mar4"  , 
                "battery_type" : "panasonic" , 
                "battery_size" : "LR000" , 
                "connect_type1" : "Type A" , 
                "connect_type2" : "Type C" 

}
GETLISTs -----------------------------------------------------------------
GET :: https://emergencycell-demo.herokuapp.com/api/emergency/v1/station/staff/getCells
GETDETAIL-----------------------------------------------------------------
GET :: 
EDIT STATUS --------------------------------------------------------------
POST :: https://emergencycell-demo.herokuapp.com/api/emergency/v1/station/staff/update
    {
        "id" : _id
    }
EDIT ADD STATFF ------------------------------------------------------
POST :: https://emergencycell-demo.herokuapp.com/api/emergency/v1/station/staff/addservice
    {staff: _id , user: _id }
ADMIN LOGIN  ---------------------------------------------------------------
POST :: https://emergencycell-demo.herokuapp.com/api/station/manager/v1/staff/login 
    {username: "", password:""}
ADMIN REGISTER  -------------------------------------------------------------
POST:: https://emergencycell-demo.herokuapp.com/api/station/manager/v1/staff/register
    {
	"username" : "admin4" ,
	"password" : "admin4" , 
	"email" : "admin@gamil.com", 
	"fullname" : "AdminManager4"
}
ADMIN GET ADMIN ---------------------------------------------------------
GET :: https://emergencycell-demo.herokuapp.com/api/station/manager/v1/staff/getLists
ADMIN LOGIN AUTHEN 
GET :: http://emergencycell-demo.herokuapp.com/api/station/manager/v1/authen