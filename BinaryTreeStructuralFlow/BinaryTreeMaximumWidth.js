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
let insertComplete = (root, val) => {
  const newNode = new BinaryTreeDemo(val);
  if (root === null) return new BinaryTreeDemo(val);
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
let maxWidthOfBinaryTree = (root) => {
  if (root === null) return 0;
  const queue = [root];
  let max = 0;
  while (queue.length > 0) {
    let levelWidth = queue.length;
    max = Math.max(levelWidth, max);
    for (let i = 0; i < levelWidth; i++) {
      const node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return max;
};
let root = null;
root = insertComplete(root, 1);
root = insertComplete(root, 21);
root = insertComplete(root, 13);
root = insertComplete(root, 11);
root = insertComplete(root, 10);
root = insertComplete(root, 9);
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
  "The Maximum Width of the Binary Tree =>: ",
  maxWidthOfBinaryTree(root)
);
