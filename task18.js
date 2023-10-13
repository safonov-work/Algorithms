const mergeTwoLists = (l1, l2) => {
  if (l1 === null) return l2
  if (l2 === null) return l1

  if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}

const l1 = [1, 2, 3, 4, 5, 678, 68]
const l2 = [1, 24, 5, 6, 75, 535]

console.log(mergeTwoLists(l1, l2))
