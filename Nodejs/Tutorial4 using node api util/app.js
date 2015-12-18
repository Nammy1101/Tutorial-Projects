var util = require('util');

var name = 'Nam';
var greeting = util.format('Hello, %s', name);
util.log(greeting);