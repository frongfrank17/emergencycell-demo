const express =  require("express")
const app = express()
const bodyparser = require("body-parser")
const cors = require("cors")
const http = require("http")
const SocketIO = require("socket.io")
const PORT = process.env.PORT || 8080 
const server = http.createServer(app)
// set server port && websocket
module.exports = { ws: SocketIO(server)}
server.listen(PORT , () => console.log("running server emergency cell PORT >> " ,PORT))

//sets json 
app.use(express.json())
app.use(express.urlencoded( { extended:true }))
app.use(bodyparser.json())
app.use(bodyparser.urlencoded( {extended:true} ))
app.use(cors())

// set route path 
const EmergencycellComntroller = require('./Controller/Emergencycell.Controller')
app.use('/api/emergency/v1' , EmergencycellComntroller)
const StationController = require('./Controller/StationService.Controller')
app.use('/api/station/manager/v1' ,StationController)
require("./Emergency.socket")

app.use((req, res, next) => {
  let ALLOW_ORIGIN = ['htpp://localhost:3000']
  let ORIGIN = req.headers.origin
     if (ALLOW_ORIGIN.includes(ORIGIN)) {
       res.header('Access-Control-Allow-Origin', ORIGIN)
     }
     res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
     res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
     return next()
  })

app.use((req, res, next) => {
  
    const err = new Error('Not found');
  
    err.status = 404;
    
    next(err);
    
  });
  
app.use((err, req, res, next) => {
  
    res.status(err.status || 500);
  
    res.send({  error: {  status: err.status || 500 ,  message: err.message  } });
  
  });