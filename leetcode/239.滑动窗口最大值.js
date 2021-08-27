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
    let queue = []
    let res = []
    for (let i = 0; i < nums.length; i++) {
        // 判断值是否大于队尾的值
        while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
            queue.pop()
        }
        // 把索引放入队列
        queue.push(i)
        // 超出窗口，移出队列
        while (queue[0] <= i - k) queue.shift()
        // 把窗口的最大值放入结果列表
        if (i >= k - 1) res.push(nums[queue[0]])
    }
    return res
};
// @lc code=end

