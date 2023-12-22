const sortPeople = (names, heights) => {
  const arr = [];

  let start1 = 0;
  let start2 = 0;

  while (start1 < names.length && start2 < heights.length) {
    arr.push([names[start1], heights[start2]]);
    start1++;
    start2++;
  }
  return (sortedArr = arr
    .sort((a, b) => b[1] - a[1])
    .flat()
    .filter((item) => !Number(item)));
};

console.log(sortPeople(['Alice', 'Bob', 'Bob'], [155, 185, 150]));
