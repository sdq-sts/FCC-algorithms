/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/

function sumFibs (num) {
  let arr = [1, 1]
  let n1 = 1
  let n2 = 1
  let n = 0

  while (n <= num) {
    if (n % 2 !== 0) arr.push(n)
    n = n1 + n2
    n2 = n1
    n1 = n
  }

  return arr.reduce((sum, el) => sum + el, 0)
}

sumFibs(75025) // => 135721
