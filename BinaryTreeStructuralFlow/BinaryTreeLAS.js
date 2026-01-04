class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function lowestCommonAncestorOfBS(root, p, q) {
  if (root == null) return root;
  if (root.val > p.data && root.val > q.val)
    return lowestCommonAncestorOfBS(root.left, p, q);
  else if (root.val < p.val && root.val < q.val)
    return lowestCommonAncestorOfBS(root.right, p, q);
  else return root;
}
root = null;
root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);
result = lowestCommonAncestorOfBS(root, root.left, root.right);
console.log(result.val, "is the lowest common ancestor of Binary Search Tree.");
