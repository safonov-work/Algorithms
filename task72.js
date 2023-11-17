const arrayMash = (array1, array2) => {
  const res = [];

  let startArr1 = 0;
  let startArr2 = 0;

  while (startArr1 < array1.length && startArr2 < array2.length) {
    res.push(array1[startArr1], array2[startArr2]);
    startArr1++;
    startArr2++;
  }

  return res;
};

console.log(arrayMash([1, 2, 3], ['a', 'b', 'c']));

// Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

// eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']
