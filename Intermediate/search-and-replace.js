/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

String.prototype.isCapitalized = function () {
  return this.charAt(0).toUpperCase() === this.charAt(0)
}

function myReplace (str, before, after) {
  let arr = str.split(' ')
  let i = arr.findIndex((el) => el === before)

  if (i && arr[i].isCapitalized()) {
    let replace = after.charAt(0).toUpperCase() + after.slice(1)
    arr[i] = replace
  } else {
    arr[i] = after
  }

  return arr.join(' ')
}

myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped')
// => A quick brown fox leaped over the lazy dog

myReplace('Let us get back to more Coding', 'Coding', 'algorithms')
// => Let us get back to more Algorithms
