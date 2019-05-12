// refer official documentation on how to use the modules
// for OS: https://nodejs.org/dist/latest-v10.x/docs/api/os.html

// Path module usage
const path = require('path');
console.log("path module: ", path)
console.log(path.parse(__filename))

// OS module usage
const os = require('os');
console.log("os module: ", os)
var totalMemory = os.totalmem()
var freemem = os.freemem()

console.log(os.cpus())
console.log(`Total Memory: ${totalMemory}`)
console.log(`Free Memory: ${freemem}`)
console.log(`Host Name: ${os.hostname()}`)
console.log(`User Info: ${os.userInfo()}`)

// File System Usage
const fs = require('fs')
console.log("file system module: ", fs)

// you can do this as blocking synchronously or non-blocking asynchronously

// synchronously
const files = fs.readdirSync('./')
console.log(`files (sync) : ${files}`);

// asynchronously
fs.readdir('./', (err, files) => {
    if(err) console.log(`Error: ${err}`)
    else console.log(`files (Async): ${files}`)
})