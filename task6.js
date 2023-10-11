const isValid = (s) => {
  const stackBrackets = []

  for (let i = 0; i < s.length; i++) {
    let currentStr = s.charAt(i)

    switch (currentStr) {
      case '(':
        stackBrackets.push(')')
        break
      case '[':
        stackBrackets.push(']')
        break
      case '{':
        stackBrackets.push('}')
        break
      default:
        if (currentStr !== stackBrackets.pop()) {
          return false
        }
    }
  }
  return stackBrackets.length === 0
}

console.log(isValid('{}[](){}{}'))
