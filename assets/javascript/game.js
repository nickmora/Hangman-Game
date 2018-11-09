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
var previousGuess = [];
var checkArray = [];
var mathEnder = 0;

//keys that the user can enter
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//setup variable for holding blanks
var blanksArray = [];

//set up variable text on the page
var blanksText = document.getElementById("blanks");
var guessText = document.getElementById("guesses");
var guessedText = document.getElementById("guessed");

    //chooses a word from the dictionary

    var chosenWord = dictionary[Math.floor(Math.random() * dictionary.length)];
    var chosenWordArray = []
    for (q = 0; q < chosenWord.length; q ++) {
        chosenWordArray.push(chosenWord[q]);
    }

function choose() {
    //generates and displays blanks for chosen word
    for (var i = 0; i < chosenWord.length; i ++) {
        blanksArray.push("_");
    }
    blanksText.textContent = blanksArray;
    guessText.textContent = guess;
    guessedText.textContent = previousGuess;
}


function reset() {
    blanksArray = [];
    previousGuess = [];
    guess = 13;
    chosenWord = dictionary[Math.floor(Math.random() * dictionary.length)];
    chosenWordArray = []
    for (q = 0; q < chosenWord.length; q ++) {
        chosenWordArray.push(chosenWord[q]);
    }
    choose()
}



    document.onkeyup = function (event) {
    
        //checks to see if user input a letter
        for(var j = 0; j < alphabet.length; j++) {
            if (event.key.toLowerCase() === alphabet[j]) {
                var validOption = true;
                // console.log("good");
    
                //checks for a correct guess
                for (var k = 0; k < chosenWord.length; k++) {
                    if (chosenWordArray[k] === event.key.toLowerCase()) {
                        var correctGuess = true;
                    }
                }
    
                //on correct guess, switches out blanks with the user's letter
                if (correctGuess) {
                    var storage = blanksArray;
                    blanksArray = [];
                    for (l = 0; l < chosenWord.length; l++) {
                        
                        //finds blank index where the correctly chosen letter belongs and swaps out the blank with the entered letter
                        if (chosenWordArray[l] === event.key.toLowerCase()) {
                            blanksArray.push(event.key.toLowerCase());
                        }
                        
                        //skips over filled in letters
                        else if (storage[l] !== "_") {
                            blanksArray.push(storage[l]);
                        }
                        
                        //logs blanks into the blank spots in the array
                        else {
                            blanksArray.push("_");
                        }
                    }
                    //updates the guess word
                    blanksText.textContent = blanksArray;

                    //checks to see if you've won
                    checkArray = [];
                    for (m = 0; m < chosenWordArray.length; m ++) {
                        if(blanksArray[m] === chosenWordArray[m]) {
                            checkArray.push(chosenWordArray[m]);
                        }
                        else {
                            checkArray.push("x")
                        }
                    }
                    mathEnder = 0;
                    for (n = 0; n < checkArray.length; n ++) {
                        if (checkArray[n] === blanksArray[n]) {
                            mathEnder ++;
                        }
                    }
                    //if you've won, informs you of such and asks if you want to play again
                    if (mathEnder === chosenWordArray.length) {
                        alert("You win!");
                        if (confirm("Do you want to play again?")) {
                            reset();
                        }
                        else {
                            alert("Fine, I didn't wanna play with you anyways")
                        }    
                    }
                }
                
                //on incorrect guess: decrements guesses, displays new guess value, adds previous guess to the incorrect guesses array
                else {
                    guess --;
                    guessText.textContent = guess;
                    previousGuess.push(event.key.toLowerCase());
                    guessedText.textContent = previousGuess;
                }
                if (guess <= 0) {
                    alert("GAME OVER!");
                    if (confirm("Do you want to play again?")) {
                        reset();
                    }
                    else {
                        alert("Fine, I didn't wanna play with you anyways")
                    }

                }

                    
            }
        }
    
        //alerts user if they did not hit a letter key
        if (!validOption) {
            alert("Hit a letter key, bro; it's Hangman");
        }
    }




choose();