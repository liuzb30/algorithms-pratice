/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
var ListNode = function (val, next) {
    this.val = val
    this.next = next
}
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
    this.head = null
    this.tail = null
    this.size = 0
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function (index) {
    // 判断边界条件
    if (index < 0 || index >= this.size) return null
    let node = this.head
    while (index-- > 0) {
        node = node.next
    }
    return node
};

MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index >= this.size) return -1
    return this.getNode(index).val
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const node = new ListNode(val, this.head)
    this.head = node
    if (!this.tail) {
        this.tail = this.head
    }
    this.size++
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const node = new ListNode(val)
    if (!this.tail) {
        this.head = this.tail = node
    } else {
        this.tail.next = node
        this.tail = node
    }
    this.size++
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index <= 0) return this.addAtHead(val)
    if (index === this.size) return this.addAtTail(val)
    if (index > this.size) return
    const node = this.getNode(index - 1)
    node.next = new ListNode(val, node.next)
    this.size++
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index >= this.size) return
    if (index === 0) {
        this.head = this.head.next
        this.size--
        return
    }
    const node = this.getNode(index - 1)
    node.next = node.next.next
    // 处理尾节点
    if (index === this.size - 1) {
        this.tail = node
    }
    this.size--
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

