/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function (intervals, queries) {
  intervals.sort((a, b) => a[0] - b[0]);
  const minHeap = new MinPriorityQueue();
  let resHash = {};
  i = 0;

  for (const q of queries.slice().sort((a, b) => a - b)) {
    while (i < intervals.length && intervals[i][0] <= q) {
      const [left, right] = intervals[i];
      minHeap.enqueue([right - left + 1, right], right - left + 1);
      i++;
    }
    while (minHeap.size() && minHeap.front().element[1] < q) {
      minHeap.dequeue();
    }
    if (minHeap.size()) {
      resHash[q] = minHeap.front().element[0];
    } else {
      resHash[q] = -1;
    }
  }

  const res = [];

  for (let i = 0; i < queries.length; ++i) {
    res[i] = resHash[queries[i]];
  }
  return res;
};
