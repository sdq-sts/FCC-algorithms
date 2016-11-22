/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
  let args = []
  let newArr = []

  for(let key in arguments) {
    if (key !== '0') args.push(arguments[key])
  }

  newArr = arguments[0].filter((el) => {
    let addToArray = true

    args.forEach((arg) => {
      if (el === arg) {
        addToArray = false
      }
    })

    return addToArray
  })

  return newArr
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3) // => [1, 1]
