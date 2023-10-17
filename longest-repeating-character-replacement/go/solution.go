package main

import "math"

func characterReplacement(s string, k int) int {
	var left int = 0
	var res, max float64 = 0, 0

	charMap := make(map[byte]int)

	for right := 0; right < len(s); right++ {
		charMap[s[right]] = 1 + charMap[s[right]]
		max = math.Max(max, float64(charMap[s[right]]))

		if (right-left+1)-int(max) > k {
			charMap[s[left]]--
			left++
		}
		res = math.Max(res, float64(right-left+1))
	}
	return int(res)
}
