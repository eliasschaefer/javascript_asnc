module.exports = function() {
    console.log("1) calling synchronous function supplying callback")
    mySyncCallbackFunction("*INPUT PARAMS*", (s) => {
        console.log("      3) inside callback function")
        console.log("         input parameter: " + s)
    })
    console.log("4) ... continuing to execute statements\n\n")
}

function mySyncCallbackFunction(s, callback) {
    console.log("   2) calling callback function (SYNC!)")
    callback(s)
}