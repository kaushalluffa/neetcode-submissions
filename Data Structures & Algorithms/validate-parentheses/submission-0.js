class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeToOpen = {
            ')': '(',
            ']': '[',
            '}': '{',
        };

        for (let c of s) {
            console.log(c,'c')
            console.log(closeToOpen[c],'closeToOpen[c]')
            if (closeToOpen[c]) {
                console.log(stack,'stack')
                if (
                    stack.length > 0 &&
                    stack[stack.length - 1] === closeToOpen[c]
                ) {
                    stack.pop();
                } else {
                    return false;
                }
                console.log(stack,'stack 2')
            } else {
                stack.push(c);
                console.log(stack,'stack 3')
            }
        }
        console.log(stack,'stack 4')
        return stack.length === 0;
    }
}