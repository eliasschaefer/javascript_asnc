module.exports = function () {
        return new Promise(
            function (resolve, reject) {
                console.log("resolving Promise in 5 sec")
                setTimeout(resolve, 5000)
        })
    }
