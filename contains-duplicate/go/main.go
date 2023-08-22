package main

import "fmt"

func containsDuplicate(nums []int) bool {
	hashMap := make(map[int]bool)

	for i := 0; i < len(nums); i++ {
		if hashMap[nums[i]] {
			return true
		}
		hashMap[nums[i]] = true
	}

	return false
}

func main() {
	result := containsDuplicate([]int{1, 2, 3})
	fmt.Println(result)
}
