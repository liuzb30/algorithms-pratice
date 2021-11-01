function partition(arr, start, end) {
  let pivotPos = start;
  let pivot = arr[start];

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      pivotPos++;
      if (pivotPos !== i) {
        let temp = arr[pivotPos];
        arr[pivotPos] = arr[i];
        arr[i] = temp;
      }
    }
  }
  arr[start] = arr[pivotPos];
  arr[pivotPos] = pivot;
  return pivotPos;
}

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      let j = i - 1;
      let tmp = arr[i];
      //   往后移，直到找到比当前元素小的
      while (j >= 0 && arr[j] >= tmp) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = tmp;
    }
  }
}

// 快排的特点是分治，所谓分治，顾名思义，就是分而治之，将一个复杂的问题，分层两个或两个以上的子问题，再把子问题分成更小的子问题，直到更小的子问题可以简单求解，求解子问题，则原问题的解为子问题解的合并。

// 快排的过程简单的说只有三步：
// 1. 首先从序列中选取一个基准点
// 2. 将比这个基准点小的数全部放到它的左边，比这个基准点大的数字放到它的右边
// 3. 然后分别对左边和右边的数组重复以上的操作，直到数组完全排序

// 具体按以下步骤实现
// 1. 创建两个指针分别指向最左端和最右端
// 2.从序列中随机选取一个基准点
// 3. 左指针往右走，遇到比基准点大则停止
// 4. 右指针往左走，遇到比基准点小则停止，交换左右指针元素
// 5. 重复3,4，直到左指针大于右指针。此时，基准点左边的值都比基准点小，右边的值都比基准点大
// 6. 最后对基准点左右两边的重复以上操作，直到数组完全排序。

function partition(arr, start, end) {
  let left = start
  let right = end
  const pivot = arr[Math.floor(Math.random() * (end - start + 1) + start)]
  while (left <= right) {
    while (arr[left] < pivot) {
      left++
    }
    while (arr[right] > pivot) {
      right++
    }
    if (i <= j) {
      swap(arr, i, j)
      i += 1
      j -= 1
    }
  }
  return left
}
function swap(arr, j, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

function quickSort(arr) {
  function quickSortEx(arr, start, end) {
    if (start < end) {
      const pos = partition(arr, start, end);
      quickSortEx(arr, start, pos);
      quickSortEx(arr, pos + 1, end);
    }
    return [arr[end]];
  }

  return quickSortEx(arr, 0, arr.length - 1);
}


function quickSort(arr) {
  if (arr.length < 2) return arr
  let len = arr.length
  const cur = arr[len - 1]
  const left = arr.filter((v, i) => v <= cur && i !== len - 1)
  const right = arr.filter(v => v > cur)
  return [...quickSort(left), cur, ...quickSort(right)]
}

var arr = [7, 2, 8, 1, 4, 6, 9, 3];
insertSort(arr);
console.log(arr);

module.exports = quickSort;
