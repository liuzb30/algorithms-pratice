// 爬楼梯题目：假设我们需要爬一个楼梯，这个楼梯一共有 N 阶，可以一步跨越 1 个或者 2 个台阶，那么爬完楼梯一共有多少种方式？
// 示例：输入 2（标注 N = 2，一共是 2 级台阶）；
// 输出：2 （爬完一共两种方法：一次跨两阶 + 分两次走完，一次走一阶）
// 示例：输入 3；输出 3（1 阶 + 1 阶 + 1 阶；1 阶 + 2 阶；2 阶 + 1 阶）
// 思路：最直接的想法其实类似 Fibonacci 数列，使用递归比较简单。比如我们爬 N 个台阶，其实就是爬 N － 1 个台阶的方法数 + 爬 N － 2 个台阶的方法数。

// const climbing = (n) => {
//   if (n === 1) return 1;
//   if (n === 2) return 2;
//   return climbing(n - 1) + climbing(n - 2);
// };

// 优化1 减少循环计算
// const climbing = (n) => {
//   const arr = [];
//   const step = (n) => {
//     if (n === 1) return 1;
//     if (n === 2) return 2;
//     if (arr[n] > 0) return arr[n];
//     arr[n] = step(n - 1) + step(n - 2);
//     return arr[n];
//   };
//   return step(n);
// };

//用循环替代递归
const climbing = (n) => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let arr = [0, 1, 2];
  for (var i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};

console.log(climbing(5));
console.log(climbing(3));
console.log(climbing(4));
