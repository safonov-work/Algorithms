// sol1;

// Воспользуемся методом скользящего окна


const arr = [1,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1]
const getMaxSetSize = (n) => {
    let maxSetSize = 0;
    let curSetSize = 0;

    for (let i = 0; i < n.length; i++) {
        if (n[i] === 1){
            curSetSize++;
        } else {
            curSetSize = 0;
        }
        maxSetSize = Math.max(curSetSize, maxSetSize);
    }

    return maxSetSize;

}

console.log(getMaxSetSize(arr))

// sol2

const getMaxSetSize2 = (arr) => {
    let maxSetSize = 0;
    let windowStart = 0;
    let windowEnd = 0;

    while(windowEnd < arr.length) {
        if (arr[windowEnd] === 0) {
            let setSize = windowEnd - windowStart;
            maxSetSize = Math.max(maxSetSize, setSize)
            windowStart = windowEnd + 1;
        }
        windowEnd++;
    }
    return Math.max(maxSetSize, windowEnd - windowStart);
}

console.log(getMaxSetSize2(arr))



// Дан не пустой массив состоящий из 0 и 1. Найдите длинну максимальной непрерывной последовательности единиц.
