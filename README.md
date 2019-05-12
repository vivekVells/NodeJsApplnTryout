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

## Impressions
- So far, just getting started with simple modules and stuffs and I am so in love with this. its easier to get few things get done faster; just straight to the point. I think node js has huge potential in just gettings things done faster. kind of feeling it. There is lots to understand though. let's see... 
  - modules here are awesome. for a project, [Task Process Manager](https://github.com/vivekVells/TaskProcessManager) using Java + SIGAR (to get system level information such as CPU, OS info, etc.) which I worked before to replicate the task manager was taking too much efforts to figure out a simple thing such as retrieving cpu usage info, user info, os info, etc... but here all such system level info can be easily accessed using this **os** module. Now that's awesome. **(I am pretty sure those who used Java + SIGAR + Spring boot understands why I am so excited for this part)**
    - totalMemory = os.totalMem()
    - freeMemory = os.freeMem()
    - userInfo = os.userInfo()
- Kafka logic in nodejs using events module
    - const EventEmitter = require('events') - like kafka => raise a signal event whenever required, listen to the raised signal type & handle accordingly