const findDub = (arr) => {
    const obj = {};
    let int = 0;

    for(let i =0; i < arr.length; i++) {
        let currentEl = arr[i];

        if (!obj[currentEl]) {
            obj[currentEl] = 0
        }
        obj[currentEl]++
    }

    for (const objKey in obj) {
        if (obj[objKey] > 1) {
            int = objKey
        }
    }

    return Number(int);
}

console.log(findDub([1,3,2,5,4,5,7,6]))