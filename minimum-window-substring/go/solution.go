package main

import (
	"math"
)

func minWindow(s string, t string) string {
	if len(t) == 0 {
		return ""
	}
	if len(t) > len(s) {
		return ""
	}

	tMap := make(map[byte]int)
	window := make(map[byte]int)

	for i := 0; i < len(t); i++ {
		_, ok := tMap[t[i]]
		if !ok {
			tMap[t[i]] = 0
		}
		tMap[t[i]]++
	}

	var need, have, left, resLen int = len(t), 0, 0, math.MaxInt32
	var res = [2]int{-1, -1}

	for right := 0; right < len(s); right++ {
		_, ok := window[s[right]]
		if !ok {
			window[s[right]] = 0
		}
		window[s[right]]++

		_, ok = tMap[s[right]]

		if ok && window[s[right]] <= tMap[s[right]] {
			have++
		}

		for have == need {
			if right-left+1 < resLen {
				res = [2]int{left, right}
				resLen = right - left + 1
			}
			window[s[left]]--

			_, ok = tMap[s[left]]

			if ok && window[s[left]] < tMap[s[left]] {
				have--
			}
			left++
		}
	}
	if resLen < math.MaxInt32 {
		return s[res[0] : res[1]+1]
	}
	return ""
}
