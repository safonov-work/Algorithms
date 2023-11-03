const longestCommonPrefix = () => {
    let output = "";
    for (let i = 0; i < strs[0].length; i++) {
        if(strs.every(str => str[i] === strs[0][i])) output += strs[0][i];
        else break;
    }
    return output;
}

console.log(longestCommonPrefix(["цветок","поток","полет"]));


// Напишите функцию для поиска самой длинной строки общего префикса среди массива строк.
//
// Если общего префикса нет, верните пустую строку "".