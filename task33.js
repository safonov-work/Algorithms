const prices = [7,6,4,3,5];
const maxProfit = (prices) => {
    if (prices.length < 1) return 0;

    let left = 0;
    let right = 1;
    let maxProfit = 0;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left]
            maxProfit = Math.max(maxProfit, profit)
        } else {
            left = right;

        }
        right++;
    }

return  maxProfit
}

console.log(maxProfit(prices))

//Вам дан массив prices, в котором prices[i]указана цена данной акции на текущий день.ith
//
// Вы хотите максимизировать свою прибыль, выбрав один день для покупки одной акции и выбрав другой день в будущем для продажи этой акции.
//
// Верните максимальную прибыль, которую вы можете получить от этой сделки . Если вы не можете получить никакой прибыли, вернитесь 0.