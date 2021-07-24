function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

/**
 * 1. Create while loop equivalents of the loops in the previous exercises!
 *
 * 2. Using the random number generator above, write a while loop that generates
 *    random numbers until it has generated one that is divisible by 11. Do you
 *    remember what operator to use?
 */

let i = 5
while (i < 1000) {
    console.log(i)
    i = i + 5
}

let i = 100
while (i >= -100) {
    console.log(i)
    i--
}

let i = 0
let number = 0
while (i < 5000) {
    if (i % 2 == 0) {
        number += 3
    } else{
        number -= 1
    }
    console.log(number)
    i++
}

let randomNum = getRandomNumber()
while (randomNum % 11 != 0) {
    randomNum = getRandomNumber()
}