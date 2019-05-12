# NodeJsApplnTryout
Build application using NodeJs and understand how it works

## ShortNotes
- Node js is highly scalable, data intensive and helps to build real time apps faster.
- It is based on non-blocking asynchronous architecture nature
- Benefits
  - Great for prototyping & agile development
  - Superfast & highly scalable
  - Javascript on both frontend and backend
  - Cleaner and more consistent codebase - since both frontend and backend are on js
  - Largest ecosystem of open source libraries

- Encapsulation in nodejs - each file's internal data/function/variable entities scope is within the files only. Its scope can be exposed or accessible by outside/different files by exporting those. Consider each files as seperate individual module and only way to access the module's info is when desired info is being exported.
  - module.exports.<variable_exported> =  <variable_to_be_exported>
  - module.exports.<function_exported> = <function_to_be_exported>
  - to use it in a different module
    - const variable_name = require('<path_of_the_file>')
        - note the const keyword here instead of the var usage. this is to avoid some unncessary or mistake in changing the imported module object info

- Module Wrapper Function: Node does not executes the code directly. it wraps the code block by a function and executes
