// 合并两个两个有序链表(困难模式)
// 已知有两个有序链表(链表元素从小到大)，请实现函数mergeLink，将两个链表合并成一个有序链表，并返回新链表，原有的两个链表不要修改。
var Node = function (data) {
  this.data = data;
  this.next = null;
};

var node1 = new Node(1);
var node2 = new Node(4);
var node3 = new Node(9);
var node4 = new Node(2);
var node5 = new Node(5);
var node6 = new Node(6);
var node7 = new Node(10);

node1.next = node2;
node2.next = node3;

node4.next = node5;
node5.next = node6;
node6.next = node7;

// 递归
function mergeLink(head1, head2) {
  //对两个列表进行遍历，比较当前节点哪个值小，值小的插入新的链表
  if (!head1) {
    return head2;
  }
  if (!head2) {
    return head1;
  }
  let nextNode, newNode;
  if (head1.data < head2.data) {
    nextNode = mergeLink(head1.next, head2);
    newNode = new Node(head1.data);
  } else {
    nextNode = mergeLink(head1, head2.next);
    newNode = new Node(head2.data);
  }
  newNode.next = nextNode;

  return newNode;
}

// 迭代
function mergeLink(head1, head2) {
  if (!head1) {
    return head2;
  }
  if (!head2) {
    return head1;
  }
  let mergeHead = null;
  let mergeTail = null;
  let currNode1 = head1;
  let currNode2 = head2;
  while (currNode1 && currNode2) {
    let nextNode = null;
    if (currNode1.data < currNode2.data) {
      nextNode = new Node(currNode1.data);
      currNode1 = currNode1.next;
    } else {
      nextNode = new Node(currNode2.data);
      currNode2 = currNode2.next;
    }
    if (!mergeHead) {
      mergeHead = mergeTail = nextNode;
    } else {
      mergeTail.next = nextNode;
      mergeTail = nextNode;
    }
  }

  if (!currNode1) {
    mergeTail.next = currNode2;
  } else if (!currNode2) {
    mergeTail.next = currNode1;
  }
  return mergeHead;
}

print(mergeLink(node1, node4));
// print(node1);
// print(node4);

function print(node) {
  var curr_node = node;
  while (curr_node) {
    console.log(curr_node.data);
    curr_node = curr_node.next;
  }
}
