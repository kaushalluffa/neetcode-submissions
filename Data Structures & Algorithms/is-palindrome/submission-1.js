class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let newStr = ''
        const isAlphanumeric = (str) => /^[a-z0-9]+$/i.test(str);
        for (let c of s){
            if(isAlphanumeric(c)){
                newStr += c.toLowerCase()
            }
        }
        return newStr === newStr.split('').reverse().join('')
    }
}
