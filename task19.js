const height = [2, 3, 4, 5, 6, 7]

const maxArea = (height) => {
  const res = []
  let left = 0
  let right = height.length - 1

  while (left < right) {
    let curr = Math.min(height[left], height[right]) * (right - left)
    res.push(curr)

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return Math.max(...res)
}

console.log(maxArea(height))

//Вам дан целочисленный массив heightдлины n. Есть nвертикальные линии, нарисованные так, что двумя конечными точками линии являются и .ith(i, 0)(i, height[i])

//Найдите две линии, которые вместе с осью X образуют контейнер, в котором содержится больше всего воды.

//Возвращайте максимальное количество воды, которое может хранить контейнер .

//Обратите внимание , что вы не можете наклонять контейнер.
