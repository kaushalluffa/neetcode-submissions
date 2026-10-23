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
    preorderTraversal(root) {
        let res = []
        function preorder(node){
            if(!node){
                return res
            }
            res.push(node.val)
            if(node.left){
                preorder(node.left)
            }
            if(node.right){
                preorder(node.right)
            }

        }
        preorder(root)
        return res
    }
}
