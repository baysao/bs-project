/**
 * Created by baysao on 20/02/2016.
 */
var fs = require('fs');
//var pack = require('./ba-packify');
var bb = fs.readFileSync('./1.6.14/theoplayer.pack.js');
var cc = fs.readFileSync('./unpack-utf16.js');
//console.log(bb);
//console.log(cc);
fs.writeFileSync('./1.6.14/theoplayer.js', cc.toString().replace("CODECODECODE", bb));
