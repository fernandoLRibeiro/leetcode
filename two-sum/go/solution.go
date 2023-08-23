package main

import "fmt"

func twoSum(nums []int, target int) []int {
	var hash = make(map[int]int)

	for i := 0; i < len(nums); i++ {
		diffIndex, ok := hash[target-nums[i]]

		if ok {
			return []int{diffIndex, i}
		}
		hash[nums[i]] = i
	}
	return []int{}
}

func main() {
	fmt.Println(twoSum([]int{3, 2, 4}, 6))
}
