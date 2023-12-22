const createCounter = (n) => {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
};

console.log(createCounter()());
