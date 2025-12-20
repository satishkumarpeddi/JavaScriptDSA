class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
function insert(root, val) {
  if (root == null) return new TreeNode(val);
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
let insertComplete = (root, val) => {
  const newNode = new TreeNode(val);
  if (root === null) return new TreeNode(val);
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node.left === null) {
      node.left = newNode;
      return root;
    }
    if (node.right === null) {
      node.right = newNode;
      return root;
    }
    queue.push(node.left);
    queue.push(node.right);
  }
};
function depth(node) {
  let d = 0;
  while (node) {
    d++;
    node = node.left;
  }
  return d;
}
let isPerfect = (root) => {
  let d = depth(root);
  return isPerfectUtil(root, d, 0);
};
function isPerfectUtil(root, depth, level) {
  if (root === null) return true;
  //left node
  if (root.left === null && root.right === null) {
    return depth === level + 1;
  }
  //internal node
  if (root.left === null || root.right === null) {
    return false;
  }
  return (
    isPerfectUtil(root.left, depth, level + 1) &&
    isPerfectUtil(root.right, depth, level + 1)
  );
}
// let root = null;
// root = insertComplete(root, 1);
// root = insertComplete(root, 21);
// root = insertComplete(root, 13);
// root = insertComplete(root, 11);
// root = insertComplete(root, 10);
// root = insertComplete(root, 9);
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
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
  "Binary Tree is Perfect Or Not Perfect =>: ",
  isPerfect(root) ? "Perfect" : "Not Perfect"
);
