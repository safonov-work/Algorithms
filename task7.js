const isPalindrome = (str) => {
  const clearString = str
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/\s+/g, '')
    .toLowerCase()
  const reverseStr = clearString.split('').reverse().join('').toLowerCase()
  return reverseStr === clearString
}

let str = 'Pro'
console.log(isPalindrome(str))

//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.
