class BinaryTreeDemo {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function insert(root, val) {
  if (root == null) return new BinaryTreeDemo(val);
  if (val < root.val) root.left = insert(root.left, val);
  else if (val > root.val) root.right = insert(root.right, val);
  return root;
}
function minValueNode(root) {
  let temp = root;
  while (temp.left != null) {
    temp = temp.left;
  }
  return temp;
}
function deleteMethod(root, val) {
  if (root == null) return null;
  if (val < root.val) root.left = deleteMethod(root.left, val);
  else if (val > root.val) root.right = deleteMethod(root.right, val);
  else {
    if (root.left == null) return root.right;
    if (root.right == null) return root.left;
    let temp = minValueNode(root.right);
    root.val = temp.val;
    root.right = deleteMethod(root.right, temp.val);
  }
  return root;
}
//MAX - Depth Of A BinaryTree
let maxDepthOfBinaryTree = (root) => {
  if (root == null) return 0;
  return (
    Math.max(
      maxDepthOfBinaryTree(root.left),
      maxDepthOfBinaryTree(root.right)
    ) + 1
  );
};
//Using BFS/Level Order
let maxDepthOfBinaryTreeBFS = (root) => {
  if (root == null) return 0;
  let depth = 0;
  const queue = [root];
  while (queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const curr = queue.shift();
      depth++;
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }
  return depth;
};
let root = null;
root = insert(root, 1);
root = insert(root, 21);
root = insert(root, 13);
root = insert(root, 11);
root = insert(root, 10);
root = insert(root, 9);
let list = [];
const inorder = (root) => {
  if (root === null) return;
  inorder(root.left);
  list.push(root.val);
  inorder(root.right);
};
inorder(root);
console.log("In Order Traversal Of Binary Tree =>: ", list);
list = [];

console.log(
  "The MAX Depth of Binary Tree using DFS InOrder Style =>: ",
  maxDepthOfBinaryTree(root)
);
console.log(
  "The MAX Depth of Binary Tree using BFS/Level Order Style =>: ",
  maxDepthOfBinaryTreeBFS(root)
);
