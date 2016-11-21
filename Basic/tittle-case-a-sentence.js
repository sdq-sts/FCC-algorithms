/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
  let arr = str.toLowerCase().split(" ")

  let na = arr.map((el) => {
    let elArr = el.split('').slice(1).join('')
    let elFirstChar = el.charAt(0).toUpperCase()

    return elFirstChar + elArr
  })

  return na.join(' ')
}

titleCase("I'm a little tea pot") // => I'm A Little Tea Pot
