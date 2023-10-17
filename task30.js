const matrix = [[1,1,1],[1,0,1],[1,1,1]]
const setZeroes = (matrix) => {
    const m = matrix.length;//row
    const n = matrix[0].length;//col
    let rowZeroIndx = [];
    let colZeroIndx = [];

    const map = {};

    const getAllIndicesOfZero = (row) => {
        return  row.map((e, i) => e === 0 ? i : '').filter(String)
    }
    for(let i=0;i<m;i++){
        map[i] = matrix[i]; // array
    }

    for(let key in map){
        if(map[key].includes(0)){
            rowZeroIndx.push(+key);
            colZeroIndx.push(...getAllIndicesOfZero(map[key]));
        }
    }
    for(let i of rowZeroIndx){
        for(let k=0;k<n;k++){
            matrix[i][k] = 0;
        }
    }
    for(let i of colZeroIndx){
        for(let k=0;k<m;k++){
            matrix[k][i] = 0;
        }
    }
    return matrix;
}

console.log(setZeroes(matrix))

//Учитывая m x nцелочисленную матрицу matrix, если элемент есть 0, установите всю ее строку и столбец в 0s.
//
// Вы должны сделать это на месте .