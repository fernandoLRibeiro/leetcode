package main

import "fmt"

func productExceptSelf(nums []int) []int {
	results := make([]int, len(nums))

	for i := range results {
		results[i] = 1
	}
	prefix := 1
	for i := range nums {
		results[i] = prefix
		prefix *= nums[i]
	}

	postfix := 1

	for i := len(results) - 1; i >= 0; i-- {
		results[i] *= postfix
		postfix *= nums[i]
	}

	return results
}

func main() {
	fmt.Println(productExceptSelf([]int{1, 2, 3, 4}))
}
