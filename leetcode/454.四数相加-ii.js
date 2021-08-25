/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    const map = new Map()
    let count = 0
    for (const a of nums1) {
        for (const b of nums2) {
            const sum = a + b
            map.set(sum, (map.get(sum) || 0) + 1)
        }
    }
    for (const c of nums3) {
        for (const d of nums4) {
            const sum = 0 - c - d
            count += (map.get(sum) || 0)
        }
    }
    return count
};
// @lc code=end

