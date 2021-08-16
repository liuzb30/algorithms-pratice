/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 哈希表
// var threeSum = function (nums) {
//   let set = new Set()
//   let res = []
//   for (let i = 0; i < nums.length - 2; i++) {
//     let map = {}
//     for (let j = i + 1; j < nums.length; j++) {
//       if (map[nums[j]]) {
//         let arr = [nums[i], nums[j], 0 - nums[i] - nums[j]]
//         arr.sort()
//         set.add(arr.toString())
//       } else {
//         map[0 - nums[i] - nums[j]] = 1
//       }
//     }
//   }
//   set.forEach(item => res.push(item.split(',')))
//   return res
// }
// 双指针
var threeSum = function (nums) {
  // 排序
  nums.sort((a, b) => a - b)
  let res = []
  const len = nums.length
  for (let i = 0; i < len - 2; i++) {
    if (i >= 1 && nums[i] === nums[i - 1]) continue;
    let l = i + 1, r = len - 1
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r]
      if (nums[i] > 0) break;
      if (sum < 0) l++
      else if (sum > 0) r--
      else {
        res.push([nums[i], nums[l], nums[r]])
        // 去重
        while (l < r && nums[l] === nums[++l]) { }
        while (l < r && nums[r] === nums[--r]) { }
      }
    }
  }
  return res
}
// @lc code=end
