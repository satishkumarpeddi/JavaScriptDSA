class BinaryTreeStructure {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
let root = new BinaryTreeStructure(1);
root.left = new BinaryTreeStructure(3);
root.right = new BinaryTreeStructure(2);
root.left.left = new BinaryTreeStructure(5);
root.left.right = new BinaryTreeStructure(3);
root.right.right = new BinaryTreeStructure(9);
// let root = new BinaryTreeStructure(1);
// root.left = null;
// root.right = new BinaryTreeStructure(2);
let list = [];
let inOrder = (root) => {
  if (root == null) return;
  inOrder(root.left);
  list.push(root.val);
  inOrder(root.right);
};
let levelList = [];
let maxList = [];
let levelOrder = (root) => {
  if (root == null) return;
  const queue = [root];
  let level = 0;
  maxList.push(root.val);
  while (queue.length > 0) {
    let size = queue.length;
    let max = Number.MIN_VALUE;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      levelList.push({ level: level, nodeVal: node.val });
      if (node.left) {
        queue.push(node.left);
        max = Math.max(node.left.val, max);
      }
      if (node.right) {
        queue.push(node.right);
        max = Math.max(node.right.val, max);
      }
    }
    if (max !== Number.MIN_VALUE) maxList.push(max);
    level++;
  }
};
inOrder(root);
levelOrder(root);
console.log(list);
console.log(levelList);
console.log(maxList);
list = [];
