/**
 * @param {number} k
 * @param {number[]} nums
 */

var heapify = function (arr) {
  const heap = [];
  for (let item of arr) {
    heappush(heap, item);
  }
  return heap;
};

var heappush = function (heap, newKey) {
  heap.push(newKey);

  let curr = heap.length - 1;
  while (curr > 0) {
    let parent = Math.floor((curr - 1) / 2);
    if (heap[curr] < heap[parent]) {
      [heap[curr], heap[parent]] = [heap[parent], heap[curr]];
      curr = parent;
    } else {
      break;
    }
  }
};

var heappop = function (heap) {
  const n = heap.length;
  [heap[0], heap[n - 1]] = [heap[n - 1], heap[0]];

  const removedKey = heap.pop();
  let curr = 0;

  while (2 * curr + 1 < heap.length) {
    const leftIndex = 2 * curr + 1;
    const rightIndex = 2 * curr + 2;
    const minChildIndex =
      rightIndex < heap.length && heap[rightIndex] < heap[leftIndex]
        ? rightIndex
        : leftIndex;

    if (heap[minChildIndex] < heap[curr]) {
      [heap[minChildIndex], heap[curr]] = [heap[curr], heap[minChildIndex]];
      curr = minChildIndex;
    } else {
      break;
    }
  }
  return removedKey;
};

var KthLargest = function (k, nums) {
  this.minHeap = heapify(nums);
  this.k = k;
  while (this.minHeap.length > k) {
    heappop(this.minHeap);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  heappush(this.minHeap, val);
  if (this.minHeap.length > this.k) {
    heappop(this.minHeap);
  }
  return this.minHeap[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
