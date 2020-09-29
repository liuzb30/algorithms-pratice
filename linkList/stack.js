const LinkList = require("./linkList");

class Stack {
  constructor() {
    this.linkList = new LinkList();
  }

  push(item) {
    this.linkList.append(item);
  }
  pop() {
    return this.linkList.removeTail();
  }

  top() {
    return this.linkList.tail();
  }
  size() {
    return this.linkList.length();
  }
  isEmpty() {
    return this.linkList.isEmpty();
  }
  clear() {
    this.linkList.clear();
  }
}
