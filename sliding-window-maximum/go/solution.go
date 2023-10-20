package main

func maxSlidingWindow(nums []int, k int) []int {
	var output, deque []int
	var left, right int = 0, 0

	for right < len(nums) {
		for len(deque) > 0 && nums[deque[len(deque)-1]] < nums[right] {
			deque = deque[:len(deque)-1]
		}

		deque = append(deque, right)

		if left > deque[0] {
			deque = deque[1:]
		}

		if right+1 >= k {
			output = append(output, nums[deque[0]])
			left++
		}
		right++
	}
	return output
}
