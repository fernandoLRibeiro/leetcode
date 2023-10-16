package main

import "math"

func lengthOfLongestSubstring(s string) int {
	stringMap := make(map[byte]bool)
	var left int = 0
	var res float64 = 0

	for right := 0; right < len(s); right++ {
		_, ok := stringMap[s[right]]

		for ok {
			delete(stringMap, s[left])
			left++
			_, ok = stringMap[s[right]]
		}
		stringMap[s[right]] = true
		res = math.Max(res, float64(right-left+1))
	}
	return int(res)
}
