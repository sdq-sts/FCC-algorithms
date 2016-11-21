/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
  let arr = str.split(' ')
  let longest = 0

  arr.forEach(function(el) {
    if (el.length > longest) {
      longest = el.length
    }
  })

  return longest
}

findLongestWord("The quick brown fox jumped over the lazy dog") // => 6
