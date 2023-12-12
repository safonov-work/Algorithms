let str = 'hello-billy-van';

const capitalize = (str) => {
  const res = Array.from(str.replaceAll('-', ' ')).map(
    (item, id) => item === ' ' && res[id + 1].toUpperCase()
  );
  return res;
};
console.log(capitalize(str));
