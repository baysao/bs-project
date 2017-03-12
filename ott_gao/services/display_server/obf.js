/**
 * Created by baysao on 25/01/2016.
 */
var obf = require('node-obf');

var fs = require('fs');
var contents = fs.readFileSync('./public/theoplayer/1.6.2/theoplayer.js').toString();
console.log(contents);
var new_contents = obf.obfuscate('$$', contents);
fs.writeFileSync('./public/theoplayer/1.6.2/theoplayer.obf.js', new_contents);