const intervals = [[1,3],[2,6],[8,10]];

const mergeIntervals = (intervals) => {
    if (intervals.length < 2 ) {
        return intervals;
    }
    const sortedIntervals = intervals.sort((a,b) => {
        return a[0] - b[0]
    })


    const res  = [intervals[0]];

    for (const int of sortedIntervals) {
        let  lastEl = res[res.length - 1];

       if (lastEl[1] >= int[0]) {
            lastEl[1] = Math.max(lastEl[1], int[1])
       } else {
           res.push(int)
       }

    }

    return  res
}

console.log(mergeIntervals(intervals))

//Учитывая массив, intervals где , объедините все перекрывающиеся интервалы и верните массив непересекающихся интервалов, которые охватывают все интервалы во входных данных .intervals[i] = [starti, endi]