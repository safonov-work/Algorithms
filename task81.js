const solve = (arr) => {
  const hashMap = {};
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (hashMap[element]) {
      hashMap[element]++;
    } else {
      hashMap[element] = 1;
    }
  }

  const values = Object.values(hashMap).sort((a, b) => b - a);
  const keys = Object.keys(hashMap);

  return values;
};

console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]));
