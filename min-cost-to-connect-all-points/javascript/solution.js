/**
 * @param {number[][]} points
 * @return {number}
 */

var minCostConnectPoints = function (points) {
  if (points.length === 0 || 1000 <= points.length) {
    return 0;
  }
  const graph = new Array(points.length).fill().map(() => []);
  const seen = new Array(points.length).fill(false);
  let minHeap = new MinPriorityQueue();

  for (let src = 0; src < points.length; ++src) {
    for (let dst = src + 1; dst < points.length; ++dst) {
      const [x1, y1] = points[src];
      const [x2, y2] = points[dst];

      const cost = Math.abs(x1 - x2) + Math.abs(y1 - y2);

      graph[src].push([dst, cost]);
      graph[dst].push([src, cost]);
    }
  }

  minHeap.enqueue([0, 0], 0);

  let nodeCount = 0;
  let res = 0;

  while (nodeCount < points.length) {
    let [src, srcCost] = minHeap.dequeue().element;

    if (seen[src]) continue;
    seen[src] = true;

    res += srcCost;
    nodeCount++;

    for (const [dst, dstCost] of graph[src]) {
      if (seen[dst]) continue;

      minHeap.enqueue([dst, dstCost], dstCost);
    }
  }
  return res;
};
