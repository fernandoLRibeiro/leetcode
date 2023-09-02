package main

import "fmt"

func longestConsecutive(nums []int) int {
	numsSet := make(map[int]bool, len(nums))
	longest := 0

	for i := range nums {
		numsSet[nums[i]] = true
	}

	for j := range nums {
		_, ok := numsSet[nums[j]-1]

		if !ok {
			length := 0
			_, _ok := numsSet[nums[j]+length]

			for _ok {
				length++
				_, _ok = numsSet[nums[j]+length]
			}
			if length > longest {
				longest = length
			}
		}

	}
	return longest
}

func main() {
	fmt.Println(longestConsecutive([]int{100, 4, 200, 1, 3, 2}))
	fmt.Println(longestConsecutive([]int{0, 3, 7, 2, 5, 8, 4, 6, 0, 1}))
}
