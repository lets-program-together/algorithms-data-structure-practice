class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {
    };
  }

  addVertex(node) {
    this.adjacentList[node] = new Set()
    this.numberOfNodes++
  }
  addEdge(node1, node2) {
    let nodesInGraph = [...Object.keys(this.adjacentList)]
    if (nodesInGraph.indexOf(node1) > -1 &&
      nodesInGraph.indexOf(node2) > -1) {
      this.adjacentList[node1].add(node2)
      this.adjacentList[node2].add(node1)
    }
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
        console.log(node + "--->" + connections);
      }
    }
  }
}