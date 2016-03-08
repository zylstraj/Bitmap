'use strict';

// function that reads all the red, green and blue values
// function that will change all the values
// function that will write them all to a new file
// module. exports on an object that contains all of these

var colors = {};
colors.readColors = function(i, bitmap){
  let colorsObj = {}; // represents rgba values of each thing
  colorsObj.r = bitmap.readUInt8(i);
  colorsObj.g = bitmap.readUInt8(i+1);
  colorsObj.b = bitmap.readUInt8(i+2);
  colorsObj.a = bitmap.readUInt8(i+3);
  return colorsObj;
};
colors.invertColors = function(colorsObj){
  let colorsList = ['r', 'g', 'b', 'a'];
  colorsList.forEach(function(current){
    var currentColor = colorsObj[current];
    colorsObj[current] = 255 - currentColor;
  });
  console.log(colorsObj);
  return colorsObj;
};
colors.writeColors = function(i, bitmap, colorsObj){
  bitmap.writeUInt8(colorsObj.r, i);
  bitmap.writeUInt8(colorsObj.r, i+1);
  bitmap.writeUInt8(colorsObj.r, i+2);
  bitmap.writeUInt8(colorsObj.r, i+3);
};

module.exports = colors;
