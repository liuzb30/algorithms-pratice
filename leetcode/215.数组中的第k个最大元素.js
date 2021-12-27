/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 解法一：排序后选择第k个
var findKthLargest = function (nums, k) {
  return nums.sort((a, b) => a - b)[nums.length - k]
}
// 快排
var findKthLargest = function (nums, k) {
  const n = nums.length
  return quick(0, n - 1)
  function quick(l, r) {
    if (l > r) return nums[n - k]
    // 选取基准点,把小于基准点的放在左边，大于基准点的放在右边
    const random = Math.floor(Math.random() * (r - l + 1)) + l
    swap(nums, random, r)
    const pivotIndex = partition(nums, l, r)
    if (n - k === pivotIndex) {
      return nums[n - k]
    } else if (n - k > pivotIndex) {
      return quick(pivotIndex + 1, r)
    } else {
      return quick(l, pivotIndex - 1)
    }

  }
  function partition(arr, start, end) {
    // 设置尾部的值为基准点
    let pivot = arr[end]
    let pivotIndex = start
    for (let i = start; i < end; i++) {
      if (arr[i] < pivot) {
        // 把小于基准点的值换到基准点的前面
        if (i !== pivotIndex) swap(arr, i, pivotIndex)
        pivotIndex++
      }
    }
    // 交换基准点和尾部的值
    swap(arr, pivotIndex, end)
    return pivotIndex
  }
  function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

// 堆排序
var findKthLargest = function (nums, k) {
  // 从nums中取出k个数，构建一个小顶堆
  let heap = [,], i = 0
  while (i < k) {
    heap.push(nums[i++])
  }
  buildHeap(heap, k)
  // 从第k位开始遍历数组
  for (let i = k; i < nums.length; i++) {
    if (heap[1] < nums[i]) {
      // 替换并堆化
      heap[1] = nums[i]
      heapify(heap, k, 1)
    }
  }
  // 返回堆顶元素
  console.log(heap);
  return heap[1]
}
// 原地建堆，从后往前，自上而下式建小顶堆
function buildHeap(arr, k) {
  if (k === 1) return
  // 从最后一个非叶子结点开始，自上而下堆化
  for (let i = Math.floor(k / 2); i >= 1; i--) {
    heapify(arr, k, i)
  }
}
function heapify(arr, k, i) {
  // 自上而下堆化
  while (true) {
    let minIndex = i
    let j = 2 * i
    if (j <= k && arr[j] < arr[i]) {
      minIndex = j
    }
    if (j + 1 <= k && arr[j + 1] < arr[minIndex]) {
      minIndex = j + 1
    }
    if (minIndex !== i) {
      swap(arr, i, minIndex)
      i = minIndex
    } else {
      break;
    }
  }
}
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

// @lc code=end

