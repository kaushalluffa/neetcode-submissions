class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let minBuy = prices[0];
        for(let i = 0; i < prices.length; i++){
            let sell = prices[i]
            maxProfit = Math.max(maxProfit, sell - minBuy)
            minBuy = Math.min(sell, minBuy)
        }
        return maxProfit;
    }
}
