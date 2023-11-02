const functions = [
  () => console.log('first'),
  () => console.log('second'),
  () => console.log('third'),
];
const delays = [2000, 1000, 3000];

const runInOrder = (functions, delays) => {
  if (functions.length === 0 || delays.length === 0) return;

  for (let i = 0; i < functions.length; i++) {
    setTimeout(() => {
      functions[i]();
    }, delays[i]);
  }
};

//console.log(runInOrder(functions, delays));

function runInOrder2(functions, delays) {
  if (functions.length === 0 || delays.length === 0) {
    return; // Если массивы пусты, завершаем выполнение
  }

  // Выполняем первую функцию из массива functions
  const currentFunction = functions.shift();
  currentFunction();

  // Получаем первое значение задержки и удаляем его из массива delays
  const currentDelay = delays.shift();

  // Если остались другие функции, вызываем runInOrder с оставшимися функциями и задержками
  if (functions.length > 0) {
    setTimeout(() => runInOrder(functions, delays), currentDelay);
  }
}

console.log(runInOrder2(functions, delays));
