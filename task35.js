const nums = [-2,1,-3,4,-1,2,1,-5,4];
const maxSubArray = (nums) => {
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(0, nums[i - 1]) + nums[i]
        if (nums[i] > maxSum) {
            maxSum = nums[i]
        }
    }

    return maxSum
}

console.log(maxSubArray(nums))

//Учитывая целочисленный массив nums, найдите
// подмассив
// с наибольшей суммой и вернуть ее сумму .