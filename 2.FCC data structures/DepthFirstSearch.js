var assert = require("assert");

function dfs(graph, root) {
  let stack = [];

  const explore = (node, prevNode) => {
    graph[node].forEach((i, index) => {
      if (i !== 0 && index !== prevNode) {
        explore(index, node);
        stack.unshift(index);
      }
    });
  };

  explore(root, null);
  stack.unshift(root);
  let displayStack = stack;
  /*for (let i = 0; i < stack.length; i++) {
    displayStack[i] = stack[stack.length - i - 1];
  }*/
  return displayStack;
}

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0],
];
console.log(dfs(exDFSGraph, 1));
