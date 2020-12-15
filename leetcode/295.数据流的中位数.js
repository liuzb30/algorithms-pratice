/*
 * @lc app=leetcode.cn id=295 lang=javascript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.data = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let length = this.data.length;
  if (length === 0) {
    this.data.push(num);
  } else {
    let n = length - 1;
    while (n >= 0 && num < this.data[n]) {
      this.data[n + 1] = this.data[n];
      n--;
    }
    this.data[n + 1] = num;
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const length = this.data.length;
  if (length % 2 === 0) {
    let mid = length >> 1;
    const num1 = this.data[mid - 1];
    const num2 = this.data[mid];
    return (num1 + num2) / 2;
  } else {
    return this.data[length >> 1];
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
