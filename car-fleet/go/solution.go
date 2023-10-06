package main

import (
	"sort"
)

func carFleet(target int, position []int, speed []int) int {
	pairs := make([][]int, 0)

	for i := 0; i < len(position); i++ {
		pairs = append(pairs, []int{position[i], speed[i]})
	}

	sort.Slice(pairs, func(i, j int) bool {
		return pairs[i][0] > pairs[j][0]
	})

	var stack []float32

	for _, pair := range pairs {
		position, speed := pair[0], pair[1]
		stack = append(stack, float32(target-position)/float32(speed))

		if len(stack) > 1 && stack[len(stack)-1] <= stack[len(stack)-2] {
			stack = stack[:len(stack)-1]
		}
	}
	return len(stack)
}

func main() {
	carFleet(12, []int{10, 8, 0, 5, 3}, []int{2, 4, 1, 1, 3})
}
