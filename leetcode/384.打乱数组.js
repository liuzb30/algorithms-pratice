/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.data = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.data
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    // 打乱数组需要满足两个要素
    // 1. 随机的结果要能够覆盖所有的情况，（譬如 n个数，最后的结果有 n! 情况，结果所有顺序必须都能够出现）
    // 2. 所有出现的结果 概率 相等
    // Fisher-Yates 洗牌算法
    const data = [...this.data]
    const n = data.length
    for(let i=n-1;i>=0;i--){
        // 从未处理的数据中随机一个，然后交换
        const random = Math.floor(Math.random() * (i+1))
        swap(data,i,random)
    }
    return data
};

function swap(arr,i,j){
    [arr[i],arr[j]] = [arr[j],arr[i]]
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end

