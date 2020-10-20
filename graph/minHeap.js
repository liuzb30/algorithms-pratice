class MinHeap {
  constructor() {
    this.mp = [];
    this.size = 0;
  }

  insert(item) {
    this.mp[++this.size] = item;
    this.swim(this.size);
  }

  delMin() {
    const min = this.mp[1];
    this.exch(1, this.size--);
    this.mp[this.size + 1] = null;
    this.sink(1);
    return min;
  }

  less(i, j) {
    return this.mp[i].cost > this.mp[j].cost;
  }
  exch(i, j) {
    const tmp = this.mp[i];
    this.mp[i] = this.mp[j];
    this.mp[j] = tmp;
  }

  swim(k) {
    let p = Math.floor(k / 2);
    while (k > 1 && this.less(p, k)) {
      this.exch(p, k);
      k = p;
      p = Math.floor(k / 2);
    }
  }

  sink(k) {
    let n = this.size;
    while (2 * k <= n) {
      let j = 2 * k;
      if (j < n && this.less(j, j + 1)) j++;
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

module.exports = MinHeap;
