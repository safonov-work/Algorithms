// sol 1;

const arr = [1, 1, 2];

const removeDuplicates = (nums) => {
  return Array.from(new Set(nums));
};

// sol 2;

const removeDuplicates2 = (nums) => {
  const res = [];

  let pos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1]) {
      nums[++pos] = nums[i + 1];
    }
  }

  ret;
};

console.log(removeDuplicates(arr));
//Учитывая целочисленный массив, nums отсортированный в порядке неубывания , удалите дубликаты на месте так, чтобы каждый уникальный элемент появлялся только один раз . Относительный порядок элементов должен оставаться неизменным . Затем верните количество уникальных элементов вnums .
