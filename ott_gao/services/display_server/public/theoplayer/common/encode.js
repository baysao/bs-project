//var Tea = require('./tea');
var XORCipher = require('./XORCipher');
//var Pako = require('pako');
var fs = require('fs');
var UglifyJS = require("uglify-js");
var zlib = require('zlib');

var pako_lib = fs.readFileSync('./pako_inflate.js');

//var raw = fs.readFileSync('theoplayer.js', 'utf8');
var process = function(opt, filein, key, fileout) {
  var result = '';
  var output = '';
  var output_aa = [];
  console.log('process:' + filein);
  if(opt.min) {
    console.log('process: min');
    result = UglifyJS.minify(filein, {
      mangle: true, compress: {
        sequences: true,
        dead_code: true,
        conditionals: true,
        booleans: true,
        unused: true,
        if_return: true,
        join_vars: true,
        drop_console: true
      },
      //fromString: true
    }).code;
  }
  fs.writeFileSync(fileout + '.min.js', result);

  var templ;

  if(opt.compress) {
    console.log('process: compress');
    result = zlib.deflateSync(new Buffer(result)).toString('base64');
    fs.writeFileSync(fileout + '.zip.js', result);
    //templ = fs.readFileSync('pako_inflate.js', 'utf8');
    //output = output + templ;
    //output_aa.push("console.log(__CODE__)");
    //var output1 = "eval(pako.inflate(atob('__CODE__')));";
  }

  //if(opt.encrypt) {
  //  console.log('process: encrypt with key ' + key);
  //  result = Tea.encrypt(result, key);

    //templ = fs.readFileSync('tea_decrypt.js', 'utf8');
    //output = output + templ;
    //output_aa.push("Tea.decrypt(__CODE__, '" + key + "')");
    //fs.writeFileSync(fileout + '.enc.js', result);
  //}

  if(fileout) {
    console.log('process: write file ' + fileout);

    //var oo;
    result = 'eval(pako.inflate(atob(\"' + result + '\")))';
    //while(output_aa.length > 0) {
    //  oo = output_aa.pop();
    //  result = oo.replace('__CODE__', result);
    //}
    //fs.writeFileSync(fileout, output + ';' + 'eval(' + result + ')');
    fs.writeFileSync(fileout, pako_lib + ';' +  result);
  }
}
process({ min: true, encrypt: true, compress: true}, 'theoplayer.js', 'f0Qp0LuJww', 'theoplayer.aa.js');