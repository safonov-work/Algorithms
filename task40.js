///"Есть массив чисел, надо убрать из него дубликаты"  /// 5

//   const input = [1,1,1,1,11,2,2,2,2,22,2,2,22,2,3,3,33,3,3,3,3];

//     const uniqItems = (input) => {

//     }

//     console.log(uniqItems(input)) // [1,11, 2,22, 3, 33]

// 30
const brackets = {
  ')': '(',
  '}': '{',
  ']': '[',
};

const bracketsArr = Array.from(Object.entries(brackets)).flat();
const isCorrectBrackets = (str) => {
  if (!str) return false;
  const stack = [];

  for (const s of str) {
    if (!bracketsArr.includes(s)) {
      continue;
    }

    if (s in brackets) {
      if (brackets[s] !== stack.pop()) return false;
    } else {
      stack.push(s);
    }
  }

  return stack.length === 0;
};

//console.log(isCorrectBrackets('[{}]')); // true

const isCorrectBrackets2 = (str) => {
  const brackets = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  const stack = [];

  const clearStr = str
    .split('')
    .filter((i) => ['(', ')', '{', '}', '[', ']'].includes(i));

  function isOpenBrackets(ch) {
    return ['[', '(', '{'].includes(ch);
  }

  for (const s of clearStr) {
    if (isOpenBrackets(s)) {
      stack.push(s);
    } else {
      if (brackets[s] !== stack.pop()) return false;
    }
  }

  return stack.length === 0;
};

//console.log(isCorrectBrackets2('[({})]')); // true

isCorrectBrackets('[{}]'); // true
isCorrectBrackets('[({})]'); // true
isCorrectBrackets('Hello [({dfsdg})sgfsd] World!'); // true
isCorrectBrackets('[{(})]'); // false
isCorrectBrackets('['); // false
isCorrectBrackets(); // false
// В каком порядке отработает console.log  при монтировании

//           function A(){
//                 console.log("render1");
//                 const [x, setX] = useState(0);

//                 useEffect(() => {
//                     console.log("e1" + x);
//                     return () => console.log("e1r" + x)
//                 }, [x]);

//                 useEffect(() => {
//                     console.log("e2" + x);
//                     return () => console.log("e2r" + x)
//                 }, [])

//                 useEffect(() => {
//                     console.log("e3" + x);
//                     return () => console.log("e3r" + x)
//                 })

//                 const y = x  + 1;

//                 console.log("render2", y);

//             return <button onClick = {() => setX(i => i +1 )}>{x}</button>
//             }

/// 1,2,5,3,6,4

//console.log(1);
//new Promise((resolve) => {
// resolve();
//console.log(2);
//}).then(() => {
//console.log(3);
//setTimeout(() => {
//console.log(4);
//}, 0);
//});
//console.log(5);
//setTimeout(() => {
//console.log(6);
//}, 0);
