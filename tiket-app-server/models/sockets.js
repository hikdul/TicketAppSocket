const TiketList = require("./ticket_list")


class Sockets {

    constructor( io ) {

        this.io = io
        
        // crear la instatcia de ticketlist
        this.TicketList = new TiketList()

        this.socketEvents()
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log('client connect')
            // Escuchar evento: mensaje-to-server
            socket.on('request-new-ticket', (_, callback) => {
                const newTk = this.TicketList.createTk()
                callback(newTk)
            })

            socket.on('next-ticket-work', (user, callback)=>{
                const tkNow = this.TicketList.asingTk({...user})
                callback(tkNow)
                this.io.emit('alert-new-ticket-asing', this.TicketList.last10)
            })
            
        })
        
    
    }


}


module.exports = Sockets