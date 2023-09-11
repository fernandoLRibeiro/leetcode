/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  const visit = new Set();
  const minHeap = new MinPriorityQueue();

  minHeap.enqueue([0, 0], grid[0][0]);

  let maxTime = 0;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (!minHeap.isEmpty()) {
    const { element, priority: cost } = minHeap.dequeue();
    const [row, column] = element;

    visit.add(grid[row][column]);
    maxTime = Math.max(maxTime, cost);

    if (row === grid.length - 1 && column === grid[0].length - 1)
      return maxTime;

    for (let [dirRow, dirCol] of directions) {
      [neighborRow, neighborCol] = [row + dirRow, column + dirCol];

      if (
        neighborRow < 0 ||
        neighborCol < 0 ||
        neighborRow === grid.length ||
        neighborCol === grid[0].length ||
        visit.has(grid[neighborRow][neighborCol])
      ) {
        continue;
      }
      minHeap.enqueue(
        [neighborRow, neighborCol],
        grid[neighborRow][neighborCol]
      );
    }
  }
};
