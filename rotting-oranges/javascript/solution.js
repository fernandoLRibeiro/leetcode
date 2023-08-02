/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let queue = [];
  let time = 0;
  let fresh = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  for (let r = 0; r < rows; ++r) {
    for (let c = 0; c < cols; ++c) {
      if (grid[r][c] === 1) {
        fresh++;
      }
      if (grid[r][c] === 2) {
        queue.push([r, c]);
      }
    }
  }

  const rotNeighbor = (r, c) => {
    if (r < 0 || c < 0 || r === rows || c === cols || grid[r][c] != 1) {
      return;
    }
    grid[r][c] = 2;
    queue.push([r, c]);
    fresh--;
  };

  while (queue.length && fresh > 0) {
    const currQueueLength = queue.length;
    for (let i = 0; i < currQueueLength; ++i) {
      [r, c] = queue.shift();
      rotNeighbor(r - 1, c);
      rotNeighbor(r + 1, c);
      rotNeighbor(r, c - 1);
      rotNeighbor(r, c + 1);
    }
    time++;
  }

  if (!fresh) return time;

  return -1;
};
