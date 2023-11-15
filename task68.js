const isAcronym = (words, s) => {
  const res = [];

  for (let i = 0; i < words.length; i++) {
    let start = 0;

    if (words[i].length <= 1) {
      res.push(words[i]);
    } else {
      while (start < words[i][start].length) {
        res.push(words[i][start]);
        start++;
      }
    }
  }

  return res.join('') === s;
};
console.log(isAcronym(['b', 'x'], 'bx'));

//Учитывая массив строк wordsи строку s, определите, является ли sэто аббревиатурой слов.

// Строка sсчитается аббревиатурой, wordsесли она может быть сформирована путем объединения первого символа каждой строки по words порядку . Например, "ab"может быть образовано из ["apple", "banana"], но не может быть образовано из ["bear", "aardvark"].

// Возвращает trueif s— это аббревиатура от words, и falseв противном случае.
