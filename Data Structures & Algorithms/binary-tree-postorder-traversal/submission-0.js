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
        let res = []

        function postorder(node){
            if(!node){
                return res
            }
            if(node.left){
                postorder(node.left)
            }
            if(node.right){
                postorder(node.right)
            }
            res.push(node.val)
        }
        postorder(root)
        return res
    }
}
