// sol 1

const reverseString = (str) => {
    let reverseString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverseString += str[i];
    }


    return reverseString;

}

console.log(reverseString("hello"))