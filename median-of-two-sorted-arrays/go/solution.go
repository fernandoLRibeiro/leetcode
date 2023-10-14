package main

import "math"

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	var A, B = nums1, nums2
	var total int = len(nums1) + len(nums2)
	var half int = (total + 1) / 2

	if len(B) < len(A) {
		A, B = B, A
	}

	var lo, hi int = 0, len(A) - 1

	for {
		i := (lo + hi) >> 1

		j := half - i - 2
		var aLeft, aRight, bLeft, bRight float64

		if i >= 0 {
			aLeft = float64(A[i])
		} else {
			aLeft = math.Inf(-1)
		}
		if (i + 1) < len(A) {
			aRight = float64(A[i+1])
		} else {
			aRight = math.Inf(1)
		}

		if j >= 0 {
			bLeft = float64(B[j])
		} else {
			bLeft = math.Inf(-1)
		}
		if (j + 1) < len(B) {
			bRight = float64(B[j+1])
		} else {
			bRight = math.Inf(1)
		}

		if aLeft <= bRight && bLeft <= aRight {
			if total%2 == 1 {
				return math.Max(aLeft, bLeft)
			}

			return (math.Max(aLeft, bLeft) + math.Min(aRight, bRight)) / 2

		} else if aLeft > bRight {
			hi = i - 1

		} else {
			lo = i + 1
		}
	}

}
