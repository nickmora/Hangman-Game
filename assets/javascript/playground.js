//word that the computer can choose
var dictionary = [
    "fourteener",
    "denver",
    "boulder",
    "beer",
    "hiking",
    "mountains",
    "oil",
    "marijuana",
    "illuminati",
]

var guess = 13;

//keys that the user can enter
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//setup variable for holding blanks
var blanksString = "";

//set up variable text on the page
var blanksText = document.getElementById("blanks");
var guessText = document.getElementById("guesses");

    //chooses a word from the dictionary
var chosenWord = dictionary[Math.floor(Math.random() * dictionary.length)];

function choose() {
    //generates and displays blanks for chosen word
    for (var i = 0; i < chosenWord.length; i ++) {
        blanksString = blanksString + "_ ";
    }
    blanksText.textContent = blanksString;
    guessText.textContent = guess;
}

document.onkeyup = function (event) {
    
    //checks to see if user input a letter
    for(var j = 0; j < alphabet.length; j++) {
        if (event.key.toLowerCase() === alphabet[j]) {
            var validOption = true;
            // console.log("good");

            for (var k = 0; k < chosenWord.length; k++) {
                if (chosenWord[k] === event.key) {
                    var correctGuess = true;
                    console.log(event.key);
                }
            }

            if (correctGuess) {
                var storageArray = [];
                for (l = 0; l < chosenWord.length; l++) {
                    var tempStorage = chosenWord[l];
                    storageArray.push(tempStorage);
                    console.log(tempStorage);
                    
                }
                blanksText.textContent = blanksString;
            }
            
            if (!correctGuess) {
                guess --;
                guessText.textContent = guess;
            }
        }
    }

    //alerts user if they did not hit a letter key
    if (!validOption) {
        alert("Hit a letter key, bro; it's Hangman");
    }
}

choose();


