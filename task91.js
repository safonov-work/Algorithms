const compose = (functions, x) => {
  const arr = [];

  for (let i = functions.length - 1; i >= 0; i--) {
    const element = functions[i];
    let acc = 0;
    acc += functions[i](x);
    arr.push(acc);
  }

  return arr;
};

console.log(compose([(x) => x + 1, (x) => x * x, (x) => 2 * x], 4));
