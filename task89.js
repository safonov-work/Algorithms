const filter = (arr, fn) => {
  if (arr.length === 0) arr;
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (fn(element, i)) {
      res.push(element);
    }
  }

  return res;
};

console.log(filter([0, 10, 20, 30], (n) => n > 10));
