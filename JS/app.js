const words = ["abruptly", "avenue", "baffled", "beacon", "cautious", "chase", "chivalry", "deception", "eclipse", "ecstatic", "fiasco", "giraffe", "harmony", "humility", 
"impromptu", "jubilant", "kaleidoscope", "labyrinth", "magnificent", "narcissistic", "oblivion", "paradox", "quicksand", "radiant", "sanctuary", "tedious", "unanimous", 
"vanilla", "wanderlust", "xylophone", "yearning", "zealous", "abundance", "blissful", "candid", "delicate", "eloquent", 
"flourish", "gregarious", "hypothesis", "intrepid", "jovial", "kinship", "luminous", "meticulous", "nostalgia", "optimistic", "prosperity", "quaint", "resilient"];

const buttons = document.querySelectorAll(".btn")
const text = document.querySelectorAll(".txt")
const player_guess = document.getElementById("input_box")
// console.log(player_guess)

let random_word 
// console.log(random_word)
let i = Math.floor((Math.random() * 50))
random_word =  words[i]
// console.log(shuffle)
function word_shuffle() {
    
    
    const shuffle = random_word.split("")
   for (let k = 0; k < shuffle.length;k++ ) {
    let a = Math.floor((Math.random() * shuffle.length))
    let b = Math.floor((Math.random() * (shuffle.length - 1)))
    let tempolary_place_holder = shuffle[b]
    
    // console.log("before swap :   " +shuffle[b] + "  |  " + shuffle[a])
    
    shuffle[b] = shuffle[a]
    shuffle[a] = tempolary_place_holder
    
    // console.log("after swap :    " +shuffle[b] + "  |  " + shuffle[a])

    // console.log("iteration number   " +k )
    
    let randomised_word = shuffle.join("")
// console.log(randomised_word)

    
    text[1].textContent = randomised_word

    
} 
}


// console.log(randomised_word)


// console.log(newGame)
buttons[0].onclick = function() {
    word_shuffle()
    // alert("clicked")
}

let guess_value = player_guess.value
console.log(guess_value)

function confirm() {
    let right_guess_message = "yipee , you gessed it right"
    if (guess_value === random_word) {
        text[2].textContent = right_guess_message
    }
}

buttons[1].onclick = function() {
    confirm()
}