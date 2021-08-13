/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function (nums, k) {
    if (nums.length === 0 || !k) return []
    let q = [], len = nums.length, r = new Int16Array(len - k + 1)
    for (let i = 0; i < len; i++) {
        // 判断队首是否超出窗口
        if (q[0] !== undefined && q[0] <= i - k) q.shift()
        // 把小于当前值的队尾元素删除
        while (nums[q[q.length - 1]] <= nums[i]) q.pop()
        q.push(i)
        r[i - k + 1] = nums[q[0]]
    }
    return r

};
// @lc code=end

