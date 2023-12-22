const createCounter = (init) => {
  let current = init;

  return {
    increment: function () {
      current += 1;
      return current;
    },
    decrement: function () {
      current -= 1;
      return current;
    },
    reset: function () {
      return init;
    },
  };
};

console.log(createCounter(5).increment());
