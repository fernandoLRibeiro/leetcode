package main

import (
	"sort"
)

func threeSum(nums []int) [][]int {
	res := make([][]int, 0)

	sort.Slice(nums, func(i, j int) bool {
		return nums[i] < nums[j]
	})

	for i := 0; i < len(nums); i++ {
		var left, right int = i + 1, len(nums) - 1

		if i > 0 && nums[i] == nums[i-1] {
			continue
		}

		for left < right {
			sum := nums[i] + nums[left] + nums[right]

			if sum == 0 {
				res = append(res, []int{nums[i], nums[left], nums[right]})
				left++

				for (nums[left] == nums[left-1]) && left < right {
					left++
				}
			}
			if sum < 0 {
				left++
			} else {
				right--
			}
		}
	}
	return res
}
