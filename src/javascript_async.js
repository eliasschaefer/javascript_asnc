var callback_sync = require('./callback_sync')
var callback_async = require('./callback_async')
var promise = require('./promise')

console.log("executing \"CALLBACK_SYNC\"")
callback_sync()

console.log("executing \"CALLBACK_ASYNC\"")
callback_async()

setTimeout(() => {
    console.log("executing \"CALLBACK_ASYNC\" a second time in 1 sec") 
    callback_async()
}, 1000)

setTimeout(() => {
    console.log("executing \"PROMISE\" in 2 sec") 
    promise().then(() => console.log("resolved..."))
}, 2000)
