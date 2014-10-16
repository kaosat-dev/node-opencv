//module.exports = require('../build/Release/opencv.node');

// Require opencv binding from pre-compiled binaries using
// node-pre-gyp, if something fails or package not available fallback
// to regular build from source.
var binary = require('node-pre-gyp');
var path = require('path');
var PACKAGE_JSON = path.join(path.resolve(__dirname,".."),'package.json');
var binding_path = binary.find(path.resolve(PACKAGE_JSON));
module.exports = require(binding_path);
