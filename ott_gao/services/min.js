var UglifyJS = require('uglify-js');
var fs = require('fs');

var result = UglifyJS.minify('layouts/html5/174/vbxlayout.js', {
	mangle: true,
	compress: {
		sequences: true,
		dead_code: true,
		conditionals: true,
		booleans: true,
		unused: true,
		if_return: true,
		join_vars: true,
		drop_console: true
	}
});

fs.writeFileSync('layouts/html5/174/vbxlayout.min.js', result.code);
