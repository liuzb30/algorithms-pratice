class MinHeap {
  constructor(size) {
    this.heap = new Array(size);
    this.currSize = 0;
    this.maxSize = size;
  }
  init(arr) {
    this.maxSize = arr.length;
    this.currSize = this.maxSize;
    this.heap = new Array(arr.length);
    // 填充heap, 目前还不是一个堆
    for (var i = 0; i < this.currSize; i++) {
      this.heap[i] = arr[i];
    }

    let currPos = Math.floor((this.currSize - 2) / 2);

    while (currPos >= 0) {
      this.shifDown(currPos, this.currSize - 1);
      currPos -= 1;
    }
  }
  shifDown(start, m) {
    let parentIndex = start;
    let minChildIndex = parentIndex * 2 + 1;
    const heap = this.heap;
    while (minChildIndex <= m) {
      if (minChildIndex < m && heap[minChildIndex] > heap[minChildIndex + 1]) {
        minChildIndex = minChildIndex + 1;
      }

      if (heap[parentIndex] <= heap[minChildIndex]) {
        break;
      } else {
        const temp = heap[parentIndex];
        heap[parentIndex] = heap[minChildIndex];
        heap[minChildIndex] = temp;
        parentIndex = minChildIndex;
        minChildIndex = 2 * minChildIndex + 1;
      }
    }
  }
  shifUp(start) {
    let childIndex = start;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    const heap = this.heap;
    while (childIndex > 0) {
      if (heap[parentIndex] <= heap[childIndex]) {
        break;
      } else {
        const tmp = heap[childIndex];
        heap[childIndex] = heap[parentIndex];
        heap[parentIndex] = tmp;
        childIndex = parentIndex;
        parentIndex = Math.floor((parentIndex - 1) / 2);
      }
    }
  }
  insert(item) {
    // if (this.currSize >= this.maxSize) {
    //   return false;
    // }

    this.heap[this.currSize] = item;
    this.shifUp(this.currSize);
    this.currSize++;
    return true;
  }
  removeMin() {
    if (this.currSize <= 0) {
      return null;
    }

    let minVal = this.heap[0];
    this.heap[0] = this.heap[this.currSize - 1];
    this.currSize--;
    this.shifDown(0, this.currSize - 1);
    this.heap.splice(this.currSize, 1);
    return minVal;
  }
  getMin() {
    if (this.currSize > 0) {
      return this.heap[0];
    }
    return null;
  }
  print() {
    console.log(this.heap);
  }
  size() {
    return this.currSize;
  }
}

// const minHeap = new MinHeap(20);
// const arr = [53, 17, 78, 9, 45, 65, 87, 23];
// minHeap.init(arr);

// minHeap.print();
// minHeap.insert(11);

// minHeap.print();

// minHeap.removeMin();
// minHeap.print();

module.exports = MinHeap;

// var arr = [53, 17, 78, 9, 45, 65, 87, 23];
// var min_heap = new MinHeap(8);

// for (var i = 0; i < arr.length; i++) {
//   min_heap.insert(arr[i]);
// }

// var sort_arr = [];
// for (var i = 0; i < arr.length; i++) {
//   sort_arr.push(min_heap.removeMin());
// }

// console.log(sort_arr);

var arr = [53, 17, 78, 9, 45, 65, 87, 23];
var min_heap = new MinHeap(3);

for (var i = 0; i < 3; i++) {
  min_heap.insert(arr[i]);
}

for (var i = 3; i < arr.length; i++) {
  var item = arr[i];
  if (item > min_heap.getMin()) {
    min_heap.removeMin();
    min_heap.insert(item);
  }
}

min_heap.print();
