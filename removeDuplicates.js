// const removeDuplicates = (arr) => {
//   let i = 0;
//   while (arr[i] != undefined) {
//     if (arr[i] === arr[i - 1]) {
//       arr.splice(i, 1);
//     } else {
//       i++;
//     }
//   }
// };

const removeDuplicates = (arr) => {
  const len = arr.length;
  let slowPointer = 0;

  for (let fastPointer = 0; fastPointer < len; fastPointer++) {
    if (arr[slowPointer] !== arr[fastPointer]) {
      slowPointer++;
      arr[slowPointer] = arr[fastPointer];
    }
  }
  arr.splice(slowPointer + 1, len - slowPointer);
};

let array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(array));
// 5

console.log(array);
// 0, 1, 2, 3, 4
