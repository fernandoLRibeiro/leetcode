/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const heap = new MinPriorityQueue({ priority: (arr) => arr[0] });

  for (let [x, y] of points) {
    const distance = x ** 2 + y ** 2;
    heap.enqueue([distance, x, y]);
  }
  const res = [];
  while (k > 0) {
    let [_, x, y] = heap.dequeue().element;
    res.push([x, y]);
    k--;
  }
  return res;
};
