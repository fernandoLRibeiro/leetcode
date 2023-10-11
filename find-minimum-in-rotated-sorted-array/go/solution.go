package main

func findMin(nums []int) int {
	var lo, hi int = 0, len(nums)
	var current int = (lo + hi) / 2

	for lo < hi {
		if current == 0 || nums[current-1] > nums[current] {
			return nums[current]
		}

		if nums[current] > nums[len(nums)-1] {
			lo = current
		} else {
			hi = current
		}
		current = (lo + hi) / 2
	}
	return nums[current]
}
