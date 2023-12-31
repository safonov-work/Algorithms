// solution 1;
const twoSum = (numbers, target) => {
   let numbersLength = numbers.length - 1;

   for(let l = 0, r = numbersLength; l < r;) {
       let sum = numbers[l] + numbers[r];
       if (sum === target) {
           return [l + 1, r + 1];
       }
       if (sum < target) {
           l++;
       } else {
           r--
       }
   }


  return [-1, -1];
}

console.log(twoSum([2,3,4], 6));

// solution 2;

const twoSum2 = (nums, target) => {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        let currentSum = nums[l] + nums[r]

        if (currentSum === target) {
            return [l + 1, r + 1]
        }

        if (currentSum < target) {
            l++;
        }

        if (currentSum > target){
            r--;
        }

    }
}

console.log(twoSum2([2,3,4], 6))


//Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.
//
// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.
//
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
//
// Your solution must use only constant extra space.