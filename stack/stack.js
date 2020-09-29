class Stack {
  constructor() {
    this.items = [];
  }
  // push方法向栈里压入一个元素
  push(item) {
    this.items.push(item);
  }
  // pop方法把栈顶元素弹出
  pop(item) {
    return this.items.pop(item);
  }
  // 返回栈顶元素
  top() {
    return this.items[this.items.length - 1];
  }
  // 判断栈是否为空
  isEmpty() {
    return this.size() === 0;
  }
  // 返回栈里元素的个数
  size() {
    return this.items.length;
  }
  // 清空栈
  clear() {
    this.items = [];
  }
}
module.exports = { Stack };
