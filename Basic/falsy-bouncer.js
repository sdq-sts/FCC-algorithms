/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  let newArr = arr.filter((el) => {
    return Boolean(el)
  })
  return newArr
}

bouncer([7, "ate", "", false, 9]) // => [7, "ate", 9]
