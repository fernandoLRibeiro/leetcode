/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let numsHash = {};
  let frequencyArray = [];

  for (let num of nums) {
    numsHash[num] = (numsHash[num] || 0) + 1;
  }

  for (let [value, count] of Object.entries(numsHash)) {
    if (frequencyArray[count]) {
      frequencyArray[count].push(value * 1);
    } else {
      frequencyArray[count] = [value * 1];
    }
  }

  let result = [];
  for (let i = frequencyArray.length; i > 0; i--) {
    if (frequencyArray[i] !== undefined) {
      for (let j = 0; j < frequencyArray[i].length; j++) {
        result.push(frequencyArray[i][j]);
      }
    }
    if (result.length === k) {
      break;
    }
  }

  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
console.log(topKFrequent([1, 1, 1, 2, 2, 2], 1));
console.log(topKFrequent([1, 2], 2));
