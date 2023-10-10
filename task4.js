// solution 1
const reverseList = (head) => {
    if (!head) return [];
    let prev = null;
    let current = head;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

const numsArr = [1,2,4,2,]


console.log(reverseList(numsArr))

