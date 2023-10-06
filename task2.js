const objectSolution=(nums)=> {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let inum = nums[i];
        if (obj[inum]) {
            return true;
        } else {
            obj[inum] = true;
        }
    }

    return false;
}

console.log(objectSolution([1,2,3,4,5,6]))