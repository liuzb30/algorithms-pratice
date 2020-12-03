class MaxHeap {
  constructor() {
    this.mp = [];
    this.size = 0;
  }

  insert(item) {
    this.mp[++this.size] = item;
    this.swim(this.size);
  }

  delMax() {
    // 获取最大值
    const max = this.mp[1];
    // 把第一个和最后一个交换
    this.exch(1, this.size);
    this.mp[this.size--] = null;
    // 把第一个下沉
    this.sink(1);
    return max;
  }

  less(i, j) {
    return this.mp[i] < this.mp[j];
  }
  exch(i, j) {
    [this.mp[i], this.mp[j]] = [this.mp[j], this.mp[i]];
  }

  swim(k) {
    let p = k >> 1;
    // 当k>1且父节点小于当前节点，才做交换
    while (k > 1 && this.less(p, k)) {
      this.exch(p, k);
      k = p;
      p = k >> 1;
    }
  }

  sink(k) {
    let n = this.size;
    while (2 * k < n) {
      let j = 2 * k;
      if (j < n && this.less(j, j + 1)) j++;
      // 如果当前节点比子节点大，跳出循环
      if (!this.less(k, j)) break;
      this.exch(k, j);
      k = j;
    }
  }
  init(arr) {
    arr.forEach((item) => {
      this.insert(item);
    });
  }
  print() {
    console.log(this.mp);
  }
  isEmpty() {
    return this.size === 0;
  }
  size() {
    return this.size;
  }
}

const minHeap = new MaxHeap();
const arr = [53, 17, 78, 9, 45, 65, 87, 23];
minHeap.init(arr);

minHeap.print();
minHeap.insert(11);

minHeap.print();

minHeap.delMax();
minHeap.print();
