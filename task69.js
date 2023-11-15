const findTheDifference = (s, t) => {
  let str = '';
  if (s.length === 0) return t;
  if (s.length === 1) return s;

  let startStr1 = 0;
  let startStr2 = 0;

  while (startStr1 <= s.length - 1 && startStr2 <= t.length - 1) {
    startStr1++;
    startStr2++;
    if (s[startStr1] !== t[startStr2]) {
      str += t[startStr2];
    }
  }

  return str;
};

console.log(findTheDifference('aa', 'aaa'));
