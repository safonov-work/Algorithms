const isSubsequence = (s, t) => {

    let i = 0;
    let j = 0;

    const res = []

    while (i < s.length &&  j < t.length) {
        if (s[i] === t[j]) {
            res.push(s[i])
            i++
        }
        j++;
    }

    return res.join("") === s;
}

console.log(isSubsequence("abc", "ahbgdc"));

//Учитывая две строки sи t, верните trueif sявляется
// подпоследовательностьюt , или falseв противном случае .