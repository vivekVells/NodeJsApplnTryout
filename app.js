
sayHello = (arg) => {
    console.log("Hello " + arg)
}

sayHello("Vivek")

// just like in javascript, window is global attrib that helps to access console, document, and so on....
// here inside node, global attrib is the one that is similar to window obj in js
global.console.log("Vivek")
global.sayHello("Iavshali")


console.log(module)
console.log(module.filename)

const shortNotesModule = require('./shortNotes.js')
console.log("shortNotesModule: ", shortNotesModule)
shortNotesModule.sayHelloFunc("Info sent from app.js")

/*
vsurulimuthu@LUSC02WJ09CHTDH  ~/Vivek/ProjectWorks/NodeJsApplnTryout   master ● ?  node app.js                                                                                                                      ✔  4651  12:11:44
Hello Vivek
Vivek
Hello Iavshali
Module {
  id: '.',
  path: '/Users/vsurulimuthu/Vivek/ProjectWorks/NodeJsApplnTryout',
  exports: {},
  parent: null,
  filename: '/Users/vsurulimuthu/Vivek/ProjectWorks/NodeJsApplnTryout/app.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/vsurulimuthu/Vivek/ProjectWorks/NodeJsApplnTryout/node_modules',
    '/Users/vsurulimuthu/Vivek/ProjectWorks/node_modules',
    '/Users/vsurulimuthu/Vivek/node_modules',
    '/Users/vsurulimuthu/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
/Users/vsurulimuthu/Vivek/ProjectWorks/NodeJsApplnTryout/app.js
shortNotes.js  module object:  Module {
  id: '/Users/vsurulimuthu/Vivek/ProjectWorks/NodeJsApplnTryout/shortNotes.js',
  path: '/Users/vsurulimuthu/Vivek/ProjectWorks/NodeJsApplnTryout',
  exports: {},
  parent: Module {
    id: '.',
    path: '/Users/vsurulimuthu/Vivek/ProjectWorks/NodeJsApplnTryout',
    exports: {},
    parent: null,
    filename: '/Users/vsurulimuthu/Vivek/ProjectWorks/NodeJsApplnTryout/app.js',
    loaded: false,
    children: [ [Circular] ],
    paths: [
      '/Users/vsurulimuthu/Vivek/ProjectWorks/NodeJsApplnTryout/node_modules',
      '/Users/vsurulimuthu/Vivek/ProjectWorks/node_modules',
      '/Users/vsurulimuthu/Vivek/node_modules',
      '/Users/vsurulimuthu/node_modules',
      '/Users/node_modules',
      '/node_modules'
    ]
  },
  filename: '/Users/vsurulimuthu/Vivek/ProjectWorks/NodeJsApplnTryout/shortNotes.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/vsurulimuthu/Vivek/ProjectWorks/NodeJsApplnTryout/node_modules',
    '/Users/vsurulimuthu/Vivek/ProjectWorks/node_modules',
    '/Users/vsurulimuthu/Vivek/node_modules',
    '/Users/vsurulimuthu/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
module object filename:  /Users/vsurulimuthu/Vivek/ProjectWorks/NodeJsApplnTryout/shortNotes.js
shortNotesModule:  { sayHelloFunc: [Function: sayHello] }
Hello Info sent from app.js
 vsurulimuthu@LUSC02WJ09CHTDH  ~/Vivek/ProjectWorks/NodeJsApplnTryout   master ● ? 
*/