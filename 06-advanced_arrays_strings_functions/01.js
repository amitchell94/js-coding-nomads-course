/**
 * In these questions you will be practicing how to use the forEach syntax.
 *
 * 1. Use a random number generator to generate an array of 100 values.
 * 2. Use forEach on the array to output the sum, count and average.
 * 3. Use forEach to create a new array from the first one that halves all the
 *    values.
 * 4. Use forEach on the new array to output the sum, count and average again.
 * 5. Refactor: define the sum, count and average function as a separate
 *    function and pass it to the forEach functions as a name.
 */

function getRandomNumber() {
    return Math.floor((Math.random() * 10) + 1);
}

let randomArray = []
for (let i = 0; i < 100; i++) {
    randomArray.push(getRandomNumber())
}

let arraySum = 0
let count = 0

randomArray.forEach(element => {
    count++
    arraySum += element;
})
let randomAvg = arraySum / count;


let halvedArray = []
randomArray.forEach(element => halvedArray.push(element / 2))

