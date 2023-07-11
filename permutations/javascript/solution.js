/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
	return dfs(nums);	
}

function dfs(nums, permutation = [], permutations = []){
	if (nums.length === permutation.length) return permutations.push(permutation.slice());

	for (let i = 0; i < nums.length; ++i) {
		if (permutation.includes(nums[i])) continue;


		permutation.push(nums[i]);
		dfs(nums, permutation, permutations);
		permutation.pop();
	}

	return permutations;
}

console.log(permute([1,2,3]));

