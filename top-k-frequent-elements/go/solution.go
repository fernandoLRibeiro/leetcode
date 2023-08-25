package main

import (
	"fmt"
	"sort"
)

func topKFrequent(nums []int, k int) []int {
	frequencyMap := make(map[int]int)

	for _, val := range nums {
		_, ok := frequencyMap[val]

		if !ok {
			frequencyMap[val] = 0
		}
		frequencyMap[val]++
	}

	frequencyArray := make([][]int, 0, len(frequencyMap))

	for num, freq := range frequencyMap {
		frequencyArray = append(frequencyArray, []int{num, freq})
	}

	sort.Slice(frequencyArray, func(i, j int) bool {
		return frequencyArray[i][1] > frequencyArray[j][1]
	})

	res := make([]int, 0)

	for i := range frequencyArray {
		res = append(res, frequencyArray[i][0])

		if len(res) == k {
			break
		}
	}

	return res
}

func main() {
	fmt.Println(topKFrequent([]int{1, 1, 1, 2, 2, 3}, 2))
	fmt.Println(topKFrequent([]int{3, 0, 1, 0}, 1))
	fmt.Println(topKFrequent([]int{5, 5, 5, 5, 5, 2, 2, 7, 7, 7, 1, 0, 0, 0, 0}, 3))
}
