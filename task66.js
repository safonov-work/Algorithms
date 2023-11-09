const numericPalindrome = (nums) => {
    const res = [];
    const numsArr = Array.from(String(nums))


    let left = 0;
    let right = left + 1;

    while (right < numsArr.length) {
        let currentStr = numsArr.slice(left,right + 1);
        if (isPalindrome(currentStr)) {
            res.push(currentStr);
            right++;
        }
        left++;
        right++;
    }


    function isPalindrome(str) {
        return str.join("") === str.reverse().join("")
    }


    return res;


}

console.log(numericPalindrome(1551))