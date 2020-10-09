class BitMap {
  constructor(size) {
    this.data = new Array(size).fill(0);
  }

  addMember(member) {
    let arrIndex = Math.floor(member / 32);
    let bitIndex = member % 32;
    this.data[arrIndex] = this.data[arrIndex] | (1 << bitIndex);
  }
  isExist(member) {
    let arrIndex = Math.floor(member / 32);
    let bitIndex = member % 32;
    let value = this.data[arrIndex] & (1 << bitIndex);
    return value != 0;
  }
}

module.exports = BitMap;

// var fc = new BitMap();
// var arr = [0, 3, 5, 6, 9, 34, 23, 78, 99];
// for (var i = 0; i < arr.length; i++) {
//   fc.addMember(arr[i]);
// }

// console.log(fc.isExist(3));
// console.log(fc.isExist(7));
// console.log(fc.isExist(78));

// let arr = [0, 6, 88, 7, 73, 34, 10, 99, 22];
// let sortArr = [];
// const bitMap = new BitMap(4);

// for (var i = 0; i < arr.length; i++) {
//   bitMap.addMember(arr[i]);
// }
// for (var i = 0; i <= 99; i++) {
//   if (bitMap.isExist(i)) {
//     sortArr.push(i);
//   }
// }
// console.log(sortArr);
