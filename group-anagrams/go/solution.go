package main

import (
	"fmt"
	"sort"
	"strings"
)

func groupAnagrams(strs []string) [][]string {
	groupMap := make(map[string][]string)

	for i := 0; i < len(strs); i++ {
		originalString := &strs[i]
		strArray := strings.Split(strs[i], "")
		sort.Strings(strArray)
		sortedString := strings.Join(strArray, "")
		currGroup, ok := groupMap[sortedString]

		if ok {
			currGroup = append(currGroup, *originalString)
			groupMap[sortedString] = currGroup
		} else {
			groupMap[sortedString] = []string{*originalString}
		}
	}
	var res = [][]string{}

	for _, value := range groupMap {
		res = append(res, value)
	}
	return res
}

func main() {
	fmt.Println(groupAnagrams([]string{"eat", "tea", "tan", "ate", "nat", "bat"}))
}
