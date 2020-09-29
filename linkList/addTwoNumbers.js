function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumbers = function (l1, l2) {
  let carry = 0,
    root = new ListNode(null);
  let p = root;
  while (l1 || l2) {
    let val1 = l1 ? l1.val : 0;
    let val2 = l2 ? l2.val : 0;
    let val = val1 + val2 + carry;
    carry = Math.floor(val / 10);
    val = val % 10;
    p.next = new ListNode(val);
    p = p.next;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
  }
  return root.next;
};

var addTwoNumbers2 = function (l1, l2) {
  const arr1 = [],
    arr2 = [];
  // 把链表存在数组中
  while (l1 || l2) {
    if (l1) {
      arr1.push(l1);
      l1 = l1.next;
    }
    if (l2) {
      arr2.push(l2);
      l2 = l2.next;
    }
  }
  let carry = 0;
  //   let root = new ListNode(null)
  let currNode;
  let nextNode = new ListNode(null);
  while (arr1.length || arr2.length || carry) {
    let val1 = arr1.length ? arr1.pop().val : 0;
    let val2 = arr2.length ? arr2.pop().val : 0;
    let val = val1 + val2 + carry;
    carry = Math.floor(val / 10);
    val = val % 10;
    currNode = new ListNode(val);
    currNode.next = nextNode;
    nextNode = currNode;
  }
  return currNode;
};
var node1 = new ListNode(6);
var node2 = new ListNode(1);
var node3 = new ListNode(7);
node1.next = node2;
node2.next = node3;

var node4 = new ListNode(3);
var node5 = new ListNode(9);
var node6 = new ListNode(5);
node4.next = node5;
node5.next = node6;

function print(node) {
  var curr_node = node;
  while (curr_node) {
    console.log(curr_node.val);
    curr_node = curr_node.next;
  }
}

print(addTwoNumbers2(node1, node4));
