var MedianFinder = function () {
  this.maxHeap = new MaxPriorityQueue();
  this.minHeap = new MinPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.maxHeap.enqueue(num);

  if (
    this.maxHeap.size() &&
    this.minHeap.size() &&
    this.maxHeap.front().element > this.minHeap.front().element
  ) {
    const val = this.maxHeap.dequeue().element;
    this.minHeap.enqueue(val);
  }

  if (this.maxHeap.size() - this.minHeap.size() > 1) {
    const val = this.maxHeap.dequeue().element;
    this.minHeap.enqueue(val);
  }

  if (this.minHeap.size() > this.maxHeap.size()) {
    const val = this.minHeap.dequeue().element;
    this.maxHeap.enqueue(val);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.maxHeap.size() === this.minHeap.size()) {
    return (this.maxHeap.front().element + this.minHeap.front().element) / 2;
  }
  return this.maxHeap.front().element;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
