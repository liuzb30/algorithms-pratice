/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let res = []
    // 对数组排序
    nums.sort((a, b) => a - b)
    const len = nums.length
    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let l = j + 1, r = len - 1
            while (l < r) {
                let sum = nums[i] + nums[j] + nums[l] + nums[r]

                if (sum < target) l++
                else if (sum > target) r--
                else {
                    res.push([nums[i], nums[j], nums[l], nums[r]])
                    while (l < r && nums[l] === nums[++l]) { }
                    while (l < r && nums[r] === nums[--r]) { }
                }
            }
        }
    }
    console.log(res);
    return res
};
// @lc code=end

