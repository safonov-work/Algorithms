const missingNumber = (nums) => {
    const n = nums.length;
    const exectedSum = (n * (n  + 1)) / 2;
    let actualSum = 0;

    for(let i = 0; i < nums.length; i++) {
        actualSum = actualSum + nums[i]
    }

    return exectedSum - actualSum;

}


console.log(missingNumber([3,0,1]))