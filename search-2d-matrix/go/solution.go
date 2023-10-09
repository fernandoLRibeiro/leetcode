package main

func searchMatrix(matrix [][]int, target int) bool {
	var loRow, hiRow int = 0, len(matrix)
	var curRow int = loRow + (hiRow-loRow)/2
	for loRow < hiRow {
		var loCol, hiCol = 0, len(matrix[0])
		var curCol int = loCol + (hiCol-loCol)/2

		for loCol < hiCol {
			if matrix[curRow][curCol] == target {
				return true
			}

			if matrix[curRow][curCol] < target {
				loRow = curRow + 1
				loCol = curCol + 1
			} else {
				hiRow = curRow
				hiCol = curCol
			}
			curCol = loCol + (hiCol-loCol)/2
		}
		curRow = loRow + (hiRow-loRow)/2
	}
	return false
}
