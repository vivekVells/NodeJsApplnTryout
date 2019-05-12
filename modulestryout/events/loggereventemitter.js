const EventEmitter = require('events')

class Logger extends EventEmitter {
    startLogger = () => {
        console.log("startLogger func executed...")

        // raising the event signal
        this.emit("startlog", {"id": 4567, "name": "startLogger", "type": "function"})
    }
}

module.exports = Logger;