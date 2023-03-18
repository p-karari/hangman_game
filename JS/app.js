const words = ["abruptly", "avenue", "baffled", "beacon", "cautious", "chase", "chivalry", "deception", "eclipse", "ecstatic", "fiasco", "giraffe", "harmony", "humility", 
"impromptu", "jubilant", "kaleidoscope", "labyrinth", "magnificent", "narcissistic", "oblivion", "paradox", "quicksand", "radiant", "sanctuary", "tedious", "unanimous", 
"vanilla", "wanderlust", "xylophone", "yearning", "zealous", "abundance", "blissful", "candid", "delicate", "eloquent", 
"flourish", "gregarious", "hypothesis", "intrepid", "jovial", "kinship", "luminous", "meticulous", "nostalgia", "optimistic", "prosperity", "quaint", "resilient"];

const buttons = document.querySelectorAll(".btn")
const text = document.querySelectorAll(".txt")
const player_guess = document.getElementById('input_box').value
console.log(player_guess)
    let random_word 
function random_word_selector(){
     let i = Math.floor((Math.random() * 50))
    random_word =  words[i]

}
    
function word_shuffle() { 
    text[1].style.textTransform = "lowerCase"
   random_word_selector()
    const shuffle = random_word.split("")
   for (let k = 0; k < shuffle.length;k++ ) {
    let a = Math.floor((Math.random() * shuffle.length))
    let b = Math.floor((Math.random() * (shuffle.length - 1)))
    let tempolary_place_holder = shuffle[b]
    
    shuffle[b] = shuffle[a]
    shuffle[a] = tempolary_place_holder
    let randomised_word = shuffle.join("")
    text[1].textContent = randomised_word
} 
}
buttons[0].onclick = function() {
    word_shuffle() 
}

let right_guess_message = "~~hooray!! you saved mr.Boogie Man"
let wrong_guess_message = "~~oops!! wrong guess ,try again~~"
let final_message = "~~couldn't save him , better luck next time~~"

function confirm_guess() {
    if (player_guess === random_word) {
        text[2].textContent = right_guess_message
    }
    else {
        for (let guess_count = 0;guess_count < 8;guess_count++) {
            if(guess_count = 1){
                Image.style.backgroundImage = ""
                text[2].textContent = wrong_guess_message
            }
            else if(guess_count = 2) {
                Image.style.backgroundImage = ""
                text[2].textContent = wrong_guess_message
            }
            else if(guess_count = 3) {
                Image.style.backgroundImage = ""
                text[2].textContent = wrong_guess_message
            }
            else if(guess_count = 4) {
                Image.style.backgroundImage = ""
                text[2].textContent = wrong_guess_message
            }
            else if(guess_count = 5) {
                Image.style.backgroundImage = ""
                text[2].textContent = wrong_guess_message
            }
            else if(guess_count = 6) {
                Image.style.backgroundImage = ""
                text[2].textContent = wrong_guess_message
            }
            else if(guess_count = 7) {
                Image.style.backgroundImage = ""
                text[2].textContent = final_message
            }
            else {
                Image.style.backgroundImage = ""
                text[2].textContent = wrong_guess_message
            }
        }
    }
    
}

buttons[1].onclick = function() {
    confirm_guess() 
}


