package main

// Definition for singly-linked list.
type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseList(head *ListNode) *ListNode {
	currentNode := head
	var temp, prev *ListNode
	prev = nil

	for currentNode != nil {
		temp = currentNode.Next
		currentNode.Next = prev
		prev = currentNode
		currentNode = temp
	}
	return prev
}
