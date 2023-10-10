package main

func canEat(piles []int, timeLimit int, speed int) bool {
	timeNeed := 0
	for _, banana := range piles {
		timeNeed += (banana + speed - 1) / speed

		if timeNeed > timeLimit {
			return false
		}
	}
	return true
}

func minEatingSpeed(piles []int, h int) int {
	lo, hi, res := 1, 1000000000, 1

	for lo <= hi {
		mid := (lo + hi) / 2
		if canEat(piles, h, mid) {
			res = mid
			hi = mid - 1
		} else {
			lo = mid + 1
		}
	}
	return res
}
