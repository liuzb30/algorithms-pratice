class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(data) {
    // 创建一个节点
    let node = new Node(data);
    // 判断链表是否为空
    if (!this.head) {
      this.head = node;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.length++;
  }

  removeAt(index) {
    if (index > this.length - 1 || index < 0) {
      return null;
    }

    let cur = this.head;
    let count = 0;
    if (index === 0) {
      this.head = cur.next;
      return cur;
    }
    while (cur) {
      if (count === index - 1) {
        let tmp = cur.next;
        cur.next = tmp ? tmp.next : null;
        return tmp;
      }
      cur = cur.next;
      count++;
    }
    return null;
  }

  delete(data) {
    if (!this.head) {
      return null;
    }
    let cur = this.head;
    let pre = null;
    while (cur) {
      if (cur.data == data) {
        if (pre == null) {
          this.head = cur.next;
        } else {
          pre.next = cur.next;
        }
        return cur.data;
      }
      pre = cur;
      cur = cur.next;
    }
    return null;
  }

  print() {
    let cur = this.head;
    let ret = [];
    while (cur) {
      ret.push(cur.data);
      cur = cur.next;
    }
    return ret.join("==>");
  }
}

const linkList = new LinkList();

linkList.append("1");
linkList.append("2");
linkList.append("3");

// console.log(linkList.delete("4"));
// console.log(linkList.delete("2"));
linkList.removeAt(0);
linkList.removeAt(2);

console.log(linkList.print());
