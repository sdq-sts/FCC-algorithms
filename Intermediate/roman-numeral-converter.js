/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
  let dec = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let rom = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let str = ''

  dec.forEach((el, index) => {
    while (dec[index] <= num) {
      str += rom[index]
      num -= dec[index]
    }
  })

  return console.log(str)
}

convertToRoman(36) // => 'XXXVI'

/*
  For each value in 'dec' array
    while the index in 'dec' is less or equal to 'num'
      'str' receives the concatenates the value in index of 'rom' array and
      'num' decrements the value from index in 'dec'

  num = 36 - 10 => 26
  10 => X
  num = 26 - 10 => 16
  10 => X
  num = 16 - 10 => 6
  10 => X

  num = 6 - 5 => 1
  5 => V
  num = 1
  1 => I
*/
