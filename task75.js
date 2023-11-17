const dublicate = (list) => {
  const res = [];

  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] === list[j]) {
        res.push(list[i]);
      }
    }
  }

  return Array.from(new Set(res));
};

console.log(
  dublicate([
    'lyhxr@example.com',
    'lyhxr@example.com',
    'masha@example.com',
    'fedya@example.com',
    'katya@example.com',
    'fedya@example.com',
    'katya@example.com',
    'lyhxr@example.com',
  ])
);
