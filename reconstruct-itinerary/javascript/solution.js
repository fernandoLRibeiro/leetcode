/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  tickets.sort();
  const graph = new Map();

  for (const [src, dst] of tickets) {
    const edges = graph.get(src) || [];

    edges.push(dst);
    graph.set(src, edges);
  }

  const res = ["JFK"];

  const dfs = (src) => {
    if (res.length === tickets.length + 1) {
      return true;
    }

    const queue = graph.get(src) || [];

    if (!queue.length) {
      return false;
    }

    for (const v of queue.slice()) {
      res.push(v);
      queue.shift();

      if (dfs(v)) return true;

      res.pop();
      queue.push(v);
    }
    return false;
  };
  dfs("JFK");

  return res;
};
