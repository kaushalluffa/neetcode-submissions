class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let seenMap = new Map()

        for(let i = 0; i<nums.length; i++){
            let diff = target - nums[i]
            if(seenMap.has(diff)){
                return [seenMap.get(diff), i]
            } 
                seenMap.set(nums[i], i)
            
        }
    }
}
