class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let n = prices.length - 1
        let left = 0;
        let right = n - 1
        let lastMaxProfit = 0

        while (left < right){
            let sell = prices[right]
            let buy = prices[left]
            if(sell > buy){
            let profit = sell - buy
            if(profit > 0){
                if(profit > lastMaxProfit){
                    lastMaxProfit = profit
                }
                left++
            } else {
                right--
            }
            } else {
                left++
            }
        }
        return lastMaxProfit
    }
}
