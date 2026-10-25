class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map()
        for(const n of nums) count.set(n, (count.get(n) ?? 0) + 1)
        const bucket = Array.from({length: nums.length + 1}, () => [])
        for (const [num, freq] of count) bucket[freq].push(num)
        const res = []
        
        for(let i = bucket.length - 1; i > 0 && res.length < k; i--){
            res.push(...bucket[i])
        }
        return res.slice(0, k)
        
    }
}
