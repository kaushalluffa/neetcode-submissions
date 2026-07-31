class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }

        const countS = s.split("").sort()
        const countT = t.split("").sort()
        for(let i = 0; i <s.length; i ++){
            if(countS[i] !== countT[i]) {
                return false
            }
        }
        
        return true
    }
}
