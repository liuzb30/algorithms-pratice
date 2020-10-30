/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let sum = 0;
  let maxLeft = 0;
  let maxRight = 0;
  let left = 1;
  let right = height.length - 2;
  for (let i = 1; i < height.length; i++) {
    if (height[left - 1] < height[right + 1]) {
      maxLeft = Math.max(maxLeft, height[left - 1]);
      let min = maxLeft;
      if (min > height[left]) {
        sum = sum + (min - height[left]);
      }
      left++;
    } else {
      maxRight = Math.max(maxRight, height[right + 1]);
      let min = maxRight;
      if (min > height[right]) {
        sum = sum + (min - height[right]);
      }
      right--;
    }
  }
  return sum;
};
// var trap = function (height) {
//   let sum = 0;
//   let maxLeft = new Array(height.length).fill(-1);
//   let maxRight = new Array(height.length).fill(-1);
//   for (let i = 1; i < height.length - 1; i++) {
//     maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1]);
//   }
//   for (let i = height.length - 2; i >= 0; i--) {
//     maxRight[i] = Math.max(maxRight[i + 1], height[i + 1]);
//   }

//   for (let i = 1; i < height.length - 1; i++) {
//     // 找出两端最小的
//     let min = Math.min(maxLeft[i], maxRight[i]);
//     if (min > height[i]) {
//       sum = sum + min - height[i];
//     }
//   }
//   return sum;
// };
// var trap = function (height) {
//   let sum = 0;
//   let stack = new Stack();
//   let current = 0;
//   while (current < height.length) {
//     let item = height[current];
//     while (!stack.isEmpty() && item > height[stack.top()]) {
//       let h = height[stack.pop()];
//       if (stack.isEmpty()) {
//         break;
//       }
//       let min = Math.min(item, height[stack.top()]);
//       let distance = current - stack.top() - 1;
//       sum = sum + distance * (min - h);
//     }
//     stack.push(current);
//     current++;
//   }

//   return sum;
// };
// @lc code=end
