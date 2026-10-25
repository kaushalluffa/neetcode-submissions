class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mp = {}
        for(let n of nums) {
            if(mp[n]){
                mp[n] += 1
            } else {
                mp[n] = 1
            }
        }
        return Object.entries(mp).sort((a,b) => b[1] - a[1]).map((item) => item[0]).slice(0, k)
    }
}
