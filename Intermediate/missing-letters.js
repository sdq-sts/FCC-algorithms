/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter (str) {
  for (let i = 0; i <= str.length; i++) {
    let n = str.charCodeAt(i)
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      return String.fromCharCode(n + 1)
    }
  }

  return
}

console.log(fearNotLetter('abce')) // => d
console.log(fearNotLetter('bcd'))  // => undefined
