/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether (num1, num2) {
  if (num1 === undefined || typeof num1 !== 'number') return
  if (num2 && typeof num2 !== 'number') return
  if (num2 === undefined) return add

  function add (num2) {
    if (num2 === undefined || typeof num2 !== 'number') return
    return num1 + num2
  }

  return num1 + num2
}

addTogether(2, 3) // => 5
addTogether(2)(3) // => 5
