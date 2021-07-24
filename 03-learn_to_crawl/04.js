/**
 * Create three variables with numbers assigned to them.
 * Do not use zero.
 * Make the numbers at least 4 digits long, e.g. 3874, 2398.
 * Create a 4th variable with the number 7 and call it "luckyNumber".
 * 
 * After creating the variables, do the
 * following without typing any more numbers.
 * 
 * Output the following to the console:
 *      1. The sum of the numbers.
 *      2. The result of subtracting the two smallest
 *         numbers from the larger one.
 *      3. The result of multiplying all the numbers.
 *      4. The result of the largest number divided
 *         by the difference between the smaller ones.
 *      5. The result of the the numbers modulo 7.
 * 
 * Finally, label all of the outputs by using console log in the way
 * that is demonstrated below. For the labels, be sure to come up 
 * with clear and descriptive names.
 */
let numOne = 1234
let numTwo = 2345
let numThree = 3456
let luckyNumber = 7

let sum = numOne + numTwo + numThree + luckyNumber
console.log("Total sum: ", sum)

let subtractResult = numThree - luckyNumber - numOne
console.log("Biggest minus two smallest: ", subtractResult)

let product = numOne * numTwo * numThree *luckyNumber
console.log("Product:", product)

let divResult = numThree / (numTwo - numOne)
console.log("Largest number divided by diff between two smaller numbers: ", divResult)

let modOne = numOne % 7
console.log("Mod 7 of first number: ",modOne)
let modTwo = numTwo % 7
console.log("Mod 7 of second number: ",modTwo)
let modThree = numThree % 7
console.log("Mod 7 of third number: ",modThree)

