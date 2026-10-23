class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const check = s => /[a-z0-9]/i.test(s)
        let l = 0, r = s.length - 1;
        while (l < r) {
            while (l < r && !check(s[l])) l++;
            while (l < r && !check(s[r])) r--;
            if(s[l].toLowerCase() !== s[r].toLowerCase()) return false;
            l++
            r--
        }
        return true
    }
}
