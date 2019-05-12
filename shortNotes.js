/*
Few pointers:
- check shortNotes info on README.md file to have a quick peek over NodeJs

*/

sayHello = (arg) => {
    console.log("Hello " + arg)
}

// sayHello("Vivek")

// just like in javascript, window is global attrib that helps to access console, document, and so on....
// here inside node, global attrib is the one that is similar to window obj in js

// global.console.log("Vivek")
// global.sayHello("Iavshali")


console.log("shortNotes.js  module object: ", module)
console.log("module object filename: ", module.filename)

module.exports.sayHelloFunc = sayHello 

/*
Output in console:
vsurulimuthu@LUSC02WJ09CHTDH  ~/Vivek/ProjectWorks/NodeJsApplnTryout   master ?  node basics.js                                                                                                                     ✔  4635  11:21:53
Hello Vivek
Vivek
Hello Iavshali
module object:  Module {
  id: '.',
  path: '/Users/vsurulimuthu/Vivek/ProjectWorks/NodeJsApplnTryout',
  exports: {},
  parent: null,
  filename: '/Users/vsurulimuthu/Vivek/ProjectWorks/NodeJsApplnTryout/basics.js',
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
module object filename:  /Users/vsurulimuthu/Vivek/ProjectWorks/NodeJsApplnTryout/basics.jsp9-0
*/