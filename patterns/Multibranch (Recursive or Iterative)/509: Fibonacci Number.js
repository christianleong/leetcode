// https://leetcode.com/problems/fibonacci-number/description/
// Difficulty: Easy
// tags: math, recursion, multibranch (recursive or iterative)

// Problem
/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
 */

// Solution 1 - 11m 15s
var fib = function (n) {
  // declare variable to store sum
  // basic case
  // if n is 0return 0
  if (n === 0) return 0
  // if n is 1 return 1
  if (n === 1) return 1

  // recursive case
  return fib(n - 1) + fib(n - 2)
};

console.log(fib(3));