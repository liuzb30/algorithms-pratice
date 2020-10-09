// 寻找两个节点的最近公共祖先（困难模式）

const { BinaryTree } = require("./binaryTree");
const { Stack } = require("../stack/stack");

const bt = new BinaryTree();

bt.initTree("A(B(D,E(G,)),C(,F))");
var rootNode = bt.getRoot();

var node1 = bt.find("D");
var node2 = bt.find("E");
// console.log(node1.data);
// console.log(node2.data);

// 寻找最近公共祖先
// var lowestCommonAncestor = function (rootNode, node1, node2) {
//   // 实现你的算法
//   const parentList1 = new Stack();
//   const parentList2 = new Stack();
//   let currNode1 = node1;
//   let currNode2 = node2;
//   while (currNode1) {
//     parentList1.push(currNode1);
//     currNode1 = currNode1.parentNode;
//   }
//   while (currNode2) {
//     parentList2.push(currNode2);
//     currNode2 = currNode2.parentNode;
//   }
//   let ancestor = null;
//   while (parentList1.top() && parentList2.top) {
//     let popItem1 = parentList1.pop();
//     let popItem2 = parentList2.pop();
//     if (popItem1 === popItem2) {
//       ancestor = popItem1;
//     } else {
//       break;
//     }
//   }
//   return ancestor;
// };
// 递归
var lowestCommonAncestor = function (rootNode, node1, node2) {
  if (!rootNode || rootNode === node1 || rootNode === node2) {
    return rootNode;
  }
  const left = lowestCommonAncestor(rootNode.leftChild, node1, node2);
  const right = lowestCommonAncestor(rootNode.rightChild, node1, node2);
  if (left && right) {
    return rootNode;
  }
  return left || right;
};

var ancestor = lowestCommonAncestor(rootNode, node1, node2);
console.log(ancestor.data);
