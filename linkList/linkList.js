class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  //   添加一个新的元素
  append(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return true;
  }
  //   在指定位置插入一个元素
  insert(index, data) {
    if (index === this.length) {
      return this.append(data);
    } else if (index > this.length || index < 0) {
      return false;
    } else {
      const newNode = new Node(data);
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        const preNode = this.get(index - 1);
        newNode.next = preNode.next;
        preNode.next = newNode;
      }
      this.length++;
      return true;
    }
  }
  //   删除指定位置的节点
  remove(index) {
    if (index < 0 || index >= length) {
      return null;
    } else {
      let delNode = null;
      //   删除头结点
      if (index === 0) {
        delNode = this.head;
        this.head = this.head.next;
        //   如果head==null说明链表只有一个节点
        if (!this.head) {
          this.tail = null;
        }
      } else {
        const preNode = this.get(index - 1);
        delNode = preNode.next;
        preNode.next = preNode.next.next;
        if (delNode.next === null) {
          this.tail = preNode;
        }
      }
      this.length--;
      delNode.next = null;
      return delNode.data;
    }
  }
  //   删除首节点
  removeHead() {
    this.remove(0);
  }
  //   删除尾节点
  removeTail() {
    this.remove(this.length - 1);
  }
  //   返回指定元素的索引
  indexOf(data) {
    let index = -1;
    let currentNode = this.head;
    while (currentNode) {
      index++;
      if (currentNode.data === data) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }
  //   返回指定索引位置的元素
  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }
    let currentNode = this.head;
    let nodeIndex = index;
    while (nodeIndex-- > 0) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  //   返回首节点
  head() {
    return this.head;
  }
  //   返回尾节点
  tail() {
    return this.tail;
  }
  //   返回链表长度
  length() {
    return this.length;
  }
  //   判断链表是否为空
  isEmpty() {
    return this.length === 0;
  }
  //   清空链表
  clear() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  //   打印整个链表
  print() {
    let currentNode = this.head;
    let strLink = "";
    while (currentNode) {
      strLink += currentNode.data + "->";
      currentNode = currentNode.next;
    }
    strLink += "null";
    console.log(strLink);
    console.log("长度为" + this.length.toString());
  }
}

const linkList = new LinkList();
linkList.append(1);
linkList.append(2);
linkList.print();

module.exports = LinkList;
