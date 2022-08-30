// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?"
// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name){
  return `Hello, ${name} how are you doing today?`
}

console.log(greet("Taylor"))


// Beginner - Lost Without a Map

// Given an array of integers, return a new array with each value doubled.
// For example: [1, 2, 3] --> [2, 4, 6]

function maps(x){
 let NewArr = [];
  for(let i =0; i < x.length; i++){
    NewArr.push(x[i] * 2)
  }
  return NewArr;
}

console.log(maps([2,4,5]))

// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

function sumTwoSmallestNumbers(numbers) {
  let first = Math.min(...numbers)
  numbers.splice(numbers.indexOf(first), 1)
  let second = Math.min(...numbers)
  return first + second
}
