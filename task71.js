const versionComp = (v1, v2) => {
  const splitV1 = v1.split('.');
  const splitV2 = v2.split('.');
  const length = Math.max(splitV1.length, splitV2.length);

  for (let i = 0; i < length; i++) {
    const num1 = parseInt(splitV1[i]) || 0;
    const num2 = parseInt(splitV2[i]) || 0;

    if (num1 > num2) {
      return `${v1} > ${v2}`;
    } else if (num1 < num2) {
      return `${v1} < ${v2}`;
    }
  }

  return `${v1} = ${v2}`;
};

console.log(versionComp('1.0.0', '2.0.0'));
/// 1.0.0 < 2.0.0
console.log(versionComp('10.0', '1.0.0')); /// 1.0 = 1.0.0
console.log(versionComp('1.2.1', '1.2.0')); /// 1.2.1 > 1.2.0
console.log(versionComp('1.2.1', '1.2.1.99')); /// 1.2.1 < 1.2.1.99
