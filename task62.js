const findUniqueNumber = (numbers) => {
    const obj = {};
    let int = 0;
    for(let i = 0; i < numbers.length; i++) {
        let current = numbers[i];
        if (!obj[current]) {
            obj[current] = 0;
        }
            obj[current]++
    }

    for (const objKey in obj) {
        if (obj[objKey] === 1) {
            int = objKey;
        }
    }

    return int
}

console.log(findUniqueNumber([4,1,2,1,2]))