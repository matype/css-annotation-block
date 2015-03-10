var cssAnnotationBlock = require('./')
var test = require('tape')
var fs = require('fs')

test('test', function (t) {
    var fixture = fs.readFileSync('fixture.css', 'utf-8').trim()
    cssAnnotationBlock(fixture)
})
