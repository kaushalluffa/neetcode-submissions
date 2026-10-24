/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    postorderTraversal(root) {
        let res = [], stack = [root], visit = [false]

        while(stack.length){
            const curr = stack.pop()
            const v = visit.pop()

            if(curr){
                if(v) {
                    res.push(curr.val)
                } else {
                    stack.push(curr)
                    visit.push(true)
                    stack.push(curr.right)
                    visit.push(false)
                    stack.push(curr.left)
                    visit.push(false)
                }
            }

        }
        return res
    }
}
