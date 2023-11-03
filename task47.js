const isValid = (s) => {
    const obj = {
        ")" : "(",
        "]" : "[",
        "}" : "{"
    }

    const stack = [];

    for (const strEl of s) {
        if (isOpenedBrackets(strEl)) {
            stack.push(strEl)
        } else if (obj[strEl] !== stack.pop()) {
              return false
        }

    }



    function isOpenedBrackets (ch) {
        return ["(", "[", "{"].includes(ch)
    }

    return stack.length === 0
}

console.log(isValid("()[]{}"))

//Учитывая строку s, содержащую только символы '(', ')', '{', и '}', определите, является ли входная строка допустимой
// .'['']'
//
// Входная строка действительна, если:
//
// Открытые скобки должны закрываться скобками того же типа.
// Открытые скобки должны закрываться в правильном порядке.
// Каждой закрывающей скобке соответствует открытая скобка того же типа.