package main

import "math"

func maxProfit(prices []int) int {
	var lo, hi, profit int = 0, 1, 0

	for hi < len(prices) {
		if prices[lo] < prices[hi] {
			profit = int(math.Max(float64(profit), float64(prices[hi]-prices[lo])))
		} else {
			lo = hi
		}
		hi++
	}
	return profit

}
