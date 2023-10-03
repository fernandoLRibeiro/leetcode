package main

import (
	"fmt"
	"strconv"
)

func evalRPN(tokens []string) int {
	var stack []int
	var a, b int

	if len(tokens) == 1 {
		s, _ := strconv.Atoi(tokens[0])
		return s
	}

	for _, c := range tokens {
		switch c {
		case "+":
			a, b, stack = getOperands(stack)
			stack = append(stack, (a + b))
		case "-":
			a, b, stack = getOperands(stack)
			stack = append(stack, (a - b))
		case "*":
			a, b, stack = getOperands(stack)
			stack = append(stack, (a * b))
		case "/":
			a, b, stack = getOperands(stack)
			stack = append(stack, (a / b))

		default:
			i, _ := strconv.Atoi(c)
			stack = append(stack, i)
		}
	}
	return stack[0]
}

func getOperands(stack []int) (int, int, []int) {

	a := stack[len(stack)-2]
	b := stack[len(stack)-1]
	stack = stack[:len(stack)-2]

	return a, b, stack
}

func main() {
	fmt.Println(evalRPN([]string{"2", "1", "+", "3", "*"}))
}
