
function add_two_numbers(num1 , num2){
    console.log(num1 + num2)
}

export default add_two_numbers

//word.split("") -- for splitting strings into an array
//functiion to select a random position from the string and swap it eith another
//array.join("") -- reversing word.split

//swapping two numbers
let a = 20
let b = 30

let tempolary = a 
a = b
b = tempolary


// when linking to another js file use syntax below
//============
add_two_numbers(4,5)

import add_two_numbers from "./add_two_numbers.js";

let word = "KELVIIN"
let word_one = word.split("")
console.log(word_one)

let word_join = word_one.join("")
console.log(word_join)