const getLongString = (str) => {
    let strToArr = str.split(" ");

    let counter = 0;

    for (const strToArrElement of strToArr) {
        if (strToArrElement.length > counter) {
            counter = strToArrElement.length
        }
    }

    return counter;


}
console.log(getLongString("van darkholm"))