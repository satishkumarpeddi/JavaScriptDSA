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
let getHeight = (root) => {
  if (root == null) return -1;
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
};
let getDiameterOfBTMax = (root) => {
  let maxDiameter = 0;
  let height = (root) => {
    if (root == null) return 0;
    const left = height(root.left);
    const right = height(root.right);
    maxDiameter = Math.max(maxDiameter, left + right + 1);
    return Math.max(left, right) + 1;
  };
  height(root);
  return maxDiameter;
};
let getDiameterOfBTMin = (root) => {
  let minDiameter = 0;
  let height = (root) => {
    if (root == null) return 0;
    const left = height(root.left);
    const right = height(root.right);
    minDiameter = Math.min(minDiameter, left + right + 1);
    return Math.min(left, right) + 1;
  };
  height(root);
  return minDiameter;
};
let root = null;
// root = insert(root, 1);
// root = insert(root, 21);
// root = insert(root, 13);
// root = insert(root, 11);
// root = insert(root, 10);
// root = insert(root, 9);
root = new BinaryTreeDemo(1);
root.left = new BinaryTreeDemo(2);
// root.right = new BinaryTreeDemo(3);
// root.left.left = new BinaryTreeDemo(4);
// root.left.right = new BinaryTreeDemo(5);
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
console.log("Height of the Binary Tree =>: ", getHeight(root));
console.log(
  "The Max-Diameter of the Binary Tree =>: ",
  getDiameterOfBTMax(root)
);
console.log(
  "The Min-Diameter of the Binary Tree =>: ",
  getDiameterOfBTMin(root)
);
