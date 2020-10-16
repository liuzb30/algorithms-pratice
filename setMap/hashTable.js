const LinkList = require("./linkList");

class HashTable {
  constructor() {
    this.items = []; // 存储数据
    this.divisor = 7; // 除数
    this.keyCount = 0; // key的数量
  }

  init(size) {
    function isPrime(number) {
      for (let i = 2; i < number; i++) {
        if (number % 2 === 0) {
          return false;
        }
      }
      return true;
    }
    this.items = new Array(size);
    for (let i = 0; i < size; i++) {
      this.items[i] = new LinkList.LinkList();
    }
    let temp = size;
    while (temp > 2) {
      if (isPrime(temp)) {
        this.divisor = temp;
        break;
      }
      temp--;
    }
  }

  getIndex(key) {
    const tmpKey = key.toString();
    const hashValue = Math.abs(murmurhash3_32_gc(tmpKey, 0));
    return hashValue % this.divisor;
  }

  set(key, value) {
    const index = this.getIndex(key);
    const node = this.items[index].search(key);
    if (node) {
      node.value = value;
    } else {
      this.items[index].append(key, value);
      this.keyCount++;
    }
    // 如果过于拥挤就扩容
    if (this.isTooCrowd()) {
      this.expend();
    }
  }

  get(key) {
    const idnex = this.getIndex(key);
    const node = this.items[index].search(key);
    if (node) {
      return node.value;
    }
    return null;
  }

  delKey(key) {
    const index = this.getIndex(key);
    const res = this.items[index].removeKey(key);
    if (res) {
      this.keyCount--;
    }
    return res;
  }

  hasKey(key) {
    const index = this.getIndex(key);
    const node = this.items[index].search(key);
    return node ? true : false;
  }

  isTooCrowd() {
    if (Math.floor(this.keyCount / this.divisor) >= 5) {
      return true;
    }
    return false;
  }

  setDivisor() {
    // 设置除数
    let temp = this.items.length;
    while (temp > 2) {
      if (isPrime(temp)) {
        this.divisor = temp;
        break;
      }
      temp--;
    }
  }

  expend() {
    let tempArr = [...this.items];
    //   初始化items
    this.items = new Array(this.items.length * 2);
    this.items.forEach((item) => {
      item = new LinkList.LinkList();
    });

    this.setDivisor();

    // 把临时数据导入到items
    tempArr.forEach((item) => {
      let currNode = item.get_head();
      while (currNode) {
        this.set(currNode.key, currNode.value);
        currNode = currNode.next;
      }
    });
  }
}
