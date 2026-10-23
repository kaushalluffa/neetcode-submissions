class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        for(let i = 0; i < prices.length; i++) {
            for (let j = i + 1; j<prices.length; j++) {
                const newProfit = prices[j] - prices[i]
                if(newProfit >= 0 && newProfit > maxProfit){
                    maxProfit = newProfit
                }
            }
        }
        return maxProfit
    }
}
