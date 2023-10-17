
const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
const rotate = (matrix) => {
    for(let r = 0; r  < matrix.length; r++) {
        for (let c = r; c < matrix[0].length; c++) {
            [matrix[r][c],matrix[c][r]] = [matrix[c][r], matrix[r][c]];
        }
    }

    for (const row of matrix) {
        row.reverse()
    }

}

console.log(rotate((matrix)))


//Вам дано n x n2D - matrixизображение, поверните изображение на 90 градусов (по часовой стрелке).

//Вам необходимо повернуть изображение на месте , что означает, что вам придется напрямую изменить входную 2D-матрицу. НЕ выделяйте еще одну 2D-матрицу и не выполняйте вращение.

