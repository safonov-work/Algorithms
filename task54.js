const moveZeroes = (nums) => {
    if (nums.length === 1) return nums;

    let l = 0;
    let r = l + 1;

   while (r <= nums.length - 1) {
       if (nums[l] !== 0) {
           l++;
           r++;
       }

       if (nums[l] === 0){
           if (nums[r] !== 0) {
               [nums[l], nums[r]] = [nums[r], nums[l]]
               l++;
           }
           r++;
       }

   }


   return nums;
}

console.log(moveZeroes([0,1,0,3,12]))






//Учитывая целочисленный массив nums, переместите все 0элементы в конец, сохраняя относительный порядок ненулевых элементов.
//
// Обратите внимание , что вы должны сделать это на месте, не копируя массив.
