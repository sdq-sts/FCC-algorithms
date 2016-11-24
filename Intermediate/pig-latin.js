/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function startWithVowel (word) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  let result = false

  vowels.forEach((el) => {
    if (el === word.charAt(0)) result = true
  })

  return result
}

function translatePigLatin (str) {
  if (startWithVowel(str)) return str + 'way'
  let word = ''

  if (startWithVowel(str.slice(1))) {
    word = str.slice(1) + str.slice(0, 1) + 'ay'
  } else {
    word = str.slice(2) + str.slice(0, 2) + 'ay'
  }

  return word
}

translatePigLatin('glove') // => oveglay
