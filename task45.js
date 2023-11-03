const majorityElement = (nums) => {
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        let element = nums[i];
        if (obj[element]) {
            obj[element]++;
        } else {
            obj[element] = 1;
        }
    }

    function findMaxValueKey(obj) {
        let maxValue = 0;
        let maxKey = '';

        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (obj[key] > maxValue) {
                    maxValue = obj[key];
                    maxKey = key;
                }
            }
        }

        return maxKey;
    }



    return findMaxValueKey(obj);
}

console.log(majorityElement([3,2,3]));

//Учитывая массив nums размера n, верните элемент большинства .
//
// Элемент большинства — это элемент, который появляется более ⌊n / 2⌋одного раза. Вы можете предположить, что элемент
// большинства всегда существует в массиве.
//
//