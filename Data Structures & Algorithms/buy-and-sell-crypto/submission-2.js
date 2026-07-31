class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1
        let maxP = 0

        while (r < prices.length){
            let sell = prices[r]
            let buy = prices[l]
            if(buy < sell){
            let profit = sell - buy


                    maxP = Math.max(maxP, profit)
            
            } else {
                l = r
            }
            r++
        }
        return maxP
    }
}
