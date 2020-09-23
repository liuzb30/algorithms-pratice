// Longest Substring Without Repeating Characters
// 题意：给定一个字符串，返回它最长的不包含重复的子串长度。例如，输入 abcabcbb 输出 3（对应 abc）

// 思路：

// * 首先 i, j 两个指针均指向字符串头部，如果没有重复字符，则 j 不断向右滑动，直到出现重复字符；
// *
// 如果出现了重复的字符，重复字符出现在第 str[j] 处，这时候开始移动指针 i，找到另一个重复的字读出现在 str[i] 处，
// 那么能保证 [0, i] 以及 [i, j] 子字符串是不重复的，更新临时结果为 Math.max(result, j - i)。

const lengthOfLongestSubString = (str) => {
  let len = str.length;
  let result = 0;
  //记录当前期间出现的字符
  let mapping = {};

  for (let i = 0, j = 0; ; i++) {
    // j 右移的过程
    while (j < len && !mapping[str[j]]) {
      mapping[str[j++]] = true;
    }
    result = Math.max(result, j - i);

    if (j >= len) {
      break;
    }
    // 出现了重复字符，i 开始进行右移的过程，同时将移出的字符在 mapping 中重置
    while (i < j && str[i] !== str[j]) {
      mapping[str[i++]] = false;
    }
    mapping[str[i]] = false;
  }

  return result;
};

console.log(lengthOfLongestSubString("bcdeafgabc"));
