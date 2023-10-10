// solution 1;
const climbStairs = (n) => {
    let stepsArr = new Array(n);
    stepsArr[1] = 1;
    stepsArr[2] = 2;

    for(let i = 3; i <= n; i++) {
        stepsArr[i] = stepsArr[i-1] + stepsArr[i - 2];
    }
    return stepsArr[n]
}

console.log(climbStairs(5));

// solution 2;

