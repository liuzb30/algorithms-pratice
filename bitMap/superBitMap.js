const BitMap = require("./bitMap");

class SuperBitMap {
  constructor(size) {
    this.positiveBitMap = new BitMap(size);
    this.negativeBitMap = new BitMap(size);
  }

  addMember(member) {
    if (member >= 0) {
      this.positiveBitMap.addMember(member);
    } else {
      this.negativeBitMap.addMember(Math.abs(member));
    }
  }

  isExist(member) {
    if (member >= 0) {
      return this.positiveBitMap.isExist(member);
    } else {
      return this.negativeBitMap.isExist(Math.abs(member));
    }
  }
}

var arr = [1, 3, -6, -8, 8, 9];
var superBm = new SuperBitMap();

for (var i = 0; i < arr.length; i++) {
  superBm.addMember(arr[i]);
}

console.log(superBm.isExist(-8));
console.log(superBm.isExist(8));
console.log(superBm.isExist(9));
console.log(superBm.isExist(-6));
console.log(superBm.isExist(-5));
