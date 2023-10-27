const arr = [1, 2, 3];

const mapFunc = (arr, fn) => {
  if (arr.length === 0) return [];

  const res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i));
  }

  return res;
};

console.log(
  mapFunc(arr, (item, id) => {
    return item * 2;
  })
);

//Учитывая целочисленный массив  arr и функцию сопоставления  fn, верните новый массив с преобразованием, примененным к каждому элементу.

//Возвращаемый массив должен быть создан таким образом, чтобы  returnedArray[i] = fn(arr[i], i).

//Пожалуйста, решите это без встроенного Array.mapметода.
