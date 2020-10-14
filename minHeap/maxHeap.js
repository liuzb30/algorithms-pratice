class MaxHeap {
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
    let maxChildIndex = parentIndex * 2 + 1;
    const heap = this.heap;
    while (maxChildIndex <= m) {
      if (maxChildIndex < m && heap[maxChildIndex] < heap[maxChildIndex + 1]) {
        maxChildIndex = maxChildIndex + 1;
      }

      if (heap[parentIndex] >= heap[maxChildIndex]) {
        break;
      } else {
        const temp = heap[parentIndex];
        heap[parentIndex] = heap[maxChildIndex];
        heap[maxChildIndex] = temp;
        parentIndex = maxChildIndex;
        maxChildIndex = 2 * maxChildIndex + 1;
      }
    }
  }
  shifUp(start) {
    let childIndex = start;
    let parentIndex = Math.floor((childIndex - 1) / 2);
    const heap = this.heap;
    while (childIndex > 0) {
      if (heap[parentIndex] >= heap[childIndex]) {
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
  removeMax() {
    if (this.currSize <= 0) {
      return null;
    }

    let maxVal = this.heap[0];
    this.heap[0] = this.heap[this.currSize - 1];
    this.currSize--;
    this.shifDown(0, this.currSize - 1);
    this.heap.splice(this.currSize, 1);
    return maxVal;
  }
  getMax() {
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

const minHeap = new MaxHeap(20);
const arr = [53, 17, 78, 9, 45, 65, 87, 23];
minHeap.init(arr);

minHeap.print();
minHeap.insert(11);

minHeap.print();

minHeap.removeMax();
minHeap.print();
