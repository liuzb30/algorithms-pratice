/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  // 找到非空字符
  let i = 0;
  let result = "";
  while (s[i] === " ") {
    i++;
  }
  // 如果不存在或是英文字母则返回0
  if (s[i] == undefined || /[a-zA-Z]/.test(s[i])) {
    return 0;
  } else if (s[i] === "-") {
    // 判断正负
    i++;
    result = "-";
  } else if (s[i] === "+") {
    i++;
  }
  while (/\d/.test(s[i])) {
    result += s[i];
    i++;
  }
  if (result === "" || result === "-") {
    return 0;
  }
  //   result = Number(result);

  return result < -2147483648
    ? -2147483648
    : result > 2147483647
    ? 2147483647
    : result;
};

// 正则
var myAtoi = function (s) {
  const INT_MAX = 2147483647;
  const INT_MIN = -2147483648;
  // 去除左边的空格
  const re = new RegExp(/^(-|\+)?\d+/);
  const str = s.trim().match(re);
  const res = str ? Number(str[0]) : 0;
  return res > 0 ? Math.min(res, INT_MAX) : Math.max(res, INT_MIN);
};

// @lc code=end
