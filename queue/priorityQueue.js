class MaxHeap {
    constructor(arr = [], compare = null) {
        this.data = arr
        this.size = arr.length
        this.compare = compare || ((a, b) => a - b >= 0)
    }
    getSize() {
        return this.size
    }
    isEmpty() {
        return this.size === 0
    }
    // 增加元素
    add(value) {
        this.data.push(value)
        this.size++
        this._shiftUp(this.size - 1)
    }
    // 找到优先级最高的元素
    findMax() {
        if (this.size === 0) return;
        return this.data[0]
    }
    // 移除堆顶
    extractMax() {
        // 保存队首元素
        const max = this.findMax()
        // 让队首元素和队尾元素交换
        this._swap(0, this.getSize() - 1)
        this.data.pop()
        this.size--
        this._shiftDown(0)
        return max
    }
    _swap(i, j) {
        [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
    }
    _getParentIndex(i) {
        return Math.floor((i - 1) / 2)
    }
    _getLeftChildIndex(i) {
        return 2 * i + 1
    }
    _getRightChildIndex(i) {
        return 2 * (i + 1)
    }
    // 上浮
    _shiftUp(k) {
        let parentIndex = this._getParentIndex(k)
        while (k > 0 && this.compare(this.data[k], this.data[parentIndex])) {
            this._swap(k, parentIndex)
            k = parentIndex
            parentIndex = this._getParentIndex(k)
        }
    }
    // 下沉
    _shiftDown(k) {
        while (this._getLeftChildIndex(k) < this.size) {
            let j = this._getLeftChildIndex(k)
            // 存在右孩子，而且右孩子比左孩子大
            if (j + 1 < this.size && this.compare(this.data[j + 1], this.data[j])) {
                j++
            }
            if (this.compare(this.data[k], this.data[j])) return
            // 父节点比子节点小，交换位置
            this._swap(k, j)
            // 继续下沉
            k = j
        }
    }
}

class PriorityQueue {
    constructor(max, compare) {
        this.max = max
        this.compare = compare
        this.maxHeap = new MaxHeap([], compare)
    }
    getSize() {
        return this.maxHeap.getSize()
    }
    isEmpty() {
        return this.maxHeap.isEmpty()
    }
    getFront() {
        return this.maxHeap.findMax()
    }
    enqueue(val) {
        if (this.getSize() === this.max) {
            if (this.compare(val, this.getFront())) return
            this.dequeue()
        }
        return this.maxHeap.add(val)
    }
    dequeue() {
        if (this.getSize() === 0) return null
        return this.maxHeap.extractMax()
    }
}

module.exports = PriorityQueue

let pq = new PriorityQueue(3);
pq.enqueue(1);
pq.enqueue(333);
console.log(pq.dequeue());
console.log(pq.dequeue());
pq.enqueue(3);
pq.enqueue(6);
pq.enqueue(62);
console.log(pq.dequeue());
console.log(pq.dequeue());
console.log(pq.dequeue());