// this solution is really bad

package main

import (
	"fmt"
	"sort"
	"strings"
)

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	sArr, tArr := strings.Split(s, ""), strings.Split(t, "")
	sort.Strings(sArr)
	sort.Strings(tArr)

	for i := range sArr {
		if sArr[i] != tArr[i] {
			return false
		}
	}

	return true
}

func main() {
	// expect true
	fmt.Println(isAnagram("anagram", "nagaram"))
}
