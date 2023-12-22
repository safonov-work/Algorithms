const map = (arr, fn) => {
  if (arr.length === 0) arr;

  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i));
  }
  return res;
};

console.log(map([1, 2, 3], (i) => i + 1));
