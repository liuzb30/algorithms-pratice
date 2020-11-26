/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 确定问题是哪种类型？
// 动态规划类型要符合最优子结构，要符合最优子结构，子问题间必须相互独立
// 确定了是动态规划问题，思考如何列出正确的状态
// 确定base  目标金额为0，返回0，金额小于0，返回-1
// 确定状态 也就是原问题和子问题会变化的变量 amount
// 确定选择 导致状态变化的行为 所有硬笔的面值会导致金额的变化
// 明确 dp函数和数组的定义
// dp 函数的参数就是状态转移中会变化的变量，也就是状态。
// dp函数的定义 输入一个目标金额，返回凑出目标金额的最少硬币数

// 列出伪代码
// var coinChange = function (coins, amount) {
//     // 定义 输入一个目标金额，返回凑出目标金额的最少硬币数
//     function dp(n){
//         // 做选择，选择需要硬币最少的结果
//         for(let i = 0; i < coins.length; i++){
//             res = min(res, dp(n-coins[i]))
//         }
//         return res
//     }
//     // 返回最终结果
//     return dp(amount)
// }

var coinChange = function (coins, amount) {
  let memo = {};
  function dp(n) {
    if (memo[n]) return memo[n];
    if (n === 0) return 0;
    if (n < 0) return -1;
    let res = Infinity;
    for (let i = 0; i < coins.length; i++) {
      let subProblem = dp(n - coins[i]);
      if (subProblem === -1) continue;
      res = Math.min(res, 1 + subProblem);
    }
    memo[n] = res === Infinity ? -1 : res;
    return memo[n];
  }
  return dp(amount);
};
// 迭代
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      let coin = coins[j];
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end
