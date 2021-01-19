/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  return [findIndex(), findLastIndex()];
  // 用二分查找法找出目标值的位置
  function findIndex() {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] > target) {
        end = mid - 1;
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    if (start >= nums.length || nums[start] !== target) {
      return -1;
    } else {
      return start;
    }
  }
  function findLastIndex() {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (nums[mid] > target) {
        end = mid - 1;
      } else if (nums[mid] < target) {
        start = mid + 1;
      } else {
        start = mid + 1;
      }
    }
    if (end < 0 || nums[end] !== target) {
      return -1;
    } else {
      return end;
    }
  }
};
// @lc code=end
