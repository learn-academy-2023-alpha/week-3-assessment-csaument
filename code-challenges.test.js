// ASSESSMENT 3: Coding Practical Questions with Jest

const { assertTSPropertySignature } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibonacciDigits", () => {
      const fibLength1 = 6
      // Expected output: [1, 1, 2, 3, 5, 8]

      const fibLength2 = 10
      // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

      it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
            expect(alternateFib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
            expect(alternateFib(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
      })
  })

// ReferenceError: fibonacciDigits is not defined

// b) Create the function that makes the test pass.

// Create a function fibonacciDigits
// Input: an integer number (prompt specifies > 2)
// Output: an array of integers representing numbers within the Fibonacci sequence
// Returns an array of [1] if the input is one or an array of [1, 1] if the input is two
// Create a temporary array consisting of a recursive call that passes the original argument -1
// The last two items in the history array are added to create a new value
// Within a new array, the history array is deconstructed and the new value is appended to the end
// This array is returned up to the original call of the function
// Throws a TypeError and message if the typeof input !== "number"
// Throws a TypeError and message if the input is not an integer (n % 1 !== 0)

const fibonacciDigits = (input) => {
      if(typeof input !== "number"){
            throw TypeError("Please input a number")
      }else if(input % 1 !== 0){
            throw TypeError("Please input an integer")
      }else if(input <= 0){
            throw TypeError("Please input a counting number")
      }else if(input === 1){
            return [1]
      }else if(input === 2){
            return [1, 1]
      }else{
            let history = fibonacciDigits(input -1)
            let newValue = history[input-3] + history[input-2]
            return [...history, newValue]
      }
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.438 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 2.51s.

// Note: This recursive call, particularly with error handling, is excessively computationally demanding for both memory and processing power. An alternative implementation of recursion could use two functions to reduce the error handling conditional calls.


// Create an alternate Fib function using .reduce with an accumulator array. Error handling and initial state is set similar to above.
// First, create an empty array using the .from method of Array. Set the length of that array to the input +1, directly modifying that attribute.
// Then, call the .reduce method on that empty array. Initialize the accumulator to an empty array.
// Use the accumulator maintained through the .reduce function to concatenate each new value to the end.
// Use the terniary function to skip the first index, which will prevent issues with calling a negative index on the accumulator array.
// Calculate each value as the sum of the previous two values in the accumulator.
// Slice the array to remove the leading zero.
// Return the results.

const alternateFib = (input) => {
      if(typeof input !== "number"){
            throw TypeError("Please input a number")
      }else if(input % 1 !== 0){
            throw TypeError("Please input an integer")
      }else if(input <= 0){
            throw TypeError("Please input a counting number")
      }else if(input === 1){
            return [1]
      }else if(input === 2){
            return [1, 1]
      }else{
           return Array.from({ length: input + 1}).reduce((accumulator, value, index) => accumulator.concat(index > 1 ? accumulator[index - 1] + accumulator[index - 2] : index),[]).slice(1)
      }
}


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("objectSort", () => {
      const studyMinutesWeek1 = {
            sunday: 90,
            monday: 30,
            tuesday: 20,
            wednesday: 15,
            thursday: 30,
            friday: 15,
            saturday: 60
      }
      // Expected output: [15, 15, 20, 30, 30, 60, 90]

      const studyMinutesWeek2 = {
            sunday: 100,
            monday: 10,
            tuesday: 45,
            wednesday: 60,
            thursday: 20,
            friday: 15,
            saturday: 65
      }
      // Expected output: [10, 15, 20, 45, 60, 65, 100]

      it("takes in an object and returns an array of the values sorted from least to greatest", () => {
            expect(objectSort(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
            expect(objectSort(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
      })
})

// ReferenceError: objectSort is not defined

// b) Create the function that makes the test pass.

// Create a function objectSort that takes in an object and returns values sorted in ascending order.
// Input: an object containing key:value pairs with numbers for values
// Output: an array of numbers in ascending order
// Pass the object throughh the  Object.values() method to create an array of the values
// Call the .sort() method on the array to sort the array in ascending order (a,b) => a-b
// Return the sorted array
// Throws a TypeError if the input is not an object
// Throws a SyntaxError if the object does not have numbers for values

const objectSort = (object) => {
      if(typeof object !== "object"){
            throw TypeError("Please input an object")
      }else if(Object.values(object) === []){
            throw SyntaxError("No values were found in that object")
      }
      return Object.values(object).sort((a,b) => a - b)
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.434 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.87s.

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("accumulateValue", () => {
      const accountTransactions1 = [100, -17, -23, -9]
      // Expected output: [100, 83, 60, 51]

      const accountTransactions2 = [250, -89, 100, -96]
      // Expected output: [250, 161, 261, 165]

      const accountTransactions3 = []
      // Expected output: []

      it("takes in an array and returns an array of the accumulating sum", () => {
            expect(accumulateValue(accountTransactions1)).toEqual([100, 83, 60, 51])
            expect(accumulateValue(accountTransactions2)).toEqual([250, 161, 261, 165])
            expect(accumulateValue(accountTransactions3)).toEqual([])
      })
})

// ReferenceError: accumulateValue is not defined

// b) Create the function that makes the test pass.

// Create a function accumulateValue that adds values in an array by accumulating the total of values up to a given index
// Input: An array containing numbers
// Output: An array containing numbers
// Returns an empty array when passed an empty array
// Does not call the .reduce method on the array to use an accumulator while passing through the array, returning the sum of the accumulator and value at each index. This was messy and discarded.
// Instead, calls the .map method on the array. Uses nested arrow functions to create an accumulator with initial value of zero, adding the value to the accumulator at each value of the array.
// Throws a TypeError if the input is not an array

const accumulateValue = (array) => {
      if(!Array.isArray(array)){
            throw TypeError("Please input an array")
      }else if(array.length === 0){
            return []
      }else{
            // return array.map((accumulator => value => accumulator += value)(0))

            // Testing alternative method using .reduce()
            return array.reduce((accumulator, value, index) => accumulator.concat(value + accumulator[index]),[0]).slice(1)
      }
}