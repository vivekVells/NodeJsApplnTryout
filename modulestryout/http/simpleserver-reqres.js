/*
    creating a simple http server that handles the request and response
    This http module is very simple and used for simple demo or getting familiarized with node. 
        The complexity of the routing increases with the n number of the endpoints. 
        So, we use a framework called express to handle these routes gracefully, structured and easier.
*/

const http = require('http')

// creating server and handling the request & response using callbacks
// createServer() creates a callback to return the http server
const server = http.createServer((req, res) => {
    if(req.url === "/") {
        console.log(`homepage endpoint being hit. URL: ${req.url}`)
        res.write("Welcome to Node JS World!!!")
        // closing the response stream I guess
        res.end()
    } else if(req.url === "/api/allcourses") {
        console.log(`api/allcourses endpoing being hit. URL: ${req.url}`)
        res.write(JSON.stringify([{"id": 1, "course": "course1"}, {"id": 2, "course": "course2"}]))
        res.end()
    } 
    // else {
    //     console.log("invalid endpoint being hit")
    //     res.write("404 endpoint resource not found. use correct endpoint")
    //     res.end()
    // }
})

server.listen(3001)
console.log("Listening to port 3001")

/*
Console Output:
vsurulimuthu@LUSC02WJ09CHTDH  ~/Vivek/ProjectWorks/NodeJsApplnTryout   master ● ?  node modulestryout/http/simpleserver-reqres.js        SIGINT(2) ↵  4696  16:38:12
Listening to port 3001
homepage endpoint being hit. URL: /
api/allcourses endpoing being hit. URL: /api/allcourses
^C
 vsurulimuthu@LUSC02WJ09CHTDH  ~/Vivek/ProjectWorks/NodeJsApplnTryout   master ● ? 
 */