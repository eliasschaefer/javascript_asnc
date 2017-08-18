module.exports = function () {
        return new Promise(
            function (resolve, reject) {
                console.log("resolving Promise in 500 msec")
                setTimeout(() => resolve('POSITIVE'), 500)
        })
    }
