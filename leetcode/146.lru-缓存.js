/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.cacheMap = new Map()
    this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.cacheMap.has(key)) {
        const value = this.cacheMap.get(key)
        this.cacheMap.delete(key)
        this.cacheMap.set(key, value)
        return value
    }
    return -1
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.cacheMap.has(key)) this.cacheMap.delete(key)
    this.cacheMap.set(key, value)
    if (this.cacheMap.size > this.capacity) {
        this.cacheMap.delete(this.cacheMap.keys().next().value)
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

