const { Stack } = require("../stack/stack");

class BinTreeNode {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
    this.parentNode = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  initTree(str) {
    const stack = new Stack();
    let flag = 0; // 左节点 1 ， 右节点 2
    let newNode = null;
    for (let i = 0; i < str.length; i++) {
      let item = str[i];
      if (item === "(") {
        stack.push(newNode);
        flag = 1;
      } else if (item === ")") {
        stack.pop();
      } else if (item === ",") {
        flag = 2;
      } else {
        newNode = new BinTreeNode(item);
        if (this.root == null) {
          this.root = newNode;
        } else if (flag === 1) {
          let topItem = stack.top();
          topItem.leftChild = newNode;
          newNode.parentNode = topItem;
        } else {
          let topItem = stack.top();
          topItem.rightChild = newNode;
          newNode.parentNode = topItem;
        }
      }
    }
  }

  inOrder(node) {
    if (node == null) {
      return;
    }
    this.inOrder(node.leftChild);
    console.log(node.data);
    this.inOrder(node.rightChild);
  }

  preOrder(node) {
    if (node == null) {
      return;
    }
    console.log(node.data);
    this.preOrder(node.leftChild);
    this.preOrder(node.rightChild);
  }
  postOrder(node) {
    if (node == null) {
      return;
    }
    this.postOrder(node.leftChild);
    this.postOrder(node.rightChild);
    console.log(node.data);
  }
  treeNodeCount(node) {
    if (node == null) {
      return 0;
    }
    const leftNodeCount = this.treeNodeCount(node.leftChild);
    const rightNodeCount = this.treeNodeCount(node.rightChild);
    return leftNodeCount + rightNodeCount + 1;
  }
  size() {
    return this.treeNodeCount(this.root);
  }
  height() {
    const treeHeight = (node) => {
      if (node == null) {
        return 0;
      }
      const leftTreeHeight = treeHeight(node.leftChild);
      const rightTreeHeight = treeHeight(node.rightChild);
      return Math.max(leftTreeHeight, rightTreeHeight) + 1;
    };
    return treeHeight(this.root);
  }
  find(data) {
    const findNode = (node, data) => {
      if (!node) {
        return null;
      }
      if (node.data == data) {
        return node;
      }
      const leftRes = findNode(node.leftChild, data);
      if (leftRes) {
        return leftRes;
      }
      return findNode(node.rightChild, data);
    };
    return findNode(this.root, data);
  }
}

module.exports = { BinaryTree };

// const str = "A(B(D,E(G,)),C(,F))";
// const binaryTree = new BinaryTree();
// binaryTree.initTree(str);
// binaryTree.postOrder(binaryTree.root);
// console.log(binaryTree.size());
// console.log(binaryTree.height());
// console.log(binaryTree.find("C"));
