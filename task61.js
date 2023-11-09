const getMaxIntegersFromMatrix = (matrix) => {
    const res = []

    for(let i = 0; i < matrix.length; i++) {
        res.push(Math.max(...matrix[i]))
    }


    return res;
}

console.log(getMaxIntegersFromMatrix([
    [1,2,3,4],
        [5,18,0,12],
        [3,5,12,5],
        [28,9,2,34],
]))