//Variables of different elements
var winsText = document.getElementById("wins-text");

var lossesText = document.getElementById("losses-text");

var remainingText = document.getElementById("remaining-text");

var guessesText = document.getElementById("guesses-text")

//Starting values for values of wins, loses and remaining guesses
var wins = 0;

var losses = 0;

var remaining = 10;

var guesses = []; //capture letters typed

//Var for the array of letters that can be chosen by both user and computer

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Display 

winsText.textContent = "Wins: " + wins;

lossesText.textContent = "Losses: " + losses;

remainingText.textContent = "Remaining: " + remaining;

guessesText.textContent = "Letters guessed: " + guesses;

//Record user input and create variable to match against the computer
document.onkeyup = function(event)  {
    var userGuess = event.key;
    guesses.push(userGuess);
    guesses.join(",");


    var aiGuess = letters[Math.floor(Math.random() * letters.length)]
    
    //If you match the guess, a point is added to win and guess points are restart

    if (userGuess === aiGuess)  {
        wins++;
        remaining = 10;
    }

    //When your guess doesn't match, your remaining counter reduces by 1
    else {
        remaining--;
    }

    if  (remaining === 0)   {
        
    }
}






