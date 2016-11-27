/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray (arr) {
  let newArr = []

  arr.forEach((el, x) => {
    newArr.push(verArr(el))

    if (el[1]) {
      newArr.push(verArr(el[1]))
    }
    return
  })

  let a = newArr.filter((el) => {
    return el !== undefined
  })

  return a
}

steamrollArray([1, [2], [3, [[4]]]]) // => [1, 2, 3, 4]
steamrollArray([1, [], [3, [[4]]]]) // => [ 1, 3, 4 ]

function verArr (el, a) {
  let value = el
  while (Array.isArray(value)) {
    value = value[0]
  }

  return value
}
