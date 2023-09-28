package main

func twoSum(numbers []int, target int) []int {
	i := 0
	j := len(numbers) - 1

	for i < j {
		if numbers[i]+numbers[j] == target {
			res := []int{i + 1, j + 1}
			return res
		}

		if numbers[i]+numbers[j] < target {
			i++
		} else {
			j--
		}
	}
	return []int{}
}
