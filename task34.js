// solution 1
const containsDuplicate = (nums) => {
     const newSet = new Set (Array.from(nums))

    return Array.from(newSet).length >= nums.length ? false : true;
}

console.log(containsDuplicate([1,2,3,1]))

// solution 2;

const containsDuplicate2 = (nums) => {
    // let res = [];

    for(let i = 0; i <= nums.length - 1; i++){
        for(let j = i + 1; j <= nums.length - 1; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}

console.log(containsDuplicate2([1,1,1,3,3,4,3,2,4,2]))


//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.