package main

import "math"

func maxArea(height []int) int {
	maximumArea := 0
	left := 0
	right := len(height) - 1

	for left < right {
		currentArea := int(math.Min(float64(height[left]), float64(height[right])))
		currentArea = currentArea * (right - left)

		maximumArea = int(math.Max(float64(currentArea), float64(maximumArea)))

		if height[left] > height[right] {
			right--
			continue
		}
		left++
	}
	return maximumArea
}
