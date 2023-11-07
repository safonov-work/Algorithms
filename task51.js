const twoSum = (numbers, target) => {
    const res = []

    for (let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) res.push(i + 1, j + 1)
        }
    }

    return res;
}

console.log(twoSum([ 2 ,3, 4 ], 6))