class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0
        let lp = 0
        let rp = heights.length - 1
         while (lp < rp) {
            let width = rp - lp
            let height = Math.min(heights[rp], heights[lp])
            let area = width * height
            res = Math.max(area, res)
            if(heights[lp] < heights[rp]){
                lp += 1
            } else {
                rp -= 1
            }
         }
         return res
    }
}
