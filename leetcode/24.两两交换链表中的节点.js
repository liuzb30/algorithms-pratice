/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 循环
// var swapPairs = function (head) {
//     if (head == null || head.next == null) return head
//     let p = dummyHead = new ListNode()
//     p.next = head;

//     while ((node1 = p.next) && (node2 = p.next.next)) {
//         let next = node2.next
//         node2.next = node1
//         p.next = node2
//         node1.next = next
//         p = node1
//     }

//     return dummyHead.next
// }
// 递归思路：递归主要是要推导出这个函数要做什么，在这个例子中，我们需要做的就是把2的next指向1,1指向4(4的next指向3,3的next指向null,返回4)，然后返回2。从这里可以看出递归函数的功能。
// var swapPairs = function (head) {
//     if (head == null || head.next == null) return head
//     let node1 = head, node2 = head.next
//     node1.next = swapPairs(node2.next)
//     node2.next = node1
//     return node2
// }

var swapPairs = function (head) {
    let cur = dummyHead = new ListNode(null, head)
    let node1, node2
    while (cur.next && cur.next.next) {
        node1 = cur.next
        node2 = cur.next.next
        node1.next = node2.next
        node2.next = node1
        cur.next = node2
        cur = node1
    }
    return dummyHead.next
}

var swapPairs = function (head) {
    if (!head || !head.next) return head
    let next = head.next
    let nextHead = swapPairs(head.next.next)
    next.next = head
    head.next = nextHead
    return next
}

// @lc code=end

