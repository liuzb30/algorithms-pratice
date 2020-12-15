/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
/**
 * initialize your data structure here.
 */

class MinHeap {
  constructor(size) {
    this.heap = new Array(size);
    this.currSize = 0;
    this.maxSize = size;
  }
  init(arr) {
    this.maxSize = arr.length;
    this.currSize = this.maxSize;
    this.heap = new Array(arr.length);
    // 填充heap, 目前还不是一个堆
    for (var i = 0; i < this.currSize; i++) {
      this.heap[i] = arr[i];
    }

    let currPos = Math.floor((this.currSize - 2) / 2);

    while (currPos >= 0) {
      this.shifDown(currPos, this.currSize - 1);
      currPos -= 1;
    }
  }
  shifDown(start, m) {
    let parentIndex = start;
    let minChildIndex = parentIndex * 2 + 1;
    const heap = this.heap;
    while (minChildIndex <= m) {
      if (minChildIndex < m && heap[minChildIndex] > heap[minChildIndex + 1]) {
        minChildIndex = minChildIndex + 1;
      }

      if (heap[parentIndex] <= heap[minChildIndex]) {
        break;
      } else {
        const temp = heap[parentIndex];
        heap[parentIndex] = heap[minChildIndex];
        heap[minChildIndex] = temp;
        parentIndex = minChildIndex;
        minChildIndex = 2 * minChildIndex + 1;
      }
    }
  }
  shifUp(start) {
    let childIndex = start;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    const heap = this.heap;
    while (childIndex > 0) {
      if (heap[parentIndex] <= heap[childIndex]) {
        break;
      } else {
        const tmp = heap[childIndex];
        heap[childIndex] = heap[parentIndex];
        heap[parentIndex] = tmp;
        childIndex = parentIndex;
        parentIndex = Math.floor((parentIndex - 1) / 2);
      }
    }
  }
  insert(item) {
    if (this.currSize >= this.maxSize) {
      return false;
    }

    this.heap[this.currSize] = item;
    this.shifUp(this.currSize);
    this.currSize++;
    return true;
  }
  removeMin() {
    if (this.currSize <= 0) {
      return null;
    }

    let minVal = this.heap[0];
    this.heap[0] = this.heap[this.currSize - 1];
    this.currSize--;
    this.shifDown(0, this.currSize - 1);
    this.heap.splice(this.currSize, 1);
    return minVal;
  }
  getMin() {
    if (this.currSize > 0) {
      return this.heap[0];
    }
    return null;
  }
  print() {
    console.log(this.heap);
  }
  size() {
    return this.currSize;
  }
}

class MaxHeap {
  constructor(size) {
    this.heap = new Array(size);
    this.currSize = 0;
    this.maxSize = size;
  }
  init(arr) {
    this.maxSize = arr.length;
    this.currSize = this.maxSize;
    this.heap = new Array(arr.length);
    // 填充heap, 目前还不是一个堆
    for (var i = 0; i < this.currSize; i++) {
      this.heap[i] = arr[i];
    }

    let currPos = Math.floor((this.currSize - 2) / 2);

    while (currPos >= 0) {
      this.shifDown(currPos, this.currSize - 1);
      currPos -= 1;
    }
  }
  shifDown(start, m) {
    let parentIndex = start;
    let maxChildIndex = parentIndex * 2 + 1;
    const heap = this.heap;
    while (maxChildIndex <= m) {
      if (maxChildIndex < m && heap[maxChildIndex] < heap[maxChildIndex + 1]) {
        maxChildIndex = maxChildIndex + 1;
      }

      if (heap[parentIndex] >= heap[maxChildIndex]) {
        break;
      } else {
        const temp = heap[parentIndex];
        heap[parentIndex] = heap[maxChildIndex];
        heap[maxChildIndex] = temp;
        parentIndex = maxChildIndex;
        maxChildIndex = 2 * maxChildIndex + 1;
      }
    }
  }
  shifUp(start) {
    let childIndex = start;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    const heap = this.heap;
    while (childIndex > 0) {
      if (heap[parentIndex] >= heap[childIndex]) {
        break;
      } else {
        const tmp = heap[childIndex];
        heap[childIndex] = heap[parentIndex];
        heap[parentIndex] = tmp;
        childIndex = parentIndex;
        parentIndex = Math.floor((parentIndex - 1) / 2);
      }
    }
  }
  insert(item) {
    // if (this.currSize >= this.maxSize) {
    //   return false;
    // }

    this.heap[this.currSize] = item;
    this.shifUp(this.currSize);
    this.currSize++;
    return true;
  }
  removeMax() {
    if (this.currSize <= 0) {
      return null;
    }

    let maxVal = this.heap[0];
    this.heap[0] = this.heap[this.currSize - 1];
    this.currSize--;
    this.shifDown(0, this.currSize - 1);
    this.heap.splice(this.currSize, 1);
    return maxVal;
  }
  getMax() {
    if (this.currSize > 0) {
      return this.heap[0];
    }
    return null;
  }
  print() {
    console.log(this.heap);
  }
  size() {
    return this.currSize;
  }
}

var MedianFinder = function () {
  this.minHeap = new MinHeap();
  this.maxHeap = new MaxHeap();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (!this.maxHeap.size() || num < this.maxHeap.getMax()) {
    this.maxHeap.insert(num);
  } else {
    this.minHeap.insert(num);
  }
  //   比较大小顶堆是否保持平衡
  if (this.maxHeap.size() - this.minHeap.size() > 1) {
    this.minHeap.insert(this.maxHeap.removeMax());
  }
  if (this.minHeap.size() > this.maxHeap.size()) {
    this.maxHeap.insert(this.minHeap.removeMin());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let totalSize = this.maxHeap.size() + this.minHeap.size();
  if (totalSize % 2 === 0) {
    return (this.maxHeap.getMax() + this.minHeap.getMin()) / 2;
  } else {
    return this.maxHeap.getMax();
  }
};

// 堆排序思路
// 维护两个堆：
// 大顶堆：用来存储前n>>1个元素
// 小顶堆：用来存储后n/2个元素
// 那么，根据题目要求，中位数为
// n为奇数，中位数就是大顶堆的堆顶元素
// n为偶数，中位数就是大顶堆和小顶堆堆顶的平均数
// 具体思路：
// 如果插入元素比大顶堆的堆顶大，则插入到小顶堆；如果要小，则插入到大顶堆
// 当插入完成，如果大顶堆、小顶堆堆中的个数不满足要求，则要把一个堆顶的元素移到另一个堆中，知道满足要求

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
