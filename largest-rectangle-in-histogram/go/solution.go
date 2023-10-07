package main

import (
	"math"
)

func largestRectangleArea(heights []int) int {
	var stack [][2]int
	var maxArea int = 0

	for index, height := range heights {
		start := index

		for len(stack) > 0 && stack[len(stack)-1][1] > height {
			i, h := stack[len(stack)-1][0], stack[len(stack)-1][1]
			stack = stack[:len(stack)-1]
			maxArea = int(math.Max(float64(maxArea), float64(h*(index-i))))
			start = i
		}
		stack = append(stack, [2]int{start, height})
	}

	for _, pair := range stack {
		index, height := pair[0], pair[1]
		maxArea = int(math.Max(float64(maxArea), float64(height*(len(heights)-index))))
	}

	return maxArea
}
