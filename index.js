var annotation = require('css-annotation')
var postcss = require('postcss')

module.exports = function (css) {
    var root = postcss.parse(css)

    var flags = []
    var tmpNodes = []
    var results = []
    root.each(function (node) {
        if (node.type === 'comment') {
            var res = annotation.read(node.text)
            if (res.start) {
                flags.push({
                    name: res.start,
                    start: true,
                    end: false
                })
                return
            }
            if (res.end){
                flags.forEach(function (flag) {
                    if (flag.name === res.end) {
                        flag.end = true
                    }
                })
            }
        }

        flags.forEach(function (flag) {
            if (flag.start === true && flag.end === false && node.type !== "comment") {
                tmpNodes.push(node)
            }

            if (flag.start === true && flag.end === true && tmpNodes.length !== 0) {
                results.push({
                    name: flag.name,
                    nodes: tmpNodes
                })
                tmpNodes = []
            }
        })

    })

    return results
}
