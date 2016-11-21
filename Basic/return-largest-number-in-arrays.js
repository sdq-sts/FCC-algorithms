/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
  let newArr = []

  arr.forEach((el, i) => {
    let largestIn = el[0]

    el.forEach((inEl) => {
      if (inEl > largestIn) {
        largestIn = inEl
      }
    })

    newArr.push(largestIn)
  })

  return newArr
}

largestOfFour([[4, 5, 1, 3],
               [13, 27, 18, 26],
               [32, 35, 37, 39],
               [1000, 1001, 857, 1]
            ]) // => [ 5, 27, 39, 1001 ]
