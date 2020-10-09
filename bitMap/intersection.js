const BitMap = require("./bitMap");

var arr1 = [1, 4, 6, 8, 9, 10, 15];
var arr2 = [6, 14, 9, 2, 0, 7];
var intersectionArr = [];

const bitMap = new BitMap();

for (var i = 0; i < arr1.length; i++) {
  bitMap.addMember(arr1[i]);
}

for (var j = 0; j < arr2.length; j++) {
  if (bitMap.isExist(arr2[j])) {
    intersectionArr.push(arr2[j]);
  }
}

console.log(intersectionArr);
