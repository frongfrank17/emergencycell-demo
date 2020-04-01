const monk = require('monk')
const config = require('./index')
const IO = config.ws

IO.on('connection' , (socket) => {
    console.log("connected client >> " , socket.id)
      setInterval( () => {

        

      })
    IO.on("disconnect" , (msg) => console.log("disconnect client" , msg))
})