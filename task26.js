
const intervals = [[1,2],[2,3],[3,4],[1,3]]
const eraseOverlapIntervals = (intervals) => {
    const sortedIntervals = intervals.sort((a,b) => a[1] - b[1]);
    let count = 0;
    let prev = 0;

    for (let i = 1; i < sortedIntervals.length; i++) {
        let current = sortedIntervals[i];
        if (current[0] < sortedIntervals[prev][1]) {
            count++;
        } else {
            prev = i;
        }
    }

    return count;

}

console.log(eraseOverlapIntervals(intervals));

// Учитывая массив интервалов intervals
// где , верните минимальное количество интервалов, которое необходимо удалить, чтобы остальные интервалы не перекрывались .intervals[i] = [starti, endi]

//Ввод: интервалы = [[1,2],[2,3],[3,4],[1,3]]
//  Выход: 1
//  Объяснение: [1,3] можно удалить, а остальные интервалы — нет. -перекрытие.
// Пример 2:
//
// Ввод: интервалы = [[1,2],[1,2],[1,2]]
//  Выход: 2
//  Объяснение: Вам нужно удалить два [1,2], чтобы остальные интервалы не перекрывались.
// Пример 3:
//
// Ввод: интервалы = [[1,2],[2,3]]
//  Вывод: 0
//  Объяснение: Вам не нужно удалять какие-либо интервалы, поскольку они уже не перекрываются.