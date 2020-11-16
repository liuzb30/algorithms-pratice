/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
function swap(arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

// 冒泡排序 两两进行比较，把最大的移到最后面
function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j);
      }
    }
  }
}

// 选择排序
// 思路：每一轮选取未排定的部分中最小的和开头进行交换（和冒泡的区别是每一轮只交换一次）
function selectSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      swap(arr, i, minIndex);
    }
  }
}
// 归并排序
// 思路：把原来的数组变成左右两个数组，然后分别进行排序，当左右的子数组排序完毕之后，再合并这两个子数组形成一个新的数组。
// 特点：分治思想
function mergeSort(arr, left, right) {
  if (left >= right) return;
  let mid = (left + right) >> 1;
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  let temp = [];
  let i = left,
    j = mid + 1;
  let cur = 0;
  while (i <= mid && j <= right) {
    if (arr[i] < arr[j]) {
      temp[cur] = arr[i++];
    } else {
      temp[cur] = arr[j++];
    }
    cur++;
  }
  // 处理左右数组剩下的数据
  while (i <= mid) temp[cur++] = arr[i++];
  while (j <= right) temp[cur++] = arr[j++];

  // 合并完，拷贝到原来的数组
  for (let k = 0; k < temp.length; k++) {
    arr[left + k] = temp[k];
  }
}

// 插入排序
// 思路：把数组的第一个元素当做有序数组，从第二个开始遍历，把数字插入到有序的数组里面，使有序数组保持有序。
function insertSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    // 缓存变量
    const temp = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1]; // 后移
      j--;
    }
    arr[j] = temp;
  }
}
function partition(arr, start, end) {
  let pivotPos = start;
  let pivot = arr[start];
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      pivotPos++;
      swap(arr, i, pivotPos);
    }
  }
  swap(arr, start, pivotPos);
  return pivotPos;
}
// 快排
// 思路：选取一个分界点，把整个数组分为左右两侧，左边的元素小于等于分界点，右边的元素大于分界点，然后把分界点移到中间位置，对左右子数组分别进行递归
function quickSort(arr) {
  function quickSortEx(arr, start, end) {
    if (start < end) {
      const pos = partition(arr, start, end);
      quickSortEx(arr, start, pos - 1);
      quickSortEx(arr, pos + 1, end);
    }
    return [arr[end]];
  }
  return quickSortEx(arr, 0, arr.length - 1);
}

var sortArray = function (nums) {
  //   selectSort(nums);
  //   insertSort(nums);
  quickSort(nums);
  //   bubbleSort(nums);
  //   mergeSort(nums, 0, nums.length - 1);
  return nums;
};
// @lc code=end
