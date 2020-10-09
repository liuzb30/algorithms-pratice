// 求一棵树的镜像(普通模式)
// 对于一棵树，如果每个节点的左右子树互换位置，那么就变成了这棵树的镜像
// 请实现mirror方法

const { BinaryTree } = require("./binaryTree");

var bt = new BinaryTree();
bt.initTree("A(B(D,E(G,)),C(,F))");
var rootNode = bt.getRoot();

var mirror = function (node) {
  // 在这里实现你的方法
  if (!node) {
    return null;
  }
  const leftNode = mirror(node.leftChild);
  const rightNode = mirror(node.rightChild);
  node.leftChild = rightNode;
  node.rightChild = leftNode;
  return node;
};

mirror(rootNode);
bt.inOrder(rootNode);
