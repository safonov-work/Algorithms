const plusOne = (digits) => {
  let str = '';
  let res = [];

  for (const iterator of digits) {
    str += iterator;
  }
  let strToNumbs = String(Number(str) + 1);

  for (const iterator of strToNumbs) {
    res.push(Number(iterator));
  }

  return res;
};

console.log(plusOne([9]));
