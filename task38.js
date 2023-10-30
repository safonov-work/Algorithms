function* fibGenerator() {
  yield 0;
  yield 1;

  let res = [0, 1];

  while (true) {
    res.push(res[res.length - 1] + res[res.length + 2]);
    yield res[res.length - 1];
  }
}

console.log(fibGenerator());
