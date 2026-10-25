class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const mp = {}
        let res = []
        let bucket = []
        for(let i = 0; i < nums.length; i++) {
            if(!mp[nums[i]]){
                mp[nums[i]] = 1
            } else {
                mp[nums[i]]++
            }
        }
        for(let [num, freq] of Object.entries(mp)){
            if (!bucket[freq]){
                bucket[freq] = new Set().add(num)
            } else {
                bucket[freq].add(num)
            }

        }
        for(let i = bucket.length - 1; i >= 0; i--){
            if(bucket[i]) res.push(...bucket[i])
            if(res.length === k) break;
        }
        return res
        
    }
}
