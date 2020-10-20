const MinHeap = require("./minHeap");
const UFSets = require("../setMap/ufset");
const Graph = require("./graph");

class Edge {
  constructor(head, tail, cost) {
    this.head = head;
    this.tail = tail;
    this.cost = cost;
  }
}

function kruskal(graph) {
  const mst = [];

  const nodeNum = graph.getNodeNum();
  const edgeNum = graph.getEdgeNum();
  console.log(nodeNum, edgeNum);
  //   初始化最小堆和并查集
  const minHeap = new MinHeap(edgeNum);
  const ufset = new UFSets();
  ufset.init(nodeNum);
  // 把所有边插入到最小堆
  for (let i = 0; i < nodeNum; i++) {
    for (let j = i + 1; j < nodeNum; j++) {
      const cost = graph.getWeight(i, j);
      if (graph.getWeight(i, j) !== maxValue) {
        const ed = new Edge(i, j, cost);
        minHeap.insert(ed);
      }
    }
  }
  // 每次取最小堆里面的最小值，判断两个节点是否都在并查集里面，是则不处理，不是则存在数组里面
  let count = 1;
  while (count < nodeNum) {
    let ed = minHeap.delMin();
    let headRoot = ufset.find(ed.head);
    let tailRoot = ufset.find(ed.tail);
    if (headRoot !== tailRoot) {
      ufset.union(headRoot, tailRoot);
      mst.push(ed);
      count++;
    } else {
      console.log("构成环路");
      console.log(ed);
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

const mst = kruskal(graph);
console.log(mst);
