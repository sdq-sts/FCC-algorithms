/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/

function mutation(arr) {
  let contains = true
  let firstArr = arr[0].toLowerCase()
  let secArr = arr[1].toLowerCase()

  secArr.split('').forEach((el) => {
    if (firstArr.indexOf(el) === -1) {
      contains = false
    }
  })

  return contains
}

mutation(["hello", "hey"]) // => false
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // => true
