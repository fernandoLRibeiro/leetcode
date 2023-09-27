var DetectSquares = function () {
  this.ptsCount = {};
  this.pts = [];
};

/**
 * @param {number[]} point
 * @return {void}
 */
DetectSquares.prototype.add = function (point) {
  if (!this.ptsCount[point.join(",")]) {
    this.ptsCount[point.join(",")] = 0;
  }
  this.ptsCount[point.join(",")] += 1;
  this.pts.push(point);
};

/**
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function (point) {
  let res = 0;
  const [px, py] = point;
  for (const [x, y] of this.pts) {
    if (Math.abs(py - y) !== Math.abs(px - x) || x == px || y == py) {
      continue;
    }
    res +=
      this.ptsCount[[x, py].join(",")] * this.ptsCount[[px, y].join(",")] || 0;
  }

  return res;
};

/**
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */
