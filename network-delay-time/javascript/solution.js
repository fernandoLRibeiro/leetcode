/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const edges = new Array(n + 1).fill().map(() => []);

  for (const [u, v, w] of times) {
    edges[u].push([v, w]);
  }

  const minHeap = new MinPriorityQueue();
  const visit = new Set();
  let t = 0;

  minHeap.enqueue([k, 0], 0);

  while (!minHeap.isEmpty()) {
    [node, weight] = minHeap.dequeue().element;

    if (visit.has(node)) continue;
    visit.add(node);

    t = Math.max(t, weight);

    for (const [neighbor, neighborWeight] of edges[node]) {
      if (visit.has(neighbor)) continue;

      const cost = neighborWeight + weight;
      const node = [neighbor, cost];

      minHeap.enqueue(node, cost);
    }
  }

  if (visit.size !== n) {
    return -1;
  }
  return t;
};
