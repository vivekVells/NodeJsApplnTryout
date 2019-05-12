/*
    using socket connection simple server creation
*/
const http = require('http')

// creating a server - this is also based on the event-emitter
// createServer() creates a callback to return the http server
const server = http.createServer()

// on method to handle the raised event on port server is listening
server.on('connection', (socket) => {
    console.log(`Connection established... socket: ${socket}`)
})

// make the server to listen on port 3001
server.listen(3001)
console.log("Listening on port 3001....")

/*
Console Output:
vsurulimuthu@LUSC02WJ09CHTDH  ~/Vivek/ProjectWorks/NodeJsApplnTryout   master ● ?  node modulestryout/http/simpleserver-socketcxn.js     SIGINT(2) ↵  4696  16:48:32
Listening on port 3001....
Connection established... socket: [object Object]
Connection established... socket: [object Object]
^C
 vsurulimuthu@LUSC02WJ09CHTDH  ~/Vivek/ProjectWorks/NodeJsApplnTryout   master ● ? 
*/