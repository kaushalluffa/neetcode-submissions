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
        let obj = {}
        for (let i = 0; i < s.length; i++){
            obj[s[i]] = (obj[s[i]] || 0) + 1
        }
        for (let i = 0; i < t.length; i++){
            if(obj[t[i]] > 0){
                obj[t[i]] = obj[t[i]] - 1
            }
        }
        return Object.values(obj).every((v) => v === 0)
        
    }
}
