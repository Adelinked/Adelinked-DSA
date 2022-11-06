/*class Node {
  constructor(name) {
    this.name = name;
  }
}
nodesArr = [
  new Node("James"),
  new Node("Jill"),
  new Node("Jenny"),
  new Node("Jeff"),
];*/
var undirectedAdjList = {
  James: ["Jeff"],
  Jill: ["Jenny"],
  Jenny: ["Jill", "Jeff"],
  Jeff: ["James", "Jenny"],
};
console.log(undirectedAdjList);
