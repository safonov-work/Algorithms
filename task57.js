const maxArea = (height) => {
    let res = 0;

    let start = 0;
    let end = height.length - 1;

    while(start <= end) {
        res = Math.max(res, (end - start) * Math.min(height[start], height[end]))

        if (height[start] < height[end]) {
            start++
        }else {
            end--;
        }

    }


    return res;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));


//Вам дан целочисленный массив heightдлины n. Есть nвертикальные линии, нарисованные так, что двумя конечными
// точками линии являются и .ith(i, 0)(i, height[i])
//
// Найдите две линии, которые вместе с осью X образуют контейнер, в котором содержится больше всего воды.
//
// Возвращайте максимальное количество воды, которое может храниться в контейнере .