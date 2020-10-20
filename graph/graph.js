const Queue = require("../queue/queue");

class Graph {
  constructor() {
    this.maxValue = 9999;
    this.maps = [];
    this.nodeNum = 0;
    this.edgeNum = 0;
  }

  init(inputMaps) {
    this.maps = inputMaps;
    this.nodeNum = this.getNodeNum();
    this.edgeNum = this.getEdgeNum();
  }
  getNodeNum() {
    if (this.nodeNum != 0) {
      return this.nodeNum;
    }
    return this.maps.length;
  }
  getEdgeNum() {
    if (this.edgeNum != 0) {
      return this.edgeNum;
    }
    let count = 0;
    for (let i = 0; i < this.nodeNum; i++) {
      for (let j = 0; j < this.nodeNum; j++) {
        if (this.maps[i][j] > 0 && this.maps[i][j] < this.maxValue) {
          count++;
        }
      }
    }
    return count;
  }
  getWeight(u, v) {
    return this.maps[u][v];
  }

  dfS(v) {
    function graphDfs(v, visited, component) {
      visited[v] = 1;
      component.push(v);
      const row = this.maps[v];
      row.forEach((item, i) => {
        if (item < maxValue && visited[i] === 0) {
          graphDfs(i, visited, component);
        }
      });
    }

    let visited = new Array(this.nodeNum).fill(0);
    let component = [];
    graphDfs(v, visited, component);

    return component;
  }

  bfs(v) {
    function graphBfs(v, visited, component) {
      let queue = new Queue();
      queue.enqueue(v);
      visited[v] = 1;
      component.push(v);

      while (!queue.isEmpty()) {
        let visitedV = queue.enqueue();
        let row = this.maps[visitedV];
        row.forEach((item, i) => {
          if (item < this.maxValue && visited[i] === 0) {
            queue.enqueue(i);
            visited[i] = 1;
            component.push(i);
          }
        });
      }
    }

    let visited = new Array(this.nodeNum).fill(0);
    let component = [];
    graphBfs(v, visited, component);

    return component;
  }

  compoents() {
    let visited = new Array(this.nodeNum).fill(0);
    let componentList = [];
    for (let i = 0; i < this.nodeNum; i++) {
      if (visited[i] === 0) {
        let component = [];
        this.graphBfs(i, visited, component);
        componentList.push(component);
      }
    }
    return componentList;
  }
}

module.exports = Graph;
