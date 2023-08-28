package main

func isValidSudoku(board [][]byte) bool {
	hashMap := make(map[string]bool)

	for i := 0; i < 9; i++ {
		for j := 0; j < 9; j++ {
			row := i
			column := j

			currentVal := string(board[i][j])

			if currentVal == "." {
				continue
			}

			_, ok1 := hashMap[currentVal+"row "+string(row)]
			_, ok2 := hashMap[currentVal+"col "+string(column)]
			_, ok3 := hashMap[currentVal+"grid "+string((i/3)*3+(j/3))]

			if ok1 || ok2 || ok3 {
				return false
			} else {
				hashMap[currentVal+"row "+string(row)] = true
				hashMap[currentVal+"col "+string(column)] = true
				hashMap[currentVal+"grid "+string((i/3)*3+(j/3))] = true

			}
		}
	}

	return true
}

func main() {
}
