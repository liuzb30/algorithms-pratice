function DoubleLinkList() {
  // 定义节点
  var Node = function (data) {
    this.data = data; // 数据
    this.next = null; // 后继指针
    this.pre = null; // 前驱指针
  };

  var length = 0; // 长度
  var head = null; // 头节点
  var tail = null; // 尾节点

  this.append = function (data) {
    // 在这里实现append方法
    let newNode = new Node(data);
    if (!head) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      newNode.pre = tail;
      tail = newNode;
    }
    length++;
    return true;
  };

  this.insert = function (index, data) {
    // 在这里实现insert方法
    if (index < 0 || index > length) {
      return false;
    } else if (index === length) {
      this.append(data);
    } else {
      const newNode = new Node(data);
      if (index === 0) {
        head.pre = newNode;
        newNode.next = head;
        head = newNode;
      } else {
        const preNode = this.get(index - 1);
        const nextNode = preNode.next;
        preNode.next = newNode;
        nextNode.pre = newNode;
        newNode.pre = preNode;
        newNode.next = nextNode;
      }
      length++;
      return true;
    }
  };

  this.get = function (index) {
    if (index < 0 || index > length) {
      return null;
    } else {
      let currNode = head;
      while (index-- > 0) {
        currNode = currNode.next;
      }
      return currNode;
    }
  };

  this.remove = function (index) {
    // 在这里实现remove方法
    if (index < 0 || index > length) {
      return null;
    } else {
      let delNode = null;
      if (index === 0) {
        head = head.newNode;
        head.pre = null;
      } else {
        delNode = this.get(index);
        delNode.pre.next = delNode.next;
        if (delNode.next === null) {
          tail = delNode.pre;
        } else {
          delNode.next.pre = delNode.pre;
        }
      }
      length--;
      delNode.next = null;
      return delNode.data;
    }
  };
  //   打印整个链表
  this.print = function () {
    let currentNode = head;
    let strLink = "";
    while (currentNode) {
      strLink += currentNode.data + "->";
      currentNode = currentNode.next;
    }
    strLink += "null";
    console.log(strLink);
    console.log("长度为" + length.toString());
  };
}
const linkList = new DoubleLinkList();
linkList.append(1);
linkList.append(2);
linkList.append(4);
linkList.append(3);

linkList.insert(2, 6);
linkList.print();

linkList.remove(3);
linkList.print();

console.log(linkList.get(2).data);
