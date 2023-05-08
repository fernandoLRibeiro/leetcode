var TimeMap = function () {
  this.map = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map[key]) {
    this.map[key] = [[value, timestamp]];
    return;
  }

  this.map[key].push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map[key]) {
    return "";
  }

  let keyValue = this.map[key];

  if (keyValue[0][1] > timestamp) {
    return "";
  }

  let hi = keyValue.length;
  let lo = 0;
  let mid;

  while (lo < hi) {
    mid = Math.floor((lo + hi) / 2);

    if (keyValue[mid][1] === timestamp) {
      return keyValue[mid][0];
    }

    if (keyValue[mid][1] > timestamp) {
      hi = mid;
    }
    if (keyValue[mid][1] < timestamp) {
      lo = mid + 1;
    }
  }

  return keyValue[mid][0];
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
let testMap = new TimeMap();

testMap.set("love", "high", 10);
testMap.set("love", "low", 20);
console.log(testMap.get("love", 5));

console.log(testMap.get("love", 10));
console.log(testMap.get("love", 15));
console.log(testMap.get("love", 20));
console.log(testMap.get("love", 25));
