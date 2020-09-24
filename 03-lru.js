// leetcode：LRU 缓存机制
// 运用你所掌握的数据结构，设计和实现一个 LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和写入数据 put 。

// 获取数据 get(key) - 如果密钥 ( key ) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1 。
// 写入数据 put(key, value) - 如果密钥不存在，则写入数据。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据，从而为新数据留出空间。

// 进阶:
// 你是否可以在 O(1) 时间复杂度内完成这两种操作？

// 1.实现缓存
// 2.实现最大值限制
// 3.实现插入顺序

function removeKey(arr, key) {
  const index = arr.indexOf(key);
  if (index > -1) {
    return arr.splice(index, 1);
  }
}

function removeCache(cache, keys, key) {
  cache[key] = null;
  removeKey(keys, key);
}

// class LRUCache {
//   constructor(capacity) {
//     this.keys = [];
//     this.cache = Object.create(null);
//     this.capacity = capacity;
//   }

//   put(key, value) {
//     const { keys, cache, capacity } = this;
//     if (cache[key]) {
//       cache[key] = value;
//       // 更换key位置
//       removeKey(keys, key);
//       keys.push(key);
//     } else {
//       cache[key] = value;
//       keys.push(key);
//       if (keys.length > capacity) {
//         removeCache(cache, keys, keys[0]);
//       }
//     }
//   }

//   get(key) {
//     if (this.cache[key]) {
//       // 更换key位置
//       removeKey(this.keys, key);
//       this.keys.push(key);
//       return this.cache[key];
//     }
//     return -1;
//   }
// }

// Map 能记住key插入的顺序
class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else {
      if (this.cache.size >= this.capacity) {
        this.cache.delete(this.cache.keys().next().value);
      }
    }
    this.cache.set(key, value);
  }

  get(key) {
    if (this.cache.has(key)) {
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    return -1;
  }
}

const cache = new LRUCache(2 /* 缓存容量 */);

cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1)); // 返回  1
cache.put(3, 3); // 该操作会使得密钥 2 作废
console.log(cache.get(2)); // 返回 -1 (未找到)
cache.put(4, 4); // 该操作会使得密钥 1 作废
console.log(cache.get(1)); // 返回 -1 (未找到)
console.log(cache.get(3)); // 返回  3
console.log(cache.get(4)); // 返回  4
