
const config = require('./config')
const websocket = require('./index').ws
const IO = websocket
const db = config.db_production

IO.on('connection', client => {
    console.log("connected client >> " , client.id)
      setInterval( () => {

          try {

            db.get("dbEmergency").find({ }, (err , result) => {
                 // console.log(result)
                 IO.emit("emergency-cell-lists" , JSON.stringify(result) )
                 IO.emit("emergency-count" , result.length)
            } )
            
        } catch(error) { console.log(error) }

      } , 15000)

    
})