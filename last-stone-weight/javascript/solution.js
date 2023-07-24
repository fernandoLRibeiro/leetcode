/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const heap = new MaxPriorityQueue();

  for (const stone of stones) {
    heap.enqueue(stone);
  }

  while (heap.size() > 1) {
    let diff = heap.dequeue().element - heap.dequeue().element;
    if (diff > 0) {
      heap.enqueue(diff);
    }
  }
  if (heap.size() === 0) {
    return 0;
  }
  return heap.front().element;
};
