package main

func search(nums []int, target int) int {
	var lo, hi int = 0, len(nums) - 1
	var current int

	for hi >= lo {
		current = (lo + hi) / 2

		if nums[current] == target {
			return current
		}

		if nums[current] >= nums[lo] {
			if target > nums[current] || target < nums[lo] {
				lo = current + 1
			} else {
				hi = current - 1
			}
		} else {
			if target < nums[current] || target > nums[hi] {
				hi = current - 1
			} else {
				lo = current + 1
			}
		}
	}
	return -1
}
