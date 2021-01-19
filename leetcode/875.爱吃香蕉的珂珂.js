/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function (piles, H) {
  // 用二分查找法
  // 首先获计算每堆香蕉中最大的值max
  // 最小值low为1， 最大值为max
  // 取中间值mid，计算该速度需要消耗的时间t
  // 如果t>H，说明值太小了，low = mid + 1
  // 否则max = mid - 1
  // 直到low不小于max，循环结束
  let low = 1;
  let high = Math.pow(10, 9);
  let mid;
  while (low < high) {
    mid = (low + high) >> 1;
    if (calTime(piles, mid) > H) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
};

function calTime(piles, n) {
  let times = 0;
  for (let pile of piles) {
    times += Math.ceil(pile / n);
  }
  return times;
}
// @lc code=end
