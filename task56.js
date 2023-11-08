
let str = "."
const isPalindrome = (str) => {
    if (str === " ") return true
    const clearString = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    let res = ''

    let l  = 0;
    let r = clearString.length - 1;

    while( l < r) {
      if (clearString[l] !== clearString[r]) {
          res += clearString[l]
          l++
          r--
      }

      r--;
    l++
    }
        return res.length === 0
}

console.log(isPalindrome(str));

//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all
// non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters
// and numbers.
//
// Given a string s, return true if it is a palindrome, or false otherwise.
//
//