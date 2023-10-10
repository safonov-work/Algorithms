var maxProfit = function(prices) {
    let max_profit = 0;
    let k = 0;
    for(let i = 1; i<prices.length; i++){

        if(prices[i]> prices[k]){
            let profit = prices[i]-prices[k]
            max_profit = Math.max(max_profit, profit);
        }else{
            k = i;
        }

    }
    return max_profit
};