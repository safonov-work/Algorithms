const autocomplete = (input, dictionary) => {
  const clearInput = input;
  const result = [];

  for (let i = 0; i < dictionary.length; i++) {
    let current = dictionary[i];
    let startS2 = 0;
    let startS1 = 0;

    while (startS1 < input.length && startS2 < current.length) {
      startS1++;
      startS2++;
      if (input[startS1] === current[startS2]) {
        result.push(current);
      }
    }
  }

  return result;
};

console.log(autocomplete('app', ['airplane', 'airport', 'apple', 'ball']));
