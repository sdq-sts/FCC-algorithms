/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/

function sumPrimes (num) {
  let sum = 0

  function isPrime (n) {
    let result = true

    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        result = false
        break
      }
    }

    return result
  }

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i
  }

  return sum
}

sumPrimes(977) // => 73156
sumPrimes(20000) // => 21171191
