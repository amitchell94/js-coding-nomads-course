/**
 * 1. Create an array of strings with the names of some items in the room you
 *    are sitting in right now. For example "chair", "keyboard" etc
 * 2. Now think of 3 drawers or shelves or boxes that you have nearby. Make an
 *    array with a sub-array for each drawer or box, and add 5 things in each
 *    sub-array. Do this for 3 boxes. You should have a two dimensional array.
 * 3. Pick 5 things from the two dimensional array just created, and log them to
 *    the console using array referencing.
 * 4. Use a for loop to create a array of the numbers from 1 to 100.
 * 5. Use another for loop to go through the array of numbers just created and
 *    log the sum of all the numbers.
 * 6. Use the random number generator from previous labs and another for loop to
 *    create a array of 100 random numbers.
 * 7. Use another for loop to go over each of these random numbers and put them
 *    in one of two arrays. One for odd numbers, and one for even numbers.
 * 8. Make the for loop that logs the sum of all the numbers in an array into a
 *    function that takes an array as an argument and returns the sum. Use this
 *    function to log the sum of the two arrays of odd and even numbers.
 */



let thingArray = ["desk", "laptop", "lamp", "coffee", "rubik's cube"]
let draws = [
    ["notebook", "pen", "charger", "cards", "degree"],
    ["projector", "keys", "tissues", "coins", "credit card"],
    ["socks", "shirts", "pants", "hat", "scarf"]];

console.log(draws[2][3])
console.log(draws[0][2])
console.log(draws[1][1])
console.log(draws[2][0])

let numArray = []
for (let i = 0; i <= 100; i++) {
    numArray.push(i);
}

function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}


function getRandomNumber() {
    return Math.floor((Math.random() * 10) + 1);
}

ranNumArray = [];
for (let i = 0; i < 100; i++) {
    ranNumArray.push(getRandomNumber());
}

let oddArray = [];
let evenArray = [];

for (let i = 0; i < ranNumArray.length; i++) {
    if (ranNumArray[i] % 2 == 0) {
        evenArray.push(ranNumArray[i]);
    } else {
        oddArray.push(ranNumArray[i]);
    }
}
console.log(sumArray(evenArray))
console.log(sumArray(oddArray))