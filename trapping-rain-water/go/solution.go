package main

import "math"

func trap(height []int) int {
	var left int = 0
	var right int = len(height) - 1
	var maxLeft int = height[left]
	var maxRight int = height[right]
	var totalArea float64 = 0

	for left < right {
		if maxLeft > maxRight {
			right--
			totalArea += math.Max(0.0, float64(maxRight-height[right]))
			maxRight = int(math.Max(float64(height[right]), float64(maxRight)))

			continue
		}
		left++
		totalArea += math.Max(0.0, float64(maxLeft-height[left]))
		maxLeft = int(math.Max(float64(height[left]), float64(maxLeft)))
	}
	return int(totalArea)
}
