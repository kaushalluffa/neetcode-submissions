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
        const ltrMap = new Map() 

        for(let i = 0; i < s.length; i++){
            if(ltrMap.get(s[i])){
                ltrMap.set(s[i], ltrMap.get(s[i]) + 1)
            } else {
                ltrMap.set(s[i], 1)
            }
        }

        for(let j = 0; j< t.length; j++) {
            if(ltrMap.get(t[j])){
                ltrMap.set(t[j], ltrMap.get(t[j]) - 1)
            } else {
                return false
            }
        }
        return true
    }
}
