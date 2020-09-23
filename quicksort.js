// // 快速排序的特点就是分治。
// 如何体现分治策略呢？我们首先在数组中选取一个基准点，叫做 pivot，根据这个基准点：把比基准点小的数组值放在基准点左边，把比基准点大的数组值放在基准点右边。
// 这样一来，基于基准点，左边分区的值都小于基准点，右边分区的值都大于基准点，然后针对左边分区和右边分区进行同样的操作，直到最后排序完成

// function quickSort(array) {
//   // 数组只有一个的时候直接返回
//   if (array.length < 2) {
//     return array.slice();
//   }
//   //随机找到pivot
//   let pivot = array[Math.floor(Math.random() * array.length)];
//   let leftArr = [];
//   let middleArr = [];
//   let rightArr = [];

//   array.forEach((item) => {
//     if (item < pivot) {
//       leftArr.push(item);
//     }
//     if (item === pivot) {
//       middleArr.push(item);
//     }
//     if (item > pivot) {
//       rightArr.push(item);
//     }
//   });
//   //   递归进行
//   return quickSort(leftArr).concat(middleArr, quickSort(rightArr));
// }

const quickSort = (array, start, end) => {
  start = start === undefined ? 0 : start;
  end = end === undefined ? arr.length - 1 : end;

  if (start >= end) {
    return;
  }

  let value = array[start];

  let i = start;
  let j = end;

  while (i < j) {
    // 找出右边第一个小于参照数的下标并记录
    while (i < j && array[j] >= value) {
      j--;
    }

    if (i < j) {
      arr[i++] = arr[j];
    }

    // 找出左边第一个大于参照数的下标，并记录
    while (i < j && array[i] < value) {
      i++;
    }

    if (i < j) {
      arr[j--] = arr[i];
    }
  }

  arr[i] = value;

  quickSort(array, start, i - 1);
  quickSort(array, i + 1, end);
};

let arr = [1, 3, 6, 3, 4, 8, 5, 7];

quickSort(arr);
console.log(arr);
