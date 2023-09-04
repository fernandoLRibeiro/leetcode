/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize !== 0) {
    return false;
  }
  let count = {};

  for (n of hand) {
    if (!count[n]) {
      count[n] = 0;
    }
    count[n]++;
  }

  let minHeap = new MinPriorityQueue();

  for (key of Object.keys(count)) {
    minHeap.enqueue(parseInt(key));
  }

  while (minHeap.size()) {
    let first = minHeap.front().element;

    for (let i = first; i < first + groupSize; ++i) {
      if (count[i] === undefined) {
        return false;
      }
      count[i]--;
      if (count[i] === 0) {
        if (i !== minHeap.front().element) {
          return false;
        }
        minHeap.dequeue();
      }
    }
  }

  return true;
};
