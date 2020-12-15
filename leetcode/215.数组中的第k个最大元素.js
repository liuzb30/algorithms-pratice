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
//  var findKthLargest = function(nums, k) {
//     return nums.sort()[nums.length-k]
// };
// 解法二：小顶堆
let findKthLargest = function(nums, k) {
    // 从 nums 中取出前 k 个数，构建一个小顶堆
    let heap = [,], i = 0
    while(i < k) {
       heap.push(nums[i++]) 
    }
    buildHeap(heap, k)
    
    // 从 k 位开始遍历数组
    for(let i = k; i < nums.length; i++) {
        if(heap[1] < nums[i]) {
            // 替换并堆化
            heap[1] = nums[i]
            heapify(heap, k, 1)
        }
    }
    
    // 返回堆顶元素
    return heap[1]
};

// 原地建堆，从后往前，自上而下式建小顶堆
let buildHeap = (arr, k) => {
    if(k === 1) return
    // 从最后一个非叶子节点开始，自上而下式堆化
    for(let i = Math.floor(k/2); i>=1 ; i--) {
        heapify(arr, k, i)
    }
}

// 堆化
let heapify = (arr, k, i) => {
    // 自上而下式堆化
    while(true) {
        let minIndex = i
        if(2*i <= k && arr[2*i] < arr[i]) {
            minIndex = 2*i
        }
        if(2*i+1 <= k && arr[2*i+1] < arr[minIndex]) {
            minIndex = 2*i+1
        }
        if(minIndex !== i) {
            swap(arr, i, minIndex)
            i = minIndex
        } else {
            break
        }
    }
}

// 交换
let swap = (arr, i , j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
// 解法三：快速选择
let quickSort = (arr) => {
    quick(arr, 0 , arr.length - 1)
  }
  
  let quick = (arr, left, right) => {
    let index
    if(left < right) {
      // 划分数组
      index = partition(arr, left, right)
      if(left < index - 1) {
        quick(arr, left, index - 1)
      }
      if(index < right) {
        quick(arr, index, right)
      }
    }
  }
  
  // 一次快排
  let partition = (arr, left, right) => {
    // 取中间项为基准
    var datum = arr[Math.floor(Math.random() * (right - left + 1)) + left],
        i = left,
        j = right
    // 开始调整
    while(i <= j) {
      
      // 左指针右移
      while(arr[i] < datum) {
        i++
      }
      
      // 右指针左移
      while(arr[j] > datum) {
        j--
      }
      
      // 交换
      if(i <= j) {
        swap(arr, i, j)
        i += 1
        j -= 1
      }
    }
    return i
  }
  
  // 交换
  let swap = (arr, i , j) => {
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
  }
  
  // 测试
  let arr = [1, 3, 2, 5, 4]
  quickSort(arr)
  console.log(arr) // [1, 2, 3, 4, 5]
  // 第 2 个最大值
  console.log(arr[arr.length - 2])  // 4
// @lc code=end

