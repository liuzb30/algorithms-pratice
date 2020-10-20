const MinHeap = require("./minHeap");
const Graph = require("./graph");

class Edge {
  constructor(head, tail, cost) {
    this.head = head;
    this.tail = tail;
    this.cost = cost;
  }
}

function prim(graph, v) {
  const mst = [];
  const nodeNum = graph.getNodeNum();
  const edgeNum = graph.getEdgeNum();
  // 标记访问的节点
  const bMst = new Array(nodeNum).fill(0);
  bMst[v] = 1;
  let startV = v;
  let count = 1;
  const minHeap = new MinHeap();

  while (count < nodeNum) {
    // 先找到startV能到达的顶点
    for (let i = 0; i < nodeNum; i++) {
      if (bMst[i] === 0) {
        const cost = graph.getWeight(startV, i);
        if (cost !== maxValue) {
          const edge = new Edge(startV, i, cost);
          minHeap.insert(edge);
        }
      }
    }
    while (!minHeap.isEmpty()) {
      let minEdge = minHeap.delMin();
      // 如果tail还没有加入到生成树的顶点集合中
      if (bMst[minEdge.tail] === 0) {
        mst.push(minEdge);
        startV = minEdge.tail;
        bMst[minEdge.tail] = 1;
        count++;
        break;
      }
    }
  }

  return mst;
}

const maxValue = 9999;
const maps = [
  [0, 28, maxValue, maxValue, maxValue, 10, maxValue],
  [28, 0, 16, maxValue, maxValue, maxValue, 14],
  [maxValue, 16, 0, 12, maxValue, maxValue, maxValue],
  [maxValue, maxValue, 12, 0, 22, maxValue, 18],
  [maxValue, maxValue, maxValue, 22, 0, 25, 24],
  [10, maxValue, maxValue, maxValue, 25, 0, maxValue],
  [maxValue, 14, maxValue, 18, 24, maxValue, 0],
];

const graph = new Graph();
graph.init(maps);

const mst = prim(graph, 1);
console.log(mst);
