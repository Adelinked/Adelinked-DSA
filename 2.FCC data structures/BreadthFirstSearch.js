var assert = require("assert");
function bfs(graph, root) {
  var nodesLen = {};

  graph.forEach((element, index) => (nodesLen[index] = Infinity));
  nodesLen[root] = 0;

  const explore = (node, prevNode) => {
    graph[node].forEach((i, index) => {
      if (i !== 0 && index !== prevNode) {
        nodesLen[index] = nodesLen[node] + 1;
        explore(index, node);
      }
    });
  };
  explore(root, null);

  return nodesLen;
}

var exBFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0],
];

console.log(bfs(exBFSGraph, 3));

console.log(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ];
    var results = bfs(graph, 1);
    return results === { 0: 1, 1: 0, 2: 1, 3: Infinity };
  })()
);
var results = bfs(
  [
    [0, 1, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 1, 0],
  ],
  0
);

assert.deepEqual(
  bfs(
    [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0],
    ],
    0
  ),
  { 0: 0, 1: 1, 2: 2, 3: 3 }
);
assert.deepEqual(
  bfs(
    [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
    ],
    1
  ),
  { 0: 1, 1: 0, 2: 1, 3: "Infinity" }
);
assert.equal(1, "1", "yes");
