var Node = function (data) {
  this.data = data;
  this.next = null;
};

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function print(node) {
  var curr_node = node;
  while (curr_node) {
    console.log(curr_node.data);
    curr_node = curr_node.next;
  }
}

print(node1);
// 迭代翻转
function reverseIter(head) {
  if (!head) {
    return null;
  }
  let preNode = null;
  let currNode = head;
  while (currNode) {
    // 保存下一个节点
    const nextNode = currNode.next;
    currNode.next = preNode;
    preNode = currNode;
    currNode = nextNode;
  }
  return preNode;
}
// 递归翻转
function reverseDigui(head) {
  // 思路：递归的精髓在于甩锅，你做不到的事情让别人去做，等别人做完，你在别人的基础上做
  // 翻转的问题在于，你如果改变了下个节点的next，那下个节点的next就不见了，要让下个节点先改，改完才轮到你
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }
  // 从前往后执行
  const newHead = reverseDigui(head.next);
  // 从后往前执行
  head.next.next = head;
  head.next = null;
  return newHead;
}

// 从尾到头打印链表（普通模式）
function reversePrint(head) {
  if (!head) {
    return null;
  }
  reversePrint(head.next);
  console.log(head.data);
}

print(reversePrint(node1));
