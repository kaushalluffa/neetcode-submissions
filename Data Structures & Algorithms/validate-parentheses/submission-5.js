class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        const allBrackets = {
            "}":"{",
            ")":"(",
            "]":"["
        }
        for (let c of s){
            if(allBrackets[c]){
                if(stack.length > 0 && stack[stack.length - 1] === allBrackets[c]){
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(c)
            }
        }
        return stack.length === 0

    }
}
