// 分层打印二叉树（困难模式+）
const Queue = require("../queue/queue");
const { BinaryTree } = require("./binaryTree");

const bt = new BinaryTree();

bt.initTree("A(B(D,E(G,)),C(,F))");
var rootNode = bt.getRoot();

// 层次遍历
// 思路：利用队列先进先出的特点，先把根节点放入队列，然后把0也放入队列，0是用来分层的。
// 接着对队列进行遍历，遇到节点则把节点的data拼接strLink,再把节点的左右节点入队列。遇到0则表示该层已经遍历完，输出strLink,然后清空。如果队列是空的，则跳出循环，非空则把0入队列。
var levelOrder = function (node) {
  // 实现你的方法
  const queue = new Queue();
  // 把当前节点放入队列
  queue.enqueue(node);
  queue.enqueue(0);
  let strLink = "";

  while (!queue.isEmpty()) {
    const delItem = queue.dequeue();
    if (delItem === 0) {
      console.log(strLink);
      strLink = "";
      if (queue.isEmpty()) {
        break;
      } else {
        queue.enqueue(0);
      }
      continue;
    }
    strLink += delItem.data + " ";
    if (delItem.leftChild) {
      queue.enqueue(delItem.leftChild);
    }
    if (delItem.rightChild) {
      queue.enqueue(delItem.rightChild);
    }
  }
};

levelOrder(rootNode);
