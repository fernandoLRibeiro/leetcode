/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let count = {};
  let countHeap = new MaxPriorityQueue();

  for (let task of tasks) {
    if (!count[task]) {
      count[task] = 1;
    } else {
      count[task] += 1;
    }
  }

  for (let value of Object.values(count)) {
    countHeap.enqueue(value);
  }

  let time = 0;
  const queue = [];

  while (countHeap.size() || queue.length) {
    time++;

    if (countHeap.size()) {
      let cnt = countHeap.dequeue().element - 1;
      if (cnt) {
        queue.push([cnt, time + n]);
      }
    }

    if (queue.length && queue[0][1] === time) {
      countHeap.enqueue(queue.shift()[0]);
    }
  }

  return time;
};
