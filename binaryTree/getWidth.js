const Queue = require("../queue/queue");
// 分层打印二叉树（困难模式+）

const { BinaryTree } = require("./binaryTree");

const bt = new BinaryTree();

bt.initTree("A(B(D,E(G,)),C(,F))");
var rootNode = bt.getRoot();

// 获得宽度
var getWidth = function (node, n) {
  // 实现你的函数
  if (n === 0 || !node) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  const leftWidth = getWidth(node.leftChild, n - 1);
  const rightWidth = getWidth(node.rightChild, n - 1);
  return leftWidth + rightWidth;
};

var getWidth = function (node, n) {
  const queue = new Queue();
  queue.enqueue(node);
  queue.enqueue(0);

  let level = 0;
  let width = 1;

  while (!queue.isEmpty()) {
    const delItem = queue.dequeue();
    if (delItem === 0) {
      level++;
      if (level === n) {
        return width;
      }
      width = queue.size();
      if (queue.isEmpty()) {
        break;
      } else {
        queue.enqueue(0);
      }
      continue;
    }
    // cache.push(delItem);
    if (delItem.leftChild) {
      queue.enqueue(delItem.leftChild);
    }
    if (delItem.rightChild) {
      queue.enqueue(delItem.rightChild);
    }
  }
};

console.log(getWidth(rootNode, 1));
console.log(getWidth(rootNode, 2));
console.log(getWidth(rootNode, 3));
console.log(getWidth(rootNode, 4));
