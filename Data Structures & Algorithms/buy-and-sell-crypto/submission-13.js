class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0, minBuy = prices[0];
        for(let i = 1; i < prices.length; i++){
            maxProfit = Math.max(maxProfit, prices[i] - minBuy)
            minBuy = Math.min(prices[i], minBuy)
        }
        return maxProfit;
    }
}
