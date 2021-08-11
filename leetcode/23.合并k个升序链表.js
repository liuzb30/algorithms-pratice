/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (l1 == null) return l2
    if (l2 == null) return l1
    if (l1.val > l2.val) {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    } else {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }
}
// 自上而下(递归)
// var mergeKLists = function (lists) {
//     const mergeLists = (lists, start, end) => {
//         if (end < start) return null
//         if (end == start) return lists[end]
//         let mid = Math.floor(start + (end - start) / 2)
//         return mergeTwoLists(mergeLists(lists, start, mid), mergeLists(lists, mid + 1, end))
//     }
//     return mergeLists(lists, 0, lists.length - 1)
// };
// 自下而上
var mergeKLists = function (lists) {
    if (!lists || !lists.length) return null
    // 虚拟头指针集合
    let dummyHeads = []
    // 初始化虚拟头指针
    for (let i = 0; i < lists.length; i++) {
        let node = new ListNode()
        node.next = lists[i]
        dummyHeads[i] = node
    }
    // 自下而上merge
    for (let seg = 1; seg < lists.length; seg += seg) {
        for (let i = 0; i + seg < lists.length; i += 2 * seg) {
            dummyHeads[i].next = mergeTwoLists(dummyHeads[i].next, dummyHeads[i + seg].next)
        }
    }
    return dummyHeads[0].next
}
// @lc code=end

