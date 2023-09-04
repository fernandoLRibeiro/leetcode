package main

import (
	"fmt"
	"unicode"
)

func isPalindrome(s string) bool {
	i := 0
	j := len(s) - 1

	arr := []rune(s)
	var l, r rune

	for i < j {
		l = unicode.ToLower(arr[i])
		r = unicode.ToLower(arr[j])
		if !(unicode.IsLetter(l) || unicode.IsDigit(l)) {
			i++
			continue
		}
		if !(unicode.IsLetter(r) || unicode.IsDigit(r)) {
			j--
			continue
		}

		if l != r {
			return false
		}
		i++
		j--
	}
	return true
}

func main() {
	fmt.Println(isPalindrome("A man, a plan, a canal: Panama"))
}
