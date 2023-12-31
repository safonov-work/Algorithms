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

//Вам даны заголовки двух отсортированных связанных списков list1и list2.

//Объедините два списка в один отсортированный список. Список должен быть составлен путем сращивания узлов первых двух списков.

//Возвращает заголовок объединенного связанного списка .

// recursion

// factorial

function pow(n) {
  if (n === 0) return 1

  return n * pow(n - 1)
}

console.log(pow(5))
