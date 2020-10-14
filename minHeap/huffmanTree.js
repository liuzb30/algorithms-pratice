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
    return this.mp[i].data.rate > this.mp[j].data.rate;
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

class CodeNode {
  constructor(code, rate) {
    this.code = code;
    this.rate = rate;
  }
}

class TreeNode {
  constructor(data) {
    this.data = data;
    this.lefChild = null;
    this.rightChild = null;
    this.parent = null;
  }
}

class HuffmanTree {
  constructor() {
    this.root = null;
  }

  initTree(arr) {
    const minHeap = new MinHeap();
    minHeap.init(arr);
    let count = arr.length - 1;
    //   循环n-1次
    while (count > 0) {
      const first = minHeap.delMin();
      const second = minHeap.delMin();
      const newItem = new CodeNode("", first.data.rate + second.data.rate);
      const newTree = new TreeNode(newItem);
      newTree.lefChild = first;
      newTree.rightChild = second;
      first.parent = newTree;
      second.parent = newTree;
      minHeap.insert(newTree);
      this.root = newTree;
      count--;
    }
  }

  getCode() {
    function getCodeFromTree(node, dict, codeStr) {
      if (!node.lefChild && !node.rightChild) {
        dict[node.data.code] = codeStr;
        return;
      }
      if (node.lefChild) {
        getCodeFromTree(node.lefChild, dict, codeStr + "0");
      }
      if (node.rightChild) {
        getCodeFromTree(node.rightChild, dict, codeStr + "1");
      }
    }

    const codeDict = {};
    getCodeFromTree(this.root, codeDict, "");
    return codeDict;
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

// 准备数据
var codeDict = {
  a: 0.12,
  b: 0.4,
  c: 0.15,
  d: 0.08,
  e: 0.25,
};
var forest = [];

for (var key in codeDict) {
  var item = new CodeNode(key, codeDict[key]);
  forest.push(new TreeNode(item));
}

var huffmanTree = new HuffmanTree();
huffmanTree.initTree(forest);
console.log(huffmanTree.getCode());
