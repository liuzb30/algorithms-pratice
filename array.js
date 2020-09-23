// 已知如下数组：var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

const arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]],
  10,
];
// const flat = (arr) => {
//   // 扁平化并去重处理
//   const result = [];
//   const step = (arr2) => {
//     arr2.forEach((item) => {
//       if (item instanceof Array) {
//         step(item);
//       } else {
//         if (result.indexOf(item) === -1) {
//           result.push(item);
//         }
//       }
//     });
//   };
//   step(arr);
//   //   排序
//   return result.sort((a, b) => a - b);
// };

let flatArr = arr.flat(4);
let disArr = Array.from(new Set(flatArr));
let result = disArr.sort((a, b) => a - b);

console.log(result);
