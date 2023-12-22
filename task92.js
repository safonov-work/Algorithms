var compose = function (functions) {
  if (functions.length === 0) functions;

  return functions.reduceRight((prevFn, nextFn) => {
    return function (x) {
      return nextFn(prevFn(x));
    };
  });
};

console.log(compose([(x) => x + 1, (x) => x * x, (x) => 2 * x])(4));
