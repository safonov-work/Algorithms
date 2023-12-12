const solve = (arr) => {
  const hashMap = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (hashMap[element]) {
      hashMap[element]++;
    } else {
      hashMap[element] = 1;
    }
  }

  return hashMap;
};

console.log(solve([2, 3, 5, 3, 7, 9, 5, 3, 7]));
