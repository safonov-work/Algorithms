const reduce = (nums, fn, init) => {
  if (nums.length === 0) return init;

  let ans = init;

  for (let i = 0; i < nums.length; i++) {
    ans = fn(ans, nums[i]);
  }
  return ans;
};

console.log(reduce());
