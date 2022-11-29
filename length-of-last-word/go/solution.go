package main

import (
	"fmt"
	"strings"
)

func lengthOfLastWord (s string) int {
	slice := strings.Split(s, " ");
	
	var wordLength int

	for i:= len(slice)- 1; i >= 0; i-- {
		wordLength = len(slice[i])
		if (wordLength > 0) {
			return len(slice[i])
		}
	 } 

	return -1
}

func main() {
	fmt.Println(lengthOfLastWord("Hello World"))

	fmt.Println(lengthOfLastWord("   fly me   to   the moon  "))

	fmt.Println(lengthOfLastWord("a"))
}