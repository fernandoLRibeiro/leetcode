package main

func search(nums []int, target int) int {
	var startPointer, endPointer int = 0, len(nums)
	var curIndex int = startPointer + (endPointer-startPointer)/2

	for startPointer < endPointer {
		if nums[curIndex] == target {
			return curIndex
		}

		if nums[curIndex] < target {
			startPointer = curIndex + 1
		} else if nums[curIndex] > target {
			endPointer = curIndex
		}

		curIndex = startPointer + (endPointer-startPointer)/2
	}

	return -1
}
