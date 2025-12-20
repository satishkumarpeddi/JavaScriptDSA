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
let isCompleteBinaryTree = (root) => {
  if (root === null) return true;
  const queue = [root];
  let seeNull = false;
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) seeNull = true;
    else {
      if (seeNull) return false;
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return true;
};
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
let rootNotComplete = null;
rootNotComplete = insert(rootNotComplete, 1);
rootNotComplete = insert(rootNotComplete, 21);
rootNotComplete = insert(rootNotComplete, 13);
rootNotComplete = insert(rootNotComplete, 11);
rootNotComplete = insert(rootNotComplete, 10);
rootNotComplete = insert(rootNotComplete, 9);
let rootComplete = null;
rootComplete = insertComplete(rootComplete, 1);
rootComplete = insertComplete(rootComplete, 21);
rootComplete = insertComplete(rootComplete, 13);
rootComplete = insertComplete(rootComplete, 11);
rootComplete = insertComplete(rootComplete, 10);
rootComplete = insertComplete(rootComplete, 9);
let list = [];
const inorder = (root) => {
  if (root === null) return;
  inorder(root.left);
  list.push(root.val);
  inorder(root.right);
};
inorder(rootNotComplete);
console.log("In Order Traversal Of Binary Tree (In-Complete) =>: ", list);
list = [];
inorder(rootComplete);
console.log("In Order Traversal Of Binary Tree (Complete) =>: ", list);
list = [];
console.log(
  "Is the Binary Tree is complete or not =>: ",
  isCompleteBinaryTree(rootNotComplete)
);
console.log(
  "Is the Binary Tree is complete or not =>: ",
  isCompleteBinaryTree(rootComplete)
);
