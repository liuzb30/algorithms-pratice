class TreeNode {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
    this.parent = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let self = this;
    function insertData(node, data) {
      if (self.root == null) {
        self.root = new TreeNode(data);
        return true;
      }

      if (data < node.data) {
        if (node.leftChild) {
          return insertData(node.leftChild, data);
        } else {
          const newNode = new TreeNode(data);
          node.leftChild = newNode;
          newNode.parent = node;
          return true;
        }
      } else if (data > node.data) {
        if (node.rightChild) {
          return insertData(node.rightChild, data);
        } else {
          const newNode = new TreeNode(data);
          node.rightChild = newNode;
          newNode.parent = node;
          return true;
        }
      } else {
        return false;
      }
    }

    return insertData(this.root, data);
  }

  search(data) {
    function searchData(node, data) {
      if (node == null) {
        return null;
      }
      if (node.data === data) {
        return node;
      } else if (data < node.data) {
        return searchData(node.leftChild, data);
      } else {
        return searchData(node.rightChild, data);
      }
    }
    return searchData(this.root, data);
  }

  remove(data) {
    function linkParent(parent, node, nextNode) {
      if (parent == null) {
        root = nextNode;
        root.parent = null;
      } else {
        if (parseInt.leftChild && parent.leftChild.data === ndoe.data) {
          parent.leftChild = nextNode;
        } else {
          parent.rightChild = nextNode;
        }
      }
    }
    function removeData(node, data) {
      if (node == null) {
        return false;
      }

      if (data < node.data) {
        return removeData(node.leftChild, data);
      } else if (data > node.data) {
        return removeData(node.rightChild, data);
      } else {
        // 找到节点
        // 判断是否有左右节点
        if (node.leftChild && node.rightChild) {
          // 找到中序遍历的第一个节点
          let tmp = ndoe.rightChild;
          while (tmp) {
            tmp = tmp.leftChild;
          }
          // 被删除点的值等于中序下第一个点的值
          node.data = tmp.data;
          // 去右子树删除中序下的第一个节点
          return removeData(node.rightChild, tmp.data);
        } else {
          const parent = node.parent;
          if (!node.leftChild) {
            linkParent(parent, node, node.rightChild);
          } else {
            linkParent(parent, node, node.leftChild);
          }
          return true;
        }
      }
    }
    return removeData(this.root, data);
  }

  print() {
    this.inOrder(this.root);
  }

  inOrder(node) {
    if (node == null) {
      return;
    }
    this.inOrder(node.leftChild);
    console.log(node.data);
    this.inOrder(node.rightChild);
  }
}

const arr = [19, 27, 40, 35, 25, 10, 5, 17, 13, 7, 8];
const bst = new BinarySearchTree();
arr.forEach((item) => bst.insert(item));
bst.print();
