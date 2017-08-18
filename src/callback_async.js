module.exports = function() {
    console.log("1) calling asynchronous function supplying callback")
    myAsyncCallbackFunction("*INPUT PARAMS*", (s) => {
        console.log("      4) inside callback function")
        console.log("         input parameter: " + s + "\n\n")
    })
    console.log("3) ... continuing to execute statements")
}

function myAsyncCallbackFunction(s, callback) {
    console.log("   2) calling callback function in 500 msec (ASYNC!)")
    setTimeout(() => callback(s), 500)
}