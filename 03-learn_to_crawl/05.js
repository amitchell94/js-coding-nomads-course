/**
 * Create these variables containing strings:
 *      1. One with your name.
 *      2. One with a greeting like "Good day to you".
 *      3. One with a friend's name.
 *      4. One with a family member's name.
 *      5. One with the number of today's date.
 *      6. One with the name of today's month.
 *      7. One with the number of today's year.
 *      8. One with your age.
 *
 * Using the variables created, with both concatenation and interpolation use
 * console.log to output:
 *      1. A greeting to your friend
 *      2. A greeting to your family member
 *      3. A greeting to your friend stating today's date and month
 *      4. A sentence that says something along the lines of "In 20 years I will
 *         be XXX years old". For this, don't use any more variables. That is,
 *         make your script calculate the age with the variable you already have
 *         that contains the year.
 *
 * Do all of these with both concatenation and interpolation. Which do you
 * prefer? Its good to get practice with both because there are some situations
 * in which interpolation won't work, seeing as it's a relatively new method and
 * support for it is not everywhere.
 */

let name = "Andy"
let greeting = "Good day to you"
let friend = "Billy"
let family = "Mum"
let date = 24
let month = 7
let year = 2021
let age = 27

console.log(greeting + " " + friend)
console.log(greeting, family)

console.log(greeting, friend, "todays' date is", date, "/", month, "/", year)
console.log("In 20 years,", name, "will be", age + 20, "years old")




