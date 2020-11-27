// 编写一个算法解析以下符号，转换为json树的结构
let str = `<xml><div><p><a/></p><p></p></div></xml>`;

// str = {
//   xml: [
//     {
//       div: [{ p: [a] }, { p: "" }],
//     },
//   ],
// };

interface TNode {
  name: string;
  children: TNode[] | null;
}

const startTagReg: RegExp = /\<(\w+)\>/; // 匹配开始标签
const endTagReg: RegExp = /\<\/(\w+)\>/; // 匹配结束标签
const closeSelfTagReg: RegExp = /\<(\w+)\/\>/; // 匹配自闭合标签
const textNodeReg: RegExp = /\>(.*?)\<\//; //匹配文本节点
const tagReg: RegExp = /\<\/?(\w+)\/?\>/g; // 全局匹配标签

let matchedTags: string[] = str.match(tagReg) as string[]; // 在字符串中匹配到的标签数组
console.log(matchedTags);
let nodeStacks: TNode[] = []; // 保存遍历过程中的节点栈
let htmlTree: TNode | null = null;
let currentNode: TNode;
// 根据标签创建接口
const createNode = (tag: string): TNode => {
  const name = tag.replace(tagReg, "$1");
  return {
    name,
    children: null,
  };
};
// 将节点插入到当前操作栈的节点中
const insertNode = (node: TNode) => {
  if (!htmlTree) {
    htmlTree = node;
  } else {
    if (currentNode.children === null) {
      currentNode.children = [node];
    } else {
      currentNode.children.push(node);
    }
  }
};

for (let tag of matchedTags) {
  // 如果是开始闭合标签，则入栈
  if (startTagReg.test(tag)) {
    const node = createNode(tag);
    // 向树中插入节点
    insertNode(node);
    // 压入栈，并进入改栈
    nodeStacks.push(node);
    currentNode = nodeStacks[nodeStacks.length - 1];
  }
  // 如果是结束闭合标签则出栈
  else if (endTagReg.test(tag)) {
    nodeStacks.pop();
    currentNode = nodeStacks[nodeStacks.length - 1];
  }
  // 如果是自闭合标签则插入节点
  else if (closeSelfTagReg.test(tag)) {
    const node = createNode(tag);
    insertNode(node);
  }
}

console.log(matchedTags);
console.log(JSON.stringify(htmlTree));
