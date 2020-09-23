// 求众数
// 这也是一道简单的题目，关键点在于如何优化。
// 题目：给定一个大小为 N 的数组，找到其中的众数。众数是指在数组中出现次数大于 N/2 的元素。
//这个算法有个前提，就是一定会存在一个众数
const find = (array) => {
  let count = 1;
  let result = array[0];

  for (let i = 1; i < array.length; i++) {
    if (count === 0) result = array[i];

    if (array[i] === result) {
      count++;
    } else {
      count--;
    }
  }

  return result;
};

const arr = [1, 2, 2, 3, 2, 2, 2, 1, 5];
console.log(find(arr));
