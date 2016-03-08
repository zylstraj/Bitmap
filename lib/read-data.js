'use strict';

function readHeaders(bitmap){

  let bitmapData = {};
  bitmapData.headField = bitmap.toString('ascii', 0, 2);
  bitmapData.size = bitmap.readUInt32LE(2);
  bitmapData.pixelArrayStart = bitmap.readUIntLE(10);
  bitmapData.paletteColors = bitmap.readUIntLE(46);
  return bitmapData;
}

module.exports = readHeaders;
