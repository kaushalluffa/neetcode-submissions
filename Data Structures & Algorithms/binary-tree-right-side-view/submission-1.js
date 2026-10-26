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
    rightSideView(root) {

        let res = []
        if(!root){
            return res
        }
        let q = [root]
        while (q.length) {
            let rightSide = null
            const qLen = q.length
            for(let i = 0; i < qLen; i++){
                const node = q.shift()
                if(node){
                    rightSide = node
                    q.push(node.left)
                    q.push(node.right)
                }
            }
            if(rightSide){
                res.push(rightSide.val)
            }
        }
        return res
    }
}
