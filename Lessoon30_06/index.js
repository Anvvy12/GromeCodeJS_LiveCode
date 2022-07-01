//input: number
//output: undefide

//1 iterate from 2 to num
//2 check if N is prime
//2.1 iterate from 2 from to N
//2.2 if N % iterator === 0 then NOT prime
// 3 if Prime => console.log

function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
    let isPrime = true;

    for (let index = 2; index < number; index += 1) {
      if (number % index === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      console.log(number);
    }
  }
}

function checkIsPrime() {}
// test data
getPrimes(15);
getPrimes(7);
