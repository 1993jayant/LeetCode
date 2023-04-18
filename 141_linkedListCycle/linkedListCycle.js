/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let curr = head

  if (!head || head.next === null) return false

  while (curr) {
    if (curr.val === "asdf") return true

    curr.val = "asdf"
    curr = curr.next
  }

  return false
}
