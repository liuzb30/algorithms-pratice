class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class List {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getList() {
    return this.head;
  }
  search(element) {
    // 思路：遍历链表，判断节点值是否等于待查找值，相等则返回true，否则继续遍历下一个节点，知道遍历完整个列表还未找到，则返回false
    // 边界：当列表为null，直接返回false
    if (!this.head) {
      return false;
    } else {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.element === element) {
          return true;
        }
        currentNode = currentNode.next;
      }
      return false;
    }
  }
  append(element) {
    // 思路：初始化一个节点，遍历到链尾，在尾节点插入该节点
    // 边界条件：当链表为null，直接将head指向待插入节点，不需要遍历
    let node = new Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      let p = this.head;
      while (p.next) {
        p = p.next;
      }
      p.next = node;
    }
    this.length++;
  }
  insert(position, element) {
    // 思路：初始化一个节点，遍历链表到position前一个位置，插入该节点
    // 边界：position<0或者大于length则返回null，链表为null，position为0则把节点赋值给head
    if (position < 0 || position > this.length) {
      return null;
    } else {
      const node = new Node(element);
      if (position === 0) {
        node.next = this.head;
        this.head = node;
        return;
      }
      let currentNode = this.head;
      let index = 0;
      while (index < position - 1) {
        currentNode = currentNode.next;
        index++;
      }
      node.next = currentNode.next;
      currentNode.next = node;
    }
  }
  remove(element) {
    // 思路：遍历节点，找到带删除节点，删除
    // 边界：链表为null时，直接返回
    if (!this.head) return;
    if (this.head.element === element) {
      this.head = this.head.next;
      return;
    }
    let prevNode = this.head,
      currNode = this.head;
    while (currNode) {
      if (currNode.element === element) {
        currNode = currNode.next;
        prevNode.next = currNode;
      } else {
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
  }
  print() {
    let p = this.head;
    while (p) {
      console.log(p.element);
      p = p.next;
    }
  }
  isEmpty() {
    return this.length === 0;
  }
  size() {
    return this.length;
  }
}

// test append
// let list = new List();
// for (let i = 0; i < 5; i++) {
//   list.append(i);
// }

// test search
// console.log(list.search(4));
// console.log(list.search(11));

// console.log(list.insert(0, 10));
// list.remove(10);

// list.print();

// 合并两个有序链表
// 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
let list1 = new List();
list1.append(1);
list1.append(2);
list1.append(4);

let list2 = new List();
list2.append(1);
list2.append(3);
list2.append(4);

// list1.print();
// list2.print();
// 思路： 初始化一个新链表，遍历两个链表，比较两个节点，节点小的插入到新链表，指向下个节点
// 边界：如果有一个链表是空的，则直接返回另一个链表
const mergeTwoList = (list1, list2) => {
  if (list1.length === 0) {
    return list2;
  }
  if (list2.length === 0) {
    return list1;
  }
  let list = new List();
  let currNode1 = list1.getList(),
    currNode2 = list2.getList();
  while (currNode1 || currNode2) {
    if (!currNode1 || currNode1.element > currNode2.element) {
      list.append(currNode2.element);
      currNode2 = currNode2.next;
    } else if (!currNode2 || currNode1.element <= currNode2.element) {
      list.append(currNode1.element);
      currNode1 = currNode1.next;
    }
  }
  return list;
};

// const mergeTwoList = (list1, list2) => {
//   if (list1 === null) {
//     return list2;
//   }
//   if (list2 === null) {
//     return list1;
//   }
//   if (list1.element <= list2.element) {
//     list1.next = mergeTwoList(list1.next, list2);
//     return list1;
//   } else {
//     list2.next = mergeTwoList(list1, list2.next);
//     return list2;
//   }
// };

let list3 = mergeTwoList(list1, list2);
list3.print();
// while (list3) {
//   console.log(list3.element);
//   list3 = list3.next;
// }
