class BitMap {
  constructor(size) {
    this.data = new Array(size).fill(0);
  }

  addMember(member) {
    let arrIndex = Math.floor(member / 16);
    let bitIndex = member % 16;
    if (this.isExist(member)) {
      this.data[arrIndex] = this.data[arrIndex] | (1 << (bitIndex * 2 + 1));
    } else {
      this.data[arrIndex] = this.data[arrIndex] | (1 << (bitIndex * 2));
    }
  }
  isExist(member) {
    let arrIndex = Math.floor(member / 16);
    let bitIndex = member % 16;
    let value = this.data[arrIndex] & (1 << (bitIndex * 2));
    return value != 0;
  }

  isRepeat(member) {
    let arrIndex = Math.floor(member / 16);
    let bitIndex = member % 16;
    let value = this.data[arrIndex] & (1 << (bitIndex * 2 + 1));
    return value != 0;
  }
}

module.exports = BitMap;

var arr_1 = [1, 3, 4, 5, 7, 4, 8, 9, 2, 9];

var bm = new BitMap(2);
for (var i = 0; i < arr_1.length; i++) {
  bm.addMember(arr_1[i]);
}

var arr = [];
for (var i = 0; i <= 9; i++) {
  if (!bm.isRepeat(i)) {
    arr.push(i);
  }
}

console.log(arr);
