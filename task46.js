const lengthOfLastWord =(str) => {
    const s = str.trim().split(" ");
    return s[s.length - 1].length
}

console.log(lengthOfLastWord('Hello World'))

//Дана строка s, состоящая из слов и пробелов, верните длину последнего слова в строке.
//
// Слово – это максимум
// подстрока
// состоящий только из символов, не являющихся пробелами.