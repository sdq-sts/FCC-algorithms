/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
  let sum = 0
  arr.sort((a, b) => a - b)
  let min = arr[0]
  let max = arr[1]

  while (min <= max) {
    sum += min
    min++
  }

  return sum
}

sumAll([4, 1]) // => 10
