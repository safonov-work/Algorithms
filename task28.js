let str = "ABABA"
let k = 2;
const characterReplacement  = (s, k) => {
    let map = [26]
    let largestCount = 0, beg = 0, maxlen = 0;
    for(let end = 0; end < s.length; end++){
        const c = s[end]
        map[c] = (map[c] || 0) + 1
        largestCount = Math.max(largestCount, map[c])
        if(end - beg + 1 - largestCount > k){
            map[s[beg]] -= 1
            beg += 1
        }
        maxlen = Math.max(maxlen, end - beg + 1);
    }
    return maxlen;
}

console.log(characterReplacement(str,k));

//Вам дана строка sи целое число k. Вы можете выбрать любой символ строки и заменить его на любой другой символ английского верхнего регистра. Вы можете выполнить эту операцию в большинстве kслучаев.

//Возвращает длину самой длинной подстроки, содержащей ту же букву, которую вы можете получить после выполнения вышеуказанных операций .

