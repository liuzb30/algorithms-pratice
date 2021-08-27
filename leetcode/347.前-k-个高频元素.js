/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var topKFrequent = function (nums, k) {
//   let map = {};
//   nums.forEach((n) => (map[n] ? map[n]++ : (map[n] = 1)));
//   return Object.keys(map)
//     .sort((a, b) => map[b] - map[a])
//     .slice(0, k);
// };
var topKFrequent = function (nums, k) {
  let map = new Map(),
    heap = [,];
  nums.map((num) => {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  });

  // 如果元素数量小于等于 k
  if (map.size <= k) {
    return [...map.keys()];
  }

  // 如果元素数量大于 k，遍历map，构建小顶堆
  let i = 0;
  map.forEach((value, key) => {
    if (i < k) {
      // 取前k个建堆, 插入堆
      heap.push(key);
      // 原地建立前 k 堆
      if (i === k - 1) buildHeap(heap, map, k);
    } else if (map.get(heap[1]) < value) {
      // 替换并堆化
      heap[1] = key;
      // 自上而下式堆化第一个元素
      heapify(heap, map, k, 1);
    }
    i++;
  });
  // 删除heap中第一个元素
  heap.shift();
  return heap;
};

// 原地建堆，从后往前，自上而下式建小顶堆
let buildHeap = (heap, map, k) => {
  if (k === 1) return;
  // 从最后一个非叶子节点开始，自上而下式堆化
  for (let i = Math.floor(k / 2); i >= 1; i--) {
    heapify(heap, map, k, i);
  }
};

// 堆化
let heapify = (heap, map, k, i) => {
  // 自上而下式堆化
  while (true) {
    let min = i;
    if (2 * i <= k && map.get(heap[2 * i]) < map.get(heap[i])) {
      min = 2 * i;
    }
    if (2 * i + 1 <= k && map.get(heap[2 * i + 1]) < map.get(heap[min])) {
      min = 2 * i + 1;
    }
    if (min !== i) {
      [heap[i], heap[min]] = [heap[min], heap[i]]
      i = min;
    } else {
      break;
    }
  }
};

// @lc code=end
