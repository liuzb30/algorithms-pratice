var graphDict = {
  0: { 5: 2, 4: 3 }, // 表示从0可以到5,权值为2, 0可以到4,权值为3
  1: { 2: 7, 3: 7, 4: 2, 5: 2 },
  2: { 8: 8, 6: 7, 1: 7 },
  3: { 6: 2, 10: 3, 7: 1, 1: 7 },
  4: { 1: 2, 7: 3, 0: 3 },
  5: { 14: 10, 1: 2, 0: 2 },
  6: { 9: 1, 12: 4, 3: 2, 2: 7 },
  7: { 3: 1, 11: 2, 4: 3 },
  8: { 9: 4, 2: 8, 14: 1 },
  9: { 13: 9, 6: 1, 8: 4 },
  10: { 12: 6, 11: 8, 3: 3 },
  11: { 10: 8, 7: 2 },
  12: { 13: 2, 10: 6, 6: 4 },
  13: { 12: 2, 9: 9 },
};

const INF = 9999;

function minDict(graph, start, end) {
  const visitedArr = []; // 记录已经考察过的点
  const distance = {}; // 记录从start到各个点的最小距离
  const path = {}; // 记录路径

  for (let key in graph) {
    distance[key] = INF;
    path[key] = start;
  }

  distance[start] = 0;
  let minV = start;

  while (true) {
    visitedArr.push(minV);
    let vLink = graph[minV];
    for (let key in vLink) {
      if (distance[minV] + vLink[key] < distance[key]) {
        distance[key] = distance[minV] + vLink[key];
        path[key] = minV;
      }
    }

    let minDist = INF;
    // 找出最小路径且没访问过的节点
    for (let key in graph) {
      if (visitedArr.indexOf(key) >= 0) {
        continue;
      }

      if (distance[key] < minDist) {
        minDist = distance[key];
        minV = key;
      }
    }
    console.log(minV);
    if (minDist === INF) {
      break;
    }
  }

  // 输出最短路径
  let linkPath = [];
  let temp = path[end];
  linkPath.push(end);

  while (temp) {
    linkPath.push(temp);
    temp = path[temp];
    if (temp === start) {
      linkPath.push(start);
      break;
    }
  }
  console.log(linkPath);
}

function minDict2(graph, start, end) {
  const visitedArr = [];
  const dis = {};
  const path = {};

  // 初始化dis，从顶点v到达每一个顶点的距离都设置为INF=9999
  for (let key in graph) {
    dis[key] = INF;
    path[key] = start;
  }

  let minV = start;
  dis[minV] = 0;
  while (true) {
    visitedArr.push(minV);
    // 从顶点v开始，以顶点v为中心，找到所能到达的顶点及其路径长度，然后更新dis，将顶点v加入到v_arr中
    let vLink = graph[minV];
    for (let key in vLink) {
      if (dis[minV] + vLink[key] < dis[key]) {
        dis[key] = dis[minV] + vLink[key];
        path[key] = minV;
      }
    }

    // 找到距离顶点最近的顶点M
    let minValue = INF;
    for (let key in dis) {
      if (visitedArr.indexOf(key) >= 0) {
        continue;
      }
      if (dis[key] < minValue) {
        minValue = dis[key];
        minV = key;
      }
    }

    // 退出循环
    if (minValue === INF) {
      break;
    }
  }

  // 计算最短距离
  let tmp = path[end];
  let linkPath = [];
  linkPath.push(end);
  while (tmp) {
    linkPath.push(tmp);
    tmp = path[tmp];
    if (tmp === start) {
      linkPath.push(start);
      break;
    }
  }
  console.log(linkPath);
  console.log(dis);
}

minDict2(graphDict, "1", "13");
