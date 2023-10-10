const objectSolution=(nums)=> {
    const setNum = new Set();

    for (const key in nums) {
        if(setNum.has(nums[key])) {
            return true;
        }
        setNum.add(nums[key])
    }

    return false;
}

console.log(objectSolution([1,2,3,4,5,6]))