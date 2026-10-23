class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regex = /[^a-zA-Z0-9]/g
        const newStr = s.replace(regex, '').toLowerCase()
        let l = 0, r = newStr.length - 1;
        while (l <= r) {
            if(newStr[l] === newStr[r]){
                l++
                r--
            } else {
                return false
            }
        }
        return true
        
    }
}
