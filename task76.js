// const dublicates = (arr) => {
//   const obj = {};
//   const res = [];
//   const onlyNumberArr = arr.filter((i) => typeof i !== 'string');

//   for (let i = 0; i < onlyNumberArr.length; i++) {
//     let current = arr[i];
//     if (!obj[current]) {
//       obj[current] = 0;
//     }
//     obj[current]++;
//   }

//   for (const key in obj) {
//     if (obj[key] > 1) {
//       res.push(Number(key));
//     }
//   }

//   return res.reverse();
// };
// console.log(dublicates([1, 2, 3, 4, '3']));

const bill = {
  tip: 0.1,
  calculate(total) {
    return total + total * this.tip;
  },
  detail(dish1, dish2, sum) {
    return `Vash (${dish1}, ${dish2}) price ${this.calculate(sum)}`;
  },
};

//const pay = bill.calculate.bind(bill, 1000);
const payCount = bill.calculate.apply(bill, [1000]);

console.log(payCount);

const twoSum = (arr, target) => {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        res.push([arr[i], arr[j]]);
      }
    }
  }

  return res;
};

console.log(twoSum([10, 1, 2, 7, 6, 1, 5], 8));
