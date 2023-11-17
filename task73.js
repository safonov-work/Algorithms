const getLargerNumbers = (a, b) => {
  const res = [];

  let startArr1 = 0;
  let startArr2 = 0;

  while (startArr1 < a.length && startArr2 < b.length) {
    res.push(Math.max(a[startArr1], b[startArr2]));
    startArr1++;
    startArr2++;
  }

  return res;
};

console.log(getLargerNumbers([13, 64, 15, 17, 88], [23, 14, 53, 17, 80]));

//In this Kata the aim is to compare each pair of integers from 2 arrays, and return a new array of large numbers.

// Note: Both arrays have the same dimensions.
