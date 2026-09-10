class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let lp = 0
        let rp = numbers.length - 1

        while (lp < rp){
            const currSum = numbers[lp] + numbers[rp]
            if(currSum > target){
                rp -= 1
            } else if( currSum < target){
                lp += 1
            } else {
                return [lp + 1, rp + 1]
            }
        }
    }
}
