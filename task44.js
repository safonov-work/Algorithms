// sol 1
const removeDuplicates = (nums) => {

    let pos=0;
    for(let i=0; i < nums.length; i++){
        if(nums[i] !== nums[i+1]){
            nums[++pos] = nums[i+1]
        }
    }
    return pos
}

console.log(removeDuplicates([1,1,2])); // 2


// sol 2

const removeDuplicates2 = (nums) => {
    const result = []



  for (let i = 0; i < nums.length; i++) {
      let current = nums[i];
      let right = nums[i + 1];



      if (current !== right) {
          result.push(nums[i + 1])
      }

  }


    return result.filter(i => i !== undefined).length;
}

console.log(removeDuplicates2([1,1,2,1]))