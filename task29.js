const head = [1,2,3,4,5];
const n = 2;

const removeNthFromEnd = (head,n) => {
    let fast = head, slow = head
    for (let i = 0; i < n; i++) fast = fast.next
    if (!fast) return head.next
    while (fast.next) fast = fast.next, slow = slow.next
    slow.next = slow.next.next
    return head
}

console.log(removeNthFromEnd())

// Given the head of a linked list, remove the nth node from the end of the list and return its head.