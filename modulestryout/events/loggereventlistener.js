const Logger = require('./loggereventemitter.js')
console.log(Logger)

var logger = new Logger()

// reception & handling of the triggered event signal
logger.on("startlog", (data) => {
    console.log("startlog message reception. Data: ", data)
})

// triggering the event signal
logger.startLogger()

/*
Output:
vsurulimuthu@LUSC02WJ09CHTDH  ~/Vivek/ProjectWorks/NodeJsApplnTryout   master ● ?  node modulestryout/events/loggereventlistener.js  ✔  4691  16:05:22
[Function: Logger]
startLogger func executed...
startlog message reception. Data:  { id: 4567, name: 'startLogger', type: 'function' }
 vsurulimuthu@LUSC02WJ09CHTDH  ~/Vivek/ProjectWorks/NodeJsApplnTryout   master ● ?   ✔  4692  16:05:57
 */