/*
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  if (num < 1) return ''

  let arr = []
  while(arr.length < num) {
    arr.push(str)
  }
  
  return arr.join('')
}

repeatStringNumTimes("abc", 1) // => 'abcabcabc'
