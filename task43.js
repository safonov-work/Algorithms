const removeElement = (nums, val) => {
    const res = []
    while(nums.includes(val)){
        res.splice(nums.indexOf(val))
    }

    return res;
}


console.log(removeElement([3,2,2,3], 3))

//Учитывая целочисленный массив numsи целое число val, удалите все вхождения valin nums -place . Порядок элементов может быть изменен. Затем верните количество элементов, в numsкоторых не равныval .
//
// Учитывайте количество элементов, в numsкоторых не равны val, kчтобы их приняли, вам необходимо сделать следующее:
//
// Измените массив numsтак, чтобы первые kэлементы numsсодержали элементы, не равные val. Остальные элементы numsне важны, как и размер nums.
// Возврат k.