// 使用非递归方式实现前序遍历

const { BinaryTree } = require("./binaryTree");
const { Stack } = require("../stack/stack");

const bt = new BinaryTree();
bt.initTree("A(B(D,E(G,)),C(,F))");
const rootNode = bt.getRoot();

const preOrder = (node) => {
  if (!node) {
    return;
  }
  let currentNode = node;
  const stack = new Stack();
  while (currentNode) {
    console.log(currentNode.data);
    if (currentNode.rightChild) {
      stack.push(currentNode.rightChild);
    }
    if (currentNode.leftChild) {
      currentNode = currentNode.leftChild;
    } else {
      currentNode = stack.pop();
    }
  }
};

const inOrder = (node) => {
  const stack = new Stack();
  let currentNode = node;
  while (true) {
    // 先要处理左子树,当前节点怎么办? 放到栈里,等左子树处理完了弹出栈顶
    while (currentNode) {
      stack.push(currentNode);
      currentNode = currentNode.leftChild;
    }

    // 处理栈顶
    const popItem = stack.pop();
    console.log(popItem.data);
    // 处理右子树,如果右子树是null,下一次循环,恰好可以跳过while(currentNode) 的这个循环
    currentNode = popItem.rightChild;
    if (!currentNode && stack.isEmpty()) {
      break;
    }
  }
};

function Tag(node, status) {
  this.node = node;
  this.status = status; // 0表示左边已经遍历结束,1表示右边已经遍历结束
}

const postOrder = (node) => {
  const stack = new Stack();
  let currentNode = node;

  while (true) {
    while (currentNode) {
      const tag = new Tag(currentNode, 0);
      stack.push(tag);
      currentNode = currentNode.leftChild;
    }

    const popItem = stack.pop();
    if (popItem.node.rightChild && popItem.status === 0) {
      popItem.status = 1;
      stack.push(popItem);
      currentNode = popItem.node.rightChild;
    } else {
      console.log(popItem.node.data);
    }
    if (!currentNode && stack.isEmpty()) {
      break;
    }
  }
};

// preOrder(rootNode);
// inOrder(rootNode);
postOrder(rootNode);
