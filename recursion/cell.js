// 细胞分裂 有一个细胞 每一个小时分裂一次，一次分裂一个子细胞，第三个小时后会死亡。那么n个小时候有多少细胞？

function cell(n) {
  return aCell(n) + bCell(n) + cCell(n);
}

function aCell(n) {
  if (n == 1) {
    return 1;
  }
  return aCell(n - 1) + bCell(n - 1) + cCell(n - 1);
}

function bCell(n) {
  if (n == 1) {
    return 0;
  }
  return aCell(n - 1);
}

function cCell(n) {
  if (n == 1 || n == 2) {
    return 0;
  }
  return bCell(n - 1);
}

console.log(cell(4));
