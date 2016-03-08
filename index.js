'use strict';

const fs = require('fs');

var bitmap = fs.readFileSync(__dirname + '/images/' + process.argv[2]);

var readHeaders = require('./lib/read-data.js');
var colors = require('./lib/read-colors.js');
var bitmapData = readHeaders(bitmap);

for(var i = bitmapData.pixelArrayStart; i < bitmapData.size - 4; i += 4){
  var invertedColorsObj = colors.invertColors(colors.readColors(i, bitmap));
  // this returned value - gets passed into this:
  console.log(invertedColorsObj);
  colors.writeColors(i, bitmap, invertedColorsObj);
}

fs.writeFileSync(__dirname +'/output/' + process.argv[2], bitmap);
