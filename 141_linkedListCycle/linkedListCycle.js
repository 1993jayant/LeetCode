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
  //   let curr = head

  //   if(!head || head.next === null) return false

  //   while(curr) {
  //     if(curr.val === 'asdf') return true

  //     curr.val = 'asdf'
  //     curr = curr.next
  //   }

  //   return false

  // Runtime 57 ms  Beats 99.7%   Memory 45.6 MB   Beats 17.96%
  let curr = head
  let fastPtr = curr

  if (!head) return false

  while (fastPtr && fastPtr.next) {
    curr = curr.next
    fastPtr = fastPtr.next.next

    if (curr === fastPtr) return true
  }

  return false
}
