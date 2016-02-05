var fs = require('fs')
var test = require('tape')
var postcss = require('postcss')
var cssAnnotationBlock = require('./')

test('test', function (t) {
    var fixture = fs.readFileSync('fixture.css', 'utf-8').trim()
    var actual = cssAnnotationBlock(fixture)

    t.equal(actual[0].name, 'color')
    t.equal(actual[0].nodes.length, 1)
    t.end()
})
